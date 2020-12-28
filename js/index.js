function change_content(change) {
  if (change === true) {
    setTimeout(() => {
      const button_content = document.getElementById("create-note-button");
      button_content.innerHTML = `<i class="fa fa-plus" aria-hidden="true" style="margin-right: 5px;"></i> Criar uma nota`;
    }, 600);
  } else {
    const button_content = document.getElementById("create-note-button");
    button_content.innerHTML = `<div id="create-note-button-content">
  <i class="fa fa-plus" aria-hidden="true"></i>
</div>`;
  }
}
