/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.3.2
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.24
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.PositionGroupRecruitingRating = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PositionGroupRecruitingRating model module.
   * @module model/PositionGroupRecruitingRating
   * @version 4.3.2
   */

  /**
   * Constructs a new <code>PositionGroupRecruitingRating</code>.
   * @alias module:model/PositionGroupRecruitingRating
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PositionGroupRecruitingRating</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PositionGroupRecruitingRating} obj Optional instance to populate.
   * @return {module:model/PositionGroupRecruitingRating} The populated <code>PositionGroupRecruitingRating</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
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

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {String} conference
   */
  exports.prototype.conference = undefined;

  /**
   * @member {String} positionGroup
   */
  exports.prototype.positionGroup = undefined;

  /**
   * @member {Number} averageRating
   */
  exports.prototype.averageRating = undefined;

  /**
   * @member {Number} totalRating
   */
  exports.prototype.totalRating = undefined;

  /**
   * @member {Number} commits
   */
  exports.prototype.commits = undefined;

  /**
   * @member {Number} averageStars
   */
  exports.prototype.averageStars = undefined;


  return exports;

}));
