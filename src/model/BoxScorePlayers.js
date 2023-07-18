/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.13
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
    define(['ApiClient', 'model/BoxScorePlayersPpa', 'model/BoxScorePlayersUsage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BoxScorePlayersPpa'), require('./BoxScorePlayersUsage'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.BoxScorePlayers = factory(root.cfb.ApiClient, root.cfb.BoxScorePlayersPpa, root.cfb.BoxScorePlayersUsage);
  }
}(this, function(ApiClient, BoxScorePlayersPpa, BoxScorePlayersUsage) {
  'use strict';

  /**
   * The BoxScorePlayers model module.
   * @module model/BoxScorePlayers
   * @version 4.4.13
   */

  /**
   * Constructs a new <code>BoxScorePlayers</code>.
   * @alias module:model/BoxScorePlayers
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BoxScorePlayers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScorePlayers} obj Optional instance to populate.
   * @return {module:model/BoxScorePlayers} The populated <code>BoxScorePlayers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('usage'))
        obj.usage = ApiClient.convertToType(data['usage'], [BoxScorePlayersUsage]);
      if (data.hasOwnProperty('ppa'))
        obj.ppa = ApiClient.convertToType(data['ppa'], [BoxScorePlayersPpa]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/BoxScorePlayersUsage>} usage
   */
  exports.prototype.usage = undefined;

  /**
   * @member {Array.<module:model/BoxScorePlayersPpa>} ppa
   */
  exports.prototype.ppa = undefined;


  return exports;

}));
