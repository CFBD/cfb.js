/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.13
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
    define(['ApiClient', 'model/AdvancedGameStat', 'model/AdvancedSeasonStat', 'model/TeamSeasonStat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AdvancedGameStat'), require('../model/AdvancedSeasonStat'), require('../model/TeamSeasonStat'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.StatsApi = factory(root.cfb.ApiClient, root.cfb.AdvancedGameStat, root.cfb.AdvancedSeasonStat, root.cfb.TeamSeasonStat);
  }
}(this, function(ApiClient, AdvancedGameStat, AdvancedSeasonStat, TeamSeasonStat) {
  'use strict';

  /**
   * Stats service.
   * @module api/StatsApi
   * @version 4.4.13
   */

  /**
   * Constructs a new StatsApi. 
   * @alias module:api/StatsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Advanced team metrics by game
     * Advanced team game stats
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter (required if no team specified)
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter (required if no year specified)
     * @param {String} opts.opponent Opponent filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @param {String} opts.seasonType Season type filter (regular, postseason, or both)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AdvancedGameStat>} and HTTP response
     */
    this.getAdvancedTeamGameStatsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'year': opts['year'],
        'week': opts['week'],
        'team': opts['team'],
        'opponent': opts['opponent'],
        'excludeGarbageTime': opts['excludeGarbageTime'],
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
      var returnType = [AdvancedGameStat];

      return this.apiClient.callApi(
        '/stats/game/advanced', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Advanced team metrics by game
     * Advanced team game stats
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter (required if no team specified)
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter (required if no year specified)
     * @param {String} opts.opponent Opponent filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @param {String} opts.seasonType Season type filter (regular, postseason, or both)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AdvancedGameStat>}
     */
    this.getAdvancedTeamGameStats = function(opts) {
      return this.getAdvancedTeamGameStatsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Advanced team metrics by season
     * Advanced team season stats
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter (required if no team specified)
     * @param {String} opts.team Team filter (required if no year specified)
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @param {Number} opts.startWeek Starting week filter
     * @param {Number} opts.endWeek Starting week filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AdvancedSeasonStat>} and HTTP response
     */
    this.getAdvancedTeamSeasonStatsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'year': opts['year'],
        'team': opts['team'],
        'excludeGarbageTime': opts['excludeGarbageTime'],
        'startWeek': opts['startWeek'],
        'endWeek': opts['endWeek'],
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
      var returnType = [AdvancedSeasonStat];

      return this.apiClient.callApi(
        '/stats/season/advanced', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Advanced team metrics by season
     * Advanced team season stats
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter (required if no team specified)
     * @param {String} opts.team Team filter (required if no year specified)
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @param {Number} opts.startWeek Starting week filter
     * @param {Number} opts.endWeek Starting week filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AdvancedSeasonStat>}
     */
    this.getAdvancedTeamSeasonStats = function(opts) {
      return this.getAdvancedTeamSeasonStatsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Team stat categories
     * Stat category list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<'String'>} and HTTP response
     */
    this.getStatCategoriesWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/stats/categories', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team stat categories
     * Stat category list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<'String'>}
     */
    this.getStatCategories = function() {
      return this.getStatCategoriesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Team statistics by season
     * Team season stats
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter (required if no team specified)
     * @param {String} opts.team Team filter (required if no year specified)
     * @param {String} opts.conference Conference abbreviation filter
     * @param {Number} opts.startWeek Starting week filter
     * @param {Number} opts.endWeek Starting week filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TeamSeasonStat>} and HTTP response
     */
    this.getTeamSeasonStatsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'year': opts['year'],
        'team': opts['team'],
        'conference': opts['conference'],
        'startWeek': opts['startWeek'],
        'endWeek': opts['endWeek'],
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
      var returnType = [TeamSeasonStat];

      return this.apiClient.callApi(
        '/stats/season', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team statistics by season
     * Team season stats
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter (required if no team specified)
     * @param {String} opts.team Team filter (required if no year specified)
     * @param {String} opts.conference Conference abbreviation filter
     * @param {Number} opts.startWeek Starting week filter
     * @param {Number} opts.endWeek Starting week filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TeamSeasonStat>}
     */
    this.getTeamSeasonStats = function(opts) {
      return this.getTeamSeasonStatsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
