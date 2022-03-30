/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.3.2
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.26
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
    root.cfb.LivePlayByPlay = factory(root.cfb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LivePlayByPlay model module.
   * @module model/LivePlayByPlay
   * @version 4.3.2
   */

  /**
   * Constructs a new <code>LivePlayByPlay</code>.
   * @alias module:model/LivePlayByPlay
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LivePlayByPlay</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LivePlayByPlay} obj Optional instance to populate.
   * @return {module:model/LivePlayByPlay} The populated <code>LivePlayByPlay</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('period'))
        obj.period = ApiClient.convertToType(data['period'], 'Number');
      if (data.hasOwnProperty('clock'))
        obj.clock = ApiClient.convertToType(data['clock'], 'String');
      if (data.hasOwnProperty('possession'))
        obj.possession = ApiClient.convertToType(data['possession'], 'String');
      if (data.hasOwnProperty('down'))
        obj.down = ApiClient.convertToType(data['down'], 'Number');
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
      if (data.hasOwnProperty('yardsToGoal'))
        obj.yardsToGoal = ApiClient.convertToType(data['yardsToGoal'], 'Number');
      if (data.hasOwnProperty('teams'))
        obj.teams = ApiClient.convertToType(data['teams'], [Object]);
      if (data.hasOwnProperty('plays'))
        obj.plays = ApiClient.convertToType(data['plays'], [Object]);
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {Number} period
   */
  exports.prototype.period = undefined;

  /**
   * @member {String} clock
   */
  exports.prototype.clock = undefined;

  /**
   * @member {String} possession
   */
  exports.prototype.possession = undefined;

  /**
   * @member {Number} down
   */
  exports.prototype.down = undefined;

  /**
   * @member {Number} distance
   */
  exports.prototype.distance = undefined;

  /**
   * @member {Number} yardsToGoal
   */
  exports.prototype.yardsToGoal = undefined;

  /**
   * @member {Array.<Object>} teams
   */
  exports.prototype.teams = undefined;

  /**
   * @member {Array.<Object>} plays
   */
  exports.prototype.plays = undefined;


  return exports;

}));
