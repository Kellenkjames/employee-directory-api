// GLOBAL VARIABLES
const employees = [];
const urlAPI = `https://randomuser.me/api?results=12&inc=name, picture, email, location, phone dob &noinfo & nat=US`;
const gridContainer = document.querySelector('.grid-container');
const overlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');

// Fetch Data from the API
fetch(urlAPI)
    .then(res => res.json())
    .then(data => console.log(data));
