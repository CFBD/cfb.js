/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.27.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';
import {TeamMatchupGames} from './TeamMatchupGames';

/**
 * The TeamMatchup model module.
 * @module model/TeamMatchup
 * @version 1.27.1
 */
export class TeamMatchup {
  /**
   * Constructs a new <code>TeamMatchup</code>.
   * @alias module:model/TeamMatchup
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamMatchup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamMatchup} obj Optional instance to populate.
   * @return {module:model/TeamMatchup} The populated <code>TeamMatchup</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamMatchup();
      if (data.hasOwnProperty('team1'))
        obj.team1 = ApiClient.convertToType(data['team1'], 'String');
      if (data.hasOwnProperty('team2'))
        obj.team2 = ApiClient.convertToType(data['team2'], 'String');
      if (data.hasOwnProperty('startYear'))
        obj.startYear = ApiClient.convertToType(data['startYear'], 'Number');
      if (data.hasOwnProperty('endYear'))
        obj.endYear = ApiClient.convertToType(data['endYear'], 'Number');
      if (data.hasOwnProperty('team1Wins'))
        obj.team1Wins = ApiClient.convertToType(data['team1Wins'], 'Number');
      if (data.hasOwnProperty('team2Wins'))
        obj.team2Wins = ApiClient.convertToType(data['team2Wins'], 'Number');
      if (data.hasOwnProperty('ties'))
        obj.ties = ApiClient.convertToType(data['ties'], 'Number');
      if (data.hasOwnProperty('games'))
        obj.games = ApiClient.convertToType(data['games'], [TeamMatchupGames]);
    }
    return obj;
  }
}

/**
 * @member {String} team1
 */
TeamMatchup.prototype.team1 = undefined;

/**
 * @member {String} team2
 */
TeamMatchup.prototype.team2 = undefined;

/**
 * @member {Number} startYear
 */
TeamMatchup.prototype.startYear = undefined;

/**
 * @member {Number} endYear
 */
TeamMatchup.prototype.endYear = undefined;

/**
 * @member {Number} team1Wins
 */
TeamMatchup.prototype.team1Wins = undefined;

/**
 * @member {Number} team2Wins
 */
TeamMatchup.prototype.team2Wins = undefined;

/**
 * @member {Number} ties
 */
TeamMatchup.prototype.ties = undefined;

/**
 * @member {Array.<module:model/TeamMatchupGames>} games
 */
TeamMatchup.prototype.games = undefined;


