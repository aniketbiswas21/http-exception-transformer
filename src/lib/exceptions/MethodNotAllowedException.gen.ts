import { HttpException } from './HttpException'

class MethodNotAllowedException extends HttpException {
  constructor(message?: string, payload?: any, callback: () => void = () => null) {
    super(
      405,
      message === undefined
        ? 'The request method is known by the server but has been disabled and cannot be used'
        : message,
      payload,
      callback,
    )
    this.reference = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405'
  }
}

export default MethodNotAllowedException
