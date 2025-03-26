/**
 * Basis object met gebruikers
 */

const users = [
  {
    fullname: "KarelKleintjes",
    email: "karel.kleintjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "ElsDotjes",
    email: "else.dotjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "PietPollekens",
    email: "piet.pollekens@gmail.com",
    password: "123Test",
  },
];

// hieronder komt jullie code - veel succes

// gebruikerslijst

// variables gebruikerlijst
const username = document.querySelector(".username")
const email = document.querySelector(".email")
const username2 = document.querySelector(".username2")
const email2 = document.querySelector(".email2")
const dubbelUser = document.querySelector(".dubbelUser")

// john vewrijderen uit html
username.innerHTML = ""
email.innerHTML = ""
username2.innerHTML = ""
email2.innerHTML = ""

// filter

// variables filter
const filterBtn = document.querySelector("#filterBtn")
const filterInput = document.querySelector("#filter")

// filter knop een functie geven 

filterBtn.addEventListener("click", () => {
  users.forEach(user => {
    // de gebruiker tevoorschijn laten komen
    if (filterInput.value == user.fullname){
      username.innerHTML = user.fullname;
      email.innerHTML = user.email
    }
    // checken of er een dubbele gebruiker is
    // if (filterInput.value == )
  });
})

// registreer

// variables registreer
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const registreerBtn = document.querySelector("#registreer")
const registreerDiv = document.querySelector("#registreerForm")

// registreer knop een function geven

registreerBtn.addEventListener("click", () => {
  if (nameInput.value != "" || emailInput.value != "" || passwordInput.value != "" ){
    users.push[{fullname: nameInput.value,
                email:emailInput.value,
                password: passwordInput}]
    console.log(users);
  } else{
      // error melding geven als niet alle velden zijn ingevuld
      const errorNotif = document.createElement("h2")
      errorNotif.innerHTML = ("vul alle velden in")
      registreerDiv.appendChild(errorNotif)
  }
})