
export var getUsers = function(callback) {
    setTimeout(function() {
        callback(null, [
            {
                id:1,
                name:'Takuya Tejima'
            },
            {
                id:2,
                name:'Yohei Noda'
            }
        ])
    }, 1000)
}


export var getUser = function(userId, callback){
    setTimeout(function(){
        var filteredUsers = userData.filter(function(user){
            return user.id === parseInt(userId, 10)
        })
        callback(null, filteredUsers && filteredUsers[0])
    }, 1000)
}

export var postUser = function(params, callback) {
    setTimeout(function(){
        params.id = userData.length + 1
        userData.push(params)
        callback(null, params)
    }, 1000)
}

