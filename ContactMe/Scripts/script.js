document.getElementById("contactForm").addEventListener("submit"), function(e) {
    e.preventDefault(); //Prevent the page from reloading when the user clicks "submit"
}

//collect all field values
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const passowrd = document.getElementById("password").value;
const phone = document.getElementById("phone").value;
const website = document.getElementById("website").value;
const age =document.getElementById("age").value;
const dob = document.getElementById("dob").value;
const time = document.getElementById("time").value;
const color = document.getElementById("color").value;
const range = document.getElementById("range").value;
const topic = document.getElementById("topic").value;
const message = document.getElementById("message").value;

//get selected radio
const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;

//get selected checkboxes
const services = Array.from(document.querySelectorAll('input[name="services"]:checked'))
.map (cb=> cb.value)
.join(",") || "None";

alert(
    '---Contact From Data--- \n\n'+
    `Name: ${name}\n
    Password: ${PAssword}\n 
    Phone: ${phone}\n
    Age: ${age}\n
    Date of Birth: ${dob}\n
    Preffered Time: ${time}\n
    Favorite Color: ${color}\n
    Interrest Level: ${range}\n
    Contact Method: ${contactMethod}\n
    Services Interested In: ${services}\n
    Topic: ${topic}\n
    Message: ${message}\n`
);













