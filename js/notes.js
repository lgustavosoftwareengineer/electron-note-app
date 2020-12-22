function load_notes() {
  const notes = JSON.parse(localStorage.getItem("notes"));

  if (notes) {
    notes.map((note) => {
      const tag = document.createElement("h2");
      tag.id = note.id;
      tag.className = "note-element";

      tag.onclick = function () {
        localStorage.setItem("now-note", tag.id);

        window.location.href = "./pages/note.html";

        console.log(localStorage.getItem("now-note"));
      };

      const text = document.createTextNode(`${note.title}`);
      tag.appendChild(text);

      const body = document.getElementsByTagName("main")[0];
      body.appendChild(tag);
    });
  } else {
    const tag = document.createElement("p");
    const text = document.createTextNode("Don't have notes yet");
    tag.appendChild(text);

    const body = document.getElementsByTagName("main")[0];
    body.appendChild(tag);
    console.log("Don't have notes yet");
  }
}
