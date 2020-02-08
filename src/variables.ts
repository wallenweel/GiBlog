export const env = process.env.NODE_ENV

export const isProduction = env === 'production'
export const isDevelopment = env === 'development'
export const isDebug = isDevelopment

export const app = {
  name: 'GiBlog V1'
}

export const theme = {
  color: {
    primary: '#f8c424'
  }
}

export const canLogInProduction: logTag[] = ['test']
