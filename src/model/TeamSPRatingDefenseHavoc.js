/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.5.0
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
    root.cfb.TeamSPRatingDefenseHavoc = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TeamSPRatingDefenseHavoc model module.
   * @module model/TeamSPRatingDefenseHavoc
   * @version 4.5.0
   */

  /**
   * Constructs a new <code>TeamSPRatingDefenseHavoc</code>.
   * @alias module:model/TeamSPRatingDefenseHavoc
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TeamSPRatingDefenseHavoc</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamSPRatingDefenseHavoc} obj Optional instance to populate.
   * @return {module:model/TeamSPRatingDefenseHavoc} The populated <code>TeamSPRatingDefenseHavoc</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('frontSeven'))
        obj.frontSeven = ApiClient.convertToType(data['frontSeven'], 'Number');
      if (data.hasOwnProperty('db'))
        obj.db = ApiClient.convertToType(data['db'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} total
   */
  exports.prototype.total = undefined;

  /**
   * @member {Number} frontSeven
   */
  exports.prototype.frontSeven = undefined;

  /**
   * @member {Number} db
   */
  exports.prototype.db = undefined;


  return exports;

}));
