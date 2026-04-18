const  UserModel = require('../model/user.model.js')

const singup = async(req, res)=>{

    try {
       await UserModel.create(req.body)
        res.send("success")
    }
    catch(err)
    {
        res.status(500).json({message:  err.message})
    }

}
module.exports = {
    singup
}