var list =document.getElementById("list");


//create li tag with textnode
function addtodo() {
var todo_item = document.getElementById("todo-item")
var li =document.createElement('li')
var litext =document.createTextNode(todo_item.value)
li.appendChild(litext)

//create delete Button
var delBtn = document.createElement("button")
var delText =document.createTextNode("Delete")
delBtn.setAttribute("class","btn")
delBtn.setAttribute("onclick","deleteItem(this)")
delBtn.appendChild(delText)


li.appendChild(delBtn)

list.appendChild(li)
todo_item.value =""

}

function deleteItem(e){
    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML =""
}