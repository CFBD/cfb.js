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
 * The AdvancedGameStatOffenseStandardDowns model module.
 * @module model/AdvancedGameStatOffenseStandardDowns
 * @version 2.4.1
 */
export class AdvancedGameStatOffenseStandardDowns {
  /**
   * Constructs a new <code>AdvancedGameStatOffenseStandardDowns</code>.
   * @alias module:model/AdvancedGameStatOffenseStandardDowns
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AdvancedGameStatOffenseStandardDowns</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvancedGameStatOffenseStandardDowns} obj Optional instance to populate.
   * @return {module:model/AdvancedGameStatOffenseStandardDowns} The populated <code>AdvancedGameStatOffenseStandardDowns</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AdvancedGameStatOffenseStandardDowns();
      if (data.hasOwnProperty('ppa'))
        obj.ppa = ApiClient.convertToType(data['ppa'], 'Number');
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
AdvancedGameStatOffenseStandardDowns.prototype.ppa = undefined;

/**
 * @member {Number} successRate
 */
AdvancedGameStatOffenseStandardDowns.prototype.successRate = undefined;

/**
 * @member {Number} explosiveness
 */
AdvancedGameStatOffenseStandardDowns.prototype.explosiveness = undefined;


