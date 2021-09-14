const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.json({name:"rojit"})
})

app.listen(PORT, ()=>{
    console.log(`Server is running in port ${PORT}`)
}) 