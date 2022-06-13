import { connection } from ".."

export default async function selectUserById(id: string) {
  const result = await connection('todo_list_users')
    .select('*')
    .where('id', id)
    .first()

  if (!result) {
    throw new Error('User not found')
  }

  return result[0]
}