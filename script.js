let textBox = document.getElementById("text-box");
let showResults = document.querySelector(".show-results");
let resultBreakdown = document.querySelector("div.result-breakdown");
let regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

//function that removes element from screen and also runs main tester function
function checkIfCapital(){
    while (resultBreakdown.children.length >0){
        resultBreakdown.removeChild(resultBreakdown.lastElementChild);
    }
    displayResults();    
}

const columnResults = checkIfCapital();

//function that runs all the checks and creates elements to appear on screen
function displayResults(){
        for (i=0; i < textBox.value.length; i++){
        let regexCheck = regex.test(textBox.value[i]);
        let cloneDiv =document.createElement("div");
        resultBreakdown.appendChild(cloneDiv);
        cloneDiv.classList.add("result-breakdown-check");
        let createDiv = document.createElement("div");
        let createDiv2 = document.createElement("div");
        cloneDiv.appendChild(createDiv);
        cloneDiv.appendChild(createDiv2);
        createDiv.classList.add("breakdown-section");
        createDiv.innerHTML = textBox.value[i];
        if (textBox.value.charAt([i]).toUpperCase()===textBox.value.charAt([i]) && textBox.value[i].indexOf(' ') != 0 && isNaN(textBox.value[i]) && !regexCheck){
            createDiv2.innerHTML="<--- I'm a capital letter!";
        }else if (textBox.value.charAt([i]).toUpperCase()!=textBox.value.charAt([i]) && textBox.value[i].indexOf(' ') != 0 && isNaN(textBox.value[i]) && !regexCheck){
            createDiv2.innerHTML="<--- I'm not a capital letter :(";
        } else if (textBox.value[i].indexOf(' ') >= 0){
            createDiv2.innerHTML= "<--- I'm a blank space :o";
        } else if(textBox.value[i] != NaN && !regexCheck){
            createDiv2.innerHTML= "<--- I'm a number";
        } else if(regexCheck){
            createDiv2.innerHTML= "<--- I am a special character";
        }
    }
}

//runs function when user inputs
textBox.addEventListener("input",checkIfCapital);
