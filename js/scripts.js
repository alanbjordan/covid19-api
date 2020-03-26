"use strict";
const submitFormButton = document.querySelector('#btn');
const stateInput = document.querySelector('#stateChangeForm');
let states = "0";

function getStates() {
    const apiURL = `https://corona.lmao.ninja/states`;    
    const stateSelectLabel = document.querySelector('#stateSelectLabel');    
    get(apiURL).then(function(response){  
        const statesList = response.map(function(states) {
        return states;
    });    
        const stateElement = document.createElement('select'); 
        statesList.map(function(states) {
            const stateOption = document.createElement('option');           
            stateOption.value = states.state;
            stateOption.text = states.state;    
            stateElement.append(stateOption); 

        });
            stateSelectLabel.appendChild(stateElement);  
    });
}
getStates();

async function getCases(state) {
    const apiUrl = `https://corona.lmao.ninja/states`;  
    const casesLabel = document.querySelector('#dead'); 
    await get(apiUrl).then(function(response) {
        const casesArray = [];
        const statesArray = [];
        response.forEach(element => {
            casesArray.push(element.cases);
            statesArray.push(element.state);
        });
        const stateIndex = statesArray.indexOf(state);
        const insert = (casesArray[stateIndex]); 
        casesLabel.innerHTML = insert;
    });
}

submitFormButton.addEventListener('click', function(e) {
    e.preventDefault();
    const stateInput = document.querySelector('#stateChangeForm select');
    const state = stateInput.value;
    const luv = toString(state);
    getCases(state);
});

