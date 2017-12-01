var chocolateBars = new Array();
chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

 // var chocolateBars = ["Snickers", "hundred grand", "kitkat", "skittles"];

  function addElementToBeginningOfArray(array, element) {
    array = '[1];
    element = 'foo' ;
    // return array;
    var newArray = [element, array[0]];
    return newArray;

  }

  function destructivelyAddElementToBeginningOfArray(array, element) {
    array = [1];
    element = 'foo';
    array = [element, ...array];
  return array;
  }

 //  function addElementToBeginningOfArray(array, element){
 //    var array = "foo";
 //    var element = 1;
 //    return [array, element];
 //    var new_array = [element, array[0]];
 //    return new_array;
 // }
