/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.5
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';
import {PlayerGameAthletes} from './PlayerGameAthletes';

/**
 * The PlayerGameTypes model module.
 * @module model/PlayerGameTypes
 * @version 2.2.5
 */
export class PlayerGameTypes {
  /**
   * Constructs a new <code>PlayerGameTypes</code>.
   * @alias module:model/PlayerGameTypes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayerGameTypes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerGameTypes} obj Optional instance to populate.
   * @return {module:model/PlayerGameTypes} The populated <code>PlayerGameTypes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerGameTypes();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('athletes'))
        obj.athletes = ApiClient.convertToType(data['athletes'], [PlayerGameAthletes]);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
PlayerGameTypes.prototype.name = undefined;

/**
 * @member {Array.<module:model/PlayerGameAthletes>} athletes
 */
PlayerGameTypes.prototype.athletes = undefined;


