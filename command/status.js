#!/usr/bin/env node
'use strict';
const program = require('commander');
const {status} = require('../action');
program
  .action(status);

program.parse(process.argv);
