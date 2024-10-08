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
    define(['ApiClient', 'model/TeamPPAOffense'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TeamPPAOffense'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.TeamPPA = factory(root.cfb.ApiClient, root.cfb.TeamPPAOffense);
  }
}(this, function(ApiClient, TeamPPAOffense) {
  'use strict';

  /**
   * The TeamPPA model module.
   * @module model/TeamPPA
   * @version 4.6.0
   */

  /**
   * Constructs a new <code>TeamPPA</code>.
   * @alias module:model/TeamPPA
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TeamPPA</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamPPA} obj Optional instance to populate.
   * @return {module:model/TeamPPA} The populated <code>TeamPPA</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('offense'))
        obj.offense = TeamPPAOffense.constructFromObject(data['offense']);
      if (data.hasOwnProperty('defense'))
        obj.defense = TeamPPAOffense.constructFromObject(data['defense']);
    }
    return obj;
  }

  /**
   * @member {Number} season
   */
  exports.prototype.season = undefined;

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {String} conference
   */
  exports.prototype.conference = undefined;

  /**
   * @member {module:model/TeamPPAOffense} offense
   */
  exports.prototype.offense = undefined;

  /**
   * @member {module:model/TeamPPAOffense} defense
   */
  exports.prototype.defense = undefined;


  return exports;

}));
