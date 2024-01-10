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
    root.cfb.VenueLocation = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The VenueLocation model module.
   * @module model/VenueLocation
   * @version 4.5.2
   */

  /**
   * Constructs a new <code>VenueLocation</code>.
   * @alias module:model/VenueLocation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>VenueLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VenueLocation} obj Optional instance to populate.
   * @return {module:model/VenueLocation} The populated <code>VenueLocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('x'))
        obj.x = ApiClient.convertToType(data['x'], 'Number');
      if (data.hasOwnProperty('y'))
        obj.y = ApiClient.convertToType(data['y'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} x
   */
  exports.prototype.x = undefined;

  /**
   * @member {Number} y
   */
  exports.prototype.y = undefined;


  return exports;

}));
