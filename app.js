const addBtn = document.getElementById("add");
addBtn.addEventListener("click", ()=>{
    addNote();
});







const addNote = (noteEl = '') => {
    const note = document.createElement("div");
    note.classList.add(".note");
    note.style.marginBottom = "3em";
    note.style.position ="relative";
    note.style.top = "20px";
    note.style.left = "80px"
    note.innerHTML = `
        <div class="note">
        <div class="toolbar">
            <button id="edit">
                <i class='bx bx-edit'></i>
            </button>
            <button id="delete">
                <i class='bx bx-trash'></i>
            </button>
        </div>
        <div class="main hidden"></div>
        <textarea class="area" ></textarea>
    </div>
    `;
    const editBtn = note.querySelector("#edit");
    const deleteBtn = note.querySelector("#delete");

    const main = note.querySelector(".main")
    const textarea = note.querySelector(".area");
    textarea.value = noteEl;
    editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
    main.style.backgroundColor = "#f1f1f1"
    toSl()
    });
    deleteBtn.addEventListener("click", () => {
        note.remove();
        toSl();
    }); 

    textarea.addEventListener("input", (e) => {
    const {value} = e.target;
    main.innerHTML =value;
    toSl();
    });
    document.body.appendChild(note);
};
const noteEl = JSON.parse(localStorage.getItem("notes"));
console.log(noteEl)
if(noteEl){
    noteEl.forEach((note) => {
        addNote(note);
    });
};

const toSl = () => {
    const noteArea = document.querySelectorAll(".area");
    const notes = [];
    noteArea.forEach((note)=> {
        notes.push(note.value);
    });
    localStorage.setItem("notes", JSON.stringify(notes));

};