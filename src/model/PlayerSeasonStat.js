/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.3.4
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The PlayerSeasonStat model module.
 * @module model/PlayerSeasonStat
 * @version 2.3.4
 */
export class PlayerSeasonStat {
  /**
   * Constructs a new <code>PlayerSeasonStat</code>.
   * @alias module:model/PlayerSeasonStat
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayerSeasonStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerSeasonStat} obj Optional instance to populate.
   * @return {module:model/PlayerSeasonStat} The populated <code>PlayerSeasonStat</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerSeasonStat();
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
}

/**
 * @member {Number} season
 */
PlayerSeasonStat.prototype.season = undefined;

/**
 * @member {Number} playerId
 */
PlayerSeasonStat.prototype.playerId = undefined;

/**
 * @member {String} player
 */
PlayerSeasonStat.prototype.player = undefined;

/**
 * @member {String} team
 */
PlayerSeasonStat.prototype.team = undefined;

/**
 * @member {String} conference
 */
PlayerSeasonStat.prototype.conference = undefined;

/**
 * @member {String} category
 */
PlayerSeasonStat.prototype.category = undefined;

/**
 * @member {String} statType
 */
PlayerSeasonStat.prototype.statType = undefined;

/**
 * @member {Number} stat
 */
PlayerSeasonStat.prototype.stat = undefined;


