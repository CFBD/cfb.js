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
 * Swagger Codegen version: 2.4.41
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
    root.cfb.LivePlayByPlayTeams = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LivePlayByPlayTeams model module.
   * @module model/LivePlayByPlayTeams
   * @version 4.5.2
   */

  /**
   * Constructs a new <code>LivePlayByPlayTeams</code>.
   * @alias module:model/LivePlayByPlayTeams
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LivePlayByPlayTeams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LivePlayByPlayTeams} obj Optional instance to populate.
   * @return {module:model/LivePlayByPlayTeams} The populated <code>LivePlayByPlayTeams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('teamId'))
        obj.teamId = ApiClient.convertToType(data['teamId'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('homeAway'))
        obj.homeAway = ApiClient.convertToType(data['homeAway'], 'String');
      if (data.hasOwnProperty('points'))
        obj.points = ApiClient.convertToType(data['points'], 'Number');
      if (data.hasOwnProperty('drives'))
        obj.drives = ApiClient.convertToType(data['drives'], 'Number');
      if (data.hasOwnProperty('scoringOpportunities'))
        obj.scoringOpportunities = ApiClient.convertToType(data['scoringOpportunities'], 'Number');
      if (data.hasOwnProperty('pointsPerOpportunity'))
        obj.pointsPerOpportunity = ApiClient.convertToType(data['pointsPerOpportunity'], 'Number');
      if (data.hasOwnProperty('plays'))
        obj.plays = ApiClient.convertToType(data['plays'], 'Number');
      if (data.hasOwnProperty('lineYards'))
        obj.lineYards = ApiClient.convertToType(data['lineYards'], 'Number');
      if (data.hasOwnProperty('lineYardsPerRush'))
        obj.lineYardsPerRush = ApiClient.convertToType(data['lineYardsPerRush'], 'Number');
      if (data.hasOwnProperty('secondLevelYards'))
        obj.secondLevelYards = ApiClient.convertToType(data['secondLevelYards'], 'Number');
      if (data.hasOwnProperty('secondLevelYardsPerRush'))
        obj.secondLevelYardsPerRush = ApiClient.convertToType(data['secondLevelYardsPerRush'], 'Number');
      if (data.hasOwnProperty('openFieldYards'))
        obj.openFieldYards = ApiClient.convertToType(data['openFieldYards'], 'Number');
      if (data.hasOwnProperty('openFieldYardsPerRush'))
        obj.openFieldYardsPerRush = ApiClient.convertToType(data['openFieldYardsPerRush'], 'Number');
      if (data.hasOwnProperty('epaPerPlay'))
        obj.epaPerPlay = ApiClient.convertToType(data['epaPerPlay'], 'Number');
      if (data.hasOwnProperty('totalEpa'))
        obj.totalEpa = ApiClient.convertToType(data['totalEpa'], 'Number');
      if (data.hasOwnProperty('passingEpa'))
        obj.passingEpa = ApiClient.convertToType(data['passingEpa'], 'Number');
      if (data.hasOwnProperty('epaPerPass'))
        obj.epaPerPass = ApiClient.convertToType(data['epaPerPass'], 'Number');
      if (data.hasOwnProperty('rushingEpa'))
        obj.rushingEpa = ApiClient.convertToType(data['rushingEpa'], 'Number');
      if (data.hasOwnProperty('epaPerRush'))
        obj.epaPerRush = ApiClient.convertToType(data['epaPerRush'], 'Number');
      if (data.hasOwnProperty('successRate'))
        obj.successRate = ApiClient.convertToType(data['successRate'], 'Number');
      if (data.hasOwnProperty('standardDownSuccessRate'))
        obj.standardDownSuccessRate = ApiClient.convertToType(data['standardDownSuccessRate'], 'Number');
      if (data.hasOwnProperty('passingDownSuccessRate'))
        obj.passingDownSuccessRate = ApiClient.convertToType(data['passingDownSuccessRate'], 'Number');
      if (data.hasOwnProperty('explosiveness'))
        obj.explosiveness = ApiClient.convertToType(data['explosiveness'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} teamId
   */
  exports.prototype.teamId = undefined;

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {String} homeAway
   */
  exports.prototype.homeAway = undefined;

  /**
   * @member {Number} points
   */
  exports.prototype.points = undefined;

  /**
   * @member {Number} drives
   */
  exports.prototype.drives = undefined;

  /**
   * @member {Number} scoringOpportunities
   */
  exports.prototype.scoringOpportunities = undefined;

  /**
   * @member {Number} pointsPerOpportunity
   */
  exports.prototype.pointsPerOpportunity = undefined;

  /**
   * @member {Number} plays
   */
  exports.prototype.plays = undefined;

  /**
   * @member {Number} lineYards
   */
  exports.prototype.lineYards = undefined;

  /**
   * @member {Number} lineYardsPerRush
   */
  exports.prototype.lineYardsPerRush = undefined;

  /**
   * @member {Number} secondLevelYards
   */
  exports.prototype.secondLevelYards = undefined;

  /**
   * @member {Number} secondLevelYardsPerRush
   */
  exports.prototype.secondLevelYardsPerRush = undefined;

  /**
   * @member {Number} openFieldYards
   */
  exports.prototype.openFieldYards = undefined;

  /**
   * @member {Number} openFieldYardsPerRush
   */
  exports.prototype.openFieldYardsPerRush = undefined;

  /**
   * @member {Number} epaPerPlay
   */
  exports.prototype.epaPerPlay = undefined;

  /**
   * @member {Number} totalEpa
   */
  exports.prototype.totalEpa = undefined;

  /**
   * @member {Number} passingEpa
   */
  exports.prototype.passingEpa = undefined;

  /**
   * @member {Number} epaPerPass
   */
  exports.prototype.epaPerPass = undefined;

  /**
   * @member {Number} rushingEpa
   */
  exports.prototype.rushingEpa = undefined;

  /**
   * @member {Number} epaPerRush
   */
  exports.prototype.epaPerRush = undefined;

  /**
   * @member {Number} successRate
   */
  exports.prototype.successRate = undefined;

  /**
   * @member {Number} standardDownSuccessRate
   */
  exports.prototype.standardDownSuccessRate = undefined;

  /**
   * @member {Number} passingDownSuccessRate
   */
  exports.prototype.passingDownSuccessRate = undefined;

  /**
   * @member {Number} explosiveness
   */
  exports.prototype.explosiveness = undefined;


  return exports;

}));
