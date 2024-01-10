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
 * Swagger Codegen version: 2.4.39
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
    root.cfb.BoxScoreTeamsOverall = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BoxScoreTeamsOverall model module.
   * @module model/BoxScoreTeamsOverall
   * @version 4.5.2
   */

  /**
   * Constructs a new <code>BoxScoreTeamsOverall</code>.
   * @alias module:model/BoxScoreTeamsOverall
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BoxScoreTeamsOverall</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxScoreTeamsOverall} obj Optional instance to populate.
   * @return {module:model/BoxScoreTeamsOverall} The populated <code>BoxScoreTeamsOverall</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
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
    }
    return obj;
  }

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


  return exports;

}));
