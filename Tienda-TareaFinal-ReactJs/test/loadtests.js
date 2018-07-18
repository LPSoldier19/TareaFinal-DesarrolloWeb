// JavaScript Document
'use strict';

require('babel-polyfill');
require('core-js/fn/object/assign');


const testsContext = require.context('.', true, /(Test\.js$)|(Helper\.js$)/);
testsContext.keys().forEach(testsContext);
