/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.5.2
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PlayerGameCategories'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PlayerGameCategories'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.PlayerGameTeams = factory(root.cfb.ApiClient, root.cfb.PlayerGameCategories);
  }
}(this, function(ApiClient, PlayerGameCategories) {
  'use strict';

  /**
   * The PlayerGameTeams model module.
   * @module model/PlayerGameTeams
   * @version 4.5.2
   */

  /**
   * Constructs a new <code>PlayerGameTeams</code>.
   * @alias module:model/PlayerGameTeams
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PlayerGameTeams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerGameTeams} obj Optional instance to populate.
   * @return {module:model/PlayerGameTeams} The populated <code>PlayerGameTeams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('school'))
        obj.school = ApiClient.convertToType(data['school'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('homeAway'))
        obj.homeAway = ApiClient.convertToType(data['homeAway'], 'String');
      if (data.hasOwnProperty('points'))
        obj.points = ApiClient.convertToType(data['points'], 'Number');
      if (data.hasOwnProperty('categories'))
        obj.categories = ApiClient.convertToType(data['categories'], [PlayerGameCategories]);
    }
    return obj;
  }

  /**
   * @member {String} school
   */
  exports.prototype.school = undefined;

  /**
   * @member {String} conference
   */
  exports.prototype.conference = undefined;

  /**
   * @member {String} homeAway
   */
  exports.prototype.homeAway = undefined;

  /**
   * @member {Number} points
   */
  exports.prototype.points = undefined;

  /**
   * @member {Array.<module:model/PlayerGameCategories>} categories
   */
  exports.prototype.categories = undefined;


  return exports;

}));
