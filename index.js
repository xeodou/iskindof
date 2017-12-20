/*
 * kindof - index.js
 * Copyright(c) 2015 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict'

var toString = Object.prototype.toString
var kinds = [
  'String',
  'Boolean',
  'Array',
  'Function',
  'Object',
  'Date',
  'Null',
  'Undefined',
  'Arguments',
  'AsyncFunction',
  'Promise'
]

var kindof = module.exports = {}

kinds.forEach(function (k) {
  kindof['is' + k] = function (i) {
    return toString.call(i) === '[object ' + k + ']'
  }
})

kindof.isNumber = function (i) {
  return isNaN(i) ? false : toString.call(i) === '[object Number]'
}
