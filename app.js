const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const stdRoutes = require('./controllers/student');
app.use('/std', stdRoutes);

module.exports = app;   // IMPORTANT
