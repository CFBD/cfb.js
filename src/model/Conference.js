/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.13
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
 * The Conference model module.
 * @module model/Conference
 * @version 2.2.13
 */
export class Conference {
  /**
   * Constructs a new <code>Conference</code>.
   * @alias module:model/Conference
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Conference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Conference} obj Optional instance to populate.
   * @return {module:model/Conference} The populated <code>Conference</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Conference();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('short_name'))
        obj.shortName = ApiClient.convertToType(data['short_name'], 'String');
      if (data.hasOwnProperty('abbreviation'))
        obj.abbreviation = ApiClient.convertToType(data['abbreviation'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Conference.prototype.id = undefined;

/**
 * @member {String} name
 */
Conference.prototype.name = undefined;

/**
 * @member {String} shortName
 */
Conference.prototype.shortName = undefined;

/**
 * @member {String} abbreviation
 */
Conference.prototype.abbreviation = undefined;


