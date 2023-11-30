const profileImage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const btnUpdateProfile = document.querySelector("#updateBtn");

const isTank = confirm("Are you a tank?");

if(isTank === true){
    console.log("Welcome to Germany!");
}
else {
    profileImage.src = "images/F16.jpg";
    firstNameSpan.innerHTML = "F16";
    ageSpan.innerHTML = 49;
    statusSpan.innerHTML = "Fighter Jet";
}

btnUpdateProfile.addEventListener("click", () => {
    profileImage.src = "images/laev.webp";
    firstNameSpan.innerHTML = "USS NIMITZ";
    ageSpan.innerHTML = 48;
    statusSpan.innerHTML = "Aircraft Carrier";
});