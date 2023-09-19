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
    define(['ApiClient', 'model/DraftPickHometownInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DraftPickHometownInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.DraftPick = factory(root.cfb.ApiClient, root.cfb.DraftPickHometownInfo);
  }
}(this, function(ApiClient, DraftPickHometownInfo) {
  'use strict';

  /**
   * The DraftPick model module.
   * @module model/DraftPick
   * @version 4.5.1
   */

  /**
   * Constructs a new <code>DraftPick</code>.
   * @alias module:model/DraftPick
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DraftPick</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DraftPick} obj Optional instance to populate.
   * @return {module:model/DraftPick} The populated <code>DraftPick</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('collegeAthleteId'))
        obj.collegeAthleteId = ApiClient.convertToType(data['collegeAthleteId'], 'Number');
      if (data.hasOwnProperty('nflAthleteId'))
        obj.nflAthleteId = ApiClient.convertToType(data['nflAthleteId'], 'Number');
      if (data.hasOwnProperty('collegeId'))
        obj.collegeId = ApiClient.convertToType(data['collegeId'], 'Number');
      if (data.hasOwnProperty('collegeTeam'))
        obj.collegeTeam = ApiClient.convertToType(data['collegeTeam'], 'String');
      if (data.hasOwnProperty('collegeConference'))
        obj.collegeConference = ApiClient.convertToType(data['collegeConference'], 'String');
      if (data.hasOwnProperty('nflTeam'))
        obj.nflTeam = ApiClient.convertToType(data['nflTeam'], 'String');
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('overall'))
        obj.overall = ApiClient.convertToType(data['overall'], 'Number');
      if (data.hasOwnProperty('round'))
        obj.round = ApiClient.convertToType(data['round'], 'Number');
      if (data.hasOwnProperty('pick'))
        obj.pick = ApiClient.convertToType(data['pick'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
      if (data.hasOwnProperty('preDraftRanking'))
        obj.preDraftRanking = ApiClient.convertToType(data['preDraftRanking'], 'Number');
      if (data.hasOwnProperty('preDraftPositionRanking'))
        obj.preDraftPositionRanking = ApiClient.convertToType(data['preDraftPositionRanking'], 'Number');
      if (data.hasOwnProperty('preDraftGrade'))
        obj.preDraftGrade = ApiClient.convertToType(data['preDraftGrade'], 'Number');
      if (data.hasOwnProperty('hometownInfo'))
        obj.hometownInfo = DraftPickHometownInfo.constructFromObject(data['hometownInfo']);
    }
    return obj;
  }

  /**
   * @member {Number} collegeAthleteId
   */
  exports.prototype.collegeAthleteId = undefined;

  /**
   * @member {Number} nflAthleteId
   */
  exports.prototype.nflAthleteId = undefined;

  /**
   * @member {Number} collegeId
   */
  exports.prototype.collegeId = undefined;

  /**
   * @member {String} collegeTeam
   */
  exports.prototype.collegeTeam = undefined;

  /**
   * @member {String} collegeConference
   */
  exports.prototype.collegeConference = undefined;

  /**
   * @member {String} nflTeam
   */
  exports.prototype.nflTeam = undefined;

  /**
   * @member {Number} year
   */
  exports.prototype.year = undefined;

  /**
   * @member {Number} overall
   */
  exports.prototype.overall = undefined;

  /**
   * @member {Number} round
   */
  exports.prototype.round = undefined;

  /**
   * @member {Number} pick
   */
  exports.prototype.pick = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

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
   * @member {Number} preDraftRanking
   */
  exports.prototype.preDraftRanking = undefined;

  /**
   * @member {Number} preDraftPositionRanking
   */
  exports.prototype.preDraftPositionRanking = undefined;

  /**
   * @member {Number} preDraftGrade
   */
  exports.prototype.preDraftGrade = undefined;

  /**
   * @member {module:model/DraftPickHometownInfo} hometownInfo
   */
  exports.prototype.hometownInfo = undefined;


  return exports;

}));
