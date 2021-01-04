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
import {TeamSPRatingDefense} from './TeamSPRatingDefense';
import {TeamSPRatingOffense} from './TeamSPRatingOffense';
import {TeamSPRatingSpecialTeams} from './TeamSPRatingSpecialTeams';

/**
 * The ConferenceSPRating model module.
 * @module model/ConferenceSPRating
 * @version 2.3.4
 */
export class ConferenceSPRating {
  /**
   * Constructs a new <code>ConferenceSPRating</code>.
   * @alias module:model/ConferenceSPRating
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ConferenceSPRating</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConferenceSPRating} obj Optional instance to populate.
   * @return {module:model/ConferenceSPRating} The populated <code>ConferenceSPRating</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConferenceSPRating();
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
      if (data.hasOwnProperty('secondOrderWins'))
        obj.secondOrderWins = ApiClient.convertToType(data['secondOrderWins'], 'Number');
      if (data.hasOwnProperty('sos'))
        obj.sos = ApiClient.convertToType(data['sos'], 'Number');
      if (data.hasOwnProperty('offense'))
        obj.offense = TeamSPRatingOffense.constructFromObject(data['offense']);
      if (data.hasOwnProperty('defense'))
        obj.defense = TeamSPRatingDefense.constructFromObject(data['defense']);
      if (data.hasOwnProperty('specialTeams'))
        obj.specialTeams = TeamSPRatingSpecialTeams.constructFromObject(data['specialTeams']);
    }
    return obj;
  }
}

/**
 * @member {Number} year
 */
ConferenceSPRating.prototype.year = undefined;

/**
 * @member {String} conference
 */
ConferenceSPRating.prototype.conference = undefined;

/**
 * @member {Number} rating
 */
ConferenceSPRating.prototype.rating = undefined;

/**
 * @member {Number} secondOrderWins
 */
ConferenceSPRating.prototype.secondOrderWins = undefined;

/**
 * @member {Number} sos
 */
ConferenceSPRating.prototype.sos = undefined;

/**
 * @member {module:model/TeamSPRatingOffense} offense
 */
ConferenceSPRating.prototype.offense = undefined;

/**
 * @member {module:model/TeamSPRatingDefense} defense
 */
ConferenceSPRating.prototype.defense = undefined;

/**
 * @member {module:model/TeamSPRatingSpecialTeams} specialTeams
 */
ConferenceSPRating.prototype.specialTeams = undefined;


