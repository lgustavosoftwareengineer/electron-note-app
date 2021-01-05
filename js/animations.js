function change_edit_button_content(change) {
  if (change === true) {
    setTimeout(() => {
      const button_content = document.getElementById("edit-button");
      button_content.innerHTML = `<i class="fa fa-pencil" aria-hidden="true" style="margin: 5px;"></i> Editar a nota`;
    }, 500);
  } else {
    const button_content = document.getElementById("edit-button");
    button_content.innerHTML = `<div id="edit-note-button-content">
        <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>`;
  }
}

function change_delete_button_content(change) {
  if (change === true) {
    setTimeout(() => {
      const button_content = document.getElementById("delete-button");
      button_content.innerHTML = `<i class="fa fa-trash-o" aria-hidden="true" style="margin: 5px;"></i> Deletar a nota`;
    }, 500);
  } else {
    const button_content = document.getElementById("delete-button");
    button_content.innerHTML = `<div id="edit-note-button-content">
        <i class="fa fa-trash-o" aria-hidden="true"></i>
    </div>`;
  }
}

function change_create_button_content(change) {
  if (change === true) {
    setTimeout(() => {
      const button_content = document.getElementById("create-button");
      button_content.innerHTML = `<i class="fa fa-check" aria-hidden="true" style="margin: 5px;"></i> Criar Nota`;
    }, 500);
  } else {
    const button_content = document.getElementById("create-button");
    button_content.innerHTML = `<div id="edit-note-button-content">
        <i class="fa fa-check" aria-hidden="true"></i>
    </div>`;
  }
}

function change_content(change) {
  if (change === true) {
    setTimeout(() => {
      const button_content = document.getElementById("create-note-button");
      button_content.innerHTML = `<i class="fa fa-plus" aria-hidden="true" style="margin-right: 5px;"></i> Criar uma nota`;
    }, 500);
  } else {
    const button_content = document.getElementById("create-note-button");
    button_content.innerHTML = `<div id="create-note-button-content">
    <i class="fa fa-plus" aria-hidden="true"></i>
  </div>`;
  }
}
