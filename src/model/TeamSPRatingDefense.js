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
import {TeamSPRatingDefenseHavoc} from './TeamSPRatingDefenseHavoc';

/**
 * The TeamSPRatingDefense model module.
 * @module model/TeamSPRatingDefense
 * @version 2.4.0
 */
export class TeamSPRatingDefense {
  /**
   * Constructs a new <code>TeamSPRatingDefense</code>.
   * @alias module:model/TeamSPRatingDefense
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamSPRatingDefense</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamSPRatingDefense} obj Optional instance to populate.
   * @return {module:model/TeamSPRatingDefense} The populated <code>TeamSPRatingDefense</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamSPRatingDefense();
      if (data.hasOwnProperty('ranking'))
        obj.ranking = ApiClient.convertToType(data['ranking'], 'Number');
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Number');
      if (data.hasOwnProperty('explosiveness'))
        obj.explosiveness = ApiClient.convertToType(data['explosiveness'], 'Number');
      if (data.hasOwnProperty('rushing'))
        obj.rushing = ApiClient.convertToType(data['rushing'], 'Number');
      if (data.hasOwnProperty('pasing'))
        obj.pasing = ApiClient.convertToType(data['pasing'], 'Number');
      if (data.hasOwnProperty('standardDowns'))
        obj.standardDowns = ApiClient.convertToType(data['standardDowns'], 'Number');
      if (data.hasOwnProperty('passingDowns'))
        obj.passingDowns = ApiClient.convertToType(data['passingDowns'], 'Number');
      if (data.hasOwnProperty('havoc'))
        obj.havoc = TeamSPRatingDefenseHavoc.constructFromObject(data['havoc']);
    }
    return obj;
  }
}

/**
 * @member {Number} ranking
 */
TeamSPRatingDefense.prototype.ranking = undefined;

/**
 * @member {Number} rating
 */
TeamSPRatingDefense.prototype.rating = undefined;

/**
 * @member {Number} success
 */
TeamSPRatingDefense.prototype.success = undefined;

/**
 * @member {Number} explosiveness
 */
TeamSPRatingDefense.prototype.explosiveness = undefined;

/**
 * @member {Number} rushing
 */
TeamSPRatingDefense.prototype.rushing = undefined;

/**
 * @member {Number} pasing
 */
TeamSPRatingDefense.prototype.pasing = undefined;

/**
 * @member {Number} standardDowns
 */
TeamSPRatingDefense.prototype.standardDowns = undefined;

/**
 * @member {Number} passingDowns
 */
TeamSPRatingDefense.prototype.passingDowns = undefined;

/**
 * @member {module:model/TeamSPRatingDefenseHavoc} havoc
 */
TeamSPRatingDefense.prototype.havoc = undefined;


