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
    define(['ApiClient', 'model/AdvancedSeasonStatOffenseFieldPosition', 'model/AdvancedSeasonStatOffenseRushingPlays', 'model/AdvancedSeasonStatOffenseStandardDowns', 'model/TeamSPRatingDefenseHavoc'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdvancedSeasonStatOffenseFieldPosition'), require('./AdvancedSeasonStatOffenseRushingPlays'), require('./AdvancedSeasonStatOffenseStandardDowns'), require('./TeamSPRatingDefenseHavoc'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.AdvancedSeasonStatOffense = factory(root.cfb.ApiClient, root.cfb.AdvancedSeasonStatOffenseFieldPosition, root.cfb.AdvancedSeasonStatOffenseRushingPlays, root.cfb.AdvancedSeasonStatOffenseStandardDowns, root.cfb.TeamSPRatingDefenseHavoc);
  }
}(this, function(ApiClient, AdvancedSeasonStatOffenseFieldPosition, AdvancedSeasonStatOffenseRushingPlays, AdvancedSeasonStatOffenseStandardDowns, TeamSPRatingDefenseHavoc) {
  'use strict';

  /**
   * The AdvancedSeasonStatOffense model module.
   * @module model/AdvancedSeasonStatOffense
   * @version 4.6.0
   */

  /**
   * Constructs a new <code>AdvancedSeasonStatOffense</code>.
   * @alias module:model/AdvancedSeasonStatOffense
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AdvancedSeasonStatOffense</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvancedSeasonStatOffense} obj Optional instance to populate.
   * @return {module:model/AdvancedSeasonStatOffense} The populated <code>AdvancedSeasonStatOffense</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('plays'))
        obj.plays = ApiClient.convertToType(data['plays'], 'Number');
      if (data.hasOwnProperty('drives'))
        obj.drives = ApiClient.convertToType(data['drives'], 'Number');
      if (data.hasOwnProperty('ppa'))
        obj.ppa = ApiClient.convertToType(data['ppa'], 'Number');
      if (data.hasOwnProperty('totalPPA'))
        obj.totalPPA = ApiClient.convertToType(data['totalPPA'], 'Number');
      if (data.hasOwnProperty('successRate'))
        obj.successRate = ApiClient.convertToType(data['successRate'], 'Number');
      if (data.hasOwnProperty('explosiveness'))
        obj.explosiveness = ApiClient.convertToType(data['explosiveness'], 'Number');
      if (data.hasOwnProperty('powerSuccess'))
        obj.powerSuccess = ApiClient.convertToType(data['powerSuccess'], 'Number');
      if (data.hasOwnProperty('stuffRate'))
        obj.stuffRate = ApiClient.convertToType(data['stuffRate'], 'Number');
      if (data.hasOwnProperty('lineYards'))
        obj.lineYards = ApiClient.convertToType(data['lineYards'], 'Number');
      if (data.hasOwnProperty('lineYardsTotal'))
        obj.lineYardsTotal = ApiClient.convertToType(data['lineYardsTotal'], 'Number');
      if (data.hasOwnProperty('secondLevelYards'))
        obj.secondLevelYards = ApiClient.convertToType(data['secondLevelYards'], 'Number');
      if (data.hasOwnProperty('secondLevelYardsTotal'))
        obj.secondLevelYardsTotal = ApiClient.convertToType(data['secondLevelYardsTotal'], 'Number');
      if (data.hasOwnProperty('openFieldYards'))
        obj.openFieldYards = ApiClient.convertToType(data['openFieldYards'], 'Number');
      if (data.hasOwnProperty('openFieldYardsTotal'))
        obj.openFieldYardsTotal = ApiClient.convertToType(data['openFieldYardsTotal'], 'Number');
      if (data.hasOwnProperty('totalOpportunies'))
        obj.totalOpportunies = ApiClient.convertToType(data['totalOpportunies'], 'Number');
      if (data.hasOwnProperty('pointsPerOpportunity'))
        obj.pointsPerOpportunity = ApiClient.convertToType(data['pointsPerOpportunity'], 'Number');
      if (data.hasOwnProperty('fieldPosition'))
        obj.fieldPosition = AdvancedSeasonStatOffenseFieldPosition.constructFromObject(data['fieldPosition']);
      if (data.hasOwnProperty('havoc'))
        obj.havoc = TeamSPRatingDefenseHavoc.constructFromObject(data['havoc']);
      if (data.hasOwnProperty('standardDowns'))
        obj.standardDowns = AdvancedSeasonStatOffenseStandardDowns.constructFromObject(data['standardDowns']);
      if (data.hasOwnProperty('passingDowns'))
        obj.passingDowns = AdvancedSeasonStatOffenseStandardDowns.constructFromObject(data['passingDowns']);
      if (data.hasOwnProperty('rushingPlays'))
        obj.rushingPlays = AdvancedSeasonStatOffenseRushingPlays.constructFromObject(data['rushingPlays']);
      if (data.hasOwnProperty('passingPlays'))
        obj.passingPlays = AdvancedSeasonStatOffenseRushingPlays.constructFromObject(data['passingPlays']);
    }
    return obj;
  }

  /**
   * @member {Number} plays
   */
  exports.prototype.plays = undefined;

  /**
   * @member {Number} drives
   */
  exports.prototype.drives = undefined;

  /**
   * @member {Number} ppa
   */
  exports.prototype.ppa = undefined;

  /**
   * @member {Number} totalPPA
   */
  exports.prototype.totalPPA = undefined;

  /**
   * @member {Number} successRate
   */
  exports.prototype.successRate = undefined;

  /**
   * @member {Number} explosiveness
   */
  exports.prototype.explosiveness = undefined;

  /**
   * @member {Number} powerSuccess
   */
  exports.prototype.powerSuccess = undefined;

  /**
   * @member {Number} stuffRate
   */
  exports.prototype.stuffRate = undefined;

  /**
   * @member {Number} lineYards
   */
  exports.prototype.lineYards = undefined;

  /**
   * @member {Number} lineYardsTotal
   */
  exports.prototype.lineYardsTotal = undefined;

  /**
   * @member {Number} secondLevelYards
   */
  exports.prototype.secondLevelYards = undefined;

  /**
   * @member {Number} secondLevelYardsTotal
   */
  exports.prototype.secondLevelYardsTotal = undefined;

  /**
   * @member {Number} openFieldYards
   */
  exports.prototype.openFieldYards = undefined;

  /**
   * @member {Number} openFieldYardsTotal
   */
  exports.prototype.openFieldYardsTotal = undefined;

  /**
   * @member {Number} totalOpportunies
   */
  exports.prototype.totalOpportunies = undefined;

  /**
   * @member {Number} pointsPerOpportunity
   */
  exports.prototype.pointsPerOpportunity = undefined;

  /**
   * @member {module:model/AdvancedSeasonStatOffenseFieldPosition} fieldPosition
   */
  exports.prototype.fieldPosition = undefined;

  /**
   * @member {module:model/TeamSPRatingDefenseHavoc} havoc
   */
  exports.prototype.havoc = undefined;

  /**
   * @member {module:model/AdvancedSeasonStatOffenseStandardDowns} standardDowns
   */
  exports.prototype.standardDowns = undefined;

  /**
   * @member {module:model/AdvancedSeasonStatOffenseStandardDowns} passingDowns
   */
  exports.prototype.passingDowns = undefined;

  /**
   * @member {module:model/AdvancedSeasonStatOffenseRushingPlays} rushingPlays
   */
  exports.prototype.rushingPlays = undefined;

  /**
   * @member {module:model/AdvancedSeasonStatOffenseRushingPlays} passingPlays
   */
  exports.prototype.passingPlays = undefined;


  return exports;

}));
