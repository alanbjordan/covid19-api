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
    const totalCasesLabel = document.querySelector('#totalCases'); 
    const todaysCasesLabel = document.querySelector('#todaysCases'); 
    const totalDeathsLabel = document.querySelector('#totalDeaths'); 
    const todaysDeathsLabel = document.querySelector('#todaysDeaths'); 
    const currentActiveLabel = document.querySelector('#currentActive'); 
    await get(apiUrl).then(function(response) {

        const totalCasesArray = [];
        const todaysCasesArray = [];     
        const totalDeathsArray = [];
        const todaysDeathsArray = [];  
        const currentActiveArray = [];   
        const statesArray = [];

        response.forEach(element => {
            totalCasesArray.push(element.cases);
            todaysCasesArray.push(element.todayCases);
            totalDeathsArray.push(element.deaths);    
            todaysDeathsArray.push(element.todayDeaths);
            currentActiveArray.push(element.active);
            statesArray.push(element.state);
        });

        const stateIndex = statesArray.indexOf(state);
        const insert1 = (totalCasesArray[stateIndex]); 
        const insert2 = (todaysCasesArray[stateIndex]); 
        const insert3 = (totalDeathsArray[stateIndex]); 
        const insert4 = (todaysDeathsArray[stateIndex]); 
        const insert5 = (currentActiveArray[stateIndex]); 
        totalCasesLabel.innerHTML = insert1;
        todaysCasesLabel .innerHTML = insert2;
        totalDeathsLabel.innerHTML = insert3;
        todaysDeathsLabel.innerHTML = insert4;
        currentActiveLabel.innerHTML = insert5;
    });
}

submitFormButton.addEventListener('click', function(e) {
    e.preventDefault();
    const stateInput = document.querySelector('#stateChangeForm select');
    const state = stateInput.value;
    const luv = toString(state);
    getCases(state);
});

