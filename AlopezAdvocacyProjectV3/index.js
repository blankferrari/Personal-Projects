
// TODO: Query for button with an id "theme-button"

// ******** DARKKK MODEEEE BUTTTTTON *********
let themeButton = document.getElementById("theme-button")

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");

}
// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);


// ******* Below is adding a p tag to the html **********

// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button");


const addSignature = () => {
  // Write your code to manipulate the DOM here



  let user_name = document.getElementById("nom"); //This grabs the name input from the html
  let value = user_name.value.trim(); // This grabs the declared input variable and then grabs the value of it

  let user_name1 = document.getElementById("hometown"); //This grabs the input from the html
  let value2 = user_name1.value.trim(); // This grabs the declared input variable and grabs the value

  const pars = document.createElement("p");

  //THIS IS CREATING A TEXT NODE to a declared variable
  let data = document.createTextNode("\n \n🖊️ " + value + " from " + value2 + " supports this.");


  // THIS IS APPENDING BUT YOU CANNOT APPEND STRINGS ONLY NODES SO I MADE A TEXT NODE.
  pars.appendChild(data);

  // pars.textContent = `🖊️ ${person.name} from ${person.hometown} supports this cause.`;


  let davs = document.getElementById("adds");

  davs.appendChild(pars);



  // ********** This Will be for adding to the counter *******

  let old_count = document.getElementById("counter")

  // This completely deletes the p tag and the content insde from the html
  old_count.remove()

  // This adds the value of count + 1
  count = count + 1
  // This is creating a new p tag
  const terms = document.createElement("p");
  //This is giving the new p element an id of counter.
  terms.setAttribute("id", "counter");
  //THIS IS CREATING A TEXT NODE to a declared variable.
  let new_count = document.createTextNode("🖊️ " + count + " people have signed this petition and support this cause");

  //This is APPENDING BUT YOU CANNOT APPEND STRINGS ONLY NODES SO I MADE A TEXT NODE.
  terms.appendChild(new_count);
  // grabbbing the code.
  // let davs = document.getElementById("adds");

  davs.appendChild(terms);
}
// Add a click event listener to the sign now button here

let count = 3;
// signNowButton.addEventListener("click", addSignature);

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements; //which holds a list of all the different inputs for our form.

  let person = {
    name: petitionInputs[0].value, // accesses and saves value of first input
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }


  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }
  // TODO: Validate the value of each input

  const email = document.getElementById('email');
  //The conditional below means that if the email address does NOT contain the '.com', we want to tell our user that their input contains errors and is invalid.
  if (!email.value.includes('.com')) {
    email.classList.add('error');
    containsErrors = true;
    //Give the email input the error class so that the input box will be highlighted in red with the CSS rules we added earlier.


  } else {
    email.classList.remove('error');
  }

  //A conditional statement where the basis is if containsErrors is equivalent to false
  if (containsErrors == false) {
    //If it is then it will run the addSignature function, hence why we removed the original event listener.
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }


  // TODO: Call addSignature() and clear fields if no errors

}

signNowButton.addEventListener('click', validateForm);


// ********* ANIMATION STUFF **********

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: "2s",
  transitionProperty: "all",
  transitionTimingFunction: "ease"

}

//this variable grabs all of the divs with that class
let revealableContainers = document.querySelectorAll(".revealable");


const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      //This means that the loop will add the class one at a time not all at once. Dont be dumb bozo, adding them all at once would cause it too not work or give an error.
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll', reveal);

// ******* REDUCE MOTION BUTTON ***************

let motionButton = document.getElementById("motion-button");
//More or less the same funciton as reveal but with click and abilities its just when you click the buttons it will change the animations
const reduceMotion = () => {
  animation["transitionDuration"] = 0;
  animation["transitionTimingFunction"] = "none";
  animation["transitionProperty"] = "none";
  animation["revealDistance"] = "20"
  // animation["revealDistance"] = 100;

  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      //This means that the loop will add the class one at a time not all at once. Dont be dumb bozo, adding them all at once would cause it too not work or give an error.
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
    revealableContainers[i].style.transitionDelay = animation.transitionDelay;
    revealableContainers[i].style.transitionDuration = animation.transitionDuration;
    revealableContainers[i].style.transitionProperty = animation.transitionProperty;
    revealableContainers[i].style.transitionTimingFunction = animation.transitionTimingFunction;
    revealableContainers[i].style.revealDisance = animation.revealDistance;
  }
}

motionButton.addEventListener("click", reduceMotion);


// *********** MODAL STUFF *******************

const toggleModal = (person) => {
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = "flex";
  modalContent.textContent = "Thank you so much " + value + " ! " + value2 + " represent!";
  
  setTimeout(() => {
  modal.style.display = "none";
}, 4000)

  
}


signNowButton.addEventListener('click', toggleModal);
