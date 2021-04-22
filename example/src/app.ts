/* eslint-disable import/no-extraneous-dependencies */
import express, { Request, Response } from 'express'
import { HttpExceptionTransformer } from 'http-exception-transformer'
import { NotFoundException } from 'http-exception-transformer/exceptions'

const app = express()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/', (req: Request, res: Response) => {
  throw new NotFoundException('Page Not Found')
})

app.use(HttpExceptionTransformer)
app.listen(3000, () => console.log('http://localhost:3000'))
