/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.4.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';
import {BoxScorePlayersAverage} from './BoxScorePlayersAverage';

/**
 * The BoxScorePlayersPpa model module.
 * @module model/BoxScorePlayersPpa
 * @version 2.4.1
 */
export class BoxScorePlayersPpa {
  /**
   * Constructs a new <code>BoxScorePlayersPpa</code>.
   * @alias module:model/BoxScorePlayersPpa
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxScorePlayersPpa</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScorePlayersPpa} obj Optional instance to populate.
   * @return {module:model/BoxScorePlayersPpa} The populated <code>BoxScorePlayersPpa</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxScorePlayersPpa();
      if (data.hasOwnProperty('player'))
        obj.player = ApiClient.convertToType(data['player'], 'String');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('average'))
        obj.average = BoxScorePlayersAverage.constructFromObject(data['average']);
      if (data.hasOwnProperty('cumulative'))
        obj.cumulative = BoxScorePlayersAverage.constructFromObject(data['cumulative']);
    }
    return obj;
  }
}

/**
 * @member {String} player
 */
BoxScorePlayersPpa.prototype.player = undefined;

/**
 * @member {String} team
 */
BoxScorePlayersPpa.prototype.team = undefined;

/**
 * @member {String} position
 */
BoxScorePlayersPpa.prototype.position = undefined;

/**
 * @member {module:model/BoxScorePlayersAverage} average
 */
BoxScorePlayersPpa.prototype.average = undefined;

/**
 * @member {module:model/BoxScorePlayersAverage} cumulative
 */
BoxScorePlayersPpa.prototype.cumulative = undefined;


