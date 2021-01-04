/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.3.4
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
import {TeamRecordTotal} from './TeamRecordTotal';

/**
 * The TeamRecord model module.
 * @module model/TeamRecord
 * @version 2.3.4
 */
export class TeamRecord {
  /**
   * Constructs a new <code>TeamRecord</code>.
   * @alias module:model/TeamRecord
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamRecord} obj Optional instance to populate.
   * @return {module:model/TeamRecord} The populated <code>TeamRecord</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamRecord();
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('division'))
        obj.division = ApiClient.convertToType(data['division'], 'String');
      if (data.hasOwnProperty('total'))
        obj.total = TeamRecordTotal.constructFromObject(data['total']);
      if (data.hasOwnProperty('conferenceGames'))
        obj.conferenceGames = TeamRecordTotal.constructFromObject(data['conferenceGames']);
      if (data.hasOwnProperty('homeGames'))
        obj.homeGames = TeamRecordTotal.constructFromObject(data['homeGames']);
      if (data.hasOwnProperty('awayGames'))
        obj.awayGames = TeamRecordTotal.constructFromObject(data['awayGames']);
    }
    return obj;
  }
}

/**
 * @member {Number} year
 */
TeamRecord.prototype.year = undefined;

/**
 * @member {String} team
 */
TeamRecord.prototype.team = undefined;

/**
 * @member {String} conference
 */
TeamRecord.prototype.conference = undefined;

/**
 * @member {String} division
 */
TeamRecord.prototype.division = undefined;

/**
 * @member {module:model/TeamRecordTotal} total
 */
TeamRecord.prototype.total = undefined;

/**
 * @member {module:model/TeamRecordTotal} conferenceGames
 */
TeamRecord.prototype.conferenceGames = undefined;

/**
 * @member {module:model/TeamRecordTotal} homeGames
 */
TeamRecord.prototype.homeGames = undefined;

/**
 * @member {module:model/TeamRecordTotal} awayGames
 */
TeamRecord.prototype.awayGames = undefined;


