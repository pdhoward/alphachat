'use strict';

/////////////////////////////////////////////////////////////////////////
////////////    configure memory db to track dialogue             //////
////////////  entails tracking a chain of messages with context  //////
//////////////////////////////////////////////////////////////////////

import redis         from 'redis';
import path          from 'path';

const root = process.cwd()
require('dotenv').config({path: path.join(root, './.env')});

const port = process.env.REDIS_PORT;
const host = process.env.REDIS_URI;
const pswd = process.env.REDIS_PSWD;

const db = redis.createClient(port, host, {no_ready_check: true});

db.auth(pswd, function (err) {
    if (err) throw err;
});

db.on('connect', function() {
    console.log('Connected to Redis');
});


const session = {
  put: function(key, data, cb) {
    let options = {
      sync: true
    }
    console.log('EXECUTING SET DB')
    db.set(key, data, function (err) {
        if (err) return cb(err)
        cb(null);
      })
  },
  get: function(key, data, cb) {
    console.log('EXECUTING GET DB')
    console.log(key)
    db.get(key, function (err, value) {
      if (err) return cb(err)
      cb(null, value);
      })
  },
  del: function(key, cb) {
    console.log('EXECUTING DEL DB')
    db.del(key, function (err) {
        if (err) return console.log('WATCH OUT DEL!', err)
        cb('true');
      })
  }
}

export const putSession = session.set.bind(session)
export const getSession = session.get.bind(session)
export const delSession = session.del.bind(session)
