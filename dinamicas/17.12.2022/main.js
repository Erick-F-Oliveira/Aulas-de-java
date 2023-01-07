var pets = [];

function addPet() {
    event.preventDefault();
    let pet = {
        "petname": document.getElementById("fname").value,
        "petbrend": document.getElementById("fbrend").value,
        "petowner": document.getElementById("fowner").value,
        "phone": document.getElementById("fphone").value
    }
    console.log(pets)
    document.getElementById("fname").value = "";
    document.getElementById("fbrend").value = "";
    document.getElementById("fowner").value = "";
    document.getElementById("fphone").value = "";
    
    pets.push(pet);

    renderTable();
}
function renderTable(){
    let table = document.getElementById("data");
    table.innerHTML = `<tr>
    <th>ID</th>
    <th>Nome</th>
    <th>Raça</th>
    <th>Dono</th>
    <th>Telefone</th>
    <th>Remover</th>
  </tr> `;


    for(let i = 0; i <pets.length; i++)
    {

        table.innerHTML = table.innerHTML + `
        <td>${i}</td>
        <td>${pets[i].petname}</td>
        td>${pets[i].petbrend}</td>
        <td>${pets[i].petowner}</td>
        <td>${pets[i].phone}</td>
        <td><img src="remove.png" width="25px" height="25px" onclick="removePet(${i})"></td>
        </tr>`                

    }
}