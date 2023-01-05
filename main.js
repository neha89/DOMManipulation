var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form Submit Event
form.addEventListener('submit', addItem);

//Delete Event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);


//Add item
function addItem(e){
    e.preventDefault();
       
    //console.log(1);
    //Get Input Value
    var newItem = document.getElementById('item').value;
    var desc = document.getElementById('description').value;

    //Create New Element
    var li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';
    //console.log(li);
 
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(' '));
    li.appendChild(document.createTextNode(desc));

    

    //Create Delete Button Element
    var deleteBtn = document.createElement('button');

    //Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //create textnode
    deleteBtn.appendChild(document.createTextNode('X'));
    
    //append deleteBtn to li
    li.appendChild(deleteBtn);

     //Create Edit Button Element
     var editBtn = document.createElement('button');
     //Add classes to edit button
     editBtn.className = 'btn  btn-primary btn-sm float-right edit';
     //create textnode
     editBtn.appendChild(document.createTextNode('Edit'));
     //append editBtn to li
     li.appendChild(editBtn);

    

   


    itemList.appendChild(li);


}

//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    // console.log(1);
}

//Filter Items
// function filterItems(e){
//     //convert text to lowercase
//     var text = e.target.value.toLowerCase();
    
//     // console.log(text);
//     //Get list
//     var items = itemList.getElementsByTagName('li');
    
//     //convert html collection to an array
//     Array.from(items).forEach(function(item){
//         var itemName = item.firstChild.textContent;
//         if(itemName.toLowerCase().indexOf(text) != -1){
//             item.style.display = 'block';
//         } else{
//             item.style.display = 'none';
//         }
//     })
// }


function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    
    // console.log(text);
    //Get list
    var items = itemList.getElementsByTagName('li');
    
    //convert html collection to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var description = item.childNodes[1].textContent;
        if((itemName.toLowerCase().indexOf(text) !=-1) || (description.toLowerCase().indexOf(text) !=-1) ){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    })
}