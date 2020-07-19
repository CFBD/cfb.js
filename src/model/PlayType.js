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

/**
 * The PlayType model module.
 * @module model/PlayType
 * @version 2.2.5
 */
export class PlayType {
  /**
   * Constructs a new <code>PlayType</code>.
   * @alias module:model/PlayType
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayType} obj Optional instance to populate.
   * @return {module:model/PlayType} The populated <code>PlayType</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayType();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('abbreviation'))
        obj.abbreviation = ApiClient.convertToType(data['abbreviation'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
PlayType.prototype.id = undefined;

/**
 * @member {String} text
 */
PlayType.prototype.text = undefined;

/**
 * @member {String} abbreviation
 */
PlayType.prototype.abbreviation = undefined;


