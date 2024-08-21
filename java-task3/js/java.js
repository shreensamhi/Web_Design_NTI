var form = document.getElementById("form");
var users = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target.elements.name.value);
  console.log(e.target.elements.address.value);
  var user = {
    Name: e.target.elements.name.value,
    Address: e.target.elements.address.value,
  };
  users.push(user);
  showuser()
});

function showuser() {
  var table = document.getElementById("table-id");
    table.innerText=""
  users.forEach((e) => {
    var tr = document.createElement("tr");
    var tdname = document.createElement("td");
    var tdadress = document.createElement("td");
    var tdAction = document.createElement("td");
    var tdreomve =document.createElement("td")
    var tdupadte = document.createElement("td")
    tdname.innerText = e.Name;
    tdadress.innerText = e.Address;
    tdreomve.innerText ="Remove"
    tdupadte.innerText ="Update"
    tr.appendChild(tdname);
    tr.appendChild(tdadress);
    tr.appendChild(tdAction);
    tdAction.appendChild(tdreomve)
    tdAction.appendChild(tdupadte)
    tdreomve.classList.add("btn", "btn-primary")
    tdupadte.classList.add("btn", "btn-primary")
    tdreomve.addEventListener("click", function() {
      removeuser(e);
    });
    tdupadte.addEventListener("click", function() {
      updateuser(e)
    });
    table.appendChild(tr)

  });
}
function removeuser(i) {
  users.splice(i, 1);
  showuser();
}

function updateuser(i) {
  var NAME = prompt("enter name");
  var ADDRESS = prompt("enter address");
  i.Address = ADDRESS;
  i.Name = NAME;
  showuser();
}

// var array = []

// function addUser()
// {
// var firstname =prompt("enter name")
// var id =prompt("enter id")
// var balance =prompt("enter balance")
//     var userInfo =
//     {
//         FirstName : firstname,
//         Id : id,
//         Balance : balance
//     }
//    array.push(userInfo)
// }
// addUser()
// addUser()
// console.log(array)

// function editUserBalanceById(){
//     var id =prompt("enter id")
//     var balance =prompt("enter balance")
//     var index = array.findIndex(ele => ele.Id == id)
//     array[index].Balance = balance
// }

// editUserBalanceById()
// console.table(array)

// function deleteuser()
// {
//     var id =prompt("enter id")
//     var index = array.findIndex(ele => ele.Id == id)
//     array.splice(index, 1)
// }
// deleteuser()
// console.table(array)
