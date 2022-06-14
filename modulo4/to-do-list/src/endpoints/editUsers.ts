import { Request, Response } from 'express'
import updateUser from '../data/updateUser'

export default async function createUsers(req: Request, res: Response) {
  try {
    if (
      req.body.name === '' ||
      req.body.nickname === '' ||
      req.body.email === ''
    ) {
      res.status(400).send({ message: 'Missing parameters' })
    }
    if (!req.body.name && !req.body.nickname && !req.body.email) {
      res.status(400).send({ message: 'Choose at least one parameter' })
    }
    await updateUser(req.params.id, req.body.name, req.body.nickname, req.body.email)

    res.status(200).send({ message: 'User updated successfully' })
  } catch (error: any) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    })
  }
}
