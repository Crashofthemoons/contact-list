//////// storage functions
const contactList = require("./contactList")

const saveDatabase = function (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}



module.exports = saveDatabase
