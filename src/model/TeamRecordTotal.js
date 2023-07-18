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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.TeamRecordTotal = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TeamRecordTotal model module.
   * @module model/TeamRecordTotal
   * @version 4.4.13
   */

  /**
   * Constructs a new <code>TeamRecordTotal</code>.
   * @alias module:model/TeamRecordTotal
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TeamRecordTotal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamRecordTotal} obj Optional instance to populate.
   * @return {module:model/TeamRecordTotal} The populated <code>TeamRecordTotal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('games'))
        obj.games = ApiClient.convertToType(data['games'], 'Number');
      if (data.hasOwnProperty('wins'))
        obj.wins = ApiClient.convertToType(data['wins'], 'Number');
      if (data.hasOwnProperty('losses'))
        obj.losses = ApiClient.convertToType(data['losses'], 'Number');
      if (data.hasOwnProperty('ties'))
        obj.ties = ApiClient.convertToType(data['ties'], 'Number');
    }
    return obj;
  }

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


  return exports;

}));
