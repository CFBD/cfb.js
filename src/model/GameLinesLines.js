/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.15
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
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
    root.cfb.GameLinesLines = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GameLinesLines model module.
   * @module model/GameLinesLines
   * @version 4.4.15
   */

  /**
   * Constructs a new <code>GameLinesLines</code>.
   * @alias module:model/GameLinesLines
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GameLinesLines</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GameLinesLines} obj Optional instance to populate.
   * @return {module:model/GameLinesLines} The populated <code>GameLinesLines</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('provider'))
        obj.provider = ApiClient.convertToType(data['provider'], 'String');
      if (data.hasOwnProperty('spread'))
        obj.spread = ApiClient.convertToType(data['spread'], 'Number');
      if (data.hasOwnProperty('formattedSpread'))
        obj.formattedSpread = ApiClient.convertToType(data['formattedSpread'], 'String');
      if (data.hasOwnProperty('spreadOpen'))
        obj.spreadOpen = ApiClient.convertToType(data['spreadOpen'], 'Number');
      if (data.hasOwnProperty('overUnder'))
        obj.overUnder = ApiClient.convertToType(data['overUnder'], 'Number');
      if (data.hasOwnProperty('overUnderOpen'))
        obj.overUnderOpen = ApiClient.convertToType(data['overUnderOpen'], 'Number');
      if (data.hasOwnProperty('homeMoneyline'))
        obj.homeMoneyline = ApiClient.convertToType(data['homeMoneyline'], 'Number');
      if (data.hasOwnProperty('awayMoneyline'))
        obj.awayMoneyline = ApiClient.convertToType(data['awayMoneyline'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} provider
   */
  exports.prototype.provider = undefined;

  /**
   * @member {Number} spread
   */
  exports.prototype.spread = undefined;

  /**
   * @member {String} formattedSpread
   */
  exports.prototype.formattedSpread = undefined;

  /**
   * @member {Number} spreadOpen
   */
  exports.prototype.spreadOpen = undefined;

  /**
   * @member {Number} overUnder
   */
  exports.prototype.overUnder = undefined;

  /**
   * @member {Number} overUnderOpen
   */
  exports.prototype.overUnderOpen = undefined;

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
