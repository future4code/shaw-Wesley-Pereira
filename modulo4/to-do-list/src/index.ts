import express from 'express'
import knex from 'knex'
import dotenv from 'dotenv'
import createUsers from './endpoints/createUsers'
import geteUsersById from './endpoints/getUserById'
import editUsers from './endpoints/editUsers'

dotenv.config()

export const connection = knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: 3306,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
  },
})

const app = express()

app.use(express.json())

app.put('/user', createUsers)
app.get('/user/:id', geteUsersById)
app.post('/user/edit/:id', editUsers)

app.listen(3003, () => {
  console.log('Server is running on port 3003')
})
