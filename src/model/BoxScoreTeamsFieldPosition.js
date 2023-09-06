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
    root.cfb.BoxScoreTeamsFieldPosition = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BoxScoreTeamsFieldPosition model module.
   * @module model/BoxScoreTeamsFieldPosition
   * @version 4.4.15
   */

  /**
   * Constructs a new <code>BoxScoreTeamsFieldPosition</code>.
   * @alias module:model/BoxScoreTeamsFieldPosition
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BoxScoreTeamsFieldPosition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScoreTeamsFieldPosition} obj Optional instance to populate.
   * @return {module:model/BoxScoreTeamsFieldPosition} The populated <code>BoxScoreTeamsFieldPosition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('averageStart'))
        obj.averageStart = ApiClient.convertToType(data['averageStart'], 'Number');
      if (data.hasOwnProperty('averageStartingPredictedPoints'))
        obj.averageStartingPredictedPoints = ApiClient.convertToType(data['averageStartingPredictedPoints'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {Number} averageStart
   */
  exports.prototype.averageStart = undefined;

  /**
   * @member {Number} averageStartingPredictedPoints
   */
  exports.prototype.averageStartingPredictedPoints = undefined;


  return exports;

}));
