/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.4.0
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

/**
 * The BoxScoreTeamsFieldPosition model module.
 * @module model/BoxScoreTeamsFieldPosition
 * @version 2.4.0
 */
export class BoxScoreTeamsFieldPosition {
  /**
   * Constructs a new <code>BoxScoreTeamsFieldPosition</code>.
   * @alias module:model/BoxScoreTeamsFieldPosition
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxScoreTeamsFieldPosition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScoreTeamsFieldPosition} obj Optional instance to populate.
   * @return {module:model/BoxScoreTeamsFieldPosition} The populated <code>BoxScoreTeamsFieldPosition</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxScoreTeamsFieldPosition();
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('averageStart'))
        obj.averageStart = ApiClient.convertToType(data['averageStart'], 'Number');
      if (data.hasOwnProperty('averageStartingPredictedPoints'))
        obj.averageStartingPredictedPoints = ApiClient.convertToType(data['averageStartingPredictedPoints'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} team
 */
BoxScoreTeamsFieldPosition.prototype.team = undefined;

/**
 * @member {Number} averageStart
 */
BoxScoreTeamsFieldPosition.prototype.averageStart = undefined;

/**
 * @member {Number} averageStartingPredictedPoints
 */
BoxScoreTeamsFieldPosition.prototype.averageStartingPredictedPoints = undefined;


