var heading = document.getElementById('heading');
var description = document.getElementById('description');
var add_btn = document.getElementById('add-btn');
var multi = document.getElementById('multi');
var array = [{ head : `Sachin : God Of Cricket`,
des : `Sachin Tendulkar has been the most complete batsman of his time, the most prolific runmaker of all time, and arguably the biggest cricket icon the game has ever known. His batting was based on the purest principles: perfect balance, economy of movement, precision in stroke-making, and that intangible quality given only to geniuses - anticipation. If he didn't have a signature stroke - the upright, back-foot punch comes close - it's because he was equally proficient at each of the full range of orthodox shots (and plenty of improvised ones as well) and can pull them out at will.`,
},];

displayBlog();
function displayBlog(){
    multi.innerHTML = "";
    document.getElementById('blog').innerText = "Write Blog Here👇";
    for(let i = array.length-1; i >= 0 ; i--) 
    {
        let div = `<div id="detail">
        <div id="blogDetail">
            <h4>User's Blog</h4>
        </div>
        <div id="blog-add">
            <h3 id="head">${array[i].head}</h3>
            <p id="des">${array[i].des}</p>
        </div>
        <button id="edit-btn" onclick="editBlog('${array[i].head}');">Edit</button>
        <button id="delete-btn" onclick="deleteBlog('${array[i].head}');">Delete</button>
    </div>`
        multi.innerHTML += div;
    }
}

function editBlog(item){
    let index;
    for (let i = 0 ; i< array.length; i++) {
        if (array[i].head == item){
            index = i;
        }
    }
    heading.value = array[index].head;
    description.value = array[index].des;
    deleteBlog(array[index].head);
    document.getElementById('blog').innerText = 'Edit';
}

function deleteBlog(item) {
    let index;
    for (let i = 0 ; i< array.length; i++) {
        if (array[i].head == item){
            index = i;
        }
    }
    array.splice(index, 1);
    displayBlog();
}

add_btn.addEventListener('click', addBlog)
function addBlog(){
    if(heading.value == "" || description.value == "")
    {
        alert("Blog Cannot Be Empty");
        console.log(heading.value,description.value);
    }
    else{
        let obj = { head : heading.value,
            des : description.value,
        }
        array.push(obj);
        console.log(array);
        heading.value= "";
        description.value = "";
        displayBlog();
    }
}

