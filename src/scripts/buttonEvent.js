const addContact = require("./addContact")
const createDom = require("./createDom")

const nukeDOM = () => {
    const nuke = document.getElementById("list")
    while (nuke.firstChild) {
        nuke.removeChild(nuke.firstChild)
    }
 }

const name = document.querySelector("#name");
const phoneNumber = document.querySelector("#phoneNumber");
const address = document.querySelector("#address");
const button = document.querySelector("#submit");

button.addEventListener("click", function () {
    console.log(addContact)
    addContact(name.value, phoneNumber.value, address.value)
    console.log(name.value, phoneNumber.value, address.value)
    nukeDOM()
    createDom()
})

