/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.14
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
    define(['ApiClient', 'model/PlayerGameAthletes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PlayerGameAthletes'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.PlayerGameTypes = factory(root.cfb.ApiClient, root.cfb.PlayerGameAthletes);
  }
}(this, function(ApiClient, PlayerGameAthletes) {
  'use strict';

  /**
   * The PlayerGameTypes model module.
   * @module model/PlayerGameTypes
   * @version 4.4.14
   */

  /**
   * Constructs a new <code>PlayerGameTypes</code>.
   * @alias module:model/PlayerGameTypes
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PlayerGameTypes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerGameTypes} obj Optional instance to populate.
   * @return {module:model/PlayerGameTypes} The populated <code>PlayerGameTypes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('athletes'))
        obj.athletes = ApiClient.convertToType(data['athletes'], [PlayerGameAthletes]);
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Array.<module:model/PlayerGameAthletes>} athletes
   */
  exports.prototype.athletes = undefined;


  return exports;

}));
