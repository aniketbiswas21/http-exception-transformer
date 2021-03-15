
import { HttpException } from './HttpException'

class UnAuthorizedException extends HttpException {
  constructor(message?: string, payload?: any) {
    super(401, message === undefined ? 'The client must authenticate itself to get the requested response.' : message, payload)
  }
}

export default UnAuthorizedException

