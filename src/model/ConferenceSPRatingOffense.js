/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.4.1
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
 * The ConferenceSPRatingOffense model module.
 * @module model/ConferenceSPRatingOffense
 * @version 2.4.1
 */
export class ConferenceSPRatingOffense {
  /**
   * Constructs a new <code>ConferenceSPRatingOffense</code>.
   * @alias module:model/ConferenceSPRatingOffense
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ConferenceSPRatingOffense</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConferenceSPRatingOffense} obj Optional instance to populate.
   * @return {module:model/ConferenceSPRatingOffense} The populated <code>ConferenceSPRatingOffense</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConferenceSPRatingOffense();
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Number');
      if (data.hasOwnProperty('explosiveness'))
        obj.explosiveness = ApiClient.convertToType(data['explosiveness'], 'Number');
      if (data.hasOwnProperty('rushing'))
        obj.rushing = ApiClient.convertToType(data['rushing'], 'Number');
      if (data.hasOwnProperty('passing'))
        obj.passing = ApiClient.convertToType(data['passing'], 'Number');
      if (data.hasOwnProperty('standardDowns'))
        obj.standardDowns = ApiClient.convertToType(data['standardDowns'], 'Number');
      if (data.hasOwnProperty('passingDowns'))
        obj.passingDowns = ApiClient.convertToType(data['passingDowns'], 'Number');
      if (data.hasOwnProperty('runRate'))
        obj.runRate = ApiClient.convertToType(data['runRate'], 'Number');
      if (data.hasOwnProperty('pace'))
        obj.pace = ApiClient.convertToType(data['pace'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} rating
 */
ConferenceSPRatingOffense.prototype.rating = undefined;

/**
 * @member {Number} success
 */
ConferenceSPRatingOffense.prototype.success = undefined;

/**
 * @member {Number} explosiveness
 */
ConferenceSPRatingOffense.prototype.explosiveness = undefined;

/**
 * @member {Number} rushing
 */
ConferenceSPRatingOffense.prototype.rushing = undefined;

/**
 * @member {Number} passing
 */
ConferenceSPRatingOffense.prototype.passing = undefined;

/**
 * @member {Number} standardDowns
 */
ConferenceSPRatingOffense.prototype.standardDowns = undefined;

/**
 * @member {Number} passingDowns
 */
ConferenceSPRatingOffense.prototype.passingDowns = undefined;

/**
 * @member {Number} runRate
 */
ConferenceSPRatingOffense.prototype.runRate = undefined;

/**
 * @member {Number} pace
 */
ConferenceSPRatingOffense.prototype.pace = undefined;


