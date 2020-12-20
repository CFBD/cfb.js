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
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The ReturningProduction model module.
 * @module model/ReturningProduction
 * @version 2.3.4
 */
export class ReturningProduction {
  /**
   * Constructs a new <code>ReturningProduction</code>.
   * @alias module:model/ReturningProduction
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ReturningProduction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReturningProduction} obj Optional instance to populate.
   * @return {module:model/ReturningProduction} The populated <code>ReturningProduction</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReturningProduction();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('totalPPA'))
        obj.totalPPA = ApiClient.convertToType(data['totalPPA'], 'Number');
      if (data.hasOwnProperty('totalPassingPPA'))
        obj.totalPassingPPA = ApiClient.convertToType(data['totalPassingPPA'], 'Number');
      if (data.hasOwnProperty('totalReceivingPPA'))
        obj.totalReceivingPPA = ApiClient.convertToType(data['totalReceivingPPA'], 'Number');
      if (data.hasOwnProperty('totalRushingPPA'))
        obj.totalRushingPPA = ApiClient.convertToType(data['totalRushingPPA'], 'Number');
      if (data.hasOwnProperty('percentPPA'))
        obj.percentPPA = ApiClient.convertToType(data['percentPPA'], 'Number');
      if (data.hasOwnProperty('percentPassingPPA'))
        obj.percentPassingPPA = ApiClient.convertToType(data['percentPassingPPA'], 'Number');
      if (data.hasOwnProperty('percentReceivingPPA'))
        obj.percentReceivingPPA = ApiClient.convertToType(data['percentReceivingPPA'], 'Number');
      if (data.hasOwnProperty('percentRushingPPA'))
        obj.percentRushingPPA = ApiClient.convertToType(data['percentRushingPPA'], 'Number');
      if (data.hasOwnProperty('usage'))
        obj.usage = ApiClient.convertToType(data['usage'], 'Number');
      if (data.hasOwnProperty('passingUsage'))
        obj.passingUsage = ApiClient.convertToType(data['passingUsage'], 'Number');
      if (data.hasOwnProperty('receivingUsage'))
        obj.receivingUsage = ApiClient.convertToType(data['receivingUsage'], 'Number');
      if (data.hasOwnProperty('rushingUsage'))
        obj.rushingUsage = ApiClient.convertToType(data['rushingUsage'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} season
 */
ReturningProduction.prototype.season = undefined;

/**
 * @member {String} team
 */
ReturningProduction.prototype.team = undefined;

/**
 * @member {String} conference
 */
ReturningProduction.prototype.conference = undefined;

/**
 * @member {Number} totalPPA
 */
ReturningProduction.prototype.totalPPA = undefined;

/**
 * @member {Number} totalPassingPPA
 */
ReturningProduction.prototype.totalPassingPPA = undefined;

/**
 * @member {Number} totalReceivingPPA
 */
ReturningProduction.prototype.totalReceivingPPA = undefined;

/**
 * @member {Number} totalRushingPPA
 */
ReturningProduction.prototype.totalRushingPPA = undefined;

/**
 * @member {Number} percentPPA
 */
ReturningProduction.prototype.percentPPA = undefined;

/**
 * @member {Number} percentPassingPPA
 */
ReturningProduction.prototype.percentPassingPPA = undefined;

/**
 * @member {Number} percentReceivingPPA
 */
ReturningProduction.prototype.percentReceivingPPA = undefined;

/**
 * @member {Number} percentRushingPPA
 */
ReturningProduction.prototype.percentRushingPPA = undefined;

/**
 * @member {Number} usage
 */
ReturningProduction.prototype.usage = undefined;

/**
 * @member {Number} passingUsage
 */
ReturningProduction.prototype.passingUsage = undefined;

/**
 * @member {Number} receivingUsage
 */
ReturningProduction.prototype.receivingUsage = undefined;

/**
 * @member {Number} rushingUsage
 */
ReturningProduction.prototype.rushingUsage = undefined;


