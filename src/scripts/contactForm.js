// const contact = require("./contact")
// const addContact = require("./contactList")
contactList = []

/////////
const addContact = (name, phoneNumber, address) => {

    contactList.push({
        "name": name,
        "phone": phoneNumber,
        "address": address
        })

    }
//////////
const contactForm = document.querySelector("#form")
const fragment = document.createDocumentFragment()
const form = document.createElement("form");
const contactFormArticle = document.querySelector("#list")
const fragment2 = document.createDocumentFragment()
const name = document.createElement("input");
name.setAttribute("type", "text")
name.setAttribute("value", "Name")
form.appendChild(name)

const phoneNumber = document.createElement("input");
phoneNumber.setAttribute("type", "text")
phoneNumber.setAttribute("value", "PhoneNumber")
form.appendChild(phoneNumber)

const address = document.createElement("input");
address.setAttribute("type", "text")
address.setAttribute("value", "Address")
form.appendChild(address)

const button = document.createElement("input");
button.setAttribute("type", "button")
button.setAttribute("value", "Submit")
button.addEventListener("click", function () {
    addContact(name.value, phoneNumber.value, address.value)
    console.log(name.value, phoneNumber.value, address.value)
    saveDatabase(contactList, "All Contacts")
    createDom()
})
form.appendChild(button)
fragment.appendChild(form)
contactForm.appendChild(fragment)
//////////////

const createDom = () => {
    contactList.forEach(object =>{

        const listElement = document.createElement("p")
        listElement.textContent =`${object.name} ${object.phone} ${object.address}`
        fragment2.appendChild(listElement)
        contactFormArticle.appendChild(fragment2)
    })

}



////////

const saveDatabase = function (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)
    return JSON.parse(databaseString)
}





loadDatabase(contactList, "All Contacts")


// module.exports = contactForm

