/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.5.2
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.TeamFPIRatingEfficiencies = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TeamFPIRatingEfficiencies model module.
   * @module model/TeamFPIRatingEfficiencies
   * @version 4.5.2
   */

  /**
   * Constructs a new <code>TeamFPIRatingEfficiencies</code>.
   * @alias module:model/TeamFPIRatingEfficiencies
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TeamFPIRatingEfficiencies</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamFPIRatingEfficiencies} obj Optional instance to populate.
   * @return {module:model/TeamFPIRatingEfficiencies} The populated <code>TeamFPIRatingEfficiencies</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('overall'))
        obj.overall = ApiClient.convertToType(data['overall'], 'Number');
      if (data.hasOwnProperty('offense'))
        obj.offense = ApiClient.convertToType(data['offense'], 'Number');
      if (data.hasOwnProperty('defense'))
        obj.defense = ApiClient.convertToType(data['defense'], 'Number');
      if (data.hasOwnProperty('specialTeams'))
        obj.specialTeams = ApiClient.convertToType(data['specialTeams'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} overall
   */
  exports.prototype.overall = undefined;

  /**
   * @member {Number} offense
   */
  exports.prototype.offense = undefined;

  /**
   * @member {Number} defense
   */
  exports.prototype.defense = undefined;

  /**
   * @member {Number} specialTeams
   */
  exports.prototype.specialTeams = undefined;


  return exports;

}));
