/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.5
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
    root.cfb.DraftTeam = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DraftTeam model module.
   * @module model/DraftTeam
   * @version 4.1.5
   */

  /**
   * Constructs a new <code>DraftTeam</code>.
   * @alias module:model/DraftTeam
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DraftTeam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DraftTeam} obj Optional instance to populate.
   * @return {module:model/DraftTeam} The populated <code>DraftTeam</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('location'))
        obj.location = ApiClient.convertToType(data['location'], 'String');
      if (data.hasOwnProperty('nickname'))
        obj.nickname = ApiClient.convertToType(data['nickname'], 'String');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('logo'))
        obj.logo = ApiClient.convertToType(data['logo'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} location
   */
  exports.prototype.location = undefined;

  /**
   * @member {String} nickname
   */
  exports.prototype.nickname = undefined;

  /**
   * @member {String} displayName
   */
  exports.prototype.displayName = undefined;

  /**
   * @member {String} logo
   */
  exports.prototype.logo = undefined;


  return exports;

}));
