const reviews = [
    {
        id: 0,
        name: "Susan Smith",
        job: "Web Developer",
        image: "./img/person-1.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore, sit commodi quos iure consequuntur quis suscipit asperiores possimus a in architecto odio exercitationem!"
    },
    {
        id: 1,
        name: "Anna Jonas",
        job: "Web Designer",
        image: "./img/person-2.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore, sit commodi quos iure consequuntur quis suscipit asperiores possimus a in architecto odio exercitationem!"
    },
    {
        id: 2,
        name: "Camilla Mendes",
        job: "Project Manager",
        image: "./img/person-3.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore, sit commodi quos iure consequuntur quis suscipit asperiores possimus a in architecto odio exercitationem!"
    },
    {
        id: 3,
        name: "Peter Parker",
        job: "THE BOSS",
        image: "./img/person-4.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore, sit commodi quos iure consequuntur quis suscipit asperiores possimus a in architecto odio exercitationem!"
    }
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
const min = reviews[0].id;
const max = reviews.length - 1;

//set startinf item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem)  
})


//show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.image;   
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


//show next person
nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem)
})


//show previous person
prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }    
    showPerson(currentItem)
})

randomBtn.addEventListener('click', () => {
    const rndmNum = Math.floor(Math.random() * (max - min + 1)) + min;
    showPerson(rndmNum);
})