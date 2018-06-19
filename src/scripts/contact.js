////////////// clear dom
const contactList = require("./contactList")

const nukeDOM = () => {
    const nuke = document.getElementById("list")
    while (nuke.firstChild) {
        nuke.removeChild(nuke.firstChild)
    }
 }
//////// load from local storage

const addToDom = () => {
    nukeDOM()
    contactList.forEach(object =>{
        const listElement = document.createElement("p")
        listElement.textContent =`${object.name} ${object.phone} ${object.address}`
        fragment2.appendChild(listElement)
        contactFormArticle.appendChild(fragment2)
    })

}

module.exports = addToDom

