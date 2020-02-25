/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.2
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
 * The Player model module.
 * @module model/Player
 * @version 1.24.2
 */
export class Player {
  /**
   * Constructs a new <code>Player</code>.
   * @alias module:model/Player
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Player</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Player} obj Optional instance to populate.
   * @return {module:model/Player} The populated <code>Player</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Player();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('first_name'))
        obj.firstName = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('last_name'))
        obj.lastName = ApiClient.convertToType(data['last_name'], 'String');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
      if (data.hasOwnProperty('jersey'))
        obj.jersey = ApiClient.convertToType(data['jersey'], 'Number');
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Player.prototype.id = undefined;

/**
 * @member {String} firstName
 */
Player.prototype.firstName = undefined;

/**
 * @member {String} lastName
 */
Player.prototype.lastName = undefined;

/**
 * @member {Number} height
 */
Player.prototype.height = undefined;

/**
 * @member {Number} weight
 */
Player.prototype.weight = undefined;

/**
 * @member {Number} jersey
 */
Player.prototype.jersey = undefined;

/**
 * @member {Number} year
 */
Player.prototype.year = undefined;

/**
 * @member {String} position
 */
Player.prototype.position = undefined;

/**
 * @member {String} city
 */
Player.prototype.city = undefined;

/**
 * @member {String} state
 */
Player.prototype.state = undefined;

/**
 * @member {String} country
 */
Player.prototype.country = undefined;


