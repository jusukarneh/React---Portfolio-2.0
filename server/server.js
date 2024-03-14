const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
 
require("dotenv").config() 
app.use(express.urlencoded({extended:true})) 
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT_NUM,
  secureConnection: false,
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.USER_PW,
  },
  tls: {
    ciphers:'SSLv3'
}
});


const PORT = process.env.PORT || 5000

 

app.post('/api/send', async(req, res) => {
  console.log(req.body)
    const options = {
        from:  `${req.body.name} <${req.body.email}>`,
        to: process.env.EMAIL,
        subject: req.body.subject,
        html:  req.body.message,
      };
      console.log(options)
      await transporter.sendMail(options);

      res.status(200).json({message:"email sent successfully"})
})




app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})