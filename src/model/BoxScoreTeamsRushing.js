/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.25.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The BoxScoreTeamsRushing model module.
 * @module model/BoxScoreTeamsRushing
 * @version 1.25.0
 */
export class BoxScoreTeamsRushing {
  /**
   * Constructs a new <code>BoxScoreTeamsRushing</code>.
   * @alias module:model/BoxScoreTeamsRushing
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxScoreTeamsRushing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScoreTeamsRushing} obj Optional instance to populate.
   * @return {module:model/BoxScoreTeamsRushing} The populated <code>BoxScoreTeamsRushing</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxScoreTeamsRushing();
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('powerSuccess'))
        obj.powerSuccess = ApiClient.convertToType(data['powerSuccess'], 'Number');
      if (data.hasOwnProperty('stuffRate'))
        obj.stuffRate = ApiClient.convertToType(data['stuffRate'], 'Number');
      if (data.hasOwnProperty('lineYards'))
        obj.lineYards = ApiClient.convertToType(data['lineYards'], 'Number');
      if (data.hasOwnProperty('lineYardsAverage'))
        obj.lineYardsAverage = ApiClient.convertToType(data['lineYardsAverage'], 'Number');
      if (data.hasOwnProperty('secondLevelYards'))
        obj.secondLevelYards = ApiClient.convertToType(data['secondLevelYards'], 'Number');
      if (data.hasOwnProperty('secondLevelYardsAverage'))
        obj.secondLevelYardsAverage = ApiClient.convertToType(data['secondLevelYardsAverage'], 'Number');
      if (data.hasOwnProperty('openFieldYards'))
        obj.openFieldYards = ApiClient.convertToType(data['openFieldYards'], 'Number');
      if (data.hasOwnProperty('openFieldYardsAverage'))
        obj.openFieldYardsAverage = ApiClient.convertToType(data['openFieldYardsAverage'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} team
 */
BoxScoreTeamsRushing.prototype.team = undefined;

/**
 * @member {Number} powerSuccess
 */
BoxScoreTeamsRushing.prototype.powerSuccess = undefined;

/**
 * @member {Number} stuffRate
 */
BoxScoreTeamsRushing.prototype.stuffRate = undefined;

/**
 * @member {Number} lineYards
 */
BoxScoreTeamsRushing.prototype.lineYards = undefined;

/**
 * @member {Number} lineYardsAverage
 */
BoxScoreTeamsRushing.prototype.lineYardsAverage = undefined;

/**
 * @member {Number} secondLevelYards
 */
BoxScoreTeamsRushing.prototype.secondLevelYards = undefined;

/**
 * @member {Number} secondLevelYardsAverage
 */
BoxScoreTeamsRushing.prototype.secondLevelYardsAverage = undefined;

/**
 * @member {Number} openFieldYards
 */
BoxScoreTeamsRushing.prototype.openFieldYards = undefined;

/**
 * @member {Number} openFieldYardsAverage
 */
BoxScoreTeamsRushing.prototype.openFieldYardsAverage = undefined;


