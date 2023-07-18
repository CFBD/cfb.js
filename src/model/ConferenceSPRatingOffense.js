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
    root.cfb.ConferenceSPRatingOffense = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConferenceSPRatingOffense model module.
   * @module model/ConferenceSPRatingOffense
   * @version 4.4.13
   */

  /**
   * Constructs a new <code>ConferenceSPRatingOffense</code>.
   * @alias module:model/ConferenceSPRatingOffense
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConferenceSPRatingOffense</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConferenceSPRatingOffense} obj Optional instance to populate.
   * @return {module:model/ConferenceSPRatingOffense} The populated <code>ConferenceSPRatingOffense</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Number');
      if (data.hasOwnProperty('explosiveness'))
        obj.explosiveness = ApiClient.convertToType(data['explosiveness'], 'Number');
      if (data.hasOwnProperty('rushing'))
        obj.rushing = ApiClient.convertToType(data['rushing'], 'Number');
      if (data.hasOwnProperty('passing'))
        obj.passing = ApiClient.convertToType(data['passing'], 'Number');
      if (data.hasOwnProperty('standardDowns'))
        obj.standardDowns = ApiClient.convertToType(data['standardDowns'], 'Number');
      if (data.hasOwnProperty('passingDowns'))
        obj.passingDowns = ApiClient.convertToType(data['passingDowns'], 'Number');
      if (data.hasOwnProperty('runRate'))
        obj.runRate = ApiClient.convertToType(data['runRate'], 'Number');
      if (data.hasOwnProperty('pace'))
        obj.pace = ApiClient.convertToType(data['pace'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} rating
   */
  exports.prototype.rating = undefined;

  /**
   * @member {Number} success
   */
  exports.prototype.success = undefined;

  /**
   * @member {Number} explosiveness
   */
  exports.prototype.explosiveness = undefined;

  /**
   * @member {Number} rushing
   */
  exports.prototype.rushing = undefined;

  /**
   * @member {Number} passing
   */
  exports.prototype.passing = undefined;

  /**
   * @member {Number} standardDowns
   */
  exports.prototype.standardDowns = undefined;

  /**
   * @member {Number} passingDowns
   */
  exports.prototype.passingDowns = undefined;

  /**
   * @member {Number} runRate
   */
  exports.prototype.runRate = undefined;

  /**
   * @member {Number} pace
   */
  exports.prototype.pace = undefined;


  return exports;

}));
