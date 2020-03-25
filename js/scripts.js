"use strict";
var states = [];
let i = 0;

const stateChangeform = document.querySelector('#stateChangeForm');
const eachState = document.querySelector('#state');

const getStates = function getData(){
    const apiURL = `https://corona.lmao.ninja/states`;    
    const stateSelectLabel = document.querySelector('#stateSelectLabel');
    get(apiURL).then(function(response){
        console.log(response);
        // Create a select element for our categories
            const stateElement = document.createElement('select');        
        response.forEach(element => {
        // Create the options for the select element
            const stateOption = document.createElement('option');
            stateOption.value = element.state;
            stateOption.text = element.state;    
            stateElement.append(stateOption);    
        });
        stateSelectLabel.appendChild(stateElement);
    });
}

getStates();
// const getCategories = async () => {
//     const apiUrl = `https://api.chucknorris.io/jokes/categories`;
//     
  
//     const categoryList = await getWithAwait(apiUrl);
//     // Create a select element for our categories
//     const categoryElement = document.createElement('select');
  
//     // Create the options for the select element
//     categoryList.map(function(category) {
//       const categoryOption = document.createElement('option');
//       categoryOption.value = category;
//       categoryOption.text = category;
//       if (category != 'explicit') {
//         categoryElement.append(categoryOption);
//       }
//     });
//     categorySelectLabel.appendChild(categoryElement);
//   };
  

// console.log(myData);







            // categoryList.map(function(category){
            //     const categoryOption = document.createElement('option');
            //     categoryOption.value = category;
            //     categoryOption.text = category;
            //     categoryElement.append(categoryOption);
            // })  



// let state = document.querySelectorAll("#categoryInput");
// const refreshQuoteButton = document.querySelector('#refreshQuote');
// const submitFormButton = document.querySelector('#submitForm');
// const categoryChangeForm = document.querySelector('#categoryChangeForm');

// function getQuote(category) {
//     const apiURL = `https://api.chucknorris.io/jokes/random?category=${category}`;
//     const chuckSaysParagraph = document.querySelector('#chuckSays');
//     get(apiURL).then(function(response){
//         chuckSaysParagraph.innerHTML = response.value;
//      });
// }

// function getState(){
//     const apiURL = `https://api.chucknorris.io/jokes/categories`;
//     const categorySelectLabel = document.querySelector('#categorySelectLabel');
//     get(apiURL).then(function(response){
//         console.log(response);
//         const categoryList = response.filter(function(state){
//             if (category != 'explicit'){}
//                 return category
            
//         });
//         const categoryElement = document.createElement('select');
//         categoryList.map(function(category){
//             const categoryOption = document.createElement('option');
//             categoryOption.value = category;
//             categoryOption.text = category;
//             categoryElement.append(categoryOption);
            
//             // categoryElement.innerHTML = category;
//             // document.appendChild(categoryElement)
//         })
//         categoryChangeForm.appendChild(categoryElement);
//     });
// }
// getData();
// getStates();
// getQuote('dev');