import express from 'express'
let route = express.Router()
import users from '../models/users.model.js'





route.post('/registrationapi', async function (req, res) {
    let data = req.body
    let userscreation = await users.create(data)
    return res.json({ success: true, msg: "hit me hard so your user can be created easily", userscreation })
})



route.post("/loginapi", async function (req, res) {
    let data = req.body

    let login = await users.findOne({
        succes: true,
        email: data.email,
        password: data.password
    })

    if (login) {
        return res.json({
            success: true, msg: "login successfull"
        })
    }
    else {
        return res.json({
            success: false, msg: "invalid eamil or password"
        })
    }

})









export default route