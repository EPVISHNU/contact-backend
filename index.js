const express = require('express')

const cors = require('cors')

const logic = require('./Services/logics')

const conServer = express()

conServer.use(cors({
    origin:'http://localhost:3000'
}))

conServer.use(express.json())

conServer.listen(3003,()=>{
    console.log("conServer listening on port 3003");
})

conServer.get('/get-all-users',(req,res)=>{
    logic.getAllContacts().then
    ((response)=>{
        res.status(response.statusCode).json(response)
    })
})


//add

conServer.post('/add-contact',(req,res)=>{
    logic.addContacts(req.body.id,req.body.name,req.body.address,req.body.phone,req.body.email).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

conServer.delete('/delete-contact/:id',(req,res)=>{
    logic.deleteContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})


conServer.post('/update-a-contact/:id',(req,res)=>{
    logic.updateContact(req.params.id,req.body.name,req.body.address,req.body.phone,req.body.email).then((response)=>{
        res.status(response.statusCode).json(response)
    })
}
)

conServer.get('/get-a-contact/:id',(req,res)=>{

    logic.getAContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})