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
 * The GamePPAOffense model module.
 * @module model/GamePPAOffense
 * @version 1.24.0
 */
export class GamePPAOffense {
  /**
   * Constructs a new <code>GamePPAOffense</code>.
   * @alias module:model/GamePPAOffense
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GamePPAOffense</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GamePPAOffense} obj Optional instance to populate.
   * @return {module:model/GamePPAOffense} The populated <code>GamePPAOffense</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GamePPAOffense();
      if (data.hasOwnProperty('overall'))
        obj.overall = ApiClient.convertToType(data['overall'], 'Number');
      if (data.hasOwnProperty('passing'))
        obj.passing = ApiClient.convertToType(data['passing'], 'Number');
      if (data.hasOwnProperty('rushing'))
        obj.rushing = ApiClient.convertToType(data['rushing'], 'Number');
      if (data.hasOwnProperty('firstDown'))
        obj.firstDown = ApiClient.convertToType(data['firstDown'], 'Number');
      if (data.hasOwnProperty('secondDown'))
        obj.secondDown = ApiClient.convertToType(data['secondDown'], 'Number');
      if (data.hasOwnProperty('thirdDown'))
        obj.thirdDown = ApiClient.convertToType(data['thirdDown'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} overall
 */
GamePPAOffense.prototype.overall = undefined;

/**
 * @member {Number} passing
 */
GamePPAOffense.prototype.passing = undefined;

/**
 * @member {Number} rushing
 */
GamePPAOffense.prototype.rushing = undefined;

/**
 * @member {Number} firstDown
 */
GamePPAOffense.prototype.firstDown = undefined;

/**
 * @member {Number} secondDown
 */
GamePPAOffense.prototype.secondDown = undefined;

/**
 * @member {Number} thirdDown
 */
GamePPAOffense.prototype.thirdDown = undefined;


