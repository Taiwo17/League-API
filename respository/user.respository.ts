import User from '../models/user.model'

const UserRespository = {
  createUser: async (
    name: string,
    email: string,
    password: string,
    roles: any
  ) => {
    try {
      const createUser = await User.create({ name, email, password, roles })
      return createUser
    } catch (error: any) {
      console.log(error.message)
    }
  },
  loginUser: async (email: string) => {
    try {
      const findOne = await User.findOne({
        where: {
          email,
        },
      })
      return findOne
    } catch (error: any) {
      console.log(error.stack)
    }
  },
  findUserById: async (id: number) => {
    try {
      const findOneUser = await User.findByPk(id)
      return findOneUser
    } catch (error: any) {
      console.log(error.message)
    }
  },
}

export default UserRespository
