const { v4: uuidv4 } = require("uuid");

function create_note() {
  const note_title = document.getElementById("note-title").value;
  const note_body = document.getElementById("note-body").value;

  const note = {
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
