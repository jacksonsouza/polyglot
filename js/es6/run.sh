#!/bin/bash

mocha --compilers js:babel-register tests/$1_tests.js
