// var chocolateBars = new Array();
// chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

 var chocolateBars = ["Snickers", "hundred grand", "kitkat", "skittles"];

  function addElementToBeginningOfArray(array, element) {
    array = [1];
    element = 'foo';
    var newArray = [element, ...array];

  }

  function destructivelyAddElementToBeginningOfArray(array, element) {
    array = [1];
    element = 'foo';
    array = [element, ...array];
  return array;
  }
