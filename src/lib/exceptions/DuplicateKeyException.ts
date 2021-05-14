import { HttpException } from './HttpException'

class DuplicateKeyException extends HttpException {
  constructor(message?: string, payload?: any, callback: () => void = () => null) {
    super('E11000', message === undefined ? 'Duplicate Key Found' : message, payload, callback)
    this.reference =
      'https://docs.mongodb.com/manual/core/index-unique/#unique-index-and-missing-field'
  }
}

export default DuplicateKeyException
