
const loadDatabase = require("./loadStorage")

const createDom = () => {
    const contactFormArticle = document.querySelector("#list")
    const fragment2 = document.createDocumentFragment()

    let contactList = loadDatabase("All Contacts")

    contactList.forEach(object =>{
        const listElement2 = document.createElement("p")
        listElement2.textContent =`${object.name} ${object.phone} ${object.address}`
        fragment2.appendChild(listElement2)
        contactFormArticle.appendChild(fragment2)
    })
}

module.exports = createDom