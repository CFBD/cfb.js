/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.12
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
    root.cfb.PregameWP = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PregameWP model module.
   * @module model/PregameWP
   * @version 4.4.12
   */

  /**
   * Constructs a new <code>PregameWP</code>.
   * @alias module:model/PregameWP
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PregameWP</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PregameWP} obj Optional instance to populate.
   * @return {module:model/PregameWP} The populated <code>PregameWP</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('seasonType'))
        obj.seasonType = ApiClient.convertToType(data['seasonType'], 'String');
      if (data.hasOwnProperty('week'))
        obj.week = ApiClient.convertToType(data['week'], 'Number');
      if (data.hasOwnProperty('gameId'))
        obj.gameId = ApiClient.convertToType(data['gameId'], 'Number');
      if (data.hasOwnProperty('homeTeam'))
        obj.homeTeam = ApiClient.convertToType(data['homeTeam'], 'String');
      if (data.hasOwnProperty('awayTeam'))
        obj.awayTeam = ApiClient.convertToType(data['awayTeam'], 'String');
      if (data.hasOwnProperty('spread'))
        obj.spread = ApiClient.convertToType(data['spread'], 'Number');
      if (data.hasOwnProperty('homeWinProb'))
        obj.homeWinProb = ApiClient.convertToType(data['homeWinProb'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} season
   */
  exports.prototype.season = undefined;

  /**
   * @member {String} seasonType
   */
  exports.prototype.seasonType = undefined;

  /**
   * @member {Number} week
   */
  exports.prototype.week = undefined;

  /**
   * @member {Number} gameId
   */
  exports.prototype.gameId = undefined;

  /**
   * @member {String} homeTeam
   */
  exports.prototype.homeTeam = undefined;

  /**
   * @member {String} awayTeam
   */
  exports.prototype.awayTeam = undefined;

  /**
   * @member {Number} spread
   */
  exports.prototype.spread = undefined;

  /**
   * @member {Number} homeWinProb
   */
  exports.prototype.homeWinProb = undefined;


  return exports;

}));
