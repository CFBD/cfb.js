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
    define(['ApiClient', 'model/DriveStartTime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DriveStartTime'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.PlayStat = factory(root.cfb.ApiClient, root.cfb.DriveStartTime);
  }
}(this, function(ApiClient, DriveStartTime) {
  'use strict';

  /**
   * The PlayStat model module.
   * @module model/PlayStat
   * @version 4.4.11
   */

  /**
   * Constructs a new <code>PlayStat</code>.
   * @alias module:model/PlayStat
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PlayStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayStat} obj Optional instance to populate.
   * @return {module:model/PlayStat} The populated <code>PlayStat</code> instance.
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
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('opponent'))
        obj.opponent = ApiClient.convertToType(data['opponent'], 'String');
      if (data.hasOwnProperty('teamScore'))
        obj.teamScore = ApiClient.convertToType(data['teamScore'], 'Number');
      if (data.hasOwnProperty('opponentScore'))
        obj.opponentScore = ApiClient.convertToType(data['opponentScore'], 'Number');
      if (data.hasOwnProperty('driveId'))
        obj.driveId = ApiClient.convertToType(data['driveId'], 'Number');
      if (data.hasOwnProperty('playId'))
        obj.playId = ApiClient.convertToType(data['playId'], 'Number');
      if (data.hasOwnProperty('period'))
        obj.period = ApiClient.convertToType(data['period'], 'Number');
      if (data.hasOwnProperty('clock'))
        obj.clock = DriveStartTime.constructFromObject(data['clock']);
      if (data.hasOwnProperty('yardsToGoal'))
        obj.yardsToGoal = ApiClient.convertToType(data['yardsToGoal'], 'Number');
      if (data.hasOwnProperty('down'))
        obj.down = ApiClient.convertToType(data['down'], 'Number');
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
      if (data.hasOwnProperty('athleteId'))
        obj.athleteId = ApiClient.convertToType(data['athleteId'], 'Number');
      if (data.hasOwnProperty('athleteName'))
        obj.athleteName = ApiClient.convertToType(data['athleteName'], 'String');
      if (data.hasOwnProperty('statType'))
        obj.statType = ApiClient.convertToType(data['statType'], 'String');
      if (data.hasOwnProperty('stat'))
        obj.stat = ApiClient.convertToType(data['stat'], 'Number');
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
   * @member {String} conference
   */
  exports.prototype.conference = undefined;

  /**
   * @member {String} opponent
   */
  exports.prototype.opponent = undefined;

  /**
   * @member {Number} teamScore
   */
  exports.prototype.teamScore = undefined;

  /**
   * @member {Number} opponentScore
   */
  exports.prototype.opponentScore = undefined;

  /**
   * @member {Number} driveId
   */
  exports.prototype.driveId = undefined;

  /**
   * @member {Number} playId
   */
  exports.prototype.playId = undefined;

  /**
   * @member {Number} period
   */
  exports.prototype.period = undefined;

  /**
   * @member {module:model/DriveStartTime} clock
   */
  exports.prototype.clock = undefined;

  /**
   * @member {Number} yardsToGoal
   */
  exports.prototype.yardsToGoal = undefined;

  /**
   * @member {Number} down
   */
  exports.prototype.down = undefined;

  /**
   * @member {Number} distance
   */
  exports.prototype.distance = undefined;

  /**
   * @member {Number} athleteId
   */
  exports.prototype.athleteId = undefined;

  /**
   * @member {String} athleteName
   */
  exports.prototype.athleteName = undefined;

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
