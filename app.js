var contenido = document.querySelector("#contenido");
fetch("https://api.github.com/users/danilsonunes/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.length);
    var cont = 0;
    for (cont = 0; cont < data.length; cont++) {
      contenido.innerHTML += `
      <div class="col-4">
          <a href="${data[cont].html_url}" target="blank_">
            <img src="img/card-img.svg" alt="" />
            <h4><strong>${data[cont].name}</strong></h4>
          </a>
        </div>
			 `;
    }
  });

  
function validateForm() {
  var x =
    document.forms["mi_formulario"][("form-name", "form-email", "form-asunto")]
      .value;
  if (x == "") {
    alert("debe llenar todos los campos!!!!");
    console.log(x);
    return false;
  }
}

