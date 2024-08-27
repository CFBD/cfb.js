/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.6.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TeamFPIRatingEfficiencies', 'model/TeamFPIRatingResumeRanks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TeamFPIRatingEfficiencies'), require('./TeamFPIRatingResumeRanks'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.TeamFPIRating = factory(root.cfb.ApiClient, root.cfb.TeamFPIRatingEfficiencies, root.cfb.TeamFPIRatingResumeRanks);
  }
}(this, function(ApiClient, TeamFPIRatingEfficiencies, TeamFPIRatingResumeRanks) {
  'use strict';

  /**
   * The TeamFPIRating model module.
   * @module model/TeamFPIRating
   * @version 4.6.0
   */

  /**
   * Constructs a new <code>TeamFPIRating</code>.
   * @alias module:model/TeamFPIRating
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TeamFPIRating</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamFPIRating} obj Optional instance to populate.
   * @return {module:model/TeamFPIRating} The populated <code>TeamFPIRating</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('fpi'))
        obj.fpi = ApiClient.convertToType(data['fpi'], 'Number');
      if (data.hasOwnProperty('resumeRanks'))
        obj.resumeRanks = TeamFPIRatingResumeRanks.constructFromObject(data['resumeRanks']);
      if (data.hasOwnProperty('efficiencies'))
        obj.efficiencies = TeamFPIRatingEfficiencies.constructFromObject(data['efficiencies']);
    }
    return obj;
  }

  /**
   * @member {Number} year
   */
  exports.prototype.year = undefined;

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {String} conference
   */
  exports.prototype.conference = undefined;

  /**
   * @member {Number} fpi
   */
  exports.prototype.fpi = undefined;

  /**
   * @member {module:model/TeamFPIRatingResumeRanks} resumeRanks
   */
  exports.prototype.resumeRanks = undefined;

  /**
   * @member {module:model/TeamFPIRatingEfficiencies} efficiencies
   */
  exports.prototype.efficiencies = undefined;


  return exports;

}));
