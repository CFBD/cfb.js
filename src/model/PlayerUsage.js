/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.5.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PlayerUsageUsage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PlayerUsageUsage'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.PlayerUsage = factory(root.cfb.ApiClient, root.cfb.PlayerUsageUsage);
  }
}(this, function(ApiClient, PlayerUsageUsage) {
  'use strict';

  /**
   * The PlayerUsage model module.
   * @module model/PlayerUsage
   * @version 4.5.1
   */

  /**
   * Constructs a new <code>PlayerUsage</code>.
   * @alias module:model/PlayerUsage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PlayerUsage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerUsage} obj Optional instance to populate.
   * @return {module:model/PlayerUsage} The populated <code>PlayerUsage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('season'))
        obj.season = ApiClient.convertToType(data['season'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('usage'))
        obj.usage = PlayerUsageUsage.constructFromObject(data['usage']);
    }
    return obj;
  }

  /**
   * @member {Number} season
   */
  exports.prototype.season = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} position
   */
  exports.prototype.position = undefined;

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {String} conference
   */
  exports.prototype.conference = undefined;

  /**
   * @member {module:model/PlayerUsageUsage} usage
   */
  exports.prototype.usage = undefined;


  return exports;

}));
