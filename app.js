// GLOBAL VARIABLES
let employees = [];
const urlAPI = `https://randomuser.me/api?results=12&inc=name, picture, email, location, phone dob &noinfo &nat=US`;
const gridContainer = document.querySelector('.grid-container');
const overlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');

// Fetch Data from the API
fetch(urlAPI)
    .then(res => res.json())
    .then(res => res.results)
    .then(displayEmployees)
    .catch(err => console.log(err))

// Display Employees Function
function displayEmployees(employeeData) {
    
    employees = employeeData;
    
    
    // Store the employee HTML as we create it
    let employeeHTML = '';
    
    // Loop through each employee and create HTML markup
    employees.forEach((employee, index) => {

        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        let picture = employee.picture;
        
        employeeHTML += `
            <div class="card" data-index="${index}">
                <img class="card__avatar" src="${picture.large}" />
                <div class="card__text__container">
                    <h2 class="card__text__container__name">${name.first} ${name.last}</h2>
                    <p class="card__text__container__email">${email}</p>
                    <p class="card__text__container__address">${city}</p>
                </div>
            </div>
        `
    });
    
    gridContainer.innerHTML = employeeHTML;
    
}
