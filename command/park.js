#!/usr/bin/env node
'use strict';
const program = require('commander');
const {park} = require('../action');
program
  .arguments('<car_name>')
  .action(park);

program.parse(process.argv);

if (program.args[0] === undefined) {
  console.error('Miss arguments.')
}
