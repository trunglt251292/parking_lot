#!/usr/bin/env node
'use strict';
const program = require('commander');
const {clear_data} = require('../action');
program
  .action(clear_data);

program.parse(process.argv);
