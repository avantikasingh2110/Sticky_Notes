let add_btn = document.getElementById("add_button");
let clear_btn = document.getElementById("clear_button");
let textArea = document.getElementById("text_area");
let font_Color = document.getElementById("stiky_notes_font_color")
let stiky_Notes_Color = document.getElementById("stiky_notes_color");
let notes_container = document.getElementById("notes_container");
let message = document.getElementById("message");

function addNotes(){
    // console.log("hi");

    if (textArea.value.trim() === '') {
        alert('Please enter some text!!');
        return;
    }
    
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_button = document.createElement("button");
    
    div.appendChild(p);
    div.appendChild(cross_button);
    cross_button.innerText = "X";
    p.innerText = textArea.value;
    div.style.color = font_Color.value;
    div.style.backgroundColor = stiky_Notes_Color.value;
    div.classList.add("sticky-Div");
    notes_container.appendChild(div);
    message.style.display = "none";
    textArea.value = "";

    cross_button.addEventListener("click", function(){
        div.remove();
        if(notes_container.children.length === 0){
            message.style.display = "block";
            // message.innerText.valueOf;
        }
    })  
}

function clearNotes() {
    if(notes_container.children.length !== 0){
        notes_container.innerHTML = "";
        message.style.display = "block";
    }
}


add_btn.addEventListener("click", addNotes);
clear_btn.addEventListener("click", clearNotes);


