/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.4
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
import {TeamPPAOffense} from './TeamPPAOffense';

/**
 * The TeamPPA model module.
 * @module model/TeamPPA
 * @version 1.24.4
 */
export class TeamPPA {
  /**
   * Constructs a new <code>TeamPPA</code>.
   * @alias module:model/TeamPPA
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamPPA</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamPPA} obj Optional instance to populate.
   * @return {module:model/TeamPPA} The populated <code>TeamPPA</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamPPA();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('offense'))
        obj.offense = TeamPPAOffense.constructFromObject(data['offense']);
      if (data.hasOwnProperty('defense'))
        obj.defense = TeamPPAOffense.constructFromObject(data['defense']);
    }
    return obj;
  }
}

/**
 * @member {Number} season
 */
TeamPPA.prototype.season = undefined;

/**
 * @member {String} team
 */
TeamPPA.prototype.team = undefined;

/**
 * @member {String} conference
 */
TeamPPA.prototype.conference = undefined;

/**
 * @member {module:model/TeamPPAOffense} offense
 */
TeamPPA.prototype.offense = undefined;

/**
 * @member {module:model/TeamPPAOffense} defense
 */
TeamPPA.prototype.defense = undefined;


