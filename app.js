const express = require ('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const app = express()
const port = 3000
const upload = multer ({dest: 'uploads/'})
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(__dirname + '/public'))
app.post('/upload', upload.single('file'), (req, res, next) => {
return res.json(req.file)
})
app.listen(port, () => {
  console.log('listening on port '+ port)
})
