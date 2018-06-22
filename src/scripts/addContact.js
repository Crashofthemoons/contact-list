let contactList = require("./contactList")
const saveDatabase = require("./saveStorage")
const addToDom = require("./addToCom")
///////// contact & add id
const addContact = (name, phoneNumber, address) => {

    if(localStorage.getItem("All Contacts") !== null){

        console.log("database loads")
        database = loadDatabase()

    }

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

module.exports = addContact
