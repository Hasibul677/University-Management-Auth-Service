import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto incremental id and default password
  const id = await generateUserId()

  if (!user.password) {
    user.id = id
    user.password = config.default_user_password as string
  }
  const createUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to create user!')
  }

  return createUser
}

export default {
  createUser,
}
