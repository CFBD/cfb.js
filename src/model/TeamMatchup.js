/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.8
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
    root.cfb.TeamMatchup = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TeamMatchup model module.
   * @module model/TeamMatchup
   * @version 4.1.8
   */

  /**
   * Constructs a new <code>TeamMatchup</code>.
   * @alias module:model/TeamMatchup
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TeamMatchup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamMatchup} obj Optional instance to populate.
   * @return {module:model/TeamMatchup} The populated <code>TeamMatchup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('team1'))
        obj.team1 = ApiClient.convertToType(data['team1'], 'String');
      if (data.hasOwnProperty('team2'))
        obj.team2 = ApiClient.convertToType(data['team2'], 'String');
      if (data.hasOwnProperty('startYear'))
        obj.startYear = ApiClient.convertToType(data['startYear'], 'Number');
      if (data.hasOwnProperty('endYear'))
        obj.endYear = ApiClient.convertToType(data['endYear'], 'Number');
      if (data.hasOwnProperty('team1Wins'))
        obj.team1Wins = ApiClient.convertToType(data['team1Wins'], 'Number');
      if (data.hasOwnProperty('team2Wins'))
        obj.team2Wins = ApiClient.convertToType(data['team2Wins'], 'Number');
      if (data.hasOwnProperty('ties'))
        obj.ties = ApiClient.convertToType(data['ties'], 'Number');
      if (data.hasOwnProperty('games'))
        obj.games = ApiClient.convertToType(data['games'], [Object]);
    }
    return obj;
  }

  /**
   * @member {String} team1
   */
  exports.prototype.team1 = undefined;

  /**
   * @member {String} team2
   */
  exports.prototype.team2 = undefined;

  /**
   * @member {Number} startYear
   */
  exports.prototype.startYear = undefined;

  /**
   * @member {Number} endYear
   */
  exports.prototype.endYear = undefined;

  /**
   * @member {Number} team1Wins
   */
  exports.prototype.team1Wins = undefined;

  /**
   * @member {Number} team2Wins
   */
  exports.prototype.team2Wins = undefined;

  /**
   * @member {Number} ties
   */
  exports.prototype.ties = undefined;

  /**
   * @member {Array.<Object>} games
   */
  exports.prototype.games = undefined;


  return exports;

}));
