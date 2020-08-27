/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.10
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
 * The PlayerGameAthletes model module.
 * @module model/PlayerGameAthletes
 * @version 2.2.10
 */
export class PlayerGameAthletes {
  /**
   * Constructs a new <code>PlayerGameAthletes</code>.
   * @alias module:model/PlayerGameAthletes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayerGameAthletes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerGameAthletes} obj Optional instance to populate.
   * @return {module:model/PlayerGameAthletes} The populated <code>PlayerGameAthletes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerGameAthletes();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('stat'))
        obj.stat = ApiClient.convertToType(data['stat'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
PlayerGameAthletes.prototype.id = undefined;

/**
 * @member {String} name
 */
PlayerGameAthletes.prototype.name = undefined;

/**
 * @member {String} stat
 */
PlayerGameAthletes.prototype.stat = undefined;


