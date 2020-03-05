const AppConfig = {
  ENGINE_API_KEY: process.env.ENGINE_API_KEY,
  LEGACY_API_HOST: process.env.LEGACY_API_HOST || 'https://api.dev.pbxx.io',
  SERVICE_API_HOST:
    process.env.SERVICE_API_HOST || 'https://service.dev.pbxx.io',
  TRACING: process.env.TRACING === 'true',
  DEBUG: process.env.DEBUG === 'true',
}

export default AppConfig
