/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.7
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
    define(['ApiClient', 'model/RecruitHometownInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecruitHometownInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.Recruit = factory(root.cfb.ApiClient, root.cfb.RecruitHometownInfo);
  }
}(this, function(ApiClient, RecruitHometownInfo) {
  'use strict';

  /**
   * The Recruit model module.
   * @module model/Recruit
   * @version 4.4.7
   */

  /**
   * Constructs a new <code>Recruit</code>.
   * @alias module:model/Recruit
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Recruit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Recruit} obj Optional instance to populate.
   * @return {module:model/Recruit} The populated <code>Recruit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('athleteId'))
        obj.athleteId = ApiClient.convertToType(data['athleteId'], 'Number');
      if (data.hasOwnProperty('recruitType'))
        obj.recruitType = ApiClient.convertToType(data['recruitType'], 'String');
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('ranking'))
        obj.ranking = ApiClient.convertToType(data['ranking'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('school'))
        obj.school = ApiClient.convertToType(data['school'], 'String');
      if (data.hasOwnProperty('committedTo'))
        obj.committedTo = ApiClient.convertToType(data['committedTo'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
      if (data.hasOwnProperty('stars'))
        obj.stars = ApiClient.convertToType(data['stars'], 'Number');
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('stateProvince'))
        obj.stateProvince = ApiClient.convertToType(data['stateProvince'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('hometownInfo'))
        obj.hometownInfo = RecruitHometownInfo.constructFromObject(data['hometownInfo']);
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} athleteId
   */
  exports.prototype.athleteId = undefined;

  /**
   * @member {String} recruitType
   */
  exports.prototype.recruitType = undefined;

  /**
   * @member {Number} year
   */
  exports.prototype.year = undefined;

  /**
   * @member {Number} ranking
   */
  exports.prototype.ranking = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} school
   */
  exports.prototype.school = undefined;

  /**
   * @member {String} committedTo
   */
  exports.prototype.committedTo = undefined;

  /**
   * @member {String} position
   */
  exports.prototype.position = undefined;

  /**
   * @member {Number} height
   */
  exports.prototype.height = undefined;

  /**
   * @member {Number} weight
   */
  exports.prototype.weight = undefined;

  /**
   * @member {Number} stars
   */
  exports.prototype.stars = undefined;

  /**
   * @member {Number} rating
   */
  exports.prototype.rating = undefined;

  /**
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * @member {String} stateProvince
   */
  exports.prototype.stateProvince = undefined;

  /**
   * @member {String} country
   */
  exports.prototype.country = undefined;

  /**
   * @member {module:model/RecruitHometownInfo} hometownInfo
   */
  exports.prototype.hometownInfo = undefined;


  return exports;

}));
