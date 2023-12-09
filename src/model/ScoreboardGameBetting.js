/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.5.2
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.37
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.ScoreboardGameBetting = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ScoreboardGameBetting model module.
   * @module model/ScoreboardGameBetting
   * @version 4.5.2
   */

  /**
   * Constructs a new <code>ScoreboardGameBetting</code>.
   * @alias module:model/ScoreboardGameBetting
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScoreboardGameBetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScoreboardGameBetting} obj Optional instance to populate.
   * @return {module:model/ScoreboardGameBetting} The populated <code>ScoreboardGameBetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('spread'))
        obj.spread = ApiClient.convertToType(data['spread'], 'Number');
      if (data.hasOwnProperty('overUnder'))
        obj.overUnder = ApiClient.convertToType(data['overUnder'], 'Number');
      if (data.hasOwnProperty('homeMoneyline'))
        obj.homeMoneyline = ApiClient.convertToType(data['homeMoneyline'], 'Number');
      if (data.hasOwnProperty('awayMoneyline'))
        obj.awayMoneyline = ApiClient.convertToType(data['awayMoneyline'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} spread
   */
  exports.prototype.spread = undefined;

  /**
   * @member {Number} overUnder
   */
  exports.prototype.overUnder = undefined;

  /**
   * @member {Number} homeMoneyline
   */
  exports.prototype.homeMoneyline = undefined;

  /**
   * @member {Number} awayMoneyline
   */
  exports.prototype.awayMoneyline = undefined;


  return exports;

}));
