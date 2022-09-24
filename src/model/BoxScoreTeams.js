/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.8
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.28
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BoxScoreTeamsExplosiveness', 'model/BoxScoreTeamsFieldPosition', 'model/BoxScoreTeamsHavoc', 'model/BoxScoreTeamsPpa', 'model/BoxScoreTeamsRushing', 'model/BoxScoreTeamsScoringOpportunities', 'model/BoxScoreTeamsSuccessRates'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BoxScoreTeamsExplosiveness'), require('./BoxScoreTeamsFieldPosition'), require('./BoxScoreTeamsHavoc'), require('./BoxScoreTeamsPpa'), require('./BoxScoreTeamsRushing'), require('./BoxScoreTeamsScoringOpportunities'), require('./BoxScoreTeamsSuccessRates'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.BoxScoreTeams = factory(root.cfb.ApiClient, root.cfb.BoxScoreTeamsExplosiveness, root.cfb.BoxScoreTeamsFieldPosition, root.cfb.BoxScoreTeamsHavoc, root.cfb.BoxScoreTeamsPpa, root.cfb.BoxScoreTeamsRushing, root.cfb.BoxScoreTeamsScoringOpportunities, root.cfb.BoxScoreTeamsSuccessRates);
  }
}(this, function(ApiClient, BoxScoreTeamsExplosiveness, BoxScoreTeamsFieldPosition, BoxScoreTeamsHavoc, BoxScoreTeamsPpa, BoxScoreTeamsRushing, BoxScoreTeamsScoringOpportunities, BoxScoreTeamsSuccessRates) {
  'use strict';

  /**
   * The BoxScoreTeams model module.
   * @module model/BoxScoreTeams
   * @version 4.4.8
   */

  /**
   * Constructs a new <code>BoxScoreTeams</code>.
   * @alias module:model/BoxScoreTeams
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BoxScoreTeams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScoreTeams} obj Optional instance to populate.
   * @return {module:model/BoxScoreTeams} The populated <code>BoxScoreTeams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ppa'))
        obj.ppa = ApiClient.convertToType(data['ppa'], [BoxScoreTeamsPpa]);
      if (data.hasOwnProperty('cumulativePpa'))
        obj.cumulativePpa = ApiClient.convertToType(data['cumulativePpa'], [BoxScoreTeamsPpa]);
      if (data.hasOwnProperty('successRates'))
        obj.successRates = ApiClient.convertToType(data['successRates'], [BoxScoreTeamsSuccessRates]);
      if (data.hasOwnProperty('explosiveness'))
        obj.explosiveness = ApiClient.convertToType(data['explosiveness'], [BoxScoreTeamsExplosiveness]);
      if (data.hasOwnProperty('rushing'))
        obj.rushing = ApiClient.convertToType(data['rushing'], [BoxScoreTeamsRushing]);
      if (data.hasOwnProperty('havoc'))
        obj.havoc = ApiClient.convertToType(data['havoc'], [BoxScoreTeamsHavoc]);
      if (data.hasOwnProperty('scoringOpportunities'))
        obj.scoringOpportunities = ApiClient.convertToType(data['scoringOpportunities'], [BoxScoreTeamsScoringOpportunities]);
      if (data.hasOwnProperty('fieldPosition'))
        obj.fieldPosition = ApiClient.convertToType(data['fieldPosition'], [BoxScoreTeamsFieldPosition]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/BoxScoreTeamsPpa>} ppa
   */
  exports.prototype.ppa = undefined;

  /**
   * @member {Array.<module:model/BoxScoreTeamsPpa>} cumulativePpa
   */
  exports.prototype.cumulativePpa = undefined;

  /**
   * @member {Array.<module:model/BoxScoreTeamsSuccessRates>} successRates
   */
  exports.prototype.successRates = undefined;

  /**
   * @member {Array.<module:model/BoxScoreTeamsExplosiveness>} explosiveness
   */
  exports.prototype.explosiveness = undefined;

  /**
   * @member {Array.<module:model/BoxScoreTeamsRushing>} rushing
   */
  exports.prototype.rushing = undefined;

  /**
   * @member {Array.<module:model/BoxScoreTeamsHavoc>} havoc
   */
  exports.prototype.havoc = undefined;

  /**
   * @member {Array.<module:model/BoxScoreTeamsScoringOpportunities>} scoringOpportunities
   */
  exports.prototype.scoringOpportunities = undefined;

  /**
   * @member {Array.<module:model/BoxScoreTeamsFieldPosition>} fieldPosition
   */
  exports.prototype.fieldPosition = undefined;


  return exports;

}));
