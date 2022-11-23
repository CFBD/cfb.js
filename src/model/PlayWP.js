/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.12
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
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
    root.cfb.PlayWP = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlayWP model module.
   * @module model/PlayWP
   * @version 4.4.12
   */

  /**
   * Constructs a new <code>PlayWP</code>.
   * @alias module:model/PlayWP
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PlayWP</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayWP} obj Optional instance to populate.
   * @return {module:model/PlayWP} The populated <code>PlayWP</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('gamesId'))
        obj.gamesId = ApiClient.convertToType(data['gamesId'], 'Number');
      if (data.hasOwnProperty('playId'))
        obj.playId = ApiClient.convertToType(data['playId'], 'Number');
      if (data.hasOwnProperty('playText'))
        obj.playText = ApiClient.convertToType(data['playText'], 'String');
      if (data.hasOwnProperty('homeId'))
        obj.homeId = ApiClient.convertToType(data['homeId'], 'Number');
      if (data.hasOwnProperty('home'))
        obj.home = ApiClient.convertToType(data['home'], 'String');
      if (data.hasOwnProperty('awayId'))
        obj.awayId = ApiClient.convertToType(data['awayId'], 'Number');
      if (data.hasOwnProperty('away'))
        obj.away = ApiClient.convertToType(data['away'], 'String');
      if (data.hasOwnProperty('spread'))
        obj.spread = ApiClient.convertToType(data['spread'], 'Number');
      if (data.hasOwnProperty('homeBall'))
        obj.homeBall = ApiClient.convertToType(data['homeBall'], 'Boolean');
      if (data.hasOwnProperty('homeScore'))
        obj.homeScore = ApiClient.convertToType(data['homeScore'], 'Number');
      if (data.hasOwnProperty('awayScore'))
        obj.awayScore = ApiClient.convertToType(data['awayScore'], 'Number');
      if (data.hasOwnProperty('timeRemaining'))
        obj.timeRemaining = ApiClient.convertToType(data['timeRemaining'], 'Number');
      if (data.hasOwnProperty('yardLine'))
        obj.yardLine = ApiClient.convertToType(data['yardLine'], 'Number');
      if (data.hasOwnProperty('down'))
        obj.down = ApiClient.convertToType(data['down'], 'Number');
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
      if (data.hasOwnProperty('homeWinProb'))
        obj.homeWinProb = ApiClient.convertToType(data['homeWinProb'], 'Number');
      if (data.hasOwnProperty('playNumber'))
        obj.playNumber = ApiClient.convertToType(data['playNumber'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} gamesId
   */
  exports.prototype.gamesId = undefined;

  /**
   * @member {Number} playId
   */
  exports.prototype.playId = undefined;

  /**
   * @member {String} playText
   */
  exports.prototype.playText = undefined;

  /**
   * @member {Number} homeId
   */
  exports.prototype.homeId = undefined;

  /**
   * @member {String} home
   */
  exports.prototype.home = undefined;

  /**
   * @member {Number} awayId
   */
  exports.prototype.awayId = undefined;

  /**
   * @member {String} away
   */
  exports.prototype.away = undefined;

  /**
   * @member {Number} spread
   */
  exports.prototype.spread = undefined;

  /**
   * @member {Boolean} homeBall
   */
  exports.prototype.homeBall = undefined;

  /**
   * @member {Number} homeScore
   */
  exports.prototype.homeScore = undefined;

  /**
   * @member {Number} awayScore
   */
  exports.prototype.awayScore = undefined;

  /**
   * @member {Number} timeRemaining
   */
  exports.prototype.timeRemaining = undefined;

  /**
   * @member {Number} yardLine
   */
  exports.prototype.yardLine = undefined;

  /**
   * @member {Number} down
   */
  exports.prototype.down = undefined;

  /**
   * @member {Number} distance
   */
  exports.prototype.distance = undefined;

  /**
   * @member {Number} homeWinProb
   */
  exports.prototype.homeWinProb = undefined;

  /**
   * @member {Number} playNumber
   */
  exports.prototype.playNumber = undefined;


  return exports;

}));
