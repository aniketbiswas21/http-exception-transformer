
import { HttpException } from './HttpException'

class InternalServerException extends HttpException {
  constructor(message?: string, payload?: any) {
    super(500, message === undefined ? 'The server has encountered a situation it doesn't know how to handle.' : message, payload)
  }
}

export default InternalServerException

