/*
 * kindof - index.js
 * Copyright(c) 2015 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict'

const toString = Object.prototype.toString
const kinds = [
  'String',
  'Boolean',
  'Array',
  'Function',
  'Object',
  'Date',
  'Null',
  'Undefined',
  'Arguments'
]

let kindof = module.exports = {}

let f = (t) => { }

kinds.forEach(k => {
  kindof[`is${k}`] = (i) => toString.call(i) === `[object ${k}]`
})

kindof.isNumber = (i) => {
  return isNaN(i) ? false : toString.call(i) === '[object Number]'
}
