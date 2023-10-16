import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@/assets/css/main.css'
import express from "express"
import 'dotenv/config'
import user from "./routes/user.route.js"
import {errorHandler} from "./middlewares/error.middleware.js"

const app1 = express()
app1.use(express.json())
app1.use(express.urlencoded({extended: true}))

app1.get('/', (req, res) => {
    res.send('Hello World')
})

app1.use('/user',user)
app1.use('/user/find',user)
app1.use(errorHandler)


app1.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT)
})


const app = createApp(App)
app.use(router)  // Usa el enrutador con tu aplicación
app.mount('#app')
