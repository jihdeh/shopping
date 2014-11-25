var completeDiv = document.getElementById('complete'),

     incompleteDiv = document.getElementById('incomplete'),

     lists = document.getElementsByTagName('ul'),

     checkLists = document.getElementsByClassName('checkit'),

     button = document.getElementById('button');

var shoppingApp = {
      // Validate user input
  validate: function() {
    var item = document.getElementById('item').value;

    if (item.trim() === "") {
      alert("Please enter an item to Add to list");
    } 
    else {
      return item;
    }
  },

  createNewItem: function(taskString) {
    var listItem = document.createElement("li"); //Create List Item
    var checkBox = document.createElement("input"); //input (checkbox)
    var label = document.createElement("label"); //label for text
    var deleteButton = document.createElement("button");//button.delete

    
    checkBox.type = "checkbox"; //place type of each element

    //add classes and text to created items
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    checkBox.className = "checkit";
    
    label.innerText = taskString;

    //Each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    return listItem;
  },

    // Add item to shopping list
  addItem: function(e) {
    e.preventDefault();
    var item = document.getElementById('item').value; 
    if(shoppingApp.validate()) {
      var listItem = shoppingApp.createNewItem(item); //Create a new list item with the text from item
      incompleteDiv.appendChild(listItem); //Append listItem to incompleteItems
      item = "";
    }
    return false;
  },

      // Delete item from the list
  deleteItem: function() {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem); //Remove the parent list item from the ul
  },
  
      // switch between complete and Incomplete Tasks
  switching: function(event){
    event.preventDefault();
    var listItem = this.parentNode;
    if(this.checked) {
      completeDiv.appendChild(listItem);
    } 
    else {
      incompleteDiv.appendChild(listItem);
    }
  },

  initialize: function() {
    button.onclick = shoppingApp.addItem;
    $(lists).on("change", 'input[type=checkbox]', shoppingApp.switching);
    $(lists).on("click", '.delete', shoppingApp.deleteItem);
  }  
};

$(document).ready(shoppingApp.initialize);