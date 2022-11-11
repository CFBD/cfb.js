/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.11
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
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
    root.cfb.BoxScoreTeamsRushing = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BoxScoreTeamsRushing model module.
   * @module model/BoxScoreTeamsRushing
   * @version 4.4.11
   */

  /**
   * Constructs a new <code>BoxScoreTeamsRushing</code>.
   * @alias module:model/BoxScoreTeamsRushing
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BoxScoreTeamsRushing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScoreTeamsRushing} obj Optional instance to populate.
   * @return {module:model/BoxScoreTeamsRushing} The populated <code>BoxScoreTeamsRushing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('powerSuccess'))
        obj.powerSuccess = ApiClient.convertToType(data['powerSuccess'], 'Number');
      if (data.hasOwnProperty('stuffRate'))
        obj.stuffRate = ApiClient.convertToType(data['stuffRate'], 'Number');
      if (data.hasOwnProperty('lineYards'))
        obj.lineYards = ApiClient.convertToType(data['lineYards'], 'Number');
      if (data.hasOwnProperty('lineYardsAverage'))
        obj.lineYardsAverage = ApiClient.convertToType(data['lineYardsAverage'], 'Number');
      if (data.hasOwnProperty('secondLevelYards'))
        obj.secondLevelYards = ApiClient.convertToType(data['secondLevelYards'], 'Number');
      if (data.hasOwnProperty('secondLevelYardsAverage'))
        obj.secondLevelYardsAverage = ApiClient.convertToType(data['secondLevelYardsAverage'], 'Number');
      if (data.hasOwnProperty('openFieldYards'))
        obj.openFieldYards = ApiClient.convertToType(data['openFieldYards'], 'Number');
      if (data.hasOwnProperty('openFieldYardsAverage'))
        obj.openFieldYardsAverage = ApiClient.convertToType(data['openFieldYardsAverage'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

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
   * @member {Number} lineYardsAverage
   */
  exports.prototype.lineYardsAverage = undefined;

  /**
   * @member {Number} secondLevelYards
   */
  exports.prototype.secondLevelYards = undefined;

  /**
   * @member {Number} secondLevelYardsAverage
   */
  exports.prototype.secondLevelYardsAverage = undefined;

  /**
   * @member {Number} openFieldYards
   */
  exports.prototype.openFieldYards = undefined;

  /**
   * @member {Number} openFieldYardsAverage
   */
  exports.prototype.openFieldYardsAverage = undefined;


  return exports;

}));
