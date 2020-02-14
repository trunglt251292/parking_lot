#!/usr/bin/env node
'use strict';
const program = require('commander');
const {leave} = require('../action');
program
  .arguments('<car_name> <hours>')
  .action(leave);

program.parse(process.argv);

if (!program.args[0] || !program.args[1]) {
  console.log('Error: Missing Params.')
}
if (!Number.isInteger(parseInt(program.args[1]))){
  console.log(`Error: Arguments must be integer. But receive ${typeof program.args[1]}`)
}
