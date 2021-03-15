/* eslint-disable import/no-extraneous-dependencies */
import express, { Request, Response } from 'express'
import { HttpExceptionTransformer } from './lib'
import { NotFoundException } from './lib/exception'

const app = express()

app.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  if (id === 'throw') {
    throw new NotFoundException('ID Not Found')
  }
  res.json({
    alive: true,
  })
})

app.use(HttpExceptionTransformer)
export default app
