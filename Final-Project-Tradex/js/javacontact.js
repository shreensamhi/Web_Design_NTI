
var form= document.getElementById('form1')
form.addEventListener('input',function(e){
  if(e.target.id=='name') checkname(e.target)
    else if(e.target.id='userEmail') emailCheck(e.target)
})

function emailCheck(input)
{
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var inputvalue = input.value
  if(emailRegex.test(inputvalue)) input.nextElementSibling.innerText=""
  else input.nextElementSibling.innerText ="enter valid email"
}
function checkname(el)
{
 var namevalue = el.target.value.length
 if(namevalue<3)
  el.target.nextElementSibling.innerText="please inter more that 3 char"
else el.target.nextElementSibling.innerText=""

}