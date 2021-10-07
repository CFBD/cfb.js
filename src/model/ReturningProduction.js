/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.13
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.22
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
    root.cfb.ReturningProduction = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReturningProduction model module.
   * @module model/ReturningProduction
   * @version 4.1.13
   */

  /**
   * Constructs a new <code>ReturningProduction</code>.
   * @alias module:model/ReturningProduction
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReturningProduction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReturningProduction} obj Optional instance to populate.
   * @return {module:model/ReturningProduction} The populated <code>ReturningProduction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('totalPPA'))
        obj.totalPPA = ApiClient.convertToType(data['totalPPA'], 'Number');
      if (data.hasOwnProperty('totalPassingPPA'))
        obj.totalPassingPPA = ApiClient.convertToType(data['totalPassingPPA'], 'Number');
      if (data.hasOwnProperty('totalReceivingPPA'))
        obj.totalReceivingPPA = ApiClient.convertToType(data['totalReceivingPPA'], 'Number');
      if (data.hasOwnProperty('totalRushingPPA'))
        obj.totalRushingPPA = ApiClient.convertToType(data['totalRushingPPA'], 'Number');
      if (data.hasOwnProperty('percentPPA'))
        obj.percentPPA = ApiClient.convertToType(data['percentPPA'], 'Number');
      if (data.hasOwnProperty('percentPassingPPA'))
        obj.percentPassingPPA = ApiClient.convertToType(data['percentPassingPPA'], 'Number');
      if (data.hasOwnProperty('percentReceivingPPA'))
        obj.percentReceivingPPA = ApiClient.convertToType(data['percentReceivingPPA'], 'Number');
      if (data.hasOwnProperty('percentRushingPPA'))
        obj.percentRushingPPA = ApiClient.convertToType(data['percentRushingPPA'], 'Number');
      if (data.hasOwnProperty('usage'))
        obj.usage = ApiClient.convertToType(data['usage'], 'Number');
      if (data.hasOwnProperty('passingUsage'))
        obj.passingUsage = ApiClient.convertToType(data['passingUsage'], 'Number');
      if (data.hasOwnProperty('receivingUsage'))
        obj.receivingUsage = ApiClient.convertToType(data['receivingUsage'], 'Number');
      if (data.hasOwnProperty('rushingUsage'))
        obj.rushingUsage = ApiClient.convertToType(data['rushingUsage'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} season
   */
  exports.prototype.season = undefined;

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {String} conference
   */
  exports.prototype.conference = undefined;

  /**
   * @member {Number} totalPPA
   */
  exports.prototype.totalPPA = undefined;

  /**
   * @member {Number} totalPassingPPA
   */
  exports.prototype.totalPassingPPA = undefined;

  /**
   * @member {Number} totalReceivingPPA
   */
  exports.prototype.totalReceivingPPA = undefined;

  /**
   * @member {Number} totalRushingPPA
   */
  exports.prototype.totalRushingPPA = undefined;

  /**
   * @member {Number} percentPPA
   */
  exports.prototype.percentPPA = undefined;

  /**
   * @member {Number} percentPassingPPA
   */
  exports.prototype.percentPassingPPA = undefined;

  /**
   * @member {Number} percentReceivingPPA
   */
  exports.prototype.percentReceivingPPA = undefined;

  /**
   * @member {Number} percentRushingPPA
   */
  exports.prototype.percentRushingPPA = undefined;

  /**
   * @member {Number} usage
   */
  exports.prototype.usage = undefined;

  /**
   * @member {Number} passingUsage
   */
  exports.prototype.passingUsage = undefined;

  /**
   * @member {Number} receivingUsage
   */
  exports.prototype.receivingUsage = undefined;

  /**
   * @member {Number} rushingUsage
   */
  exports.prototype.rushingUsage = undefined;


  return exports;

}));
