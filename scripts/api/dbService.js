function dbService () {
    var db = {};
    return {
        setUserData: setUserData,
        isUserExist: isUserExist
    }
    
    function setUserData(login, password) {
        db[login] = password;
    }
    
    function isUserExist(login, password) {
        if (db[login] === password) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = dbService;