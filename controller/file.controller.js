const FileModel = require("../model/file.model.js")

const createFile = (req, res)=>{
	try{
		res.send("sucesss")
	} catch(err) {
		res.status(404).json({message: err.message});
	}
}

module.exports = {
	createFile
}