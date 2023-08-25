/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.14
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
    root.cfb.AdvancedSeasonStatOffenseFieldPosition = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AdvancedSeasonStatOffenseFieldPosition model module.
   * @module model/AdvancedSeasonStatOffenseFieldPosition
   * @version 4.4.14
   */

  /**
   * Constructs a new <code>AdvancedSeasonStatOffenseFieldPosition</code>.
   * @alias module:model/AdvancedSeasonStatOffenseFieldPosition
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AdvancedSeasonStatOffenseFieldPosition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvancedSeasonStatOffenseFieldPosition} obj Optional instance to populate.
   * @return {module:model/AdvancedSeasonStatOffenseFieldPosition} The populated <code>AdvancedSeasonStatOffenseFieldPosition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('averageStart'))
        obj.averageStart = ApiClient.convertToType(data['averageStart'], 'Number');
      if (data.hasOwnProperty('averagePredictedPoints'))
        obj.averagePredictedPoints = ApiClient.convertToType(data['averagePredictedPoints'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} averageStart
   */
  exports.prototype.averageStart = undefined;

  /**
   * @member {Number} averagePredictedPoints
   */
  exports.prototype.averagePredictedPoints = undefined;


  return exports;

}));
