/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.12
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
 * The TeamSPRatingDefenseHavoc model module.
 * @module model/TeamSPRatingDefenseHavoc
 * @version 2.2.12
 */
export class TeamSPRatingDefenseHavoc {
  /**
   * Constructs a new <code>TeamSPRatingDefenseHavoc</code>.
   * @alias module:model/TeamSPRatingDefenseHavoc
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamSPRatingDefenseHavoc</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamSPRatingDefenseHavoc} obj Optional instance to populate.
   * @return {module:model/TeamSPRatingDefenseHavoc} The populated <code>TeamSPRatingDefenseHavoc</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamSPRatingDefenseHavoc();
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('frontSeven'))
        obj.frontSeven = ApiClient.convertToType(data['frontSeven'], 'Number');
      if (data.hasOwnProperty('db'))
        obj.db = ApiClient.convertToType(data['db'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} total
 */
TeamSPRatingDefenseHavoc.prototype.total = undefined;

/**
 * @member {Number} frontSeven
 */
TeamSPRatingDefenseHavoc.prototype.frontSeven = undefined;

/**
 * @member {Number} db
 */
TeamSPRatingDefenseHavoc.prototype.db = undefined;


