var chocolateBars = new Array();
chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

 // var chocolateBars = ["Snickers", "hundred grand", "kitkat", "skittles"];

  function addElementToBeginningOfArray(array, element) {
    array = [1];
    element = 'foo';
    // return array;
    var newArray = [element, ... array];
    return newArray;

  }

  function destructivelyAddElementToBeginningOfArray(array, element) {
    array = [1];
    element = 'foo';
    array = [element, ... array];
  return array;
  }

 //

 function addElementToEndOfArray(array, element) {
   array = [1];
   element = 'foo';
   // return array;
   var newArray = [array, ... element];
   return newArray;

 }