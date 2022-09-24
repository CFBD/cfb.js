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
    define(['ApiClient', 'model/TeamSPRatingDefense', 'model/TeamSPRatingOffense', 'model/TeamSPRatingSpecialTeams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TeamSPRatingDefense'), require('./TeamSPRatingOffense'), require('./TeamSPRatingSpecialTeams'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.TeamSPRating = factory(root.cfb.ApiClient, root.cfb.TeamSPRatingDefense, root.cfb.TeamSPRatingOffense, root.cfb.TeamSPRatingSpecialTeams);
  }
}(this, function(ApiClient, TeamSPRatingDefense, TeamSPRatingOffense, TeamSPRatingSpecialTeams) {
  'use strict';

  /**
   * The TeamSPRating model module.
   * @module model/TeamSPRating
   * @version 4.4.7
   */

  /**
   * Constructs a new <code>TeamSPRating</code>.
   * @alias module:model/TeamSPRating
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TeamSPRating</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamSPRating} obj Optional instance to populate.
   * @return {module:model/TeamSPRating} The populated <code>TeamSPRating</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'String');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
      if (data.hasOwnProperty('ranking'))
        obj.ranking = ApiClient.convertToType(data['ranking'], 'Number');
      if (data.hasOwnProperty('secondOrderWins'))
        obj.secondOrderWins = ApiClient.convertToType(data['secondOrderWins'], 'Number');
      if (data.hasOwnProperty('sos'))
        obj.sos = ApiClient.convertToType(data['sos'], 'Number');
      if (data.hasOwnProperty('offense'))
        obj.offense = TeamSPRatingOffense.constructFromObject(data['offense']);
      if (data.hasOwnProperty('defense'))
        obj.defense = TeamSPRatingDefense.constructFromObject(data['defense']);
      if (data.hasOwnProperty('specialTeams'))
        obj.specialTeams = TeamSPRatingSpecialTeams.constructFromObject(data['specialTeams']);
    }
    return obj;
  }

  /**
   * @member {Number} year
   */
  exports.prototype.year = undefined;

  /**
   * @member {String} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {String} conference
   */
  exports.prototype.conference = undefined;

  /**
   * @member {Number} rating
   */
  exports.prototype.rating = undefined;

  /**
   * @member {Number} ranking
   */
  exports.prototype.ranking = undefined;

  /**
   * @member {Number} secondOrderWins
   */
  exports.prototype.secondOrderWins = undefined;

  /**
   * @member {Number} sos
   */
  exports.prototype.sos = undefined;

  /**
   * @member {module:model/TeamSPRatingOffense} offense
   */
  exports.prototype.offense = undefined;

  /**
   * @member {module:model/TeamSPRatingDefense} defense
   */
  exports.prototype.defense = undefined;

  /**
   * @member {module:model/TeamSPRatingSpecialTeams} specialTeams
   */
  exports.prototype.specialTeams = undefined;


  return exports;

}));
