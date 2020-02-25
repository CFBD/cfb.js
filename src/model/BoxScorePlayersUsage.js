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
 * The BoxScorePlayersUsage model module.
 * @module model/BoxScorePlayersUsage
 * @version 1.24.2
 */
export class BoxScorePlayersUsage {
  /**
   * Constructs a new <code>BoxScorePlayersUsage</code>.
   * @alias module:model/BoxScorePlayersUsage
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxScorePlayersUsage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScorePlayersUsage} obj Optional instance to populate.
   * @return {module:model/BoxScorePlayersUsage} The populated <code>BoxScorePlayersUsage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxScorePlayersUsage();
      if (data.hasOwnProperty('player'))
        obj.player = ApiClient.convertToType(data['player'], 'String');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('quarter1'))
        obj.quarter1 = ApiClient.convertToType(data['quarter1'], 'Number');
      if (data.hasOwnProperty('quarter2'))
        obj.quarter2 = ApiClient.convertToType(data['quarter2'], 'Number');
      if (data.hasOwnProperty('quarter3'))
        obj.quarter3 = ApiClient.convertToType(data['quarter3'], 'Number');
      if (data.hasOwnProperty('quarter4'))
        obj.quarter4 = ApiClient.convertToType(data['quarter4'], 'Number');
      if (data.hasOwnProperty('rushing'))
        obj.rushing = ApiClient.convertToType(data['rushing'], 'Number');
      if (data.hasOwnProperty('passing'))
        obj.passing = ApiClient.convertToType(data['passing'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} player
 */
BoxScorePlayersUsage.prototype.player = undefined;

/**
 * @member {String} team
 */
BoxScorePlayersUsage.prototype.team = undefined;

/**
 * @member {String} position
 */
BoxScorePlayersUsage.prototype.position = undefined;

/**
 * @member {Number} total
 */
BoxScorePlayersUsage.prototype.total = undefined;

/**
 * @member {Number} quarter1
 */
BoxScorePlayersUsage.prototype.quarter1 = undefined;

/**
 * @member {Number} quarter2
 */
BoxScorePlayersUsage.prototype.quarter2 = undefined;

/**
 * @member {Number} quarter3
 */
BoxScorePlayersUsage.prototype.quarter3 = undefined;

/**
 * @member {Number} quarter4
 */
BoxScorePlayersUsage.prototype.quarter4 = undefined;

/**
 * @member {Number} rushing
 */
BoxScorePlayersUsage.prototype.rushing = undefined;

/**
 * @member {Number} passing
 */
BoxScorePlayersUsage.prototype.passing = undefined;


