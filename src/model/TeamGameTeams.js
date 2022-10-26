/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.11
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.28
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TeamGameStats'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TeamGameStats'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.TeamGameTeams = factory(root.cfb.ApiClient, root.cfb.TeamGameStats);
  }
}(this, function(ApiClient, TeamGameStats) {
  'use strict';

  /**
   * The TeamGameTeams model module.
   * @module model/TeamGameTeams
   * @version 4.4.11
   */

  /**
   * Constructs a new <code>TeamGameTeams</code>.
   * @alias module:model/TeamGameTeams
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TeamGameTeams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamGameTeams} obj Optional instance to populate.
   * @return {module:model/TeamGameTeams} The populated <code>TeamGameTeams</code> instance.
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
      if (data.hasOwnProperty('stats'))
        obj.stats = ApiClient.convertToType(data['stats'], [TeamGameStats]);
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
   * @member {Array.<module:model/TeamGameStats>} stats
   */
  exports.prototype.stats = undefined;


  return exports;

}));
