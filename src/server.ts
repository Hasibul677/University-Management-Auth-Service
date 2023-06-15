import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

const databaseConnect = async () => {
  try {
    await mongoose.connect(config.database_url as string)

    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Database connected failed !')
  }
}

databaseConnect()
