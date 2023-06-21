import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'

import userRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application route
app.use('/api/v1/users', userRouter)

// Testing route
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  next('Something went wrong !') // Error
})

// Global error handler
app.use(globalErrorHandler)
export default app
