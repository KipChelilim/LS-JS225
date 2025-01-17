/*
Problem
  makeList function
  should return a function that implements todolist
  if arg is not on list, adds to the list
    outputs message "[list item] added!"
  if arg is on the list, removes from the list
    outputs message "[list item] removed!"
  without any args, just lists each item on the list
    if list is empty, outputs message "The list is empty."
Data Structure
  use a set, has a forEach method and can use handy `.has` `.delete` and `.add` methods
Algorithm
  makeList has an array outside the function
  makeList returns a function accepting one arg
    if arg is undefined
      run print all items
    if arg is present
      run with a list item

  subprograms:
    listAllItems:
      if array is empty output "The list is empty."
      else forEach list item, output the item
    addOrRemoveItems:
      if set has the list item
        delete list item
        output list item removed!
      otherwise
        add the list item
        output list item added!
*/

function makeList() {
  let list = new Set();
  
  function printAllItems() {
    if (list.size === 0) {
      console.log('The list is empty.');
    } else {
      list.forEach((todo) => console.log(todo));
    }
  }

  function addOrRemoveItems(todo) {
    if (list.has(todo)) {
      list.delete(todo);
      console.log(`${todo} removed!`);
    } else {
      list.add(todo)
      console.log(`${todo} added!`);
    }
  }

  return function(newTodo) {
    if (newTodo) {
      printAllItems();
    } else {
      addOrRemoveItems(newTodo);
    }
  };
}

let list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book