declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EVENTSTORE_STREAM: string
      EVENTSTORE_URI: string
      KEYSTORE_URI: string
      MONGODB_URI: string
      NODE_ENV: 'development' | 'production' | 'test'
    }
  }
}

export {}
