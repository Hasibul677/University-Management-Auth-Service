import { NextFunction, Request, Response } from 'express'
import { IGenericErrorMessage } from '../../interfaces/error'
import { handleValidationError } from '../../error/handleValidationError'
import config from '../../config'

const globalErrorHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).json({ error: err })

  let statusCode = 500
  let message = 'Internal server error !'
  let errorMessage: Array<IGenericErrorMessage> = []

  if (err?.name === 'ValidatorError') {
    const simplifyError = handleValidationError(err)
    statusCode = simplifyError?.statusCode
    message = simplifyError?.message
    errorMessage = simplifyError?.errorMessages
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? err.stack : undefined,
  })
  next()
}

export default globalErrorHandler
