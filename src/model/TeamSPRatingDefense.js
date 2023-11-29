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
 * Swagger Codegen version: 2.4.37
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TeamSPRatingDefenseHavoc'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TeamSPRatingDefenseHavoc'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.TeamSPRatingDefense = factory(root.cfb.ApiClient, root.cfb.TeamSPRatingDefenseHavoc);
  }
}(this, function(ApiClient, TeamSPRatingDefenseHavoc) {
  'use strict';

  /**
   * The TeamSPRatingDefense model module.
   * @module model/TeamSPRatingDefense
   * @version 4.5.1
   */

  /**
   * Constructs a new <code>TeamSPRatingDefense</code>.
   * @alias module:model/TeamSPRatingDefense
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TeamSPRatingDefense</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamSPRatingDefense} obj Optional instance to populate.
   * @return {module:model/TeamSPRatingDefense} The populated <code>TeamSPRatingDefense</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ranking'))
        obj.ranking = ApiClient.convertToType(data['ranking'], 'Number');
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Number');
      if (data.hasOwnProperty('explosiveness'))
        obj.explosiveness = ApiClient.convertToType(data['explosiveness'], 'Number');
      if (data.hasOwnProperty('rushing'))
        obj.rushing = ApiClient.convertToType(data['rushing'], 'Number');
      if (data.hasOwnProperty('pasing'))
        obj.pasing = ApiClient.convertToType(data['pasing'], 'Number');
      if (data.hasOwnProperty('standardDowns'))
        obj.standardDowns = ApiClient.convertToType(data['standardDowns'], 'Number');
      if (data.hasOwnProperty('passingDowns'))
        obj.passingDowns = ApiClient.convertToType(data['passingDowns'], 'Number');
      if (data.hasOwnProperty('havoc'))
        obj.havoc = TeamSPRatingDefenseHavoc.constructFromObject(data['havoc']);
    }
    return obj;
  }

  /**
   * @member {Number} ranking
   */
  exports.prototype.ranking = undefined;

  /**
   * @member {Number} rating
   */
  exports.prototype.rating = undefined;

  /**
   * @member {Number} success
   */
  exports.prototype.success = undefined;

  /**
   * @member {Number} explosiveness
   */
  exports.prototype.explosiveness = undefined;

  /**
   * @member {Number} rushing
   */
  exports.prototype.rushing = undefined;

  /**
   * @member {Number} pasing
   */
  exports.prototype.pasing = undefined;

  /**
   * @member {Number} standardDowns
   */
  exports.prototype.standardDowns = undefined;

  /**
   * @member {Number} passingDowns
   */
  exports.prototype.passingDowns = undefined;

  /**
   * @member {module:model/TeamSPRatingDefenseHavoc} havoc
   */
  exports.prototype.havoc = undefined;


  return exports;

}));
