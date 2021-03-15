/* eslint-disable import/no-extraneous-dependencies */
import { Request, Response, NextFunction, Errback } from 'express'
import { HttpException } from './generators/HttpException'

const HttpExceptionTransformer = (err: Errback, req: Request, res: Response, nxt: NextFunction) => {
  if (err instanceof HttpException) {
    return res.json(err.transformResponse())
  }
  nxt(err)
}

export { HttpExceptionTransformer }
