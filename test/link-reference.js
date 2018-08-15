'use strict'

var test = require('tape')
var u = require('unist-builder')
var to = require('../build')

test('LinkReference', function(t) {
  t.deepEqual(
    to(u('linkReference', {identifier: 'bravo'}, [u('text', 'bravo')])),
    [u('text', '[bravo]')],
    'should fall back on `linkReference`s without definition'
  )

  t.deepEqual(
    to(
      u('linkReference', {identifier: 'delta', referenceType: 'full'}, [
        u('text', 'echo')
      ])
    ),
    [u('text', '[echo][delta]')],
    'should fall back on full `linkReference`s'
  )

  t.deepEqual(
    to(
      u('linkReference', {identifier: 'hotel', referenceType: 'collapsed'}, [
        u('text', 'hotel')
      ])
    ),
    [u('text', '[hotel][]')],
    'should fall back on collapsed `linkReference`s'
  )

  t.deepEqual(
    to(
      u('linkReference', {identifier: 'bravo', referenceType: 'full'}, [
        u('inlineCode', 'alpha')
      ])
    ),
    [
      u('text', '['),
      u('element', {tagName: 'code', properties: {}}, [u('text', 'alpha')]),
      u('text', '][bravo]')
    ],
    'should support link references with non-text content'
  )

  t.deepEqual(
    to(
      u('paragraph', [
        u('linkReference', {identifier: 'juliett'}, [u('text', 'kilo')]),
        u('definition', {
          identifier: 'juliett',
          url: 'http://kilo.lima/mike',
          title: 'november'
        })
      ])
    ),
    u('element', {tagName: 'p', properties: {}}, [
      u(
        'element',
        {
          tagName: 'a',
          properties: {href: 'http://kilo.lima/mike', title: 'november'}
        },
        [u('text', 'kilo')]
      )
    ]),
    'should transform `linkReference`s to `a`s'
  )

  t.end()
})
