const loadDatabase = require("./loadStorage")
const saveDatabase = require("./saveStorage")

let contactList = loadDatabase("All Contacts")
const randomNum = () => {
    let randNum = Math.floor(100000000 + Math.random() * 900000000);
    return randNum
}
///////// contact & add id
const addContact = (name, phoneNumber, address) => {

    console.log(contactList)
    contactList.push({
        "name": name,
        "phone": phoneNumber,
        "address": address,
        "id": randomNum()
    })
    saveDatabase(contactList, "All Contacts")
}

module.exports = addContact
