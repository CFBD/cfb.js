/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.25.2
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
 * The PositionGroupRecruitingRating model module.
 * @module model/PositionGroupRecruitingRating
 * @version 1.25.2
 */
export class PositionGroupRecruitingRating {
  /**
   * Constructs a new <code>PositionGroupRecruitingRating</code>.
   * @alias module:model/PositionGroupRecruitingRating
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PositionGroupRecruitingRating</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PositionGroupRecruitingRating} obj Optional instance to populate.
   * @return {module:model/PositionGroupRecruitingRating} The populated <code>PositionGroupRecruitingRating</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PositionGroupRecruitingRating();
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('positiionGroup'))
        obj.positiionGroup = ApiClient.convertToType(data['positiionGroup'], 'String');
      if (data.hasOwnProperty('averageRating'))
        obj.averageRating = ApiClient.convertToType(data['averageRating'], 'Number');
      if (data.hasOwnProperty('totalRating'))
        obj.totalRating = ApiClient.convertToType(data['totalRating'], 'Number');
      if (data.hasOwnProperty('commits'))
        obj.commits = ApiClient.convertToType(data['commits'], 'Number');
      if (data.hasOwnProperty('averageStars'))
        obj.averageStars = ApiClient.convertToType(data['averageStars'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} team
 */
PositionGroupRecruitingRating.prototype.team = undefined;

/**
 * @member {String} conference
 */
PositionGroupRecruitingRating.prototype.conference = undefined;

/**
 * @member {String} positiionGroup
 */
PositionGroupRecruitingRating.prototype.positiionGroup = undefined;

/**
 * @member {Number} averageRating
 */
PositionGroupRecruitingRating.prototype.averageRating = undefined;

/**
 * @member {Number} totalRating
 */
PositionGroupRecruitingRating.prototype.totalRating = undefined;

/**
 * @member {Number} commits
 */
PositionGroupRecruitingRating.prototype.commits = undefined;

/**
 * @member {Number} averageStars
 */
PositionGroupRecruitingRating.prototype.averageStars = undefined;


