import express from 'express'
import serveStatic from 'serve-static'

const app: express.Express = express()

// body-parserに基づいた着信リクエストの解析
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Vue.jsのビルド結果を参照する
app.use(serveStatic(`${__dirname}/dist`))

// CORSの許可
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

// GetとPostのルーティング
const router: express.Router = express.Router()
router.get('/api/getTest', (req: express.Request, res: express.Response) => {
  res.send(req.query)
})
router.post('/api/postTest', (req: express.Request, res: express.Response) => {
  res.send(req.body)
})
app.use(router)

// APIサーバ起動（環境変数から取得する）
const PORT: string = process.env.PORT ?? '3000'
const HOST: string = process.env.HOST ?? '0.0.0.0'

// 起動
app.listen(Number(PORT), HOST, () => {
  console.log(`Host ${HOST}. Listening on port ${PORT}.`)
})
