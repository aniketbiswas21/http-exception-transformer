/* eslint-disable import/no-extraneous-dependencies */
import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.json({
    alive: true,
  })
})

export default app
