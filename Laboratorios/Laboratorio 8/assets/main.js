var idCounter=0;

var parseLateSwitch = value => {
  if (value) {
    return "Tarde";
  }
  return "A tiempo";
};

function addStudent(carnet, schedule, late, tBody) {
  let newRow = document.createElement("tr");
  let date = new Date();

  newRow.innerHTML = `<td><b>${carnet}</b></td>
  <td>${schedule}</td>
  <td>${date.toLocaleString()}</td>
  <td>${late}</td>`;

  let cellContainer = document.createElement("td");
  let newBtn = document.createElement("button");
  newBtn.classList.add("btn");
  newBtn.classList.add("btn-danger");
  newBtn.innerText = "Drop";
  newBtn.value = idCounter;

  let infoContainer = document.createElement("td");
  let newInput = document.createElement("input");
  newInput.classList.add("form-control");
  newInput.type = "text";
  newInput.id = idCounter;

  cellContainer.appendChild(newBtn);
  infoContainer.appendChild(newInput);

  newRow.appendChild(cellContainer);
  newRow.appendChild(infoContainer);

  newBtn.addEventListener("click", value => {
    let idElement = event.srcElement.value;

    let elementNode = document.querySelector(
      `tr>td>button[value='${idElement}']`
    ).parentElement.parentElement;

    if(elementNode.firstChild.firstChild.innerHTML === elementNode.lastChild.firstChild.value){
        tBody.removeChild(elementNode);    
    }
    else{
        alert("El carnet que desea eliminar no coincide con el que se encuentra en la fila. Verificar carnet.");
    }
  });

  idCounter++;
  tBody.appendChild(newRow);
}

window.onload = () => {
  let submit_btn = document.querySelector("#submit_btn");
  let carnet_field = document.querySelector("#carnet_field");
  let schedule_field = document.querySelector("#schedule_field");
  let late_switch = document.querySelector("#late_switch");
  let tBody = document.querySelector("#table_body");

  var carnetRegex = new RegExp("^[0-9]{8}$");

  submit_btn.addEventListener("click", function() {
    let carnet = carnet_field.value;
    let schedule = schedule_field.options[schedule_field.selectedIndex].text;
    let late = parseLateSwitch(late_switch.checked);

    if (carnetRegex.test(carnet)) {
      addStudent(carnet, schedule, late, tBody);
    }
  });

  carnet_field.addEventListener("keyup", function() {
    let carnet = carnet_field.value;
    if (carnetRegex.test(carnet)) {
      submit_btn.disabled = false;
    } else {
      submit_btn.disabled = true;
    }
  });
};
