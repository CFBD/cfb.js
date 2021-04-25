/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\").
 *
 * OpenAPI spec version: 3.3.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The DraftTeam model module.
 * @module model/DraftTeam
 * @version 3.3.1
 */
export class DraftTeam {
  /**
   * Constructs a new <code>DraftTeam</code>.
   * @alias module:model/DraftTeam
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DraftTeam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DraftTeam} obj Optional instance to populate.
   * @return {module:model/DraftTeam} The populated <code>DraftTeam</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DraftTeam();
      if (data.hasOwnProperty('location'))
        obj.location = ApiClient.convertToType(data['location'], 'String');
      if (data.hasOwnProperty('nickname'))
        obj.nickname = ApiClient.convertToType(data['nickname'], 'String');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('logo'))
        obj.logo = ApiClient.convertToType(data['logo'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} location
 */
DraftTeam.prototype.location = undefined;

/**
 * @member {String} nickname
 */
DraftTeam.prototype.nickname = undefined;

/**
 * @member {String} displayName
 */
DraftTeam.prototype.displayName = undefined;

/**
 * @member {String} logo
 */
DraftTeam.prototype.logo = undefined;


