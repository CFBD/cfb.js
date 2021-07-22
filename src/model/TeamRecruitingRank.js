/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.2
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
    root.cfb.TeamRecruitingRank = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TeamRecruitingRank model module.
   * @module model/TeamRecruitingRank
   * @version 4.1.2
   */

  /**
   * Constructs a new <code>TeamRecruitingRank</code>.
   * @alias module:model/TeamRecruitingRank
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TeamRecruitingRank</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamRecruitingRank} obj Optional instance to populate.
   * @return {module:model/TeamRecruitingRank} The populated <code>TeamRecruitingRank</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('rank'))
        obj.rank = ApiClient.convertToType(data['rank'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('points'))
        obj.points = ApiClient.convertToType(data['points'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} year
   */
  exports.prototype.year = undefined;

  /**
   * @member {Number} rank
   */
  exports.prototype.rank = undefined;

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {Number} points
   */
  exports.prototype.points = undefined;


  return exports;

}));
