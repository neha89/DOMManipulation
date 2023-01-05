var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');

//Form Submit Event
form.addEventListener('submit', addItem);

//Delete Event
itemlist.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);


//Add item
function addItem(e){
    e.preventDefault();
       
    //console.log(1);
    //Get Input Value
    var newItem = document.getElementById('item').value;

    //Create New Element
    var li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';
    //console.log(li);
 
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create Delete Button Element
    var deleteBtn = document.createElement('button');

    //Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //create textnode
    deleteBtn.appendChild(document.createTextNode('X'));
    //append deleteBtn to li
    li.appendChild(deleteBtn);

    itemlist.appendChild(li);


}

//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
    // console.log(1);
}

//Filter Items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase()
    console.log(text);
}