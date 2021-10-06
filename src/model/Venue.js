/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.12
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.22
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
    root.cfb.Venue = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Venue model module.
   * @module model/Venue
   * @version 4.1.12
   */

  /**
   * Constructs a new <code>Venue</code>.
   * @alias module:model/Venue
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Venue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Venue} obj Optional instance to populate.
   * @return {module:model/Venue} The populated <code>Venue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('capacity'))
        obj.capacity = ApiClient.convertToType(data['capacity'], 'Number');
      if (data.hasOwnProperty('grass'))
        obj.grass = ApiClient.convertToType(data['grass'], 'Boolean');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('zip'))
        obj.zip = ApiClient.convertToType(data['zip'], 'String');
      if (data.hasOwnProperty('country_code'))
        obj.countryCode = ApiClient.convertToType(data['country_code'], 'String');
      if (data.hasOwnProperty('location'))
        obj.location = ApiClient.convertToType(data['location'], Object);
      if (data.hasOwnProperty('elevation'))
        obj.elevation = ApiClient.convertToType(data['elevation'], 'Number');
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('dome'))
        obj.dome = ApiClient.convertToType(data['dome'], 'Boolean');
      if (data.hasOwnProperty('timezone'))
        obj.timezone = ApiClient.convertToType(data['timezone'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Number} capacity
   */
  exports.prototype.capacity = undefined;

  /**
   * @member {Boolean} grass
   */
  exports.prototype.grass = undefined;

  /**
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * @member {String} state
   */
  exports.prototype.state = undefined;

  /**
   * @member {String} zip
   */
  exports.prototype.zip = undefined;

  /**
   * @member {String} countryCode
   */
  exports.prototype.countryCode = undefined;

  /**
   * @member {Object} location
   */
  exports.prototype.location = undefined;

  /**
   * @member {Number} elevation
   */
  exports.prototype.elevation = undefined;

  /**
   * @member {Number} year
   */
  exports.prototype.year = undefined;

  /**
   * @member {Boolean} dome
   */
  exports.prototype.dome = undefined;

  /**
   * @member {String} timezone
   */
  exports.prototype.timezone = undefined;


  return exports;

}));
