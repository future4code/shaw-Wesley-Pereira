import { Request, Response } from 'express'
import moment from 'moment'
import insertTask from '../data/insertTask'

export default async function createTask(req: Request, res: Response) {
  try {
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.deadline ||
      !req.body.authorId
    ) {
      res.status(400).send({ message: 'Missing parameters' })
    }

    const dateDiff: number =
      moment(req.body.deadline, 'DD/MM/YYYY').unix() - moment().unix()
    console.log(dateDiff)

    if (dateDiff <= 0) {
      res.status(400).send({ message: 'Deadline must be in the future!' })
    }

    const id: string = Date.now() + Math.random().toString()

    await insertTask(
      id,
      req.body.title,
      req.body.description,
      moment(req.body.deadline, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      req.body.authorId,
    )

    res.status(200).send({ message: 'Task created successfully', id })
  } catch (error: any) {
    res.status(400).send({ message: error.message || error.sqlMessage })
  }
}
