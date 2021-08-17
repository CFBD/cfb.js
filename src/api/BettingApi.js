/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.5
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
    define(['ApiClient', 'model/GameLines'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GameLines'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.BettingApi = factory(root.cfb.ApiClient, root.cfb.GameLines);
  }
}(this, function(ApiClient, GameLines) {
  'use strict';

  /**
   * Betting service.
   * @module api/BettingApi
   * @version 4.1.5
   */

  /**
   * Constructs a new BettingApi. 
   * @alias module:api/BettingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Betting lines
     * Closing betting lines
     * @param {Object} opts Optional parameters
     * @param {Number} opts.gameId Game id filter
     * @param {Number} opts.year Year/season filter for games
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team
     * @param {String} opts.home Home team filter
     * @param {String} opts.away Away team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GameLines>} and HTTP response
     */
    this.getLinesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'gameId': opts['gameId'],
        'year': opts['year'],
        'week': opts['week'],
        'seasonType': opts['seasonType'],
        'team': opts['team'],
        'home': opts['home'],
        'away': opts['away'],
        'conference': opts['conference'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GameLines];

      return this.apiClient.callApi(
        '/lines', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Betting lines
     * Closing betting lines
     * @param {Object} opts Optional parameters
     * @param {Number} opts.gameId Game id filter
     * @param {Number} opts.year Year/season filter for games
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team
     * @param {String} opts.home Home team filter
     * @param {String} opts.away Away team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GameLines>}
     */
    this.getLines = function(opts) {
      return this.getLinesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
