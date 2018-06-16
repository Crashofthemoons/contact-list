// const contact = require("./contact")
// const addContact = require("./contactList")

///// contact list
let contactList = []

///////// contact & add id
const addContact = (name, phoneNumber, address) => {

    contactList.push({
        "name": name,
        "phone": phoneNumber,
        "address": address,
        "id": () => {
            let randNum = Math.floor(100000000 + Math.random() * 900000000);
            contact.id = randNum
        }
    })

    }
////////// form and save to local storage

const contactFormArticle = document.querySelector("#list")
const fragment2 = document.createDocumentFragment()

const name = document.querySelector("#name");

const phoneNumber = document.querySelector("#phoneNumber");

const address = document.querySelector("#address");

const button = document.querySelector("#submit");
button.addEventListener("click", function () {
    addContact(name.value, phoneNumber.value, address.value)
    console.log(name.value, phoneNumber.value, address.value)
    createDom()
    saveDatabase(contactList, "All Contacts")
})

////////////// clear dom

const nukeDOM = () => {
    const nuke = document.getElementById("list")
    while (nuke.firstChild) {
        nuke.removeChild(nuke.firstChild)
    }
 }
//////// load from local storage
const loadDatabase = JSON.parse(localStorage.getItem("All Contacts"))
console.log(loadDatabase)

const createDom = () => {
    nukeDOM()
    loadDatabase.concat(contactList)
    contactList.forEach(object =>{
        const listElement = document.createElement("p")
        listElement.textContent =`${object.name} ${object.phone} ${object.address}`
        fragment2.appendChild(listElement)
        contactFormArticle.appendChild(fragment2)
    })

}
loadDatabase.forEach(object =>{
    const listElement2 = document.createElement("p")
    listElement2.textContent =`${object.name} ${object.phone} ${object.address}`
    fragment2.appendChild(listElement2)
    contactFormArticle.appendChild(fragment2)
})



//////// storage functions

const saveDatabase = function (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}


console.log(loadDatabase)










// module.exports = contactForm
// export as an object with methods

