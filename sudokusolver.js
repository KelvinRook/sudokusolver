const intArray = [1,2,3,4,5,6,7,8,9];
var checkArray;
var boxArray;
var colBox;
var rowBox;


function solver(){
document.querySelectorAll('td.g0').forEach(function(box) {
  boxArray = intArray.slice();
  colBox = parseInt(box.firstChild.id.slice(1,2));
  rowBox = parseInt(box.firstChild.id.slice(2,3));
  for(colBox; colBox<parseInt(box.firstChild.id.slice(1,2))+3;colBox++)
  {
      boxArray = boxArray.filter(boxVal => boxVal != parseInt(document.querySelector(`[id^='f${colBox}'][id$='${rowBox}']`).value));
 
      for(rowBox;rowBox<parseInt(box.firstChild.id.slice(2,3))+3;rowBox++)
      { 
          boxArray = boxArray.filter(boxVal => boxVal != parseInt(document.querySelector(`[id^='f${colBox}'][id$='${rowBox}']`).value));; 
      }
      
    rowBox = parseInt(box.firstChild.id.slice(2,3));
    if(colBox >= parseInt(box.firstChild.id.slice(1,2))+2)
    {
      
      colBox = parseInt(box.firstChild.id.slice(1,2));
      rowBox = parseInt(box.firstChild.id.slice(2,3));
      for(colBox; colBox<parseInt(box.firstChild.id.slice(1,2))+3;colBox++)
      {
        checkArray = boxArray.slice();
 
        for(rowBox;rowBox<parseInt(box.firstChild.id.slice(2,3))+3;rowBox++)
        {
          checkArray = boxArray.slice();
          document.querySelectorAll(`[id^=f][id$='${rowBox}']`).forEach(function(input) {
            if(input.value != "")
            {
            checkArray = checkArray.filter(check => check != input.value);
            }
        });
        document.querySelectorAll(`[id^='f${colBox}']`).forEach(function(input) {
            if(input.value != "")
            {
            checkArray = checkArray.filter(check => check != input.value);
            }
        });
        if(document.querySelector(`[id^='f${colBox}'][id$='${rowBox}']`).value == "")
        {
          if(checkArray.length == 1)
          {
          document.querySelector(`[id^='f${colBox}'][id$='${rowBox}']`).value = checkArray.pop();
          boxArray = boxArray.filter(boxVal => boxVal != parseInt(document.querySelector(`[id^='f${colBox}'][id$='${rowBox}']`).value));
          solver();
          }
          else if(checkArray.length == 2)
          {
            document.querySelector(`[id^='f${colBox}'][id$='${rowBox}']`).value = checkArray.pop();
            boxArray = boxArray.filter(boxVal => boxVal != parseInt(document.querySelector(`[id^='f${colBox}'][id$='${rowBox}']`).value));
            solver();
            }
        }
        }
      
        rowBox = parseInt(box.firstChild.id.slice(2,3));
      } 
    }
  }
  colBox = parseInt(box.firstChild.id.slice(1,2));
  rowBox = parseInt(box.firstChild.id.slice(2,3));
}); 
}solver();