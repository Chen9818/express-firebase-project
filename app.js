var express = require('express');
var app = express();
var engine = require('ejs-locals');
var bodyParser = require('body-parser');
var admin = require("firebase-admin");

var serviceAccount = require("./express-firebase-project-firebase-adminsdk-wbtmu-17c5411382.json");

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL: "https://express-firebase-project-default-rtdb.firebaseio.com"
});

let fireData = admin.database()
console.log(fireData);

app.engine('ejs', engine);
app.set('views', './views');
app.set('view engine', 'ejs');
//增加靜態檔案的路徑
app.use(express.static('public'))

// 增加 body 解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//路由
app.get('/', function (req, res) {
   res.render('index');

})

// 監聽 port
var port = process.env.PORT || 3000;
app.listen(port);