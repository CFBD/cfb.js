/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.10
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

/**
 * The TeamSeason model module.
 * @module model/TeamSeason
 * @version 2.2.10
 */
export class TeamSeason {
  /**
   * Constructs a new <code>TeamSeason</code>.
   * @alias module:model/TeamSeason
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamSeason</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamSeason} obj Optional instance to populate.
   * @return {module:model/TeamSeason} The populated <code>TeamSeason</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamSeason();
      if (data.hasOwnProperty('school'))
        obj.school = ApiClient.convertToType(data['school'], 'String');
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'String');
      if (data.hasOwnProperty('games'))
        obj.games = ApiClient.convertToType(data['games'], 'Number');
      if (data.hasOwnProperty('wins'))
        obj.wins = ApiClient.convertToType(data['wins'], 'Number');
      if (data.hasOwnProperty('losses'))
        obj.losses = ApiClient.convertToType(data['losses'], 'Number');
      if (data.hasOwnProperty('ties'))
        obj.ties = ApiClient.convertToType(data['ties'], 'Number');
      if (data.hasOwnProperty('preseason_rank'))
        obj.preseasonRank = ApiClient.convertToType(data['preseason_rank'], 'Number');
      if (data.hasOwnProperty('postseason_rank'))
        obj.postseasonRank = ApiClient.convertToType(data['postseason_rank'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} school
 */
TeamSeason.prototype.school = undefined;

/**
 * @member {String} year
 */
TeamSeason.prototype.year = undefined;

/**
 * @member {Number} games
 */
TeamSeason.prototype.games = undefined;

/**
 * @member {Number} wins
 */
TeamSeason.prototype.wins = undefined;

/**
 * @member {Number} losses
 */
TeamSeason.prototype.losses = undefined;

/**
 * @member {Number} ties
 */
TeamSeason.prototype.ties = undefined;

/**
 * Rank in the AP preseason poll
 * @member {Number} preseasonRank
 */
TeamSeason.prototype.preseasonRank = undefined;

/**
 * Final ranking in the AP poll
 * @member {Number} postseasonRank
 */
TeamSeason.prototype.postseasonRank = undefined;


