/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.8
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
    root.cfb.PlayType = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlayType model module.
   * @module model/PlayType
   * @version 4.1.8
   */

  /**
   * Constructs a new <code>PlayType</code>.
   * @alias module:model/PlayType
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PlayType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayType} obj Optional instance to populate.
   * @return {module:model/PlayType} The populated <code>PlayType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('abbreviation'))
        obj.abbreviation = ApiClient.convertToType(data['abbreviation'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} text
   */
  exports.prototype.text = undefined;

  /**
   * @member {String} abbreviation
   */
  exports.prototype.abbreviation = undefined;


  return exports;

}));
