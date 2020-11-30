/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The BoxScoreTeamsOverall model module.
 * @module model/BoxScoreTeamsOverall
 * @version 2.3.3
 */
export class BoxScoreTeamsOverall {
  /**
   * Constructs a new <code>BoxScoreTeamsOverall</code>.
   * @alias module:model/BoxScoreTeamsOverall
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxScoreTeamsOverall</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScoreTeamsOverall} obj Optional instance to populate.
   * @return {module:model/BoxScoreTeamsOverall} The populated <code>BoxScoreTeamsOverall</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxScoreTeamsOverall();
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
    }
    return obj;
  }
}

/**
 * @member {Number} total
 */
BoxScoreTeamsOverall.prototype.total = undefined;

/**
 * @member {Number} quarter1
 */
BoxScoreTeamsOverall.prototype.quarter1 = undefined;

/**
 * @member {Number} quarter2
 */
BoxScoreTeamsOverall.prototype.quarter2 = undefined;

/**
 * @member {Number} quarter3
 */
BoxScoreTeamsOverall.prototype.quarter3 = undefined;

/**
 * @member {Number} quarter4
 */
BoxScoreTeamsOverall.prototype.quarter4 = undefined;


