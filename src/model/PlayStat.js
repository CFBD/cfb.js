/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.12
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';
import {DriveStartTime} from './DriveStartTime';

/**
 * The PlayStat model module.
 * @module model/PlayStat
 * @version 2.2.12
 */
export class PlayStat {
  /**
   * Constructs a new <code>PlayStat</code>.
   * @alias module:model/PlayStat
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayStat} obj Optional instance to populate.
   * @return {module:model/PlayStat} The populated <code>PlayStat</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayStat();
      if (data.hasOwnProperty('gameId'))
        obj.gameId = ApiClient.convertToType(data['gameId'], 'Number');
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('week'))
        obj.week = ApiClient.convertToType(data['week'], 'Number');
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
}

/**
 * @member {Number} gameId
 */
PlayStat.prototype.gameId = undefined;

/**
 * @member {Number} season
 */
PlayStat.prototype.season = undefined;

/**
 * @member {Number} week
 */
PlayStat.prototype.week = undefined;

/**
 * @member {String} opponent
 */
PlayStat.prototype.opponent = undefined;

/**
 * @member {Number} teamScore
 */
PlayStat.prototype.teamScore = undefined;

/**
 * @member {Number} opponentScore
 */
PlayStat.prototype.opponentScore = undefined;

/**
 * @member {Number} driveId
 */
PlayStat.prototype.driveId = undefined;

/**
 * @member {Number} playId
 */
PlayStat.prototype.playId = undefined;

/**
 * @member {Number} period
 */
PlayStat.prototype.period = undefined;

/**
 * @member {module:model/DriveStartTime} clock
 */
PlayStat.prototype.clock = undefined;

/**
 * @member {Number} yardsToGoal
 */
PlayStat.prototype.yardsToGoal = undefined;

/**
 * @member {Number} down
 */
PlayStat.prototype.down = undefined;

/**
 * @member {Number} distance
 */
PlayStat.prototype.distance = undefined;

/**
 * @member {Number} athleteId
 */
PlayStat.prototype.athleteId = undefined;

/**
 * @member {String} athleteName
 */
PlayStat.prototype.athleteName = undefined;

/**
 * @member {String} statType
 */
PlayStat.prototype.statType = undefined;

/**
 * @member {Number} stat
 */
PlayStat.prototype.stat = undefined;


