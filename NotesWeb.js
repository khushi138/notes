
display();
displayBookmark();
let text = document.getElementById("Textarea");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener('click', function addNotes() {

    let notes = localStorage.getItem("yourNotes");
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    noteObj.push(text.value);
    localStorage.setItem("yourNotes", JSON.stringify(noteObj));
    text.value = "";
    // console.log(noteObj);

    display();
});

let impBtn = document.getElementById("impBtn");
impBtn.addEventListener('click', function bookmarkShow() {
    let booknotes = localStorage.getItem("bookNotes");
    if (booknotes == null) {
        bookmarkObj = [];
    }
    else {
        bookmarkObj = JSON.parse(booknotes);
    }
    bookmarkObj.push(text.value);
    localStorage.setItem("bookNotes", JSON.stringify(bookmarkObj));
    text.value = "";

    displayBookmark();
});

function displayBookmark() {
    booknotes = localStorage.getItem("bookNotes");
    if (booknotes == null) {
        bookmarkObj = [];
    }
    else {
        bookmarkObj = JSON.parse(booknotes);
    }
    let html = "";
    bookmarkObj.forEach(function (element, index) {
        html += `
        <div class="card text-dark border-dark mb-3 my-2 mx-2  shadow p-3 mb-5  rounded impColor" style="max-width: 18rem;">
                
                <div class="card-body impColor">
                    <h5 class="card-title">Imp note</h5>
                    <p class="card-text">${element}</p>
                    <button  class="btn btn-primary" id="${index}"onclick="deleteBookmark(this.id)">Delete</button>
                </div>
                
               
            </div>`
    });
    let cardBookmark = document.getElementById("bookmark");
    cardBookmark.innerHTML = html;

}
function display() {

    let notes = localStorage.getItem("yourNotes");
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    let html = "";
    noteObj.forEach(function (element, index) {
        html += `
        <div class="card text-dark border-dark mb-3 my-2 mx-2  shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button class="btn btn-primary" id="${index}"onclick="deleteNote(this.id)">Delete</button>
        </div>
            </div>`
    });
    let card = document.getElementById("card-container");
    card.innerHTML = html;
}


function deleteNote(index) {
    let notes = localStorage.getItem("yourNotes");
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    noteObj.splice(index, 1);
    localStorage.setItem("yourNotes", JSON.stringify(noteObj));
    display();
}
function deleteBookmark(index) {
    let booknotes = localStorage.getItem("bookNotes");
    if (booknotes == null) {
        bookmarkObj = [];
    }
    else {
        bookmarkObj = JSON.parse(booknotes);
    }
    bookmarkObj.splice(index, 1);
    localStorage.setItem("bookNotes", JSON.stringify(bookmarkObj));
    displayBookmark();
}








