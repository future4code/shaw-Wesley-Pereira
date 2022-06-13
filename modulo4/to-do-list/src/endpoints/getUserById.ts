import { Request, Response } from 'express'

import selectUserById from '../data/selectUserById'

export default async function geteUsersById(req: Request, res: Response) {
  try {
    if (!req.body.name || !req.body.email || !req.body.nickname) {
      res.send('Missing parameters')
    }

    const user = await selectUserById(req.params.id)

    if (!user) {
      res.status(404).send({
        message: 'User not found',
      })
    }

    res.status(200).send({
      id: user.id,
      nickname: user.nickname,
    })
  } catch (error: any) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    })
  }
}
