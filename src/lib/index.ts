/* eslint-disable import/no-extraneous-dependencies */
import { Request, Response, NextFunction, Errback } from 'express'
import { HttpException } from './exceptions/HttpException'

const HttpExceptionTransformer = (err: Errback, req: Request, res: Response, nxt: NextFunction) => {
  if (err instanceof HttpException) {
    const transformedResponse = err.transformResponse()
    return res.status(transformedResponse.code).json(transformedResponse)
  }

  return nxt(err)
}

export { HttpExceptionTransformer }
