/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.2.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.23
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
    root.cfb.Drive = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Drive model module.
   * @module model/Drive
   * @version 4.2.1
   */

  /**
   * Constructs a new <code>Drive</code>.
   * @alias module:model/Drive
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Drive</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Drive} obj Optional instance to populate.
   * @return {module:model/Drive} The populated <code>Drive</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('offense'))
        obj.offense = ApiClient.convertToType(data['offense'], 'String');
      if (data.hasOwnProperty('offense_conference'))
        obj.offenseConference = ApiClient.convertToType(data['offense_conference'], 'String');
      if (data.hasOwnProperty('defense'))
        obj.defense = ApiClient.convertToType(data['defense'], 'String');
      if (data.hasOwnProperty('defense_conference'))
        obj.defenseConference = ApiClient.convertToType(data['defense_conference'], 'String');
      if (data.hasOwnProperty('game_id'))
        obj.gameId = ApiClient.convertToType(data['game_id'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('drive_number'))
        obj.driveNumber = ApiClient.convertToType(data['drive_number'], 'Number');
      if (data.hasOwnProperty('scoring'))
        obj.scoring = ApiClient.convertToType(data['scoring'], 'Boolean');
      if (data.hasOwnProperty('start_period'))
        obj.startPeriod = ApiClient.convertToType(data['start_period'], 'Number');
      if (data.hasOwnProperty('start_yardline'))
        obj.startYardline = ApiClient.convertToType(data['start_yardline'], 'Number');
      if (data.hasOwnProperty('start_yards_to_goal'))
        obj.startYardsToGoal = ApiClient.convertToType(data['start_yards_to_goal'], 'Number');
      if (data.hasOwnProperty('start_time'))
        obj.startTime = ApiClient.convertToType(data['start_time'], Object);
      if (data.hasOwnProperty('end_period'))
        obj.endPeriod = ApiClient.convertToType(data['end_period'], 'Number');
      if (data.hasOwnProperty('end_yardline'))
        obj.endYardline = ApiClient.convertToType(data['end_yardline'], 'Number');
      if (data.hasOwnProperty('end_yards_to_goal'))
        obj.endYardsToGoal = ApiClient.convertToType(data['end_yards_to_goal'], 'Number');
      if (data.hasOwnProperty('end_time'))
        obj.endTime = ApiClient.convertToType(data['end_time'], Object);
      if (data.hasOwnProperty('plays'))
        obj.plays = ApiClient.convertToType(data['plays'], 'Number');
      if (data.hasOwnProperty('yards'))
        obj.yards = ApiClient.convertToType(data['yards'], 'Number');
      if (data.hasOwnProperty('drive_result'))
        obj.driveResult = ApiClient.convertToType(data['drive_result'], 'String');
      if (data.hasOwnProperty('is_home_offense'))
        obj.isHomeOffense = ApiClient.convertToType(data['is_home_offense'], 'Boolean');
      if (data.hasOwnProperty('start_offense_score'))
        obj.startOffenseScore = ApiClient.convertToType(data['start_offense_score'], 'Number');
      if (data.hasOwnProperty('start_defense_score'))
        obj.startDefenseScore = ApiClient.convertToType(data['start_defense_score'], 'Number');
      if (data.hasOwnProperty('end_offense_score'))
        obj.endOffenseScore = ApiClient.convertToType(data['end_offense_score'], 'Number');
      if (data.hasOwnProperty('end_defense_score'))
        obj.endDefenseScore = ApiClient.convertToType(data['end_defense_score'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} offense
   */
  exports.prototype.offense = undefined;

  /**
   * @member {String} offenseConference
   */
  exports.prototype.offenseConference = undefined;

  /**
   * @member {String} defense
   */
  exports.prototype.defense = undefined;

  /**
   * @member {String} defenseConference
   */
  exports.prototype.defenseConference = undefined;

  /**
   * @member {Number} gameId
   */
  exports.prototype.gameId = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} driveNumber
   */
  exports.prototype.driveNumber = undefined;

  /**
   * @member {Boolean} scoring
   */
  exports.prototype.scoring = undefined;

  /**
   * @member {Number} startPeriod
   */
  exports.prototype.startPeriod = undefined;

  /**
   * @member {Number} startYardline
   */
  exports.prototype.startYardline = undefined;

  /**
   * @member {Number} startYardsToGoal
   */
  exports.prototype.startYardsToGoal = undefined;

  /**
   * @member {Object} startTime
   */
  exports.prototype.startTime = undefined;

  /**
   * @member {Number} endPeriod
   */
  exports.prototype.endPeriod = undefined;

  /**
   * @member {Number} endYardline
   */
  exports.prototype.endYardline = undefined;

  /**
   * @member {Number} endYardsToGoal
   */
  exports.prototype.endYardsToGoal = undefined;

  /**
   * @member {Object} endTime
   */
  exports.prototype.endTime = undefined;

  /**
   * @member {Number} plays
   */
  exports.prototype.plays = undefined;

  /**
   * @member {Number} yards
   */
  exports.prototype.yards = undefined;

  /**
   * @member {String} driveResult
   */
  exports.prototype.driveResult = undefined;

  /**
   * @member {Boolean} isHomeOffense
   */
  exports.prototype.isHomeOffense = undefined;

  /**
   * @member {Number} startOffenseScore
   */
  exports.prototype.startOffenseScore = undefined;

  /**
   * @member {Number} startDefenseScore
   */
  exports.prototype.startDefenseScore = undefined;

  /**
   * @member {Number} endOffenseScore
   */
  exports.prototype.endOffenseScore = undefined;

  /**
   * @member {Number} endDefenseScore
   */
  exports.prototype.endDefenseScore = undefined;


  return exports;

}));
