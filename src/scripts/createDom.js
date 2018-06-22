
const loadDatabase = require("./loadStorage")
const dom = require("./buttonEvent")


const createDom = () => {
    if(localStorage.getItem("All Contacts") !== null){

        console.log("database loads")
        database = loadDatabase()

    }
    database.forEach(object =>{
        const listElement2 = document.createElement("p")
        listElement2.textContent =`${object.name} ${object.phone} ${object.address}`
        dom.fragment2.appendChild(listElement2)
        dom.contactFormArticle.appendChild(fragment2)
    })
}

module.exports = createDom