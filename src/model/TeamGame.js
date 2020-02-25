/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.0
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
import {TeamGameTeams} from './TeamGameTeams';

/**
 * The TeamGame model module.
 * @module model/TeamGame
 * @version 1.24.0
 */
export class TeamGame {
  /**
   * Constructs a new <code>TeamGame</code>.
   * @alias module:model/TeamGame
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamGame</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamGame} obj Optional instance to populate.
   * @return {module:model/TeamGame} The populated <code>TeamGame</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamGame();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('teams'))
        obj.teams = ApiClient.convertToType(data['teams'], [TeamGameTeams]);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
TeamGame.prototype.id = undefined;

/**
 * @member {Array.<module:model/TeamGameTeams>} teams
 */
TeamGame.prototype.teams = undefined;

