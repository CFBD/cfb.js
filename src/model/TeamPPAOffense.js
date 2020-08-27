/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.10
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';
import {TeamPPAOffenseCumulative} from './TeamPPAOffenseCumulative';

/**
 * The TeamPPAOffense model module.
 * @module model/TeamPPAOffense
 * @version 2.2.10
 */
export class TeamPPAOffense {
  /**
   * Constructs a new <code>TeamPPAOffense</code>.
   * @alias module:model/TeamPPAOffense
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamPPAOffense</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamPPAOffense} obj Optional instance to populate.
   * @return {module:model/TeamPPAOffense} The populated <code>TeamPPAOffense</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamPPAOffense();
      if (data.hasOwnProperty('overall'))
        obj.overall = ApiClient.convertToType(data['overall'], 'Number');
      if (data.hasOwnProperty('passing'))
        obj.passing = ApiClient.convertToType(data['passing'], 'Number');
      if (data.hasOwnProperty('rushing'))
        obj.rushing = ApiClient.convertToType(data['rushing'], 'Number');
      if (data.hasOwnProperty('firstDown'))
        obj.firstDown = ApiClient.convertToType(data['firstDown'], 'Number');
      if (data.hasOwnProperty('secondDown'))
        obj.secondDown = ApiClient.convertToType(data['secondDown'], 'Number');
      if (data.hasOwnProperty('thirdDown'))
        obj.thirdDown = ApiClient.convertToType(data['thirdDown'], 'Number');
      if (data.hasOwnProperty('cumulative'))
        obj.cumulative = TeamPPAOffenseCumulative.constructFromObject(data['cumulative']);
    }
    return obj;
  }
}

/**
 * @member {Number} overall
 */
TeamPPAOffense.prototype.overall = undefined;

/**
 * @member {Number} passing
 */
TeamPPAOffense.prototype.passing = undefined;

/**
 * @member {Number} rushing
 */
TeamPPAOffense.prototype.rushing = undefined;

/**
 * @member {Number} firstDown
 */
TeamPPAOffense.prototype.firstDown = undefined;

/**
 * @member {Number} secondDown
 */
TeamPPAOffense.prototype.secondDown = undefined;

/**
 * @member {Number} thirdDown
 */
TeamPPAOffense.prototype.thirdDown = undefined;

/**
 * @member {module:model/TeamPPAOffenseCumulative} cumulative
 */
TeamPPAOffense.prototype.cumulative = undefined;


