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

function edit_note() {}
