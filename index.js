'use strict';

const getarg = require('@ethiclab/getarg')
const express = require('express')
const process = require('process')
const opt = require(getarg(process.argv, '--options', './options'))
const reload = require('./reload')
express()
 .use(reload(express, opt.routeFile))
 .listen(opt.bind.port, opt.bind.address)
