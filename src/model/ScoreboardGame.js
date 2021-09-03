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
    root.cfb.ScoreboardGame = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ScoreboardGame model module.
   * @module model/ScoreboardGame
   * @version 4.1.8
   */

  /**
   * Constructs a new <code>ScoreboardGame</code>.
   * @alias module:model/ScoreboardGame
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScoreboardGame</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScoreboardGame} obj Optional instance to populate.
   * @return {module:model/ScoreboardGame} The populated <code>ScoreboardGame</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'String');
      if (data.hasOwnProperty('tv'))
        obj.tv = ApiClient.convertToType(data['tv'], 'String');
      if (data.hasOwnProperty('neutralSite'))
        obj.neutralSite = ApiClient.convertToType(data['neutralSite'], 'Boolean');
      if (data.hasOwnProperty('conferenceGame'))
        obj.conferenceGame = ApiClient.convertToType(data['conferenceGame'], 'Boolean');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('period'))
        obj.period = ApiClient.convertToType(data['period'], 'Number');
      if (data.hasOwnProperty('clock'))
        obj.clock = ApiClient.convertToType(data['clock'], 'String');
      if (data.hasOwnProperty('venue'))
        obj.venue = ApiClient.convertToType(data['venue'], Object);
      if (data.hasOwnProperty('homeTeam'))
        obj.homeTeam = ApiClient.convertToType(data['homeTeam'], Object);
      if (data.hasOwnProperty('awayTeam'))
        obj.awayTeam = ApiClient.convertToType(data['awayTeam'], Object);
      if (data.hasOwnProperty('weather'))
        obj.weather = ApiClient.convertToType(data['weather'], Object);
      if (data.hasOwnProperty('betting'))
        obj.betting = ApiClient.convertToType(data['betting'], Object);
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} startDate
   */
  exports.prototype.startDate = undefined;

  /**
   * @member {String} tv
   */
  exports.prototype.tv = undefined;

  /**
   * @member {Boolean} neutralSite
   */
  exports.prototype.neutralSite = undefined;

  /**
   * @member {Boolean} conferenceGame
   */
  exports.prototype.conferenceGame = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {Number} period
   */
  exports.prototype.period = undefined;

  /**
   * @member {String} clock
   */
  exports.prototype.clock = undefined;

  /**
   * @member {Object} venue
   */
  exports.prototype.venue = undefined;

  /**
   * @member {Object} homeTeam
   */
  exports.prototype.homeTeam = undefined;

  /**
   * @member {Object} awayTeam
   */
  exports.prototype.awayTeam = undefined;

  /**
   * @member {Object} weather
   */
  exports.prototype.weather = undefined;

  /**
   * @member {Object} betting
   */
  exports.prototype.betting = undefined;


  return exports;

}));