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
    root.cfb.DraftPickHometownInfo = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DraftPickHometownInfo model module.
   * @module model/DraftPickHometownInfo
   * @version 4.4.11
   */

  /**
   * Constructs a new <code>DraftPickHometownInfo</code>.
   * @alias module:model/DraftPickHometownInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DraftPickHometownInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DraftPickHometownInfo} obj Optional instance to populate.
   * @return {module:model/DraftPickHometownInfo} The populated <code>DraftPickHometownInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('latitude'))
        obj.latitude = ApiClient.convertToType(data['latitude'], 'Number');
      if (data.hasOwnProperty('longitude'))
        obj.longitude = ApiClient.convertToType(data['longitude'], 'Number');
      if (data.hasOwnProperty('countryFips'))
        obj.countryFips = ApiClient.convertToType(data['countryFips'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * @member {String} state
   */
  exports.prototype.state = undefined;

  /**
   * @member {String} country
   */
  exports.prototype.country = undefined;

  /**
   * @member {Number} latitude
   */
  exports.prototype.latitude = undefined;

  /**
   * @member {Number} longitude
   */
  exports.prototype.longitude = undefined;

  /**
   * @member {Number} countryFips
   */
  exports.prototype.countryFips = undefined;


  return exports;

}));
