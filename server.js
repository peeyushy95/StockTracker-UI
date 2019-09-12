var express =  require('express');
var path =  require('path');

const app = express();

app.use('/static', express.static('static'));
app.use('/Build', express.static('Build'));
app.use('/TemplateData', express.static('TemplateData'));

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'service-worker.js'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(3000, function() {
  console.log('API Server listening on port 3000!');
});
