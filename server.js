const express = require("express")
const cors = require("cors")
const path = require("path")
const bodyParser = require("body-parser")


if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))

app.use(cors())

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname , 'client/build')))

    app.get("*" , function(req , res) {
        res.sendFile(path.join(__dirname, 'client/build' , 'index.html'))
    })
}


app.listen(port, (error) => {
    if (error) throw error

    console.log("Server is running on port 5000")
})


app.post('/payment' , (req , res) => {
    const body = {
        source : req.body.token.id ,
        amount : req.body.amount,
        currency : 'inr'
    }

    stripe.charges.create(body , ( StripeErr , StripeRes ) => {
        if( StripeErr ) {
            console.log(StripeErr)
            res.status(500).send({ error : StripeErr})
        }
        else{
            res.status(200).send({ success : StripeRes})
        }
    })
})

