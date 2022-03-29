console.log("hello peeps");
let addBtn = document.getElementById("addBtn").addEventListener('click', function(e) {
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = []
    }
    else {
        noteObj = JSON.parse(notes);
    }
    noteObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    addText.value = "";
    console.log(noteObj);

    showNotes();
})

//function to show elements from local storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    let html = "";
    noteObj.forEach(function (element, index) {
        html += `
                <div class="card my-2 mx-2 noteCard" style="width: 18rem;">

                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
    });
   
    let noteElm = document.getElementById("notes");
    if (noteObj.length != 0) {
        noteElm.innerHTML = html;
    } else {
        noteElm.innerHTML = `Nothng to show! Use 'Add Note' section above to add notes `;
    }

}

// function to delete a note

function deleteNote(index){
    console.log("I'm deleting",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    noteObj.splice(index, 1); //removes 1 element from position index
    localStorage.setItem("notes", JSON.stringify(noteObj));
    showNotes();

}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function(){

    let inputval = search.value.toLowerCase();
    console.log("input event fired!", inputval);
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){
        let cardTxt = document.getElementsByTagName("p")[0].innerText;
        console.log(cardTxt);
        if(cardTxt.includes(inputval)){
            element.style.display = "block";
        } else{
            element.style.display = "none";
        }
    })
})
