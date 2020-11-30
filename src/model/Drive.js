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
import {DriveStartTime} from './DriveStartTime';

/**
 * The Drive model module.
 * @module model/Drive
 * @version 2.3.3
 */
export class Drive {
  /**
   * Constructs a new <code>Drive</code>.
   * @alias module:model/Drive
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Drive</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Drive} obj Optional instance to populate.
   * @return {module:model/Drive} The populated <code>Drive</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Drive();
      if (data.hasOwnProperty('offense'))
        obj.offense = ApiClient.convertToType(data['offense'], 'String');
      if (data.hasOwnProperty('offense_conference'))
        obj.offenseConference = ApiClient.convertToType(data['offense_conference'], 'String');
      if (data.hasOwnProperty('defense'))
        obj.defense = ApiClient.convertToType(data['defense'], 'String');
      if (data.hasOwnProperty('defense_conference'))
        obj.defenseConference = ApiClient.convertToType(data['defense_conference'], 'String');
      if (data.hasOwnProperty('game_id'))
        obj.gameId = ApiClient.convertToType(data['game_id'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('drive_number'))
        obj.driveNumber = ApiClient.convertToType(data['drive_number'], 'Number');
      if (data.hasOwnProperty('scoring'))
        obj.scoring = ApiClient.convertToType(data['scoring'], 'Boolean');
      if (data.hasOwnProperty('start_period'))
        obj.startPeriod = ApiClient.convertToType(data['start_period'], 'Number');
      if (data.hasOwnProperty('start_yardline'))
        obj.startYardline = ApiClient.convertToType(data['start_yardline'], 'Number');
      if (data.hasOwnProperty('start_yards_to_goal'))
        obj.startYardsToGoal = ApiClient.convertToType(data['start_yards_to_goal'], 'Number');
      if (data.hasOwnProperty('start_time'))
        obj.startTime = DriveStartTime.constructFromObject(data['start_time']);
      if (data.hasOwnProperty('end_period'))
        obj.endPeriod = ApiClient.convertToType(data['end_period'], 'Number');
      if (data.hasOwnProperty('end_yardline'))
        obj.endYardline = ApiClient.convertToType(data['end_yardline'], 'Number');
      if (data.hasOwnProperty('end_yards_to_goal'))
        obj.endYardsToGoal = ApiClient.convertToType(data['end_yards_to_goal'], 'Number');
      if (data.hasOwnProperty('end_time'))
        obj.endTime = DriveStartTime.constructFromObject(data['end_time']);
      if (data.hasOwnProperty('plays'))
        obj.plays = ApiClient.convertToType(data['plays'], 'Number');
      if (data.hasOwnProperty('yards'))
        obj.yards = ApiClient.convertToType(data['yards'], 'Number');
      if (data.hasOwnProperty('drive_result'))
        obj.driveResult = ApiClient.convertToType(data['drive_result'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} offense
 */
Drive.prototype.offense = undefined;

/**
 * @member {String} offenseConference
 */
Drive.prototype.offenseConference = undefined;

/**
 * @member {String} defense
 */
Drive.prototype.defense = undefined;

/**
 * @member {String} defenseConference
 */
Drive.prototype.defenseConference = undefined;

/**
 * @member {Number} gameId
 */
Drive.prototype.gameId = undefined;

/**
 * @member {Number} id
 */
Drive.prototype.id = undefined;

/**
 * @member {Number} driveNumber
 */
Drive.prototype.driveNumber = undefined;

/**
 * @member {Boolean} scoring
 */
Drive.prototype.scoring = undefined;

/**
 * @member {Number} startPeriod
 */
Drive.prototype.startPeriod = undefined;

/**
 * @member {Number} startYardline
 */
Drive.prototype.startYardline = undefined;

/**
 * @member {Number} startYardsToGoal
 */
Drive.prototype.startYardsToGoal = undefined;

/**
 * @member {module:model/DriveStartTime} startTime
 */
Drive.prototype.startTime = undefined;

/**
 * @member {Number} endPeriod
 */
Drive.prototype.endPeriod = undefined;

/**
 * @member {Number} endYardline
 */
Drive.prototype.endYardline = undefined;

/**
 * @member {Number} endYardsToGoal
 */
Drive.prototype.endYardsToGoal = undefined;

/**
 * @member {module:model/DriveStartTime} endTime
 */
Drive.prototype.endTime = undefined;

/**
 * @member {Number} plays
 */
Drive.prototype.plays = undefined;

/**
 * @member {Number} yards
 */
Drive.prototype.yards = undefined;

/**
 * @member {String} driveResult
 */
Drive.prototype.driveResult = undefined;


