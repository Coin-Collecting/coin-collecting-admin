let COINS = require('./mocks/coin').default;
let VARIETIES = require('./mocks/variety').default;
let DESIGNERS = require('./mocks/designer').default;
let ISSUES = require('./mocks/issue').default;
let IMAGES = require('./mocks/image').default;
let EDGES = require('./mocks/edge').default;
let COMPOSITIONS = require('./mocks/composition').default;

let getVarietyByID = function (id) {
  return VARIETIES[id];
}

let getCoinByID = function (id) {
  return COINS[id];
}

let getDesignerByID = function (id) {
  return DESIGNERS[id];
}

let getIssueByID = function (id) {
  return ISSUES[id];
}

let getImageByID = function (id) {
  return IMAGES[id];
}

let getEdgeByID = function (id) {
  return EDGES[id];
}

let getCompositionByID = function (id) {
  return COMPOSITIONS[id];
}

export {
  getVarietyByID,
  getCoinByID,
  getDesignerByID,
  getIssueByID,
  getImageByID,
  getEdgeByID,
  getCompositionByID,
}
