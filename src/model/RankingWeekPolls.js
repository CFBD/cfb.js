/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.6
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
    define(['ApiClient', 'model/RankingWeekRanks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RankingWeekRanks'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.RankingWeekPolls = factory(root.cfb.ApiClient, root.cfb.RankingWeekRanks);
  }
}(this, function(ApiClient, RankingWeekRanks) {
  'use strict';

  /**
   * The RankingWeekPolls model module.
   * @module model/RankingWeekPolls
   * @version 4.4.6
   */

  /**
   * Constructs a new <code>RankingWeekPolls</code>.
   * @alias module:model/RankingWeekPolls
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RankingWeekPolls</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RankingWeekPolls} obj Optional instance to populate.
   * @return {module:model/RankingWeekPolls} The populated <code>RankingWeekPolls</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('poll'))
        obj.poll = ApiClient.convertToType(data['poll'], 'String');
      if (data.hasOwnProperty('ranks'))
        obj.ranks = ApiClient.convertToType(data['ranks'], [RankingWeekRanks]);
    }
    return obj;
  }

  /**
   * @member {String} poll
   */
  exports.prototype.poll = undefined;

  /**
   * @member {Array.<module:model/RankingWeekRanks>} ranks
   */
  exports.prototype.ranks = undefined;


  return exports;

}));
