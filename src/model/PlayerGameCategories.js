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
import {PlayerGameTypes} from './PlayerGameTypes';

/**
 * The PlayerGameCategories model module.
 * @module model/PlayerGameCategories
 * @version 2.3.4
 */
export class PlayerGameCategories {
  /**
   * Constructs a new <code>PlayerGameCategories</code>.
   * @alias module:model/PlayerGameCategories
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayerGameCategories</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerGameCategories} obj Optional instance to populate.
   * @return {module:model/PlayerGameCategories} The populated <code>PlayerGameCategories</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerGameCategories();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('types'))
        obj.types = ApiClient.convertToType(data['types'], [PlayerGameTypes]);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
PlayerGameCategories.prototype.name = undefined;

/**
 * @member {Array.<module:model/PlayerGameTypes>} types
 */
PlayerGameCategories.prototype.types = undefined;


