/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.4
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
    root.cfb.Conference = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Conference model module.
   * @module model/Conference
   * @version 4.4.4
   */

  /**
   * Constructs a new <code>Conference</code>.
   * @alias module:model/Conference
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Conference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Conference} obj Optional instance to populate.
   * @return {module:model/Conference} The populated <code>Conference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('short_name'))
        obj.shortName = ApiClient.convertToType(data['short_name'], 'String');
      if (data.hasOwnProperty('abbreviation'))
        obj.abbreviation = ApiClient.convertToType(data['abbreviation'], 'String');
      if (data.hasOwnProperty('classification'))
        obj.classification = ApiClient.convertToType(data['classification'], 'String');
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
   * @member {String} shortName
   */
  exports.prototype.shortName = undefined;

  /**
   * @member {String} abbreviation
   */
  exports.prototype.abbreviation = undefined;

  /**
   * @member {String} classification
   */
  exports.prototype.classification = undefined;


  return exports;

}));
