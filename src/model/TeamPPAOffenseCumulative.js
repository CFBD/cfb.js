/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.2
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
 * The TeamPPAOffenseCumulative model module.
 * @module model/TeamPPAOffenseCumulative
 * @version 2.2.2
 */
export class TeamPPAOffenseCumulative {
  /**
   * Constructs a new <code>TeamPPAOffenseCumulative</code>.
   * @alias module:model/TeamPPAOffenseCumulative
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamPPAOffenseCumulative</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamPPAOffenseCumulative} obj Optional instance to populate.
   * @return {module:model/TeamPPAOffenseCumulative} The populated <code>TeamPPAOffenseCumulative</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamPPAOffenseCumulative();
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('passing'))
        obj.passing = ApiClient.convertToType(data['passing'], 'Number');
      if (data.hasOwnProperty('rushing'))
        obj.rushing = ApiClient.convertToType(data['rushing'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} total
 */
TeamPPAOffenseCumulative.prototype.total = undefined;

/**
 * @member {Number} passing
 */
TeamPPAOffenseCumulative.prototype.passing = undefined;

/**
 * @member {Number} rushing
 */
TeamPPAOffenseCumulative.prototype.rushing = undefined;


