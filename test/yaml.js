'use strict'

var test = require('tape')
var u = require('unist-builder')
var to = require('../build')

test('YAML', function(t) {
  t.equal(to(u('yaml', 'kilo: "lima"')), null, 'should ignore `yaml`')

  t.end()
})
