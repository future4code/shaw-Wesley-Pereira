import { Request, Response } from 'express'
import insertUser from '../data/insertUser'

export default async function createUsers(req: Request, res: Response) {
  try {
    if (!req.body.name || !req.body.email || !req.body.nickname) 
    {
      res.send('Missing parameters')
    }
    
    const id: string = Date.now() + Math.random().toString()

    await insertUser(id, req.body.name, req.body.email, req.body.nickname)
   
    res.status(200).send({ message: 'User created successfully' })

    
  } catch (error: any) {
     res.status(400).send({
      message: error.message || error.sqlMessage,
    })
  }
}
