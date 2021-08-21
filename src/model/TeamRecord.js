/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.6
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
    root.cfb.TeamRecord = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TeamRecord model module.
   * @module model/TeamRecord
   * @version 4.1.6
   */

  /**
   * Constructs a new <code>TeamRecord</code>.
   * @alias module:model/TeamRecord
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TeamRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamRecord} obj Optional instance to populate.
   * @return {module:model/TeamRecord} The populated <code>TeamRecord</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('division'))
        obj.division = ApiClient.convertToType(data['division'], 'String');
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], Object);
      if (data.hasOwnProperty('conferenceGames'))
        obj.conferenceGames = ApiClient.convertToType(data['conferenceGames'], Object);
      if (data.hasOwnProperty('homeGames'))
        obj.homeGames = ApiClient.convertToType(data['homeGames'], Object);
      if (data.hasOwnProperty('awayGames'))
        obj.awayGames = ApiClient.convertToType(data['awayGames'], Object);
    }
    return obj;
  }

  /**
   * @member {Number} year
   */
  exports.prototype.year = undefined;

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {String} conference
   */
  exports.prototype.conference = undefined;

  /**
   * @member {String} division
   */
  exports.prototype.division = undefined;

  /**
   * @member {Object} total
   */
  exports.prototype.total = undefined;

  /**
   * @member {Object} conferenceGames
   */
  exports.prototype.conferenceGames = undefined;

  /**
   * @member {Object} homeGames
   */
  exports.prototype.homeGames = undefined;

  /**
   * @member {Object} awayGames
   */
  exports.prototype.awayGames = undefined;


  return exports;

}));
