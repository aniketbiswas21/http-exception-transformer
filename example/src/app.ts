/* eslint-disable import/no-extraneous-dependencies */
import express from 'express'
import { HttpExceptionTransformer } from 'http-exception-transformer'
import { NotFoundException } from 'http-exception-transformer/exceptions'

const app = express()

app.get('/', (req, res) => {
  throw new NotFoundException('Page Not Found')
})

app.use(HttpExceptionTransformer)
app.listen(3000, () => console.log('http://localhost:3000'))
