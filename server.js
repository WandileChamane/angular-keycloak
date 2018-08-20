var app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url = require('url');
var request = require('request');
var path = require('path');
var cors = require('cors');


app.use(cors());
app.use(bodyParser.json());

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req,res) {   
 res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(process.env.PORT || 8080);
console.log("Server running on port 8080");