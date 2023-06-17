import { Request, Response } from 'express'
import usersService from './users.service'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)

    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      content: result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to create user!',
    })
  }
}
