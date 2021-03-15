import { HttpException } from './HttpException'

class NotFoundException extends HttpException {
  constructor(message: string, payload?: any) {
    super(404, message, payload)
  }
}

export default NotFoundException
