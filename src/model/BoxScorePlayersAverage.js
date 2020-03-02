/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.8
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
 * The BoxScorePlayersAverage model module.
 * @module model/BoxScorePlayersAverage
 * @version 1.24.8
 */
export class BoxScorePlayersAverage {
  /**
   * Constructs a new <code>BoxScorePlayersAverage</code>.
   * @alias module:model/BoxScorePlayersAverage
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxScorePlayersAverage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScorePlayersAverage} obj Optional instance to populate.
   * @return {module:model/BoxScorePlayersAverage} The populated <code>BoxScorePlayersAverage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxScorePlayersAverage();
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
 * @member {Number} total
 */
BoxScorePlayersAverage.prototype.total = undefined;

/**
 * @member {Number} quarter1
 */
BoxScorePlayersAverage.prototype.quarter1 = undefined;

/**
 * @member {Number} quarter2
 */
BoxScorePlayersAverage.prototype.quarter2 = undefined;

/**
 * @member {Number} quarter3
 */
BoxScorePlayersAverage.prototype.quarter3 = undefined;

/**
 * @member {Number} quarter4
 */
BoxScorePlayersAverage.prototype.quarter4 = undefined;

/**
 * @member {Number} rushing
 */
BoxScorePlayersAverage.prototype.rushing = undefined;

/**
 * @member {Number} passing
 */
BoxScorePlayersAverage.prototype.passing = undefined;


