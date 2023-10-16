import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@/assets/css/main.css'
import express from "express"
import 'dotenv/config'
import user from "./routes/user.route.js"
import {errorHandler} from "./middlewares/error.middleware.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/user',user)
app.use('/user/find',user)
app.use(errorHandler)


app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT)
})


const app = createApp(App)
app.use(router)  // Usa el enrutador con tu aplicación
app.mount('#app')
