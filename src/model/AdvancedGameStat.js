/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.5.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.33
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AdvancedGameStatOffense'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdvancedGameStatOffense'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.AdvancedGameStat = factory(root.cfb.ApiClient, root.cfb.AdvancedGameStatOffense);
  }
}(this, function(ApiClient, AdvancedGameStatOffense) {
  'use strict';

  /**
   * The AdvancedGameStat model module.
   * @module model/AdvancedGameStat
   * @version 4.5.1
   */

  /**
   * Constructs a new <code>AdvancedGameStat</code>.
   * @alias module:model/AdvancedGameStat
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AdvancedGameStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvancedGameStat} obj Optional instance to populate.
   * @return {module:model/AdvancedGameStat} The populated <code>AdvancedGameStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('gameId'))
        obj.gameId = ApiClient.convertToType(data['gameId'], 'Number');
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('week'))
        obj.week = ApiClient.convertToType(data['week'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('opponent'))
        obj.opponent = ApiClient.convertToType(data['opponent'], 'String');
      if (data.hasOwnProperty('offense'))
        obj.offense = AdvancedGameStatOffense.constructFromObject(data['offense']);
      if (data.hasOwnProperty('defense'))
        obj.defense = AdvancedGameStatOffense.constructFromObject(data['defense']);
    }
    return obj;
  }

  /**
   * @member {Number} gameId
   */
  exports.prototype.gameId = undefined;

  /**
   * @member {Number} season
   */
  exports.prototype.season = undefined;

  /**
   * @member {Number} week
   */
  exports.prototype.week = undefined;

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {String} opponent
   */
  exports.prototype.opponent = undefined;

  /**
   * @member {module:model/AdvancedGameStatOffense} offense
   */
  exports.prototype.offense = undefined;

  /**
   * @member {module:model/AdvancedGameStatOffense} defense
   */
  exports.prototype.defense = undefined;


  return exports;

}));
