const FileModel = require("../model/file.model.js")
const { castObject } = require("../model/user.model.js")

const createFile = async(req, res)=>{
	try{
		const file = req.file
		const payload = {
			filename: file.filename,
			path: `${file.destination}${file.filename}`,
			type: file.mimetype.split('/')[0],
			size: file.size
		}
		
		const newfile = await FileModel.create(payload)
		res.json(newfile)
	} catch(err) {
		res.status(500).json({message: err.message});
	}
}
const fetchFile = async (req, res)=>{
	try{
		const files = await FileModel.find()
		res.json(files)
	} catch(err) {
		res.status(500).json({message: err.message})
	}

}
const deleteFile = (req, res)=>{
	try{

	} catch(err) {
		res.status(500).json({massage: err.message})
	}
}  

module.exports = {
	createFile,
	fetchFile,
	deleteFile
}