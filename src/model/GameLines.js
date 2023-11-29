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
 * Swagger Codegen version: 2.4.37
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GameLinesLines'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GameLinesLines'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.GameLines = factory(root.cfb.ApiClient, root.cfb.GameLinesLines);
  }
}(this, function(ApiClient, GameLinesLines) {
  'use strict';

  /**
   * The GameLines model module.
   * @module model/GameLines
   * @version 4.5.1
   */

  /**
   * Constructs a new <code>GameLines</code>.
   * @alias module:model/GameLines
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GameLines</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GameLines} obj Optional instance to populate.
   * @return {module:model/GameLines} The populated <code>GameLines</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('week'))
        obj.week = ApiClient.convertToType(data['week'], 'Number');
      if (data.hasOwnProperty('seasonType'))
        obj.seasonType = ApiClient.convertToType(data['seasonType'], 'String');
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'String');
      if (data.hasOwnProperty('homeTeam'))
        obj.homeTeam = ApiClient.convertToType(data['homeTeam'], 'String');
      if (data.hasOwnProperty('homeConference'))
        obj.homeConference = ApiClient.convertToType(data['homeConference'], 'String');
      if (data.hasOwnProperty('homeScore'))
        obj.homeScore = ApiClient.convertToType(data['homeScore'], 'Number');
      if (data.hasOwnProperty('awayTeam'))
        obj.awayTeam = ApiClient.convertToType(data['awayTeam'], 'String');
      if (data.hasOwnProperty('awayConference'))
        obj.awayConference = ApiClient.convertToType(data['awayConference'], 'String');
      if (data.hasOwnProperty('awayScore'))
        obj.awayScore = ApiClient.convertToType(data['awayScore'], 'Number');
      if (data.hasOwnProperty('lines'))
        obj.lines = ApiClient.convertToType(data['lines'], [GameLinesLines]);
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} season
   */
  exports.prototype.season = undefined;

  /**
   * @member {Number} week
   */
  exports.prototype.week = undefined;

  /**
   * @member {String} seasonType
   */
  exports.prototype.seasonType = undefined;

  /**
   * @member {String} startDate
   */
  exports.prototype.startDate = undefined;

  /**
   * @member {String} homeTeam
   */
  exports.prototype.homeTeam = undefined;

  /**
   * @member {String} homeConference
   */
  exports.prototype.homeConference = undefined;

  /**
   * @member {Number} homeScore
   */
  exports.prototype.homeScore = undefined;

  /**
   * @member {String} awayTeam
   */
  exports.prototype.awayTeam = undefined;

  /**
   * @member {String} awayConference
   */
  exports.prototype.awayConference = undefined;

  /**
   * @member {Number} awayScore
   */
  exports.prototype.awayScore = undefined;

  /**
   * @member {Array.<module:model/GameLinesLines>} lines
   */
  exports.prototype.lines = undefined;


  return exports;

}));
