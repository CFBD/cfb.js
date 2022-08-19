/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.27
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
    root.cfb.PlayerSearchResult = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlayerSearchResult model module.
   * @module model/PlayerSearchResult
   * @version 4.4.1
   */

  /**
   * Constructs a new <code>PlayerSearchResult</code>.
   * @alias module:model/PlayerSearchResult
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PlayerSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerSearchResult} obj Optional instance to populate.
   * @return {module:model/PlayerSearchResult} The populated <code>PlayerSearchResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('jersey'))
        obj.jersey = ApiClient.convertToType(data['jersey'], 'Number');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('hometown'))
        obj.hometown = ApiClient.convertToType(data['hometown'], 'String');
      if (data.hasOwnProperty('teamColor'))
        obj.teamColor = ApiClient.convertToType(data['teamColor'], 'String');
      if (data.hasOwnProperty('teamColorSecondary'))
        obj.teamColorSecondary = ApiClient.convertToType(data['teamColorSecondary'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} firstName
   */
  exports.prototype.firstName = undefined;

  /**
   * @member {String} lastName
   */
  exports.prototype.lastName = undefined;

  /**
   * @member {Number} weight
   */
  exports.prototype.weight = undefined;

  /**
   * @member {Number} height
   */
  exports.prototype.height = undefined;

  /**
   * @member {Number} jersey
   */
  exports.prototype.jersey = undefined;

  /**
   * @member {String} position
   */
  exports.prototype.position = undefined;

  /**
   * @member {String} hometown
   */
  exports.prototype.hometown = undefined;

  /**
   * @member {String} teamColor
   */
  exports.prototype.teamColor = undefined;

  /**
   * @member {String} teamColorSecondary
   */
  exports.prototype.teamColorSecondary = undefined;


  return exports;

}));
