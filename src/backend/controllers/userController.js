module.exports = {

    createUser(req, res){
        res.send('create new user')
    },
    getAUser(req, res){
        res.send('get a single user')
    },
    updateUser(req, res){
        res.send('update a user')
    },
    deleteUser(req, res){
        res.send('delete a user')
    }
}