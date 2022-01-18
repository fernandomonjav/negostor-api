interface Config {
  port: number
  appUrl: string
}

if (!process.env.APP_URL) {
  throw new Error('APP_URL environment variable does not exist in .env')
}

const config: Config = {
  port: process.env.PORT ? Number(process.env.PORT) : 8080,
  appUrl: process.env.APP_URL,
}

export default config
