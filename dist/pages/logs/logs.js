webpackJsonp([1],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//logs.js
const util = __webpack_require__(3);

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log));
      })
    });
  }
});

/***/ })

},[2]); function webpackJsonp() { require("./../../common.js"); wx.webpackJsonp.apply(null, arguments); };