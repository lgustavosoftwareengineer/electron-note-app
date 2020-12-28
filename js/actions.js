const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

moment.locale("pt-br");

function load_notes() {
  const notes = JSON.parse(localStorage.getItem("notes"));

  if (notes) {
    notes.map((note) => {
      const note_container = document.createElement("div");
      const note_title = document.createElement("h2");
      const note_created_date = document.createElement("p");
      const note_update_date = document.createElement("p");
      const delete_button = document.createElement("button");

      delete_button.innerHTML = "Deletar nota";

      note_container.id = note.id;
      note_container.className = "note-element";

      note_title.id = "note-title";
      note_created_date.id = "note-created-date";
      note_update_date.id = "note-created-date";
      delete_button.id = "note-delete-button";

      note_title.onclick = function () {
        localStorage.setItem("now-note", note_container.id);

        window.location.href = "./pages/note.html";

        console.log(localStorage.getItem("now-note"));
      };

      note_created_date.onclick = function () {
        localStorage.setItem("now-note", note_container.id);

        window.location.href = "./pages/note.html";

        console.log(localStorage.getItem("now-note"));
      };

      note_update_date.onclick = function () {
        localStorage.setItem("now-note", note_container.id);

        window.location.href = "./pages/note.html";

        console.log(localStorage.getItem("now-note"));
      };

      delete_button.onclick = function () {
        delete_note(note.id);
      };

      const note_title_content = document.createTextNode(`${note.title}`);
      const note_created_date_content = document.createTextNode(
        `Criado em ${note.created_at}`
      );
      const note_updated_date_content = document.createTextNode(
        `Editado em ${note.updated_at}`
      );

      note_title.appendChild(note_title_content);
      note_created_date.appendChild(note_created_date_content);
      note_update_date.appendChild(note_updated_date_content);

      const body = document.getElementsByTagName("main")[0];

      note_container.appendChild(note_title);

      if (!note.was_edited) {
        note_container.appendChild(note_created_date);
      } else {
        note_container.appendChild(note_update_date);
      }

      note_container.appendChild(delete_button);
      body.appendChild(note_container);
    });
    console.log(notes);
  }
  if (notes.length === 0) {
    const tag = document.createElement("p");
    const text = document.createTextNode("Don't have notes yet");
    tag.appendChild(text);

    const body = document.getElementsByTagName("main")[0];
    body.appendChild(tag);
  }
}

function delete_note(id) {
  const notes = JSON.parse(localStorage.getItem("notes"));

  if (notes) {
    const new_notes = notes.filter((note) => note.id != id);

    localStorage.setItem("notes", JSON.stringify(new_notes));
    location.reload();
  } else {
    alert("Não existe notas para serem excluídas");
  }
}

function delete_now_note() {
  const now_note = localStorage.getItem("now-note");
  const notes = JSON.parse(localStorage.getItem("notes"));

  if (notes) {
    const new_notes = notes.filter((note) => note.id != now_note);

    localStorage.setItem("notes", JSON.stringify(new_notes));
    alert("Nota deletada com sucesso!");
    window.location.href = "../index.html";
  } else {
    alert("Não existe notas para serem excluídas");
  }
}

function create_note() {
  const note_title = document.getElementById("note-title").value;
  const note_body = document.getElementById("note-body").value;

  const note = {
    created_at: moment().format("LLL"),
    updated_at: moment().format("LLL"),
    was_edited: false,
    id: uuidv4(),
    title: note_title,
    body: note_body,
  };

  const notes = JSON.parse(localStorage.getItem("notes"));

  if (notes) {
    localStorage.setItem("notes", JSON.stringify([...notes, note]));

    console.log(JSON.parse(localStorage.getItem("notes")));

    window.location.href = "../index.html";
  } else {
    localStorage.setItem("notes", JSON.stringify([note]));

    console.log(JSON.parse(localStorage.getItem("notes")));

    window.location.href = "../index.html";
  }
}

function load_note() {
  const notes = JSON.parse(localStorage.getItem("notes"));

  const now_note = localStorage.getItem("now-note");

  const note = notes.find((nt) => nt.id === now_note);

  console.log(note);

  const header_title = (document.getElementById("note-header-title").innerHTML =
    note.title);

  const title = (document.getElementById("note-title").value = note.title);
  var body = (document.getElementById("note-body").value = note.body);
}

function edit_note() {
  const now_note = localStorage.getItem("now-note");
  const notes = JSON.parse(localStorage.getItem("notes"));

  const note_title = document.getElementById("note-title").value;
  const note_body = document.getElementById("note-body").value;

  notes.map((note) => {
    if ((note.id = now_note)) {
      note.title = note_title;
      note.body = note_body;
      note.updated_at = moment().format("LLL");
      note.was_edited = true;
    }
  });

  localStorage.setItem("notes", JSON.stringify(notes));

  window.location.href = "../index.html";
}

// module.exports = {
//   load_notes: load_notes,
//   load_note: load_note,
//   delete_note: delete_note,
//   create_note: create_note,
//   edit_note: edit_note,
// };
