import { HttpException } from './HttpException'

class InternalServerException extends HttpException {
  constructor(message: string, payload?: any) {
    super(500, message, payload)
  }
}

export default InternalServerException
