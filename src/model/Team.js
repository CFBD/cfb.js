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
    define(['ApiClient', 'model/TeamLocation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TeamLocation'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.Team = factory(root.cfb.ApiClient, root.cfb.TeamLocation);
  }
}(this, function(ApiClient, TeamLocation) {
  'use strict';

  /**
   * The Team model module.
   * @module model/Team
   * @version 4.4.14
   */

  /**
   * Constructs a new <code>Team</code>.
   * @alias module:model/Team
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Team</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Team} obj Optional instance to populate.
   * @return {module:model/Team} The populated <code>Team</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('school'))
        obj.school = ApiClient.convertToType(data['school'], 'String');
      if (data.hasOwnProperty('mascot'))
        obj.mascot = ApiClient.convertToType(data['mascot'], 'String');
      if (data.hasOwnProperty('abbreviation'))
        obj.abbreviation = ApiClient.convertToType(data['abbreviation'], 'String');
      if (data.hasOwnProperty('alt_name_1'))
        obj.altName1 = ApiClient.convertToType(data['alt_name_1'], 'String');
      if (data.hasOwnProperty('alt_name_2'))
        obj.altName2 = ApiClient.convertToType(data['alt_name_2'], 'String');
      if (data.hasOwnProperty('alt_name_3'))
        obj.altName3 = ApiClient.convertToType(data['alt_name_3'], 'String');
      if (data.hasOwnProperty('classification'))
        obj.classification = ApiClient.convertToType(data['classification'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('division'))
        obj.division = ApiClient.convertToType(data['division'], 'String');
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('alt_color'))
        obj.altColor = ApiClient.convertToType(data['alt_color'], 'String');
      if (data.hasOwnProperty('logos'))
        obj.logos = ApiClient.convertToType(data['logos'], ['String']);
      if (data.hasOwnProperty('twitter'))
        obj.twitter = ApiClient.convertToType(data['twitter'], 'String');
      if (data.hasOwnProperty('location'))
        obj.location = TeamLocation.constructFromObject(data['location']);
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} school
   */
  exports.prototype.school = undefined;

  /**
   * @member {String} mascot
   */
  exports.prototype.mascot = undefined;

  /**
   * @member {String} abbreviation
   */
  exports.prototype.abbreviation = undefined;

  /**
   * @member {String} altName1
   */
  exports.prototype.altName1 = undefined;

  /**
   * @member {String} altName2
   */
  exports.prototype.altName2 = undefined;

  /**
   * @member {String} altName3
   */
  exports.prototype.altName3 = undefined;

  /**
   * @member {String} classification
   */
  exports.prototype.classification = undefined;

  /**
   * @member {String} conference
   */
  exports.prototype.conference = undefined;

  /**
   * @member {String} division
   */
  exports.prototype.division = undefined;

  /**
   * @member {String} color
   */
  exports.prototype.color = undefined;

  /**
   * @member {String} altColor
   */
  exports.prototype.altColor = undefined;

  /**
   * @member {Array.<String>} logos
   */
  exports.prototype.logos = undefined;

  /**
   * @member {String} twitter
   */
  exports.prototype.twitter = undefined;

  /**
   * @member {module:model/TeamLocation} location
   */
  exports.prototype.location = undefined;


  return exports;

}));
