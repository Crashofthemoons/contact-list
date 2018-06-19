////////// form and save to local storage


const loadDatabase = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)
    return JSON.parse(databaseString)
}



module.exports = loadDatabase