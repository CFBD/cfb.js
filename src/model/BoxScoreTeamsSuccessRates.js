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
    define(['ApiClient', 'model/BoxScoreTeamsOverall'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BoxScoreTeamsOverall'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.BoxScoreTeamsSuccessRates = factory(root.cfb.ApiClient, root.cfb.BoxScoreTeamsOverall);
  }
}(this, function(ApiClient, BoxScoreTeamsOverall) {
  'use strict';

  /**
   * The BoxScoreTeamsSuccessRates model module.
   * @module model/BoxScoreTeamsSuccessRates
   * @version 4.5.2
   */

  /**
   * Constructs a new <code>BoxScoreTeamsSuccessRates</code>.
   * @alias module:model/BoxScoreTeamsSuccessRates
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BoxScoreTeamsSuccessRates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScoreTeamsSuccessRates} obj Optional instance to populate.
   * @return {module:model/BoxScoreTeamsSuccessRates} The populated <code>BoxScoreTeamsSuccessRates</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('overall'))
        obj.overall = BoxScoreTeamsOverall.constructFromObject(data['overall']);
      if (data.hasOwnProperty('standardDowns'))
        obj.standardDowns = BoxScoreTeamsOverall.constructFromObject(data['standardDowns']);
      if (data.hasOwnProperty('passingDowns'))
        obj.passingDowns = BoxScoreTeamsOverall.constructFromObject(data['passingDowns']);
    }
    return obj;
  }

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {module:model/BoxScoreTeamsOverall} overall
   */
  exports.prototype.overall = undefined;

  /**
   * @member {module:model/BoxScoreTeamsOverall} standardDowns
   */
  exports.prototype.standardDowns = undefined;

  /**
   * @member {module:model/BoxScoreTeamsOverall} passingDowns
   */
  exports.prototype.passingDowns = undefined;


  return exports;

}));
