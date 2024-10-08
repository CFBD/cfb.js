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
    define(['ApiClient', 'model/TeamPPAOffenseCumulative'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TeamPPAOffenseCumulative'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.TeamPPAOffense = factory(root.cfb.ApiClient, root.cfb.TeamPPAOffenseCumulative);
  }
}(this, function(ApiClient, TeamPPAOffenseCumulative) {
  'use strict';

  /**
   * The TeamPPAOffense model module.
   * @module model/TeamPPAOffense
   * @version 4.6.0
   */

  /**
   * Constructs a new <code>TeamPPAOffense</code>.
   * @alias module:model/TeamPPAOffense
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TeamPPAOffense</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamPPAOffense} obj Optional instance to populate.
   * @return {module:model/TeamPPAOffense} The populated <code>TeamPPAOffense</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('overall'))
        obj.overall = ApiClient.convertToType(data['overall'], 'Number');
      if (data.hasOwnProperty('passing'))
        obj.passing = ApiClient.convertToType(data['passing'], 'Number');
      if (data.hasOwnProperty('rushing'))
        obj.rushing = ApiClient.convertToType(data['rushing'], 'Number');
      if (data.hasOwnProperty('firstDown'))
        obj.firstDown = ApiClient.convertToType(data['firstDown'], 'Number');
      if (data.hasOwnProperty('secondDown'))
        obj.secondDown = ApiClient.convertToType(data['secondDown'], 'Number');
      if (data.hasOwnProperty('thirdDown'))
        obj.thirdDown = ApiClient.convertToType(data['thirdDown'], 'Number');
      if (data.hasOwnProperty('cumulative'))
        obj.cumulative = TeamPPAOffenseCumulative.constructFromObject(data['cumulative']);
    }
    return obj;
  }

  /**
   * @member {Number} overall
   */
  exports.prototype.overall = undefined;

  /**
   * @member {Number} passing
   */
  exports.prototype.passing = undefined;

  /**
   * @member {Number} rushing
   */
  exports.prototype.rushing = undefined;

  /**
   * @member {Number} firstDown
   */
  exports.prototype.firstDown = undefined;

  /**
   * @member {Number} secondDown
   */
  exports.prototype.secondDown = undefined;

  /**
   * @member {Number} thirdDown
   */
  exports.prototype.thirdDown = undefined;

  /**
   * @member {module:model/TeamPPAOffenseCumulative} cumulative
   */
  exports.prototype.cumulative = undefined;


  return exports;

}));
