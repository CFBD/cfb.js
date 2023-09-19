/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.5.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
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
    root.cfb.LivePlayByPlayPlays = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LivePlayByPlayPlays model module.
   * @module model/LivePlayByPlayPlays
   * @version 4.5.1
   */

  /**
   * Constructs a new <code>LivePlayByPlayPlays</code>.
   * @alias module:model/LivePlayByPlayPlays
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LivePlayByPlayPlays</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LivePlayByPlayPlays} obj Optional instance to populate.
   * @return {module:model/LivePlayByPlayPlays} The populated <code>LivePlayByPlayPlays</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('homeScore'))
        obj.homeScore = ApiClient.convertToType(data['homeScore'], 'Number');
      if (data.hasOwnProperty('awayScore'))
        obj.awayScore = ApiClient.convertToType(data['awayScore'], 'Number');
      if (data.hasOwnProperty('period'))
        obj.period = ApiClient.convertToType(data['period'], 'Number');
      if (data.hasOwnProperty('clock'))
        obj.clock = ApiClient.convertToType(data['clock'], 'String');
      if (data.hasOwnProperty('wallclock'))
        obj.wallclock = ApiClient.convertToType(data['wallclock'], 'String');
      if (data.hasOwnProperty('teamId'))
        obj.teamId = ApiClient.convertToType(data['teamId'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('down'))
        obj.down = ApiClient.convertToType(data['down'], 'Number');
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
      if (data.hasOwnProperty('yardsToGoal'))
        obj.yardsToGoal = ApiClient.convertToType(data['yardsToGoal'], 'Number');
      if (data.hasOwnProperty('yardsGained'))
        obj.yardsGained = ApiClient.convertToType(data['yardsGained'], 'Number');
      if (data.hasOwnProperty('playTypeId'))
        obj.playTypeId = ApiClient.convertToType(data['playTypeId'], 'Number');
      if (data.hasOwnProperty('playType'))
        obj.playType = ApiClient.convertToType(data['playType'], 'String');
      if (data.hasOwnProperty('epa'))
        obj.epa = ApiClient.convertToType(data['epa'], 'Number');
      if (data.hasOwnProperty('garbageTime'))
        obj.garbageTime = ApiClient.convertToType(data['garbageTime'], 'Boolean');
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('rushPass'))
        obj.rushPass = ApiClient.convertToType(data['rushPass'], 'String');
      if (data.hasOwnProperty('downType'))
        obj.downType = ApiClient.convertToType(data['downType'], 'String');
      if (data.hasOwnProperty('playText'))
        obj.playText = ApiClient.convertToType(data['playText'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} homeScore
   */
  exports.prototype.homeScore = undefined;

  /**
   * @member {Number} awayScore
   */
  exports.prototype.awayScore = undefined;

  /**
   * @member {Number} period
   */
  exports.prototype.period = undefined;

  /**
   * @member {String} clock
   */
  exports.prototype.clock = undefined;

  /**
   * @member {String} wallclock
   */
  exports.prototype.wallclock = undefined;

  /**
   * @member {Number} teamId
   */
  exports.prototype.teamId = undefined;

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {Number} down
   */
  exports.prototype.down = undefined;

  /**
   * @member {Number} distance
   */
  exports.prototype.distance = undefined;

  /**
   * @member {Number} yardsToGoal
   */
  exports.prototype.yardsToGoal = undefined;

  /**
   * @member {Number} yardsGained
   */
  exports.prototype.yardsGained = undefined;

  /**
   * @member {Number} playTypeId
   */
  exports.prototype.playTypeId = undefined;

  /**
   * @member {String} playType
   */
  exports.prototype.playType = undefined;

  /**
   * @member {Number} epa
   */
  exports.prototype.epa = undefined;

  /**
   * @member {Boolean} garbageTime
   */
  exports.prototype.garbageTime = undefined;

  /**
   * @member {Boolean} success
   */
  exports.prototype.success = undefined;

  /**
   * @member {String} rushPass
   */
  exports.prototype.rushPass = undefined;

  /**
   * @member {String} downType
   */
  exports.prototype.downType = undefined;

  /**
   * @member {String} playText
   */
  exports.prototype.playText = undefined;


  return exports;

}));
