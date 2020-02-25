/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.2
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

/**
 * The TeamMatchupGames model module.
 * @module model/TeamMatchupGames
 * @version 1.24.2
 */
export class TeamMatchupGames {
  /**
   * Constructs a new <code>TeamMatchupGames</code>.
   * @alias module:model/TeamMatchupGames
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamMatchupGames</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamMatchupGames} obj Optional instance to populate.
   * @return {module:model/TeamMatchupGames} The populated <code>TeamMatchupGames</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamMatchupGames();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('week'))
        obj.week = ApiClient.convertToType(data['week'], 'Number');
      if (data.hasOwnProperty('season_type'))
        obj.seasonType = ApiClient.convertToType(data['season_type'], 'String');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'String');
      if (data.hasOwnProperty('neutralSite'))
        obj.neutralSite = ApiClient.convertToType(data['neutralSite'], 'Boolean');
      if (data.hasOwnProperty('venue'))
        obj.venue = ApiClient.convertToType(data['venue'], 'String');
      if (data.hasOwnProperty('homeTeam'))
        obj.homeTeam = ApiClient.convertToType(data['homeTeam'], 'String');
      if (data.hasOwnProperty('homeScore'))
        obj.homeScore = ApiClient.convertToType(data['homeScore'], 'Number');
      if (data.hasOwnProperty('awayTeam'))
        obj.awayTeam = ApiClient.convertToType(data['awayTeam'], 'String');
      if (data.hasOwnProperty('awayScore'))
        obj.awayScore = ApiClient.convertToType(data['awayScore'], 'Number');
      if (data.hasOwnProperty('winner'))
        obj.winner = ApiClient.convertToType(data['winner'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} season
 */
TeamMatchupGames.prototype.season = undefined;

/**
 * @member {Number} week
 */
TeamMatchupGames.prototype.week = undefined;

/**
 * @member {String} seasonType
 */
TeamMatchupGames.prototype.seasonType = undefined;

/**
 * @member {String} _date
 */
TeamMatchupGames.prototype._date = undefined;

/**
 * @member {Boolean} neutralSite
 */
TeamMatchupGames.prototype.neutralSite = undefined;

/**
 * @member {String} venue
 */
TeamMatchupGames.prototype.venue = undefined;

/**
 * @member {String} homeTeam
 */
TeamMatchupGames.prototype.homeTeam = undefined;

/**
 * @member {Number} homeScore
 */
TeamMatchupGames.prototype.homeScore = undefined;

/**
 * @member {String} awayTeam
 */
TeamMatchupGames.prototype.awayTeam = undefined;

/**
 * @member {Number} awayScore
 */
TeamMatchupGames.prototype.awayScore = undefined;

/**
 * @member {String} winner
 */
TeamMatchupGames.prototype.winner = undefined;


