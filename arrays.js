var chocolateBars = new Array();
chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

  function addElementToBeginningOfArray(array, element) {
    array = [1];
    element = 'foo';
    var newArray = array.unshift(element);
  console.log(array);
  console.log(newArray);
  }

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [1];
  element = 'foo';
  array = array.unshift(element);
}
