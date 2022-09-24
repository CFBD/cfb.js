/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.8
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.BoxScorePlayersUsage = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BoxScorePlayersUsage model module.
   * @module model/BoxScorePlayersUsage
   * @version 4.4.8
   */

  /**
   * Constructs a new <code>BoxScorePlayersUsage</code>.
   * @alias module:model/BoxScorePlayersUsage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BoxScorePlayersUsage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScorePlayersUsage} obj Optional instance to populate.
   * @return {module:model/BoxScorePlayersUsage} The populated <code>BoxScorePlayersUsage</code> instance.
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
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('quarter1'))
        obj.quarter1 = ApiClient.convertToType(data['quarter1'], 'Number');
      if (data.hasOwnProperty('quarter2'))
        obj.quarter2 = ApiClient.convertToType(data['quarter2'], 'Number');
      if (data.hasOwnProperty('quarter3'))
        obj.quarter3 = ApiClient.convertToType(data['quarter3'], 'Number');
      if (data.hasOwnProperty('quarter4'))
        obj.quarter4 = ApiClient.convertToType(data['quarter4'], 'Number');
      if (data.hasOwnProperty('rushing'))
        obj.rushing = ApiClient.convertToType(data['rushing'], 'Number');
      if (data.hasOwnProperty('passing'))
        obj.passing = ApiClient.convertToType(data['passing'], 'Number');
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
   * @member {Number} total
   */
  exports.prototype.total = undefined;

  /**
   * @member {Number} quarter1
   */
  exports.prototype.quarter1 = undefined;

  /**
   * @member {Number} quarter2
   */
  exports.prototype.quarter2 = undefined;

  /**
   * @member {Number} quarter3
   */
  exports.prototype.quarter3 = undefined;

  /**
   * @member {Number} quarter4
   */
  exports.prototype.quarter4 = undefined;

  /**
   * @member {Number} rushing
   */
  exports.prototype.rushing = undefined;

  /**
   * @member {Number} passing
   */
  exports.prototype.passing = undefined;


  return exports;

}));
