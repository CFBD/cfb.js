/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.5
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
    root.cfb.Game = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Game model module.
   * @module model/Game
   * @version 4.1.5
   */

  /**
   * Constructs a new <code>Game</code>.
   * @alias module:model/Game
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Game</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Game} obj Optional instance to populate.
   * @return {module:model/Game} The populated <code>Game</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('week'))
        obj.week = ApiClient.convertToType(data['week'], 'Number');
      if (data.hasOwnProperty('season_type'))
        obj.seasonType = ApiClient.convertToType(data['season_type'], 'String');
      if (data.hasOwnProperty('start_date'))
        obj.startDate = ApiClient.convertToType(data['start_date'], 'String');
      if (data.hasOwnProperty('start_time_tbd'))
        obj.startTimeTbd = ApiClient.convertToType(data['start_time_tbd'], 'Boolean');
      if (data.hasOwnProperty('neutral_site'))
        obj.neutralSite = ApiClient.convertToType(data['neutral_site'], 'Boolean');
      if (data.hasOwnProperty('conference_game'))
        obj.conferenceGame = ApiClient.convertToType(data['conference_game'], 'Boolean');
      if (data.hasOwnProperty('attendance'))
        obj.attendance = ApiClient.convertToType(data['attendance'], 'Number');
      if (data.hasOwnProperty('venue_id'))
        obj.venueId = ApiClient.convertToType(data['venue_id'], 'Number');
      if (data.hasOwnProperty('venue'))
        obj.venue = ApiClient.convertToType(data['venue'], 'String');
      if (data.hasOwnProperty('home_id'))
        obj.homeId = ApiClient.convertToType(data['home_id'], 'Number');
      if (data.hasOwnProperty('home_team'))
        obj.homeTeam = ApiClient.convertToType(data['home_team'], 'String');
      if (data.hasOwnProperty('home_conference'))
        obj.homeConference = ApiClient.convertToType(data['home_conference'], 'String');
      if (data.hasOwnProperty('home_points'))
        obj.homePoints = ApiClient.convertToType(data['home_points'], 'Number');
      if (data.hasOwnProperty('home_line_scores'))
        obj.homeLineScores = ApiClient.convertToType(data['home_line_scores'], ['Number']);
      if (data.hasOwnProperty('home_post_win_prob'))
        obj.homePostWinProb = ApiClient.convertToType(data['home_post_win_prob'], 'Number');
      if (data.hasOwnProperty('away_id'))
        obj.awayId = ApiClient.convertToType(data['away_id'], 'Number');
      if (data.hasOwnProperty('away_team'))
        obj.awayTeam = ApiClient.convertToType(data['away_team'], 'String');
      if (data.hasOwnProperty('away_conference'))
        obj.awayConference = ApiClient.convertToType(data['away_conference'], 'String');
      if (data.hasOwnProperty('away_points'))
        obj.awayPoints = ApiClient.convertToType(data['away_points'], 'Number');
      if (data.hasOwnProperty('away_line_scores'))
        obj.awayLineScores = ApiClient.convertToType(data['away_line_scores'], ['Number']);
      if (data.hasOwnProperty('away_post_win_prob'))
        obj.awayPostWinProb = ApiClient.convertToType(data['away_post_win_prob'], 'Number');
      if (data.hasOwnProperty('excitement_index'))
        obj.excitementIndex = ApiClient.convertToType(data['excitement_index'], 'Number');
      if (data.hasOwnProperty('highlights'))
        obj.highlights = ApiClient.convertToType(data['highlights'], 'String');
      if (data.hasOwnProperty('notes'))
        obj.notes = ApiClient.convertToType(data['notes'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} season
   */
  exports.prototype.season = undefined;

  /**
   * @member {Number} week
   */
  exports.prototype.week = undefined;

  /**
   * @member {String} seasonType
   */
  exports.prototype.seasonType = undefined;

  /**
   * @member {String} startDate
   */
  exports.prototype.startDate = undefined;

  /**
   * @member {Boolean} startTimeTbd
   */
  exports.prototype.startTimeTbd = undefined;

  /**
   * @member {Boolean} neutralSite
   */
  exports.prototype.neutralSite = undefined;

  /**
   * @member {Boolean} conferenceGame
   */
  exports.prototype.conferenceGame = undefined;

  /**
   * @member {Number} attendance
   */
  exports.prototype.attendance = undefined;

  /**
   * @member {Number} venueId
   */
  exports.prototype.venueId = undefined;

  /**
   * @member {String} venue
   */
  exports.prototype.venue = undefined;

  /**
   * @member {Number} homeId
   */
  exports.prototype.homeId = undefined;

  /**
   * @member {String} homeTeam
   */
  exports.prototype.homeTeam = undefined;

  /**
   * @member {String} homeConference
   */
  exports.prototype.homeConference = undefined;

  /**
   * @member {Number} homePoints
   */
  exports.prototype.homePoints = undefined;

  /**
   * @member {Array.<Number>} homeLineScores
   */
  exports.prototype.homeLineScores = undefined;

  /**
   * @member {Number} homePostWinProb
   */
  exports.prototype.homePostWinProb = undefined;

  /**
   * @member {Number} awayId
   */
  exports.prototype.awayId = undefined;

  /**
   * @member {String} awayTeam
   */
  exports.prototype.awayTeam = undefined;

  /**
   * @member {String} awayConference
   */
  exports.prototype.awayConference = undefined;

  /**
   * @member {Number} awayPoints
   */
  exports.prototype.awayPoints = undefined;

  /**
   * @member {Array.<Number>} awayLineScores
   */
  exports.prototype.awayLineScores = undefined;

  /**
   * @member {Number} awayPostWinProb
   */
  exports.prototype.awayPostWinProb = undefined;

  /**
   * @member {Number} excitementIndex
   */
  exports.prototype.excitementIndex = undefined;

  /**
   * @member {String} highlights
   */
  exports.prototype.highlights = undefined;

  /**
   * @member {String} notes
   */
  exports.prototype.notes = undefined;


  return exports;

}));
