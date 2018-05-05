'use strict';

const isType = (value, type) => {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
};

const isNumber = value => {
  return isType(value, 'Number');
};

const isString = value => {
  return isType(value, 'String');
};

const isBoolean = value => {
  return isType(value, 'Boolean');
};

const isObject = value => {
  return isType(value, 'Object');
};

const isArray = value => {
  return isType(value, 'Array');
};

const isDate = value => {
  return isType(value, 'Date');
};

const isNull = value => {
  return isType(value, 'Null');
};

const isUndefined = value => {
  return isType(value, 'Undefined');
};

const isRegExp = value => {
  return isType(value, 'RegExp');
};

const isError = value => {
  return isType(value, 'Error');
};

const isFunction = value => {
  return isType(value, 'Function');
};

module.exports = {
  isNumber,
  isString,
  isBoolean,
  isObject,
  isArray,
  isDate,
  isNull,
  isUndefined,
  isRegExp,
  isError,
  isFunction,
};
