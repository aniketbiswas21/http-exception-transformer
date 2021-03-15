
import { HttpException } from './HttpException'

class BadRequestException extends HttpException {
  constructor(message?: string, payload?: any) {
    super(400, message === undefined ? 'The server could not understand the request due to invalid syntax.' : message, payload)
  }
}

export default BadRequestException

