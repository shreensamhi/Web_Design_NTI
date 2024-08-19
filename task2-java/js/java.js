// function loopfun(startnum , endnum ,braknum,contniuenum)
// {
//     if((startnum ==null || startnum=="") || (endnum==null || endnum=="")||(braknum==null || braknum=="")||(contniuenum==null ||contniuenum=="" ) )
//         console.log("please enter all parameters")
//     else{
//         for (let index = startnum; index <=endnum; index++) {
//             if(index== contniuenum) continue;
//             else if (index == braknum) break ;
//             console.log(index);
            
//         }
//     }
// };
// var startnum =prompt("enter startnumber")
// var endnum =prompt("enter endnumber")
// var breaknum =prompt("enter breaknumber")
// var continuenum =prompt("enter continuenumber")

// loopfun(startnum,endnum,breaknum,continuenum)


// loopfun(1,5)
// loopfun(5,20,20,15)


var numbers =[2,5,10,8,9]
var ele =prompt("enter number")

var indexele =numbers.findIndex(numbers => numbers==ele)
if(indexele == -1)
{
    console.log("number not found")
}
else 
    console.log(indexele)