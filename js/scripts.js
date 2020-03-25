"use strict";
const stateChangeform = document.querySelector('#stateChangeForm');
const eachState = document.querySelector('#state');

const getStates = function getData(){
    const apiURL = `https://corona.lmao.ninja/states`;    
    const stateSelectLabel = document.querySelector('#stateSelectLabel');
    const casesLabel = document.querySelector('#caseslabel');
    get(apiURL).then(function(response){
        console.log(response);
            const stateElement = document.createElement('select');   
            casesLabel.innerHTML = response[0].cases;                
        response.forEach(element => {
            const stateOption = document.createElement('option');
            stateOption.value = element.state;
            stateOption.text = element.state;    
            stateElement.append(stateOption);   
        });
        stateSelectLabel.appendChild(stateElement);

    });
}
getStates();