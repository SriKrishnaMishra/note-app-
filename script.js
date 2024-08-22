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