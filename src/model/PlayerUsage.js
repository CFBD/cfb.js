/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.25.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';
import {PlayerUsageUsage} from './PlayerUsageUsage';

/**
 * The PlayerUsage model module.
 * @module model/PlayerUsage
 * @version 1.25.0
 */
export class PlayerUsage {
  /**
   * Constructs a new <code>PlayerUsage</code>.
   * @alias module:model/PlayerUsage
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayerUsage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerUsage} obj Optional instance to populate.
   * @return {module:model/PlayerUsage} The populated <code>PlayerUsage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerUsage();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('usage'))
        obj.usage = PlayerUsageUsage.constructFromObject(data['usage']);
    }
    return obj;
  }
}

/**
 * @member {Number} season
 */
PlayerUsage.prototype.season = undefined;

/**
 * @member {Number} id
 */
PlayerUsage.prototype.id = undefined;

/**
 * @member {String} name
 */
PlayerUsage.prototype.name = undefined;

/**
 * @member {String} position
 */
PlayerUsage.prototype.position = undefined;

/**
 * @member {String} team
 */
PlayerUsage.prototype.team = undefined;

/**
 * @member {String} conference
 */
PlayerUsage.prototype.conference = undefined;

/**
 * @member {module:model/PlayerUsageUsage} usage
 */
PlayerUsage.prototype.usage = undefined;


