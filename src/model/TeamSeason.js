/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.13
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.22
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
    root.cfb.TeamSeason = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TeamSeason model module.
   * @module model/TeamSeason
   * @version 4.1.13
   */

  /**
   * Constructs a new <code>TeamSeason</code>.
   * @alias module:model/TeamSeason
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TeamSeason</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamSeason} obj Optional instance to populate.
   * @return {module:model/TeamSeason} The populated <code>TeamSeason</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('school'))
        obj.school = ApiClient.convertToType(data['school'], 'String');
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'String');
      if (data.hasOwnProperty('games'))
        obj.games = ApiClient.convertToType(data['games'], 'Number');
      if (data.hasOwnProperty('wins'))
        obj.wins = ApiClient.convertToType(data['wins'], 'Number');
      if (data.hasOwnProperty('losses'))
        obj.losses = ApiClient.convertToType(data['losses'], 'Number');
      if (data.hasOwnProperty('ties'))
        obj.ties = ApiClient.convertToType(data['ties'], 'Number');
      if (data.hasOwnProperty('preseason_rank'))
        obj.preseasonRank = ApiClient.convertToType(data['preseason_rank'], 'Number');
      if (data.hasOwnProperty('postseason_rank'))
        obj.postseasonRank = ApiClient.convertToType(data['postseason_rank'], 'Number');
      if (data.hasOwnProperty('srs'))
        obj.srs = ApiClient.convertToType(data['srs'], 'Number');
      if (data.hasOwnProperty('sp_overall'))
        obj.spOverall = ApiClient.convertToType(data['sp_overall'], 'Number');
      if (data.hasOwnProperty('sp_offense'))
        obj.spOffense = ApiClient.convertToType(data['sp_offense'], 'Number');
      if (data.hasOwnProperty('sp_defense'))
        obj.spDefense = ApiClient.convertToType(data['sp_defense'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} school
   */
  exports.prototype.school = undefined;

  /**
   * @member {String} year
   */
  exports.prototype.year = undefined;

  /**
   * @member {Number} games
   */
  exports.prototype.games = undefined;

  /**
   * @member {Number} wins
   */
  exports.prototype.wins = undefined;

  /**
   * @member {Number} losses
   */
  exports.prototype.losses = undefined;

  /**
   * @member {Number} ties
   */
  exports.prototype.ties = undefined;

  /**
   * Rank in the AP preseason poll
   * @member {Number} preseasonRank
   */
  exports.prototype.preseasonRank = undefined;

  /**
   * Final ranking in the AP poll
   * @member {Number} postseasonRank
   */
  exports.prototype.postseasonRank = undefined;

  /**
   * Final SRS rankings
   * @member {Number} srs
   */
  exports.prototype.srs = undefined;

  /**
   * Final overall SP+ rating
   * @member {Number} spOverall
   */
  exports.prototype.spOverall = undefined;

  /**
   * Final SP+ offensive rating
   * @member {Number} spOffense
   */
  exports.prototype.spOffense = undefined;

  /**
   * Final SP+ defensive rating
   * @member {Number} spDefense
   */
  exports.prototype.spDefense = undefined;


  return exports;

}));
