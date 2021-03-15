
import { HttpException } from './HttpException'

class NotFoundException extends HttpException {
  constructor(message?: string, payload?: any) {
    super(404, message === undefined ? 'The server can not find the requested resource' : message, payload)
  }
}

export default NotFoundException

