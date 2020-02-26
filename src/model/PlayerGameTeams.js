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
import {PlayerGameCategories} from './PlayerGameCategories';
import {PlayerGameSchool} from './PlayerGameSchool';

/**
 * The PlayerGameTeams model module.
 * @module model/PlayerGameTeams
 * @version 1.24.4
 */
export class PlayerGameTeams {
  /**
   * Constructs a new <code>PlayerGameTeams</code>.
   * @alias module:model/PlayerGameTeams
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayerGameTeams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerGameTeams} obj Optional instance to populate.
   * @return {module:model/PlayerGameTeams} The populated <code>PlayerGameTeams</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerGameTeams();
      if (data.hasOwnProperty('school'))
        obj.school = PlayerGameSchool.constructFromObject(data['school']);
      if (data.hasOwnProperty('homeAway'))
        obj.homeAway = ApiClient.convertToType(data['homeAway'], 'Boolean');
      if (data.hasOwnProperty('points'))
        obj.points = ApiClient.convertToType(data['points'], 'Number');
      if (data.hasOwnProperty('categories'))
        obj.categories = ApiClient.convertToType(data['categories'], [PlayerGameCategories]);
    }
    return obj;
  }
}

/**
 * @member {module:model/PlayerGameSchool} school
 */
PlayerGameTeams.prototype.school = undefined;

/**
 * @member {Boolean} homeAway
 */
PlayerGameTeams.prototype.homeAway = undefined;

/**
 * @member {Number} points
 */
PlayerGameTeams.prototype.points = undefined;

/**
 * @member {Array.<module:model/PlayerGameCategories>} categories
 */
PlayerGameTeams.prototype.categories = undefined;


