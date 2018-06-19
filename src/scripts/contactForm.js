const contactList = require("./contactList")
const saveDatabase = require("./saveStorage")
const addToDom = require("./contact")
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

module.exports = addContact
