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
    define(['ApiClient', 'model/BoxScorePlayers', 'model/BoxScoreTeams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BoxScorePlayers'), require('./BoxScoreTeams'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.BoxScore = factory(root.cfb.ApiClient, root.cfb.BoxScorePlayers, root.cfb.BoxScoreTeams);
  }
}(this, function(ApiClient, BoxScorePlayers, BoxScoreTeams) {
  'use strict';

  /**
   * The BoxScore model module.
   * @module model/BoxScore
   * @version 4.6.0
   */

  /**
   * Constructs a new <code>BoxScore</code>.
   * @alias module:model/BoxScore
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BoxScore</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScore} obj Optional instance to populate.
   * @return {module:model/BoxScore} The populated <code>BoxScore</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('teams'))
        obj.teams = BoxScoreTeams.constructFromObject(data['teams']);
      if (data.hasOwnProperty('players'))
        obj.players = BoxScorePlayers.constructFromObject(data['players']);
    }
    return obj;
  }

  /**
   * @member {module:model/BoxScoreTeams} teams
   */
  exports.prototype.teams = undefined;

  /**
   * @member {module:model/BoxScorePlayers} players
   */
  exports.prototype.players = undefined;


  return exports;

}));
