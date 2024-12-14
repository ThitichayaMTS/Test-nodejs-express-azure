var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// กำหนดให้ Express ใช้ EJS เป็น Template Engine
app.set('view engine', 'ejs');  // เพิ่มบรรทัดนี้

// กำหนดที่ตั้งของไฟล์ view (ถ้าไม่ได้ตั้งจะใช้ค่า default ที่ views/)
app.set('views', path.join(__dirname, 'views'));  // เพิ่มบรรทัดนี้

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
