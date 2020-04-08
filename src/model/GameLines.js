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
import {GameLinesLines} from './GameLinesLines';

/**
 * The GameLines model module.
 * @module model/GameLines
 * @version 1.25.0
 */
export class GameLines {
  /**
   * Constructs a new <code>GameLines</code>.
   * @alias module:model/GameLines
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GameLines</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GameLines} obj Optional instance to populate.
   * @return {module:model/GameLines} The populated <code>GameLines</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GameLines();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('homeTeam'))
        obj.homeTeam = ApiClient.convertToType(data['homeTeam'], 'String');
      if (data.hasOwnProperty('homeScore'))
        obj.homeScore = ApiClient.convertToType(data['homeScore'], 'Number');
      if (data.hasOwnProperty('awayTeam'))
        obj.awayTeam = ApiClient.convertToType(data['awayTeam'], 'String');
      if (data.hasOwnProperty('awayScore'))
        obj.awayScore = ApiClient.convertToType(data['awayScore'], 'Number');
      if (data.hasOwnProperty('lines'))
        obj.lines = ApiClient.convertToType(data['lines'], [GameLinesLines]);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
GameLines.prototype.id = undefined;

/**
 * @member {String} homeTeam
 */
GameLines.prototype.homeTeam = undefined;

/**
 * @member {Number} homeScore
 */
GameLines.prototype.homeScore = undefined;

/**
 * @member {String} awayTeam
 */
GameLines.prototype.awayTeam = undefined;

/**
 * @member {Number} awayScore
 */
GameLines.prototype.awayScore = undefined;

/**
 * @member {Array.<module:model/GameLinesLines>} lines
 */
GameLines.prototype.lines = undefined;


