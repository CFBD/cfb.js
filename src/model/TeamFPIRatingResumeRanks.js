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
 * Swagger Codegen version: 2.4.39
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
    root.cfb.TeamFPIRatingResumeRanks = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TeamFPIRatingResumeRanks model module.
   * @module model/TeamFPIRatingResumeRanks
   * @version 4.5.2
   */

  /**
   * Constructs a new <code>TeamFPIRatingResumeRanks</code>.
   * @alias module:model/TeamFPIRatingResumeRanks
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TeamFPIRatingResumeRanks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamFPIRatingResumeRanks} obj Optional instance to populate.
   * @return {module:model/TeamFPIRatingResumeRanks} The populated <code>TeamFPIRatingResumeRanks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('strengthOfRecord'))
        obj.strengthOfRecord = ApiClient.convertToType(data['strengthOfRecord'], 'Number');
      if (data.hasOwnProperty('fpi'))
        obj.fpi = ApiClient.convertToType(data['fpi'], 'Number');
      if (data.hasOwnProperty('averageWinProbability'))
        obj.averageWinProbability = ApiClient.convertToType(data['averageWinProbability'], 'Number');
      if (data.hasOwnProperty('strengthOfSchedule'))
        obj.strengthOfSchedule = ApiClient.convertToType(data['strengthOfSchedule'], 'Number');
      if (data.hasOwnProperty('remainingStrengthOfSchedule'))
        obj.remainingStrengthOfSchedule = ApiClient.convertToType(data['remainingStrengthOfSchedule'], 'Number');
      if (data.hasOwnProperty('gameControl'))
        obj.gameControl = ApiClient.convertToType(data['gameControl'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} strengthOfRecord
   */
  exports.prototype.strengthOfRecord = undefined;

  /**
   * @member {Number} fpi
   */
  exports.prototype.fpi = undefined;

  /**
   * @member {Number} averageWinProbability
   */
  exports.prototype.averageWinProbability = undefined;

  /**
   * @member {Number} strengthOfSchedule
   */
  exports.prototype.strengthOfSchedule = undefined;

  /**
   * @member {Number} remainingStrengthOfSchedule
   */
  exports.prototype.remainingStrengthOfSchedule = undefined;

  /**
   * @member {Number} gameControl
   */
  exports.prototype.gameControl = undefined;


  return exports;

}));
