/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.5
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
    define(['ApiClient', 'model/BoxScorePlayersAverage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BoxScorePlayersAverage'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.BoxScorePlayersPpa = factory(root.cfb.ApiClient, root.cfb.BoxScorePlayersAverage);
  }
}(this, function(ApiClient, BoxScorePlayersAverage) {
  'use strict';

  /**
   * The BoxScorePlayersPpa model module.
   * @module model/BoxScorePlayersPpa
   * @version 4.4.5
   */

  /**
   * Constructs a new <code>BoxScorePlayersPpa</code>.
   * @alias module:model/BoxScorePlayersPpa
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BoxScorePlayersPpa</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScorePlayersPpa} obj Optional instance to populate.
   * @return {module:model/BoxScorePlayersPpa} The populated <code>BoxScorePlayersPpa</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('player'))
        obj.player = ApiClient.convertToType(data['player'], 'String');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('average'))
        obj.average = BoxScorePlayersAverage.constructFromObject(data['average']);
      if (data.hasOwnProperty('cumulative'))
        obj.cumulative = BoxScorePlayersAverage.constructFromObject(data['cumulative']);
    }
    return obj;
  }

  /**
   * @member {String} player
   */
  exports.prototype.player = undefined;

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {String} position
   */
  exports.prototype.position = undefined;

  /**
   * @member {module:model/BoxScorePlayersAverage} average
   */
  exports.prototype.average = undefined;

  /**
   * @member {module:model/BoxScorePlayersAverage} cumulative
   */
  exports.prototype.cumulative = undefined;


  return exports;

}));
