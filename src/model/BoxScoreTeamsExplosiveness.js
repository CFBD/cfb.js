/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.3.2
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
import {BoxScoreTeamsOverall} from './BoxScoreTeamsOverall';

/**
 * The BoxScoreTeamsExplosiveness model module.
 * @module model/BoxScoreTeamsExplosiveness
 * @version 2.3.2
 */
export class BoxScoreTeamsExplosiveness {
  /**
   * Constructs a new <code>BoxScoreTeamsExplosiveness</code>.
   * @alias module:model/BoxScoreTeamsExplosiveness
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxScoreTeamsExplosiveness</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScoreTeamsExplosiveness} obj Optional instance to populate.
   * @return {module:model/BoxScoreTeamsExplosiveness} The populated <code>BoxScoreTeamsExplosiveness</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxScoreTeamsExplosiveness();
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('overall'))
        obj.overall = BoxScoreTeamsOverall.constructFromObject(data['overall']);
    }
    return obj;
  }
}

/**
 * @member {String} team
 */
BoxScoreTeamsExplosiveness.prototype.team = undefined;

/**
 * @member {module:model/BoxScoreTeamsOverall} overall
 */
BoxScoreTeamsExplosiveness.prototype.overall = undefined;


