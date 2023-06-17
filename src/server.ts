import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorlogger } from './shared/logger'

const databaseConnect = async () => {
  try {
    await mongoose.connect(config.database_url as string)

    app.listen(config.port, () => {
      logger.info(`Server is listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('Database connected failed !')
  }
}

databaseConnect()
