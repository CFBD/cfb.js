/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.8
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';
import {AdvancedGameStatOffense} from './AdvancedGameStatOffense';

/**
 * The AdvancedGameStat model module.
 * @module model/AdvancedGameStat
 * @version 1.24.8
 */
export class AdvancedGameStat {
  /**
   * Constructs a new <code>AdvancedGameStat</code>.
   * @alias module:model/AdvancedGameStat
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AdvancedGameStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvancedGameStat} obj Optional instance to populate.
   * @return {module:model/AdvancedGameStat} The populated <code>AdvancedGameStat</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AdvancedGameStat();
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
}

/**
 * @member {Number} gameId
 */
AdvancedGameStat.prototype.gameId = undefined;

/**
 * @member {Number} season
 */
AdvancedGameStat.prototype.season = undefined;

/**
 * @member {Number} week
 */
AdvancedGameStat.prototype.week = undefined;

/**
 * @member {String} team
 */
AdvancedGameStat.prototype.team = undefined;

/**
 * @member {String} opponent
 */
AdvancedGameStat.prototype.opponent = undefined;

/**
 * @member {module:model/AdvancedGameStatOffense} offense
 */
AdvancedGameStat.prototype.offense = undefined;

/**
 * @member {module:model/AdvancedGameStatOffense} defense
 */
AdvancedGameStat.prototype.defense = undefined;


