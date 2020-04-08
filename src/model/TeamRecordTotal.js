/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.25.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The TeamRecordTotal model module.
 * @module model/TeamRecordTotal
 * @version 1.25.0
 */
export class TeamRecordTotal {
  /**
   * Constructs a new <code>TeamRecordTotal</code>.
   * @alias module:model/TeamRecordTotal
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamRecordTotal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamRecordTotal} obj Optional instance to populate.
   * @return {module:model/TeamRecordTotal} The populated <code>TeamRecordTotal</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamRecordTotal();
      if (data.hasOwnProperty('games'))
        obj.games = ApiClient.convertToType(data['games'], 'Number');
      if (data.hasOwnProperty('wins'))
        obj.wins = ApiClient.convertToType(data['wins'], 'Number');
      if (data.hasOwnProperty('losses'))
        obj.losses = ApiClient.convertToType(data['losses'], 'Number');
      if (data.hasOwnProperty('ties'))
        obj.ties = ApiClient.convertToType(data['ties'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} games
 */
TeamRecordTotal.prototype.games = undefined;

/**
 * @member {Number} wins
 */
TeamRecordTotal.prototype.wins = undefined;

/**
 * @member {Number} losses
 */
TeamRecordTotal.prototype.losses = undefined;

/**
 * @member {Number} ties
 */
TeamRecordTotal.prototype.ties = undefined;


