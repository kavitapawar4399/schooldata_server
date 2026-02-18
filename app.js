const express = require('express');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const stdRouter= require('./controllers/student')

// local server start
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
}

// export for Vercel
module.exports = app;
