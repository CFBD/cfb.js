/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.25.2
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
 * The PregameWP model module.
 * @module model/PregameWP
 * @version 1.25.2
 */
export class PregameWP {
  /**
   * Constructs a new <code>PregameWP</code>.
   * @alias module:model/PregameWP
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PregameWP</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PregameWP} obj Optional instance to populate.
   * @return {module:model/PregameWP} The populated <code>PregameWP</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PregameWP();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('seasonType'))
        obj.seasonType = ApiClient.convertToType(data['seasonType'], 'String');
      if (data.hasOwnProperty('week'))
        obj.week = ApiClient.convertToType(data['week'], 'Number');
      if (data.hasOwnProperty('gameId'))
        obj.gameId = ApiClient.convertToType(data['gameId'], 'Number');
      if (data.hasOwnProperty('homeTeam'))
        obj.homeTeam = ApiClient.convertToType(data['homeTeam'], 'String');
      if (data.hasOwnProperty('awayTeam'))
        obj.awayTeam = ApiClient.convertToType(data['awayTeam'], 'String');
      if (data.hasOwnProperty('spread'))
        obj.spread = ApiClient.convertToType(data['spread'], 'Number');
      if (data.hasOwnProperty('homeWinProb'))
        obj.homeWinProb = ApiClient.convertToType(data['homeWinProb'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} season
 */
PregameWP.prototype.season = undefined;

/**
 * @member {String} seasonType
 */
PregameWP.prototype.seasonType = undefined;

/**
 * @member {Number} week
 */
PregameWP.prototype.week = undefined;

/**
 * @member {Number} gameId
 */
PregameWP.prototype.gameId = undefined;

/**
 * @member {String} homeTeam
 */
PregameWP.prototype.homeTeam = undefined;

/**
 * @member {String} awayTeam
 */
PregameWP.prototype.awayTeam = undefined;

/**
 * @member {Number} spread
 */
PregameWP.prototype.spread = undefined;

/**
 * @member {Number} homeWinProb
 */
PregameWP.prototype.homeWinProb = undefined;


