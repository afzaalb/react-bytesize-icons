'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreditCard = function CreditCard(_ref) {
  var className = _ref.className,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 32 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 32 : _ref$height,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? '6.25%' : _ref$strokeWidth,
      _ref$strokeLinejoin = _ref.strokeLinejoin,
      strokeLinejoin = _ref$strokeLinejoin === undefined ? 'round' : _ref$strokeLinejoin,
      _ref$strokeLinecap = _ref.strokeLinecap,
      strokeLinecap = _ref$strokeLinecap === undefined ? 'round' : _ref$strokeLinecap,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'currentcolor' : _ref$color;
  return _react2.default.createElement(
    'svg',
    { className: className, id: 'i-creditcard', viewBox: '0 0 32 32', width: width, height: height, fill: 'none', stroke: color, strokeLinecap: strokeLinecap, strokeLinejoin: strokeLinejoin, strokeWidth: strokeWidth },
    _react2.default.createElement('path', { d: 'M2 7 L2 25 30 25 30 7 Z M5 18 L9 18 M5 21 L11 21' }),
    _react2.default.createElement('path', { d: 'M2 11 L2 13 30 13 30 11 Z', fill: 'currentColor' })
  );
};

exports.default = CreditCard;