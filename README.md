# skipped-periodic-values.js
[![Travis build status](http://img.shields.io/travis/jmeas/skipped-periodic-values.js.svg?style=flat)](https://travis-ci.org/jmeas/skipped-periodic-values.js)
[![Code Climate](https://codeclimate.com/github/jmeas/skipped-periodic-values.js/badges/gpa.svg)](https://codeclimate.com/github/jmeas/skipped-periodic-values.js)
[![Test Coverage](https://codeclimate.com/github/jmeas/skipped-periodic-values.js/badges/coverage.svg)](https://codeclimate.com/github/jmeas/skipped-periodic-values.js)
[![Dependency Status](https://david-dm.org/jmeas/skipped-periodic-values.js.svg)](https://david-dm.org/jmeas/skipped-periodic-values.js) 
[![devDependency Status](https://david-dm.org/jmeas/skipped-periodic-values.js/dev-status.svg)](https://david-dm.org/jmeas/skipped-periodic-values.js#info=devDependencies)

Given a distance, determine how many periodic values were skipped.

### What might I use this library for?

Calculating work days 

### Terminology

The members of a periodic function's output are the "values." A single member is a "value."

The distance that the function repeats itself along is the "period."

An interval is defined by a "start" and "end".

### API

##### `skippedPeriodicValues(start, distance, value, period)`

Find the number of values contained with the "start" and "end." This method works with
intervals with inclusive starts and exclusive ends. In math syntax, this would be written
as `[start, end)`.

The order that you specify the start and end does not matter.
