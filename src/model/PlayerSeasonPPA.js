/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.5.2
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.39
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PlayerSeasonPPAAveragePPA'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PlayerSeasonPPAAveragePPA'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.PlayerSeasonPPA = factory(root.cfb.ApiClient, root.cfb.PlayerSeasonPPAAveragePPA);
  }
}(this, function(ApiClient, PlayerSeasonPPAAveragePPA) {
  'use strict';

  /**
   * The PlayerSeasonPPA model module.
   * @module model/PlayerSeasonPPA
   * @version 4.5.2
   */

  /**
   * Constructs a new <code>PlayerSeasonPPA</code>.
   * @alias module:model/PlayerSeasonPPA
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PlayerSeasonPPA</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerSeasonPPA} obj Optional instance to populate.
   * @return {module:model/PlayerSeasonPPA} The populated <code>PlayerSeasonPPA</code> instance.
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
      if (data.hasOwnProperty('averagePPA'))
        obj.averagePPA = PlayerSeasonPPAAveragePPA.constructFromObject(data['averagePPA']);
      if (data.hasOwnProperty('totalPPA'))
        obj.totalPPA = PlayerSeasonPPAAveragePPA.constructFromObject(data['totalPPA']);
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
   * @member {module:model/PlayerSeasonPPAAveragePPA} averagePPA
   */
  exports.prototype.averagePPA = undefined;

  /**
   * @member {module:model/PlayerSeasonPPAAveragePPA} totalPPA
   */
  exports.prototype.totalPPA = undefined;


  return exports;

}));
