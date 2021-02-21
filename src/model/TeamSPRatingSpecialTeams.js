/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.4.0
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
 * The TeamSPRatingSpecialTeams model module.
 * @module model/TeamSPRatingSpecialTeams
 * @version 2.4.0
 */
export class TeamSPRatingSpecialTeams {
  /**
   * Constructs a new <code>TeamSPRatingSpecialTeams</code>.
   * @alias module:model/TeamSPRatingSpecialTeams
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamSPRatingSpecialTeams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamSPRatingSpecialTeams} obj Optional instance to populate.
   * @return {module:model/TeamSPRatingSpecialTeams} The populated <code>TeamSPRatingSpecialTeams</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamSPRatingSpecialTeams();
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} rating
 */
TeamSPRatingSpecialTeams.prototype.rating = undefined;


