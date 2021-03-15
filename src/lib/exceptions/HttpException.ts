import { ResponseFormat } from '../interfaces/response.interface'

class HttpException extends Error {
  message: string

  payload: any

  code: number

  constructor(code: number, message: string, payload?: any) {
    super(message)
    this.name = 'GenericHttpException'
    this.message = message
    this.code = code
    this.payload = payload

    Object.setPrototypeOf(this, HttpException.prototype)
  }

  transformResponse(): ResponseFormat {
    return {
      code: this.code,
      error: true,
      message: this.message,
      payload: this.payload,
    }
  }
}

export { HttpException }
