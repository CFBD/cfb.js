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
 * The AdvancedSeasonStatOffenseRushingPlays model module.
 * @module model/AdvancedSeasonStatOffenseRushingPlays
 * @version 2.4.1
 */
export class AdvancedSeasonStatOffenseRushingPlays {
  /**
   * Constructs a new <code>AdvancedSeasonStatOffenseRushingPlays</code>.
   * @alias module:model/AdvancedSeasonStatOffenseRushingPlays
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AdvancedSeasonStatOffenseRushingPlays</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvancedSeasonStatOffenseRushingPlays} obj Optional instance to populate.
   * @return {module:model/AdvancedSeasonStatOffenseRushingPlays} The populated <code>AdvancedSeasonStatOffenseRushingPlays</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AdvancedSeasonStatOffenseRushingPlays();
      if (data.hasOwnProperty('rate'))
        obj.rate = ApiClient.convertToType(data['rate'], 'Number');
      if (data.hasOwnProperty('ppa'))
        obj.ppa = ApiClient.convertToType(data['ppa'], 'Number');
      if (data.hasOwnProperty('totalPPA'))
        obj.totalPPA = ApiClient.convertToType(data['totalPPA'], 'Number');
      if (data.hasOwnProperty('successRate'))
        obj.successRate = ApiClient.convertToType(data['successRate'], 'Number');
      if (data.hasOwnProperty('explosiveness'))
        obj.explosiveness = ApiClient.convertToType(data['explosiveness'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} rate
 */
AdvancedSeasonStatOffenseRushingPlays.prototype.rate = undefined;

/**
 * @member {Number} ppa
 */
AdvancedSeasonStatOffenseRushingPlays.prototype.ppa = undefined;

/**
 * @member {Number} totalPPA
 */
AdvancedSeasonStatOffenseRushingPlays.prototype.totalPPA = undefined;

/**
 * @member {Number} successRate
 */
AdvancedSeasonStatOffenseRushingPlays.prototype.successRate = undefined;

/**
 * @member {Number} explosiveness
 */
AdvancedSeasonStatOffenseRushingPlays.prototype.explosiveness = undefined;


