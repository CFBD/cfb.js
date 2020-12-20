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
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The TeamSRSRating model module.
 * @module model/TeamSRSRating
 * @version 2.3.4
 */
export class TeamSRSRating {
  /**
   * Constructs a new <code>TeamSRSRating</code>.
   * @alias module:model/TeamSRSRating
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamSRSRating</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamSRSRating} obj Optional instance to populate.
   * @return {module:model/TeamSRSRating} The populated <code>TeamSRSRating</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamSRSRating();
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('division'))
        obj.division = ApiClient.convertToType(data['division'], 'String');
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} year
 */
TeamSRSRating.prototype.year = undefined;

/**
 * @member {String} team
 */
TeamSRSRating.prototype.team = undefined;

/**
 * @member {String} conference
 */
TeamSRSRating.prototype.conference = undefined;

/**
 * @member {String} division
 */
TeamSRSRating.prototype.division = undefined;

/**
 * @member {Number} rating
 */
TeamSRSRating.prototype.rating = undefined;


