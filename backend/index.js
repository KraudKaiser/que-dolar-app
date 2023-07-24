//Dependencies
const express = require("express")
const searchDolarValues = require("./scrapData")

//middlewares
const app = express()

app.get("/api/dolars", async(req, res) =>{
	try{
		const values = await searchDolarValues()

		console.log(values)
		res.status(200).json(values)
	}catch(e){
		res.status(500).json("Ha ocurrido un error: " + e.message)
	}
})

//endpoints

app.listen(3002, () =>{
	console.log("app is listening")
})
