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

/**
 * The AdvancedGameStatOffenseRushingPlays model module.
 * @module model/AdvancedGameStatOffenseRushingPlays
 * @version 1.24.0
 */
export class AdvancedGameStatOffenseRushingPlays {
  /**
   * Constructs a new <code>AdvancedGameStatOffenseRushingPlays</code>.
   * @alias module:model/AdvancedGameStatOffenseRushingPlays
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AdvancedGameStatOffenseRushingPlays</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvancedGameStatOffenseRushingPlays} obj Optional instance to populate.
   * @return {module:model/AdvancedGameStatOffenseRushingPlays} The populated <code>AdvancedGameStatOffenseRushingPlays</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AdvancedGameStatOffenseRushingPlays();
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
 * @member {Number} ppa
 */
AdvancedGameStatOffenseRushingPlays.prototype.ppa = undefined;

/**
 * @member {Number} totalPPA
 */
AdvancedGameStatOffenseRushingPlays.prototype.totalPPA = undefined;

/**
 * @member {Number} successRate
 */
AdvancedGameStatOffenseRushingPlays.prototype.successRate = undefined;

/**
 * @member {Number} explosiveness
 */
AdvancedGameStatOffenseRushingPlays.prototype.explosiveness = undefined;

