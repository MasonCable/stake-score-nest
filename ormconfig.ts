import { DataSource } from 'typeorm'
import * as dotenv from 'dotenv'

dotenv.config() // Load environment variables

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT ?? '3306', 10),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'stake_test',
  entities: ['dist/**/*.entity.js'], // Load compiled entity files
  migrations: ['dist/src/migrations/*.js'], // Load compiled migration files
  synchronize: false, // Ensure migrations are used instead of auto-sync
  logging: true,
})

export default AppDataSource
