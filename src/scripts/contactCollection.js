
const loadDatabase = require("./loadStorage")

let database = loadDatabase("All Contacts")

const createDom = () => {
    database.forEach(object =>{
        const listElement2 = document.createElement("p")
        listElement2.textContent =`${object.name} ${object.phone} ${object.address}`
        fragment2.appendChild(listElement2)
        contactFormArticle.appendChild(fragment2)
    })
}

module.exports = createDom