const express = require('express')
const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

const app = express()

dotenv.config({path: './config/config.env'})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

//configure cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET
})



app.post("/upload", async (req, res)=>{
	const data = {
		image: req.body.image
	}

	try{

		cloudinary.uploader.upload(data.image, (err, result)=>{
			if(err){
				res.status(400).json({ 
					success: false,
					message: "You did something wrong I don't even want to know about it",
					data: {}
				})
			}
			res.status(200).json({ 
				success: true,
				message: 'Image uplaoded successfully',
				data: result
			})

		})
	}catch(err){
		res.status(500).json({ 
			success: false,
			message: 'Server error',
			data: {}
		})
	}
})


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
	console.log(`Server running on port: ${PORT}`)
})