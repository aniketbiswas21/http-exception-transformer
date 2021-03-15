/**
 * This function returns the body of derived HttpException to be written to disk
 */

import { SourceRow } from '../../interfaces/source.interface'

export const derivedExceptionContent = (exception: SourceRow): string => `
import { HttpException } from './HttpException'

class ${exception.name} extends HttpException {
  constructor(message?: string, payload?: any) {
    super(${exception.code}, message === undefined ? '${exception.message}' : message, payload)
  }
}

export default ${exception.name}

`
