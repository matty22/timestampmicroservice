var express = require('express');
var path = require('path');
var moment = require('moment');

var index = require('./routes/index');
var app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

app.get('/:date', function(request, response) {
  var dateString = request.param('date');
  var timeObj = {
    readable: "",
    unixtime: ""
  }

  if (moment(dateString).isValid() || moment.unix(dateString).isValid()) {
    if (Number(dateString)) {
      timeObj.unixtime = dateString;
      timeObj.readable = moment.unix(dateString).format("MMMM DD, YYYY");
      response.send(timeObj);
    } else if (!Number(dateString)) {
      timeObj.readable = dateString;
      timeObj.unixtime = moment(dateString).format("x") / 1000;
      response.send(timeObj);
   } 
  } else {
    timeObj.readable = null;
    timeObj.unixtime = null;
    response.send(timeObj);
  }
  
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
