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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.AdvancedGameStatOffenseRushingPlays = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AdvancedGameStatOffenseRushingPlays model module.
   * @module model/AdvancedGameStatOffenseRushingPlays
   * @version 4.6.0
   */

  /**
   * Constructs a new <code>AdvancedGameStatOffenseRushingPlays</code>.
   * @alias module:model/AdvancedGameStatOffenseRushingPlays
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AdvancedGameStatOffenseRushingPlays</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvancedGameStatOffenseRushingPlays} obj Optional instance to populate.
   * @return {module:model/AdvancedGameStatOffenseRushingPlays} The populated <code>AdvancedGameStatOffenseRushingPlays</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ppa'))
        obj.ppa = ApiClient.convertToType(data['ppa'], 'Number');
      if (data.hasOwnProperty('totalPPA'))
        obj.totalPPA = ApiClient.convertToType(data['totalPPA'], 'Number');
      if (data.hasOwnProperty('successRate'))
        obj.successRate = ApiClient.convertToType(data['successRate'], 'Number');
      if (data.hasOwnProperty('explosiveness'))
        obj.explosiveness = ApiClient.convertToType(data['explosiveness'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} ppa
   */
  exports.prototype.ppa = undefined;

  /**
   * @member {Number} totalPPA
   */
  exports.prototype.totalPPA = undefined;

  /**
   * @member {Number} successRate
   */
  exports.prototype.successRate = undefined;

  /**
   * @member {Number} explosiveness
   */
  exports.prototype.explosiveness = undefined;


  return exports;

}));
