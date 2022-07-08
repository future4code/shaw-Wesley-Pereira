import { user } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public create = async (newUser: user) => {
        await this.getConnection()
            ('to_do_list_users2')
            .insert(newUser)

    }
    public edit = async (id: string, columnsUpdate: { name: string, nickname: string }) => {
      const affectRows =  await this.getConnection()('to_do_list_users2')
            .update(columnsUpdate)
            .where({ id })
            return Number(affectRows)
    }
    public getByEmail = async (email: string) => {
        const [result] = await this.getConnection()('to_do_list_users2')
            .where({ email })
        return result
    }
}