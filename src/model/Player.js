/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.9
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
    root.cfb.Player = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Player model module.
   * @module model/Player
   * @version 4.4.9
   */

  /**
   * Constructs a new <code>Player</code>.
   * @alias module:model/Player
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Player</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Player} obj Optional instance to populate.
   * @return {module:model/Player} The populated <code>Player</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('first_name'))
        obj.firstName = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('last_name'))
        obj.lastName = ApiClient.convertToType(data['last_name'], 'String');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
      if (data.hasOwnProperty('jersey'))
        obj.jersey = ApiClient.convertToType(data['jersey'], 'Number');
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('home_city'))
        obj.homeCity = ApiClient.convertToType(data['home_city'], 'String');
      if (data.hasOwnProperty('home_state'))
        obj.homeState = ApiClient.convertToType(data['home_state'], 'String');
      if (data.hasOwnProperty('home_country'))
        obj.homeCountry = ApiClient.convertToType(data['home_country'], 'String');
      if (data.hasOwnProperty('home_latitude'))
        obj.homeLatitude = ApiClient.convertToType(data['home_latitude'], 'Number');
      if (data.hasOwnProperty('home_longitude'))
        obj.homeLongitude = ApiClient.convertToType(data['home_longitude'], 'Number');
      if (data.hasOwnProperty('home_county_fips'))
        obj.homeCountyFips = ApiClient.convertToType(data['home_county_fips'], 'String');
      if (data.hasOwnProperty('recruit_ids'))
        obj.recruitIds = ApiClient.convertToType(data['recruit_ids'], ['Number']);
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} firstName
   */
  exports.prototype.firstName = undefined;

  /**
   * @member {String} lastName
   */
  exports.prototype.lastName = undefined;

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {Number} height
   */
  exports.prototype.height = undefined;

  /**
   * @member {Number} weight
   */
  exports.prototype.weight = undefined;

  /**
   * @member {Number} jersey
   */
  exports.prototype.jersey = undefined;

  /**
   * @member {Number} year
   */
  exports.prototype.year = undefined;

  /**
   * @member {String} position
   */
  exports.prototype.position = undefined;

  /**
   * @member {String} homeCity
   */
  exports.prototype.homeCity = undefined;

  /**
   * @member {String} homeState
   */
  exports.prototype.homeState = undefined;

  /**
   * @member {String} homeCountry
   */
  exports.prototype.homeCountry = undefined;

  /**
   * @member {Number} homeLatitude
   */
  exports.prototype.homeLatitude = undefined;

  /**
   * @member {Number} homeLongitude
   */
  exports.prototype.homeLongitude = undefined;

  /**
   * @member {String} homeCountyFips
   */
  exports.prototype.homeCountyFips = undefined;

  /**
   * @member {Array.<Number>} recruitIds
   */
  exports.prototype.recruitIds = undefined;


  return exports;

}));
