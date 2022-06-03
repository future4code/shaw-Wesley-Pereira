import express from 'express'
import cors from 'cors'
import { type } from 'os'

const app = express()

app.use(express.json())
app.use(cors())

const users = ['Diego', 'Cleiton', 'Robson', 'Daniel', 'Rafael', 'Victor']

type User = {
  name: string
  cpf: number
  age: number
  birthDate: Date
  balance: number
}

const acconts: User[] = [
  {
    name: 'Diego',
    cpf: 123456789,
    age: 23,
    birthDate: new Date(),
    balance: 100,
  },
  {
    name: 'Cleiton',
    cpf: 123456789,
    age: 23,
    birthDate: new Date(),
    balance: 200,
  },
  {
    name: 'Robson',
    cpf: 123456789,
    age: 23,
    birthDate: new Date(),
    balance: 300,
  },
  {
    name: 'Daniel',
    cpf: 123456789,
    age: 23,
    birthDate: new Date(),
    balance: 400,
  },
  {
    name: 'Rafael',
    cpf: 123456789,
    age: 23,
    birthDate: new Date(),
    balance: 500,
  },
  {
    name: 'Victor',
    cpf: 123456789,
    age: 23,
    birthDate: new Date(),
    balance: 600,
  },
]

function checkAge(request: any, response: any, next: any) {
  const { age } = request.body
  if (age < 18) {
    return response
      .status(400)
      .json({ error: 'Usuario deve ser maior de 18 anos' })
  }
  return next()
}

app.get('/users', (request, response) => {
  return response.json(users)
})

app.get('/users/:id', (request: any, response) => {
  const { id } = request.params

  return response.json(acconts[id])
})

app.post('/users', checkAge, (request, response) => {
  const { name, cpf, age, birthDate, balance } = request.body
  const user = {
    name,
    cpf,
    age,
    birthDate,
    balance,
  }
  acconts.push(user)
  return response.json(user)
})

app.put('/users/:id/deposit', (request: any, response) => {
  const { id } = request.params
  const { balance } = request.body
  acconts[id].balance = balance + acconts[id].balance
  return response.json(acconts[id])
})

app.put('/users/:id/withdraw', (request: any, response) => {
  const { id } = request.params
  const { balance } = request.body
  acconts[id].balance = acconts[id].balance - balance
  return response.json(acconts[id])
})

app.put('/users/:id/paybill', (request: any, response) => {
  const { id } = request.params
  const { balance } = request.body
  acconts[id].balance = acconts[id].balance - balance
  return response.json(acconts[id])
})

app.put('/users/transfer', (request: any, response) => {
  const { name, cpf, balance } = request.body
  const user = acconts.find((user) => user.name === name && user.cpf === cpf)
  if (user) {
    user.balance = user.balance + balance
  }
  return response.json(user)
})

app.listen(3003, () => {
  console.log('Server is running in http://localhost:3003')
})
