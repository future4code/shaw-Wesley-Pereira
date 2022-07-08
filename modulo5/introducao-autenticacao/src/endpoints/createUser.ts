import { Request, Response } from "express";

import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { GenertateId } from "../services/GenerateId";
import { user } from "../types";




export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body
      const userDB = new UserDatabase()

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const user = await userDB.getByEmail(email)
      console.log(user)
      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }


      const generateId = new GenertateId()
      const id: string = generateId.generateId()

      const newUser: user = { id, name, nickname, email, password }

      await userDB.create(newUser)


      const authenticator = new Authenticator()
      const token = authenticator.generateToken({ id })
     
     

      res.status(201).send({ newUser, token })

   } catch (error: any) {
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}