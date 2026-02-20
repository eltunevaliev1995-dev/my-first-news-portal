const checkButtonPro = document.getElementById("checkButton");


checkButtonPro.addEventListener("click", function () {
   
    const inputName = document.getElementById("userName").value;

    let inputAge = Number(document.getElementById("userAge").value);

    const displayMessage = document.getElementById("displayMessage");


    if(inputName === "") {

        displayMessage.innerHTML = "Fill in the Fields";
        displayMessage.style.color = "red";

    }  else if (inputAge >= 18) {

         displayMessage.innerHTML = `Welcome, Mr. ${inputName}`;
         displayMessage.style.color = "deepskyblue";

    } else {

         displayMessage.innerHTML = `Your age is invalid, Mr. ${inputName}`;
         displayMessage.style.color = "darkseagreen";
    }


});