/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.5
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
    define(['ApiClient', 'model/RankingWeek'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RankingWeek'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.RankingsApi = factory(root.cfb.ApiClient, root.cfb.RankingWeek);
  }
}(this, function(ApiClient, RankingWeek) {
  'use strict';

  /**
   * Rankings service.
   * @module api/RankingsApi
   * @version 4.4.5
   */

  /**
   * Constructs a new RankingsApi. 
   * @alias module:api/RankingsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Historical polls and rankings
     * Poll rankings
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/RankingWeek>} and HTTP response
     */
    this.getRankingsWithHttpInfo = function(year, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getRankings");
      }


      var pathParams = {
      };
      var queryParams = {
        'year': year,
        'week': opts['week'],
        'seasonType': opts['seasonType'],
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
      var returnType = [RankingWeek];

      return this.apiClient.callApi(
        '/rankings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Historical polls and rankings
     * Poll rankings
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/RankingWeek>}
     */
    this.getRankings = function(year, opts) {
      return this.getRankingsWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
