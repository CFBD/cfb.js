/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.13
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
    root.cfb.DriveStartTime = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DriveStartTime model module.
   * @module model/DriveStartTime
   * @version 4.4.13
   */

  /**
   * Constructs a new <code>DriveStartTime</code>.
   * @alias module:model/DriveStartTime
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DriveStartTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DriveStartTime} obj Optional instance to populate.
   * @return {module:model/DriveStartTime} The populated <code>DriveStartTime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('minutes'))
        obj.minutes = ApiClient.convertToType(data['minutes'], 'Number');
      if (data.hasOwnProperty('seconds'))
        obj.seconds = ApiClient.convertToType(data['seconds'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} minutes
   */
  exports.prototype.minutes = undefined;

  /**
   * @member {Number} seconds
   */
  exports.prototype.seconds = undefined;


  return exports;

}));
