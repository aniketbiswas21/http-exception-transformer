/* eslint-disable import/no-extraneous-dependencies */
import express, { Request, Response } from 'express'
import { HttpExceptionTransformer } from './lib'
import { BadRequestException } from './lib/exceptions'

const app = express()

app.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  if (id === 'throw-callback') {
    throw new BadRequestException('Only +ve ids accepted', {}, () => {
      // eslint-disable-next-line no-console
      console.log('this function runs after the error is thrown')
    })
  } else if (id === 'throw') {
    throw new BadRequestException('Only +ve ids accepted')
  }
  res.json({
    alive: true,
  })
})

app.use(HttpExceptionTransformer)
export default app
