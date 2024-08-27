/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.6.0
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
    define(['ApiClient', 'model/LivePlayByPlayPlays'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LivePlayByPlayPlays'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.LivePlayByPlayDrives = factory(root.cfb.ApiClient, root.cfb.LivePlayByPlayPlays);
  }
}(this, function(ApiClient, LivePlayByPlayPlays) {
  'use strict';

  /**
   * The LivePlayByPlayDrives model module.
   * @module model/LivePlayByPlayDrives
   * @version 4.6.0
   */

  /**
   * Constructs a new <code>LivePlayByPlayDrives</code>.
   * @alias module:model/LivePlayByPlayDrives
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LivePlayByPlayDrives</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LivePlayByPlayDrives} obj Optional instance to populate.
   * @return {module:model/LivePlayByPlayDrives} The populated <code>LivePlayByPlayDrives</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('offenseId'))
        obj.offenseId = ApiClient.convertToType(data['offenseId'], 'Number');
      if (data.hasOwnProperty('offense'))
        obj.offense = ApiClient.convertToType(data['offense'], 'String');
      if (data.hasOwnProperty('defenseId'))
        obj.defenseId = ApiClient.convertToType(data['defenseId'], 'Number');
      if (data.hasOwnProperty('defense'))
        obj.defense = ApiClient.convertToType(data['defense'], 'String');
      if (data.hasOwnProperty('playCount'))
        obj.playCount = ApiClient.convertToType(data['playCount'], 'Number');
      if (data.hasOwnProperty('yards'))
        obj.yards = ApiClient.convertToType(data['yards'], 'Number');
      if (data.hasOwnProperty('startPeriod'))
        obj.startPeriod = ApiClient.convertToType(data['startPeriod'], 'Number');
      if (data.hasOwnProperty('startClock'))
        obj.startClock = ApiClient.convertToType(data['startClock'], 'String');
      if (data.hasOwnProperty('startYardsToGoal'))
        obj.startYardsToGoal = ApiClient.convertToType(data['startYardsToGoal'], 'Number');
      if (data.hasOwnProperty('endPeriod'))
        obj.endPeriod = ApiClient.convertToType(data['endPeriod'], 'Number');
      if (data.hasOwnProperty('endClock'))
        obj.endClock = ApiClient.convertToType(data['endClock'], 'String');
      if (data.hasOwnProperty('endYardsToGoal'))
        obj.endYardsToGoal = ApiClient.convertToType(data['endYardsToGoal'], 'Number');
      if (data.hasOwnProperty('duration'))
        obj.duration = ApiClient.convertToType(data['duration'], 'String');
      if (data.hasOwnProperty('scoringOpportunity'))
        obj.scoringOpportunity = ApiClient.convertToType(data['scoringOpportunity'], 'Boolean');
      if (data.hasOwnProperty('plays'))
        obj.plays = ApiClient.convertToType(data['plays'], [LivePlayByPlayPlays]);
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} offenseId
   */
  exports.prototype.offenseId = undefined;

  /**
   * @member {String} offense
   */
  exports.prototype.offense = undefined;

  /**
   * @member {Number} defenseId
   */
  exports.prototype.defenseId = undefined;

  /**
   * @member {String} defense
   */
  exports.prototype.defense = undefined;

  /**
   * @member {Number} playCount
   */
  exports.prototype.playCount = undefined;

  /**
   * @member {Number} yards
   */
  exports.prototype.yards = undefined;

  /**
   * @member {Number} startPeriod
   */
  exports.prototype.startPeriod = undefined;

  /**
   * @member {String} startClock
   */
  exports.prototype.startClock = undefined;

  /**
   * @member {Number} startYardsToGoal
   */
  exports.prototype.startYardsToGoal = undefined;

  /**
   * @member {Number} endPeriod
   */
  exports.prototype.endPeriod = undefined;

  /**
   * @member {String} endClock
   */
  exports.prototype.endClock = undefined;

  /**
   * @member {Number} endYardsToGoal
   */
  exports.prototype.endYardsToGoal = undefined;

  /**
   * @member {String} duration
   */
  exports.prototype.duration = undefined;

  /**
   * @member {Boolean} scoringOpportunity
   */
  exports.prototype.scoringOpportunity = undefined;

  /**
   * @member {Array.<module:model/LivePlayByPlayPlays>} plays
   */
  exports.prototype.plays = undefined;


  return exports;

}));
