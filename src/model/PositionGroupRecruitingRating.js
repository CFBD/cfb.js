/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 3.4.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The PositionGroupRecruitingRating model module.
 * @module model/PositionGroupRecruitingRating
 * @version 3.4.0
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
      if (data.hasOwnProperty('positionGroup'))
        obj.positionGroup = ApiClient.convertToType(data['positionGroup'], 'String');
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
 * @member {String} positionGroup
 */
PositionGroupRecruitingRating.prototype.positionGroup = undefined;

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


