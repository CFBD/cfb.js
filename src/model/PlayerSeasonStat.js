/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.9
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.PlayerSeasonStat = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlayerSeasonStat model module.
   * @module model/PlayerSeasonStat
   * @version 4.4.9
   */

  /**
   * Constructs a new <code>PlayerSeasonStat</code>.
   * @alias module:model/PlayerSeasonStat
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PlayerSeasonStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerSeasonStat} obj Optional instance to populate.
   * @return {module:model/PlayerSeasonStat} The populated <code>PlayerSeasonStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('playerId'))
        obj.playerId = ApiClient.convertToType(data['playerId'], 'Number');
      if (data.hasOwnProperty('player'))
        obj.player = ApiClient.convertToType(data['player'], 'String');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('category'))
        obj.category = ApiClient.convertToType(data['category'], 'String');
      if (data.hasOwnProperty('statType'))
        obj.statType = ApiClient.convertToType(data['statType'], 'String');
      if (data.hasOwnProperty('stat'))
        obj.stat = ApiClient.convertToType(data['stat'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} season
   */
  exports.prototype.season = undefined;

  /**
   * @member {Number} playerId
   */
  exports.prototype.playerId = undefined;

  /**
   * @member {String} player
   */
  exports.prototype.player = undefined;

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {String} conference
   */
  exports.prototype.conference = undefined;

  /**
   * @member {String} category
   */
  exports.prototype.category = undefined;

  /**
   * @member {String} statType
   */
  exports.prototype.statType = undefined;

  /**
   * @member {Number} stat
   */
  exports.prototype.stat = undefined;


  return exports;

}));
