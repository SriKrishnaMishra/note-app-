const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click", function (){

addNote();
});

const saveNotes = () => {

    const notes = document.querySelectorAll(".note .content");

    const titles = document.querySelectorAll(".note .title");

    const data = [];

    notes.forEach((note, index) => {

      const content = note.value;  
      const title = titles[index].value;
      console.log(title);
      if(content.trim() !== "") {

        data.push({title, content});
      }
  
})

const titlesData = data.map((item) => item.title);
console.log(titlesData);
localStorage.setItem("titles",JSON.stringify(titlesData));

const contentData = data.map((item) => item.content);
localStorage.setItem("notes", JSON.stringify(contentData));

};

 const addNote = (text = "", title = "") => {

  const note = document.createElement("div");
   note.classList.add("note");
   note.innerHTML = `
  div class = "icons">
   <i class = "save fas fa-save" style = "color:yellow">

  </i>
   <i class="trash fas fa-trash" style = "color:yellow">

   </i>
  </div>
  <div class="title-div">
  <textarea class="title" placeholder ="write the title ..." >${title}
  </textarea>
  </div>
   <textarea class="content" placeholder ="Note down your thought..."> ${text}
   </textarea>
   `;


function handleTranshClick() {

  note.remove();
  saveNotes();
}

function handleSaveClick() {

  saveNotes();
}

const delBtn = note.querySelector(".trash");
const saveButton = note.querySelector(".save");
const textarea = note.querySelectorAll("textarea");

delBtn.addEventListener("click", handleTranshClick);
saveButton.addEventListener("click", handleSaveClick);
main.appendChild(note);

saveNotes();

};

function landNotes() {

  const titleData = JSON.parse(localStorage.getItem("titles"))  || [];

  const contentData = JSON.parse(localStorage.getItem("notes")) || [];

  for(let i = 0; i < Math.max(titleData.length, contentData.length); i++) {

    addNote(contentData[i], titleData[i]);

  }
}

loadNotes();
