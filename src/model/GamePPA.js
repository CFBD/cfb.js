/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\").
 *
 * OpenAPI spec version: 3.3.0
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
 * The GamePPA model module.
 * @module model/GamePPA
 * @version 3.3.0
 */
export class GamePPA {
  /**
   * Constructs a new <code>GamePPA</code>.
   * @alias module:model/GamePPA
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GamePPA</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GamePPA} obj Optional instance to populate.
   * @return {module:model/GamePPA} The populated <code>GamePPA</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GamePPA();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('week'))
        obj.week = ApiClient.convertToType(data['week'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('opponnent'))
        obj.opponnent = ApiClient.convertToType(data['opponnent'], 'String');
      if (data.hasOwnProperty('offense'))
        obj.offense = ApiClient.convertToType(data['offense'], Object);
      if (data.hasOwnProperty('defense'))
        obj.defense = ApiClient.convertToType(data['defense'], Object);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
GamePPA.prototype.id = undefined;

/**
 * @member {Number} season
 */
GamePPA.prototype.season = undefined;

/**
 * @member {Number} week
 */
GamePPA.prototype.week = undefined;

/**
 * @member {String} team
 */
GamePPA.prototype.team = undefined;

/**
 * @member {String} conference
 */
GamePPA.prototype.conference = undefined;

/**
 * @member {String} opponnent
 */
GamePPA.prototype.opponnent = undefined;

/**
 * @member {Object} offense
 */
GamePPA.prototype.offense = undefined;

/**
 * @member {Object} defense
 */
GamePPA.prototype.defense = undefined;


