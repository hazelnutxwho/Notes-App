import "./styles.css";
const BASE_URL = 'https://notes-api.dicoding.dev/v2';

class LoadingIndicator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        #loading-indicator {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #DE3163;
          color: white;
          text-align: center;
          padding: 10px;
          z-index: 9999;
          font-weight: bold;
          display: none;
        }
      </style>
      <div id="loading-indicator">Loading...</div>
    `;
  }

  show() {
    this.shadowRoot.querySelector("#loading-indicator").style.display = "block";
  }

  hide() {
    this.shadowRoot.querySelector("#loading-indicator").style.display = "none";
  }
}
customElements.define("loading-indicator", LoadingIndicator);

class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  set note(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .note {
          background: #FFEDFA;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
          position: relative;
        }
        h3 { margin: 0; color: #DE3163; }
        p { margin: 5px 0; color: #green; }
        small { color: #DE3163; }
        button {
          background: #CCDF92;
          color: #DE3163;
          border: 2px solid transparent;
          border-radius: 8px;
          cursor: pointer;
          padding: 8px 8px;
          border-radius: 5px;
          font-weight: bold;
          transition: background 0.3s ease-in-out;
          position: absolute;
          right: 5px;         
          button: 20px;
        }
        button:hover {
          background: transparent;
          color: #DE3163;
          border-color: #DE3163;
          box-shadow: none;
        }
      </style>
      <div class="note">
        <h3>${this.data.title}</h3>
        <p>${this.data.body}</p>
        <small>${new Date(this.data.createdAt).toLocaleDateString()}</small>
        <button id="delete-btn">Hapus</button>
      </div>
    `;
    this.shadowRoot.querySelector("#delete-btn").addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("note-deleted", {
          detail: this.data.id,
          bubbles: true,
          composed: true,
        })
      );
    });
  }
}
customElements.define("note-item", NoteItem);

class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: #CCDF92;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
        }
        input, textarea {
          padding: 12px;
          border: 2px solid #DE3163;
          border-radius: 10px;
          font-size: 15PX;
          background-color: #FFEDFA;
          transition: border 0.3s ease-in-out;
        }
        input:focus, textarea:focus {
          border-color: #DE3163;
          outline: none;
        }
        button {
          background: #DE3163;
          color: white;
          border: 2px solid transparent;;
          padding: 10PX 20px;
          cursor: pointer;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: bold;
          transition: background 0.3s ease;
        }
        button:hover {
          background: transparent;
          color: #DE3163;
          border-color: #DE3163;
          box-shadow: none;
        }
      </style>
      <form>
        <input type="text" id="title" placeholder="Judul Catatan" required>
        <textarea id="body" placeholder="Isi Catatan" required></textarea>
        <button type="submit">Tambah Catatan</button>
      </form>
    `;
    this.shadowRoot.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      const title = this.shadowRoot.querySelector("#title").value;
      const body = this.shadowRoot.querySelector("#body").value;
      this.dispatchEvent(
        new CustomEvent("note-added", {
          detail: { title, body },
          bubbles: true,
          composed: true,
        })
      );
      this.shadowRoot.querySelector("form").reset();
    });
  }
}
customElements.define("note-form", NoteForm);

class NotesHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        header {
          background: #7D1C4A;
          color: white;
          text-align: center;
          padding: 20px;
          font-size: 35px;
          font-weight: bold;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
        }
      </style>
      <header>Notes App</header>
    `;
  }
}
customElements.define("notes-header", NotesHeader);

// Fungsi menambahkan loading indicator
const loader = document.createElement("loading-indicator");
document.body.appendChild(loader);

function showLoading() {
  loader.show();
}
function hideLoading() {
  loader.hide();
}

// Main
const notesContainer = document.getElementById("notes-container");

async function getNotes() {
  try {
    showLoading();
    const response = await fetch("https://notes-api.dicoding.dev/v2/notes");
    const result = await response.json();
    if (result.status === "success") {
      displayNotes(result.data);
    } else {
      alert("Gagal mengambil notes.");
    }
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    alert("Terjadi kesalahan saat memuat notes.");
  } finally {
    hideLoading();
  }
}

function displayNotes(notes) {
  notesContainer.innerHTML = "";
  notes.forEach((note) => {
    const noteElement = document.createElement("note-item");
    noteElement.note = note;
    notesContainer.appendChild(noteElement);
  });
}

document.body.addEventListener("note-added", async (event) => {
  const { title, body } = event.detail;

  try {
    showLoading();
    const response = await fetch("https://notes-api.dicoding.dev/v2/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    const result = await response.json();

    if (result.status === "success") {
      alert("Note baru berhasil ditambahkan!");
      getNotes();
    } else {
      alert("Gagal menambahkan note baru!");
    }
  } catch (error) {
    console.error("Gagal membuat notes:", error);
    alert("Terjadi kesalahan dalam memuat notes.");
  } finally {
    hideLoading();
  }
});

document.body.addEventListener("note-deleted", async (event) => {
  const noteId = event.detail;

  try {
    showLoading();
    const response = await fetch(`https://notes-api.dicoding.dev/v2/notes/${noteId}`, {
      method: "DELETE",
    });

    const result = await response.json();

    if (result.status === "success") {
      alert("Note berhasil dihapus");
      getNotes();
    } else {
      alert("Gagal menghapus note");
    }
  } catch (error) {
    console.error("Gagal menghapus note:", error);
    alert("Terjadi kesalahan saat menghapus note.");
  } finally {
    hideLoading();
  }
});

getNotes(); 
