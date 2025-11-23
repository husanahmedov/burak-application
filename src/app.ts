import express from 'express';
import path from 'path';
import morgan from 'morgan';
import router from './router';
import cookieParser from 'cookie-parser';
import routerAdmin from './router-admin';
import { MORGAN_FORMAT } from './lib/config';
import { T } from './lib/types/common';

import session from 'express-session';
import ConnectMongoDB from 'connect-mongodb-session';

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: 'sessions',
});

/** 1.ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT));

/** 2.SESSIONS **/
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 60 * 60 * 3,
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(function (request, response, next) {
  const sessionInstance = request.session as T;
  response.locals.member = sessionInstance.member;
  next();
});

/** 3.VIEWS **/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/** 4.ROUTERS **/
app.use('/admin', routerAdmin); // BSSR -> Backend Server Side Rendering
app.use('/', router); // React SPA Rest API

export default app;
