/*
 * kindof - index.test.js
 * Copyright(c) 2015 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict'

const test = require('tape')
const _ = require('.')

let noop = () => {}

test('KindOf String', (t) => {
  t.plan(9)

  t.equal(_.isString('string'), true)
  t.equal(_.isString(1), false)
  t.equal(_.isString(null), false)
  t.equal(_.isString(undefined), false)
  t.equal(_.isString(noop), false)
  t.equal(_.isString({}), false)
  t.equal(_.isString([]), false)
  t.equal(_.isString(NaN), false)
  t.equal(_.isString(), false)

})

test('KindOf Array', (t) => {
  t.plan(9)

  t.equal(_.isArray([]), true)
  t.equal(_.isArray(1), false)
  t.equal(_.isArray(null), false)
  t.equal(_.isArray(undefined), false)
  t.equal(_.isArray(noop), false)
  t.equal(_.isArray({}), false)
  t.equal(_.isArray('string'), false)
  t.equal(_.isArray(NaN), false)
  t.equal(_.isArray(), false)

})

test('KindOf Null', (t) => {
  t.plan(9)

  t.equal(_.isNull(null), true)
  t.equal(_.isNull(1), false)
  t.equal(_.isNull([]), false)
  t.equal(_.isNull(undefined), false)
  t.equal(_.isNull(noop), false)
  t.equal(_.isNull({}), false)
  t.equal(_.isNull('string'), false)
  t.equal(_.isNull(NaN), false)
  t.equal(_.isNull(), false)

})

test('KindOf Number', (t) => {
  t.plan(9)

  t.equal(_.isNumber(1), true)
  t.equal(_.isNumber(null), false)
  t.equal(_.isNumber([]), false)
  t.equal(_.isNumber(undefined), false)
  t.equal(_.isNumber(noop), false)
  t.equal(_.isNumber({}), false)
  t.equal(_.isNumber('string'), false)
  t.equal(_.isNumber(NaN), false)
  t.equal(_.isNumber(), false)

})

test('KindOf Undefined', (t) => {
  t.plan(9)

  t.equal(_.isUndefined(undefined), true)
  t.equal(_.isUndefined(null), false)
  t.equal(_.isUndefined([]), false)
  t.equal(_.isUndefined(1), false)
  t.equal(_.isUndefined(noop), false)
  t.equal(_.isUndefined({}), false)
  t.equal(_.isUndefined('string'), false)
  t.equal(_.isUndefined(NaN), false)
  t.equal(_.isUndefined(), true)

})

test('KindOf Function', (t) => {
  t.plan(9)

  t.equal(_.isFunction(noop), true)
  t.equal(_.isFunction(null), false)
  t.equal(_.isFunction([]), false)
  t.equal(_.isFunction(1), false)
  t.equal(_.isFunction(undefined), false)
  t.equal(_.isFunction({}), false)
  t.equal(_.isFunction('string'), false)
  t.equal(_.isFunction(NaN), false)
  t.equal(_.isFunction(), false)

})

test('KindOf Object', (t) => {
  t.plan(9)

  t.equal(_.isObject({}), true)
  t.equal(_.isObject(null), false)
  t.equal(_.isObject([]), false)
  t.equal(_.isObject(1), false)
  t.equal(_.isObject(undefined), false)
  t.equal(_.isObject(noop), false)
  t.equal(_.isObject('string'), false)
  t.equal(_.isObject(NaN), false)
  t.equal(_.isObject(), false)

})

test('KindOf Boolean', (t) => {
  t.plan(10)

  t.equal(_.isBoolean(false), true)
  t.equal(_.isBoolean({}), false)
  t.equal(_.isBoolean(null), false)
  t.equal(_.isBoolean([]), false)
  t.equal(_.isBoolean(1), false)
  t.equal(_.isBoolean(undefined), false)
  t.equal(_.isBoolean(noop), false)
  t.equal(_.isBoolean('string'), false)
  t.equal(_.isBoolean(NaN), false)
  t.equal(_.isBoolean(), false)

})

test('KindOf Date', (t) => {
  t.plan(10)

  t.equal(_.isDate(new Date()), true)
  t.equal(_.isDate({}), false)
  t.equal(_.isDate(null), false)
  t.equal(_.isDate([]), false)
  t.equal(_.isDate(1), false)
  t.equal(_.isDate(undefined), false)
  t.equal(_.isDate(noop), false)
  t.equal(_.isDate('string'), false)
  t.equal(_.isDate(NaN), false)
  t.equal(_.isDate(), false)

})
