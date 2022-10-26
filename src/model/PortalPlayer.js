/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.11
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.PortalPlayer = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PortalPlayer model module.
   * @module model/PortalPlayer
   * @version 4.4.11
   */

  /**
   * Constructs a new <code>PortalPlayer</code>.
   * @alias module:model/PortalPlayer
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PortalPlayer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PortalPlayer} obj Optional instance to populate.
   * @return {module:model/PortalPlayer} The populated <code>PortalPlayer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('origin'))
        obj.origin = ApiClient.convertToType(data['origin'], 'String');
      if (data.hasOwnProperty('destination'))
        obj.destination = ApiClient.convertToType(data['destination'], 'String');
      if (data.hasOwnProperty('transferDate'))
        obj.transferDate = ApiClient.convertToType(data['transferDate'], 'String');
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
      if (data.hasOwnProperty('stars'))
        obj.stars = ApiClient.convertToType(data['stars'], 'Number');
      if (data.hasOwnProperty('eligibility'))
        obj.eligibility = ApiClient.convertToType(data['eligibility'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} season
   */
  exports.prototype.season = undefined;

  /**
   * @member {String} firstName
   */
  exports.prototype.firstName = undefined;

  /**
   * @member {String} lastName
   */
  exports.prototype.lastName = undefined;

  /**
   * @member {String} position
   */
  exports.prototype.position = undefined;

  /**
   * @member {String} origin
   */
  exports.prototype.origin = undefined;

  /**
   * @member {String} destination
   */
  exports.prototype.destination = undefined;

  /**
   * @member {String} transferDate
   */
  exports.prototype.transferDate = undefined;

  /**
   * @member {Number} rating
   */
  exports.prototype.rating = undefined;

  /**
   * @member {Number} stars
   */
  exports.prototype.stars = undefined;

  /**
   * @member {String} eligibility
   */
  exports.prototype.eligibility = undefined;


  return exports;

}));
