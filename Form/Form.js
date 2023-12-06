function createDivElement(class1, class2, listTypes) {
    const progressDiv = document.createElement('div');
    progressDiv.className = `${class1}`; // Use className to set multiple classes
    progressDiv.textContent = listTypes;
    return progressDiv;
}

const listData = [
    { class1: 'circle1', class2: 'line1', inputclass: "login" ,  listTypes: "Login / SignUp" },
    { class1: 'circle2', class2: 'line2', inputclass: "Info" , listTypes: "Basic info" },
    // { class1: 'circle3', class2: 'line3', inputclass: "trip" , listTypes: "Trip details" },
    { class1: 'circle3', class2: 'line3', inputclass: "hotel" , listTypes: "Hotels and transportation" },
    // { class1: 'circle5', class2: 'line5', inputclass: "transport" , listTypes: "Transportation" },
    // { class1: 'circle6', class2: 'line6', inputclass: "activity" , listTypes: "Activities and interest" },
    // { class1: 'circle7', class2: 'line7', inputclass: "price" , listTypes: "Budget and preference" },
    { class1: 'circle8', inputclass: "review" , listTypes: "Review and submit" },
];

const divElement = document.getElementById('progress-list');

listData.forEach(item => {
    const div = createDivElement(item.class1, item.class2);
    const InputDiv= document.createElement('div');
    InputDiv.textContent=  item.listTypes , 
    InputDiv.className = item.inputclass;
    const lineDiv = document.createElement('div');
    lineDiv.className = item.class2;

    divElement.appendChild(div);
     divElement.appendChild(InputDiv)
    divElement.appendChild(lineDiv);   
    
});
