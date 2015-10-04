const extract = require('png-chunks-extract')
const encode = require('./')
const test = require('tape')
const path = require('path')
const fs = require('fs')

test('png-chunks-encode', function (t) {
  const buffer = fs.readFileSync(
    path.join(__dirname, 'test.png')
  )

  t.deepEqual(
    buffer,
    new Buffer(encode(extract(buffer))),
    'input and output are exactly the same when not modified'
  )

  t.end()
})
