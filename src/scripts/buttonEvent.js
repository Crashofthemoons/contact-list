const addContact = require("./addContact")
const saveDatabase = require("./saveStorage")

const contactFormArticle = document.querySelector("#list")
const fragment2 = document.createDocumentFragment()
const name = document.querySelector("#name");
const phoneNumber = document.querySelector("#phoneNumber");
const address = document.querySelector("#address");
const button = document.querySelector("#submit");

button.addEventListener("click", function () {
    addContact(name.value, phoneNumber.value, address.value)
    console.log(name.value, phoneNumber.value, address.value)
    addToDom()
    saveDatabase(contactList, "All Contacts")
})

module.exports = {fragment2, contactFormArticle}