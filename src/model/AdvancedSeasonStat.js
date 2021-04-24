/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\").
 *
 * OpenAPI spec version: 3.3.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The AdvancedSeasonStat model module.
 * @module model/AdvancedSeasonStat
 * @version 3.3.0
 */
export class AdvancedSeasonStat {
  /**
   * Constructs a new <code>AdvancedSeasonStat</code>.
   * @alias module:model/AdvancedSeasonStat
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AdvancedSeasonStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvancedSeasonStat} obj Optional instance to populate.
   * @return {module:model/AdvancedSeasonStat} The populated <code>AdvancedSeasonStat</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AdvancedSeasonStat();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('offense'))
        obj.offense = ApiClient.convertToType(data['offense'], Object);
      if (data.hasOwnProperty('defense'))
        obj.defense = ApiClient.convertToType(data['defense'], Object);
    }
    return obj;
  }
}

/**
 * @member {Number} season
 */
AdvancedSeasonStat.prototype.season = undefined;

/**
 * @member {String} team
 */
AdvancedSeasonStat.prototype.team = undefined;

/**
 * @member {String} conference
 */
AdvancedSeasonStat.prototype.conference = undefined;

/**
 * @member {Object} offense
 */
AdvancedSeasonStat.prototype.offense = undefined;

/**
 * @member {Object} defense
 */
AdvancedSeasonStat.prototype.defense = undefined;


