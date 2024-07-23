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
    define(['ApiClient', 'model/DriveStartTime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DriveStartTime'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.Play = factory(root.cfb.ApiClient, root.cfb.DriveStartTime);
  }
}(this, function(ApiClient, DriveStartTime) {
  'use strict';

  /**
   * The Play model module.
   * @module model/Play
   * @version 4.5.2
   */

  /**
   * Constructs a new <code>Play</code>.
   * @alias module:model/Play
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Play</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Play} obj Optional instance to populate.
   * @return {module:model/Play} The populated <code>Play</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('drive_id'))
        obj.driveId = ApiClient.convertToType(data['drive_id'], 'Number');
      if (data.hasOwnProperty('game_id'))
        obj.gameId = ApiClient.convertToType(data['game_id'], 'Number');
      if (data.hasOwnProperty('drive_number'))
        obj.driveNumber = ApiClient.convertToType(data['drive_number'], 'Number');
      if (data.hasOwnProperty('play_number'))
        obj.playNumber = ApiClient.convertToType(data['play_number'], 'Number');
      if (data.hasOwnProperty('offense'))
        obj.offense = ApiClient.convertToType(data['offense'], 'String');
      if (data.hasOwnProperty('offense_conference'))
        obj.offenseConference = ApiClient.convertToType(data['offense_conference'], 'String');
      if (data.hasOwnProperty('offense_score'))
        obj.offenseScore = ApiClient.convertToType(data['offense_score'], 'Number');
      if (data.hasOwnProperty('defense'))
        obj.defense = ApiClient.convertToType(data['defense'], 'String');
      if (data.hasOwnProperty('home'))
        obj.home = ApiClient.convertToType(data['home'], 'String');
      if (data.hasOwnProperty('away'))
        obj.away = ApiClient.convertToType(data['away'], 'String');
      if (data.hasOwnProperty('defense_conference'))
        obj.defenseConference = ApiClient.convertToType(data['defense_conference'], 'String');
      if (data.hasOwnProperty('defense_score'))
        obj.defenseScore = ApiClient.convertToType(data['defense_score'], 'Number');
      if (data.hasOwnProperty('period'))
        obj.period = ApiClient.convertToType(data['period'], 'Number');
      if (data.hasOwnProperty('clock'))
        obj.clock = DriveStartTime.constructFromObject(data['clock']);
      if (data.hasOwnProperty('offense_timeouts'))
        obj.offenseTimeouts = ApiClient.convertToType(data['offense_timeouts'], 'Number');
      if (data.hasOwnProperty('defense_timeouts'))
        obj.defenseTimeouts = ApiClient.convertToType(data['defense_timeouts'], 'Number');
      if (data.hasOwnProperty('yard_line'))
        obj.yardLine = ApiClient.convertToType(data['yard_line'], 'Number');
      if (data.hasOwnProperty('yards_to_goal'))
        obj.yardsToGoal = ApiClient.convertToType(data['yards_to_goal'], 'Number');
      if (data.hasOwnProperty('down'))
        obj.down = ApiClient.convertToType(data['down'], 'Number');
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
      if (data.hasOwnProperty('yards_gained'))
        obj.yardsGained = ApiClient.convertToType(data['yards_gained'], 'Number');
      if (data.hasOwnProperty('scoring'))
        obj.scoring = ApiClient.convertToType(data['scoring'], 'Boolean');
      if (data.hasOwnProperty('play_type'))
        obj.playType = ApiClient.convertToType(data['play_type'], 'String');
      if (data.hasOwnProperty('play_text'))
        obj.playText = ApiClient.convertToType(data['play_text'], 'String');
      if (data.hasOwnProperty('ppa'))
        obj.ppa = ApiClient.convertToType(data['ppa'], 'Number');
      if (data.hasOwnProperty('wallclock'))
        obj.wallclock = ApiClient.convertToType(data['wallclock'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} driveId
   */
  exports.prototype.driveId = undefined;

  /**
   * @member {Number} gameId
   */
  exports.prototype.gameId = undefined;

  /**
   * @member {Number} driveNumber
   */
  exports.prototype.driveNumber = undefined;

  /**
   * @member {Number} playNumber
   */
  exports.prototype.playNumber = undefined;

  /**
   * @member {String} offense
   */
  exports.prototype.offense = undefined;

  /**
   * @member {String} offenseConference
   */
  exports.prototype.offenseConference = undefined;

  /**
   * @member {Number} offenseScore
   */
  exports.prototype.offenseScore = undefined;

  /**
   * @member {String} defense
   */
  exports.prototype.defense = undefined;

  /**
   * @member {String} home
   */
  exports.prototype.home = undefined;

  /**
   * @member {String} away
   */
  exports.prototype.away = undefined;

  /**
   * @member {String} defenseConference
   */
  exports.prototype.defenseConference = undefined;

  /**
   * @member {Number} defenseScore
   */
  exports.prototype.defenseScore = undefined;

  /**
   * @member {Number} period
   */
  exports.prototype.period = undefined;

  /**
   * @member {module:model/DriveStartTime} clock
   */
  exports.prototype.clock = undefined;

  /**
   * @member {Number} offenseTimeouts
   */
  exports.prototype.offenseTimeouts = undefined;

  /**
   * @member {Number} defenseTimeouts
   */
  exports.prototype.defenseTimeouts = undefined;

  /**
   * @member {Number} yardLine
   */
  exports.prototype.yardLine = undefined;

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
   * @member {Number} yardsGained
   */
  exports.prototype.yardsGained = undefined;

  /**
   * @member {Boolean} scoring
   */
  exports.prototype.scoring = undefined;

  /**
   * @member {String} playType
   */
  exports.prototype.playType = undefined;

  /**
   * @member {String} playText
   */
  exports.prototype.playText = undefined;

  /**
   * @member {Number} ppa
   */
  exports.prototype.ppa = undefined;

  /**
   * @member {String} wallclock
   */
  exports.prototype.wallclock = undefined;


  return exports;

}));
