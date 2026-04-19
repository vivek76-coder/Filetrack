const FileModel = require("../model/file.model")

const createfile = (req, res)=>{
	try{
		res.send("sucesss")
	} catch(err) {
		res.status(404).json({message: err.message});
	}
}

module.exports = {
	createfile
}