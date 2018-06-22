////////// form and save to local storage
let contactList = []

const loadDatabase = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)
    if(databaseString){
        return JSON.parse(databaseString)
    } else {
        return contactList
    }
}



module.exports = loadDatabase