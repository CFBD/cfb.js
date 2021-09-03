/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.8
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
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
    root.cfb.PredictedPoints = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PredictedPoints model module.
   * @module model/PredictedPoints
   * @version 4.1.8
   */

  /**
   * Constructs a new <code>PredictedPoints</code>.
   * @alias module:model/PredictedPoints
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PredictedPoints</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PredictedPoints} obj Optional instance to populate.
   * @return {module:model/PredictedPoints} The populated <code>PredictedPoints</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('yardLine'))
        obj.yardLine = ApiClient.convertToType(data['yardLine'], 'Number');
      if (data.hasOwnProperty('predictedPoints'))
        obj.predictedPoints = ApiClient.convertToType(data['predictedPoints'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} yardLine
   */
  exports.prototype.yardLine = undefined;

  /**
   * @member {Number} predictedPoints
   */
  exports.prototype.predictedPoints = undefined;


  return exports;

}));
