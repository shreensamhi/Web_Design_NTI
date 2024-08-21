function changeColor(element)
{
    
    var li = document.getElementsByTagName('li')
    for (let index = 0; index < li.length; index++) 
      {
      li[index].style.color = "black";
    }
  element.style.color ="red"
}

