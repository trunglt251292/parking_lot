#!/usr/bin/env node
'use strict';

const program = require('commander');
const {create_parking_lot} = require('../action');
program
  .arguments('<number>')
  .action(create_parking_lot);

program.parse(process.argv);

if (program.args[0] === undefined) {
  console.error('Error: Miss arguments.')
}
if (!Number.isInteger(parseInt(program.args[0]))) {
  console.error(`Error: Arguments must be integer. But receive ${typeof program.args[0]}`)
}
