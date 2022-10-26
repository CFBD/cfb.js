/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.11
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.28
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
    root.cfb.PlayerUsageUsage = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlayerUsageUsage model module.
   * @module model/PlayerUsageUsage
   * @version 4.4.11
   */

  /**
   * Constructs a new <code>PlayerUsageUsage</code>.
   * @alias module:model/PlayerUsageUsage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PlayerUsageUsage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerUsageUsage} obj Optional instance to populate.
   * @return {module:model/PlayerUsageUsage} The populated <code>PlayerUsageUsage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('overall'))
        obj.overall = ApiClient.convertToType(data['overall'], 'Number');
      if (data.hasOwnProperty('pass'))
        obj.pass = ApiClient.convertToType(data['pass'], 'Number');
      if (data.hasOwnProperty('rush'))
        obj.rush = ApiClient.convertToType(data['rush'], 'Number');
      if (data.hasOwnProperty('firstDown'))
        obj.firstDown = ApiClient.convertToType(data['firstDown'], 'Number');
      if (data.hasOwnProperty('secondDown'))
        obj.secondDown = ApiClient.convertToType(data['secondDown'], 'Number');
      if (data.hasOwnProperty('thirdDown'))
        obj.thirdDown = ApiClient.convertToType(data['thirdDown'], 'Number');
      if (data.hasOwnProperty('standardDowns'))
        obj.standardDowns = ApiClient.convertToType(data['standardDowns'], 'Number');
      if (data.hasOwnProperty('passingDowns'))
        obj.passingDowns = ApiClient.convertToType(data['passingDowns'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} overall
   */
  exports.prototype.overall = undefined;

  /**
   * @member {Number} pass
   */
  exports.prototype.pass = undefined;

  /**
   * @member {Number} rush
   */
  exports.prototype.rush = undefined;

  /**
   * @member {Number} firstDown
   */
  exports.prototype.firstDown = undefined;

  /**
   * @member {Number} secondDown
   */
  exports.prototype.secondDown = undefined;

  /**
   * @member {Number} thirdDown
   */
  exports.prototype.thirdDown = undefined;

  /**
   * @member {Number} standardDowns
   */
  exports.prototype.standardDowns = undefined;

  /**
   * @member {Number} passingDowns
   */
  exports.prototype.passingDowns = undefined;


  return exports;

}));
