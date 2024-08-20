var array = []

function addUser()
{
var firstname =prompt("enter name")
var id =prompt("enter id")
var balance =prompt("enter balance")
    var userInfo =
    {
        FirstName : firstname,
        Id : id,
        Balance : balance
    }
   array.push(userInfo)
}
addUser()
addUser()
console.log(array)


function editUserBalanceById(){
    var id =prompt("enter id")
    var balance =prompt("enter balance")
    var index = array.findIndex(ele => ele.Id == id)
    array[index].Balance = balance
}

editUserBalanceById()
console.table(array)

function deleteuser()
{
    var id =prompt("enter id")
    var index = array.findIndex(ele => ele.Id == id)
    array.splice(index, 1)
}
deleteuser()
console.table(array)