/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.15
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.PlayerGameAthletes = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlayerGameAthletes model module.
   * @module model/PlayerGameAthletes
   * @version 4.4.15
   */

  /**
   * Constructs a new <code>PlayerGameAthletes</code>.
   * @alias module:model/PlayerGameAthletes
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PlayerGameAthletes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerGameAthletes} obj Optional instance to populate.
   * @return {module:model/PlayerGameAthletes} The populated <code>PlayerGameAthletes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('stat'))
        obj.stat = ApiClient.convertToType(data['stat'], 'String');
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
   * @member {String} stat
   */
  exports.prototype.stat = undefined;


  return exports;

}));
