
function handleActiveClass() {

    const linkContainer = document.getElementById("link-container");
    const linkElements = linkContainer.querySelectorAll(".nav-links ");

    linkElements.forEach(link => {

        link.addEventListener("click", function () {
            let currentLink = document.querySelector(".nav-links.active");
            currentLink.className = currentLink.className.replace(" active", "");
            this.classList.add("active");
        });
    });

}


handleActiveClass()

function displayElement(element, template, type = "single") {

    if (type === "multiple") {
        element.innerHTML += template
    } else {

        element.innerHTML = template;
    }
}

const footerElement = document.getElementById("footer");
const aboutElement = document.getElementById("about");
const contactElement = document.getElementById("contact");

//displaying about, footer and contact section
displayElement(aboutElement, aboutTemplate)
displayElement(footerElement, footerTemplate)
displayElement(contactElement, contactTemplate)


//handling the nav bar responsive
const sideNave = document.getElementById("side-nav");

const btn_hamburger = document.getElementById("hamburger");
const btn_close = document.querySelector("span.close")

function toggleclassName(element, className) {
    element.classList.toggle(className)
}

btn_close.addEventListener("click", () => {
    toggleclassName(sideNave, "show")
})

btn_hamburger.addEventListener("click", () => {
    toggleclassName(sideNave, "show")
})


function setBackground(id, color) {
    document.getElementById(id).style.backgroundColor = color
}

//displaying all the skill datas
function displaySkillCards() {

    const skillElement = document.getElementById("skill-container");

    Skill_data.forEach(function (data) {
        const template = `
        <div  class="card animate__animated animate__slow animated__bounceIn"
        desc="${data.description}" descShort="${data.description.substring(0, 14) + " .."}"
        id="${data.bgColor}"
        >
            <p>${data.name}</p>

        </div>
        `
        displayElement(skillElement, template, "multiple")
        setBackground(data.bgColor, data.bgColor)
    })
}


//displaying all the project datas
function displayProjectCards() {
    const projectElement = document.getElementById("containerProject")

    project_data.forEach(function (data) {

        displayElement(projectElement, getTemplateProject(data), "multiple")
    })
}


//simple validation of the contact form
function validateContactForm(name, email, message) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const error = { isError: false, errorMessage: "" };

    if (!name.trim() || !email.trim() || !message.trim()) {
        error.isError = true;
        error.errorMessage = "Fill out all the fields!";
    } else if (!isNaN(name.trim())) {
        error.isError = true;
        error.errorMessage = "Invalid name!";
    } else if (!emailRegex.test(email)) {
        error.isError = true;
        error.errorMessage = "Invalid email!";
    }

    return error;
}


//handle the toast box message
function handleSubmitFormContact(e) {

    e.preventDefault()

    const toastModal = document.getElementById("toast-modal");
    const toastIconError = document.querySelector(".me-auto.error");
    const toastIconSuccess = document.querySelector(".me-auto.success");
    const toastBody = document.querySelector(".toast-body")
    const toastBodyP_tag = document.querySelector(".toast-body p")

    const error = validateContactForm(e.target.name.value, e.target.email.value, e.target.message.value)

    if (error.isError && error.errorMessage) {
        toastModal.classList.add("show")
        toastIconError.classList.add("show")
        toastIconSuccess.classList.remove("show")
        toastBody.classList.add("error")
        toastBody.classList.remove("success")
        toastBodyP_tag.textContent = error.errorMessage;

        return false;
    } else {
        toastModal.classList.add("show")
        toastIconError.classList.remove("show")
        toastIconSuccess.classList.add("show")
        toastBody.classList.remove("error")
        toastBody.classList.add("success")

        toastBodyP_tag.textContent = "Message sent successfuly!";

        e.target.reset()
    }

}

//handling the form submition!
const formMessage = document.getElementById("send-message");

formMessage.addEventListener("submit", handleSubmitFormContact)

displaySkillCards()
displayProjectCards()
