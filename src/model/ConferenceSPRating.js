/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.9
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
    define(['ApiClient', 'model/ConferenceSPRatingDefense', 'model/ConferenceSPRatingOffense', 'model/TeamSPRatingSpecialTeams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConferenceSPRatingDefense'), require('./ConferenceSPRatingOffense'), require('./TeamSPRatingSpecialTeams'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.ConferenceSPRating = factory(root.cfb.ApiClient, root.cfb.ConferenceSPRatingDefense, root.cfb.ConferenceSPRatingOffense, root.cfb.TeamSPRatingSpecialTeams);
  }
}(this, function(ApiClient, ConferenceSPRatingDefense, ConferenceSPRatingOffense, TeamSPRatingSpecialTeams) {
  'use strict';

  /**
   * The ConferenceSPRating model module.
   * @module model/ConferenceSPRating
   * @version 4.4.9
   */

  /**
   * Constructs a new <code>ConferenceSPRating</code>.
   * @alias module:model/ConferenceSPRating
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConferenceSPRating</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConferenceSPRating} obj Optional instance to populate.
   * @return {module:model/ConferenceSPRating} The populated <code>ConferenceSPRating</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
      if (data.hasOwnProperty('conference'))
        obj.conference = ApiClient.convertToType(data['conference'], 'String');
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
      if (data.hasOwnProperty('secondOrderWins'))
        obj.secondOrderWins = ApiClient.convertToType(data['secondOrderWins'], 'Number');
      if (data.hasOwnProperty('sos'))
        obj.sos = ApiClient.convertToType(data['sos'], 'Number');
      if (data.hasOwnProperty('offense'))
        obj.offense = ConferenceSPRatingOffense.constructFromObject(data['offense']);
      if (data.hasOwnProperty('defense'))
        obj.defense = ConferenceSPRatingDefense.constructFromObject(data['defense']);
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
   * @member {String} conference
   */
  exports.prototype.conference = undefined;

  /**
   * @member {Number} rating
   */
  exports.prototype.rating = undefined;

  /**
   * @member {Number} secondOrderWins
   */
  exports.prototype.secondOrderWins = undefined;

  /**
   * @member {Number} sos
   */
  exports.prototype.sos = undefined;

  /**
   * @member {module:model/ConferenceSPRatingOffense} offense
   */
  exports.prototype.offense = undefined;

  /**
   * @member {module:model/ConferenceSPRatingDefense} defense
   */
  exports.prototype.defense = undefined;

  /**
   * @member {module:model/TeamSPRatingSpecialTeams} specialTeams
   */
  exports.prototype.specialTeams = undefined;


  return exports;

}));
