const express=require('express')

const app=express()

app.get('/',(request,response)=>
	{
		response.send("Welcome To Express Application")
	})


app.listen(4000,'0.0.0.0',()=>
	{
		console.log("Server Started on 4000")
	})
