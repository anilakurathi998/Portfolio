new Typed("#typing",{

strings:[

"Senior Data Analyst",

"Power BI Developer",

"Microsoft Fabric Engineer",

"Azure Data Factory Developer",

"SQL Developer",

"Python Developer"

],

typeSpeed:70,

backSpeed:40,

loop:true

});
particlesJS("particles-js",{

particles:{

number:{
value:80
},

color:{
value:"#38bdf8"
},

shape:{
type:"circle"
},

opacity:{
value:.4
},

size:{
value:3
},

move:{
enable:true,
speed:2
}

}

});
const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const current=+counter.innerText;

const increment=target/80;

if(current<target){

counter.innerText=(current+increment).toFixed(1);

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

}

update();

});
const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=function(){

document.body.classList.toggle("light");

}
// -----------------------------
// EmailJS Configuration
// -----------------------------

emailjs.init({
    publicKey: "EG2MIdMx9sdoeUH71",
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();
		console.log("Form submitted");

        emailjs.sendForm(
            "service_mqgx8ta",
            "template_5unvovb",
            this
        )
        .then(() => {

            alert("✅ Message sent successfully!");

            contactForm.reset();

        })
        .catch((error) => {

            console.error(error);

            alert("❌ Failed to send message.");

        });

    });

}
