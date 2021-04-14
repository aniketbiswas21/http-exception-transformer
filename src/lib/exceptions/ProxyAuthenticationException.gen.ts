import { HttpException } from './HttpException'

class ProxyAuthenticationException extends HttpException {
  constructor(message?: string, payload?: any, callback: () => void = () => null) {
    super(
      407,
      message === undefined
        ? 'This is similar to 401 but authentication is needed to be done by a proxy.'
        : message,
      payload,
      callback,
    )
    this.reference = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401'
  }
}

export default ProxyAuthenticationException
