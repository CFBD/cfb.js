/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.9
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

/**
 * The BoxScoreTeamsScoringOpportunities model module.
 * @module model/BoxScoreTeamsScoringOpportunities
 * @version 2.2.9
 */
export class BoxScoreTeamsScoringOpportunities {
  /**
   * Constructs a new <code>BoxScoreTeamsScoringOpportunities</code>.
   * @alias module:model/BoxScoreTeamsScoringOpportunities
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BoxScoreTeamsScoringOpportunities</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScoreTeamsScoringOpportunities} obj Optional instance to populate.
   * @return {module:model/BoxScoreTeamsScoringOpportunities} The populated <code>BoxScoreTeamsScoringOpportunities</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoxScoreTeamsScoringOpportunities();
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('opportunities'))
        obj.opportunities = ApiClient.convertToType(data['opportunities'], 'Number');
      if (data.hasOwnProperty('points'))
        obj.points = ApiClient.convertToType(data['points'], 'Number');
      if (data.hasOwnProperty('pointsPerOpportunity'))
        obj.pointsPerOpportunity = ApiClient.convertToType(data['pointsPerOpportunity'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} team
 */
BoxScoreTeamsScoringOpportunities.prototype.team = undefined;

/**
 * @member {Number} opportunities
 */
BoxScoreTeamsScoringOpportunities.prototype.opportunities = undefined;

/**
 * @member {Number} points
 */
BoxScoreTeamsScoringOpportunities.prototype.points = undefined;

/**
 * @member {Number} pointsPerOpportunity
 */
BoxScoreTeamsScoringOpportunities.prototype.pointsPerOpportunity = undefined;


