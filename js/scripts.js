"use strict";
const submitFormButton = document.querySelector('#btn'),
stateInput = document.querySelector('#stateChangeForm');

function getStates() {
    const apiURL = `https://corona.lmao.ninja/states`,    
    stateSelectLabel = document.querySelector('#stateSelectLabel');    
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
    const apiUrl = `https://corona.lmao.ninja/states`,  
    totalCasesLabel = document.querySelector('#totalCases'), 
    todaysCasesLabel = document.querySelector('#todaysCases'),
    totalDeathsLabel = document.querySelector('#totalDeaths'), 
    todaysDeathsLabel = document.querySelector('#todaysDeaths'), 
    currentActiveLabel = document.querySelector('#currentActive'); 
    await get(apiUrl).then(function(response) {
        const totalCasesArray = [],
        todaysCasesArray = [],     
        totalDeathsArray = [],
        todaysDeathsArray = [],  
        currentActiveArray = [],   
        statesArray = [];
        response.forEach(element => {
            totalCasesArray.push(element.cases);
            todaysCasesArray.push(element.todayCases);
            totalDeathsArray.push(element.deaths);    
            todaysDeathsArray.push(element.todayDeaths);
            currentActiveArray.push(element.active);
            statesArray.push(element.state);
        });
        const stateIndex = statesArray.indexOf(state),
        insert1 = (totalCasesArray[stateIndex]), 
        insert2 = (todaysCasesArray[stateIndex]), 
        insert3 = (totalDeathsArray[stateIndex]), 
        insert4 = (todaysDeathsArray[stateIndex]), 
        insert5 = (currentActiveArray[stateIndex]); 
        totalCasesLabel.innerHTML = insert1;
        todaysCasesLabel .innerHTML = insert2;
        totalDeathsLabel.innerHTML = insert3;
        todaysDeathsLabel.innerHTML = insert4;
        currentActiveLabel.innerHTML = insert5;
    });
}

submitFormButton.addEventListener('click', function(e) {
    e.preventDefault();
    const stateInput = document.querySelector('#stateChangeForm select'),
    state = stateInput.value;
    getCases(state);
});