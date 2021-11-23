/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.2.3
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.24
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PlayerSearchResult', 'model/PlayerSeasonStat', 'model/PlayerUsage', 'model/ReturningProduction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PlayerSearchResult'), require('../model/PlayerSeasonStat'), require('../model/PlayerUsage'), require('../model/ReturningProduction'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.PlayersApi = factory(root.cfb.ApiClient, root.cfb.PlayerSearchResult, root.cfb.PlayerSeasonStat, root.cfb.PlayerUsage, root.cfb.ReturningProduction);
  }
}(this, function(ApiClient, PlayerSearchResult, PlayerSeasonStat, PlayerUsage, ReturningProduction) {
  'use strict';

  /**
   * Players service.
   * @module api/PlayersApi
   * @version 4.2.3
   */

  /**
   * Constructs a new PlayersApi. 
   * @alias module:api/PlayersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Player stats by season
     * Season player stats
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {Number} opts.startWeek Start week filter
     * @param {Number} opts.endWeek Start week filter
     * @param {String} opts.seasonType Season type filter (regular, postseason, or both)
     * @param {String} opts.category Stat category filter (e.g. passing)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayerSeasonStat>} and HTTP response
     */
    this.getPlayerSeasonStatsWithHttpInfo = function(year, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getPlayerSeasonStats");
      }


      var pathParams = {
      };
      var queryParams = {
        'year': year,
        'team': opts['team'],
        'conference': opts['conference'],
        'startWeek': opts['startWeek'],
        'endWeek': opts['endWeek'],
        'seasonType': opts['seasonType'],
        'category': opts['category'],
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
      var returnType = [PlayerSeasonStat];

      return this.apiClient.callApi(
        '/stats/player/season', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Player stats by season
     * Season player stats
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {Number} opts.startWeek Start week filter
     * @param {Number} opts.endWeek Start week filter
     * @param {String} opts.seasonType Season type filter (regular, postseason, or both)
     * @param {String} opts.category Stat category filter (e.g. passing)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayerSeasonStat>}
     */
    this.getPlayerSeasonStats = function(year, opts) {
      return this.getPlayerSeasonStatsWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Player usage metrics broken down by season
     * Player usage metrics by season
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {String} opts.position Position abbreviation filter
     * @param {Number} opts.playerId Player id filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayerUsage>} and HTTP response
     */
    this.getPlayerUsageWithHttpInfo = function(year, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getPlayerUsage");
      }


      var pathParams = {
      };
      var queryParams = {
        'year': year,
        'team': opts['team'],
        'conference': opts['conference'],
        'position': opts['position'],
        'playerId': opts['playerId'],
        'excludeGarbageTime': opts['excludeGarbageTime'],
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
      var returnType = [PlayerUsage];

      return this.apiClient.callApi(
        '/player/usage', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Player usage metrics broken down by season
     * Player usage metrics by season
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {String} opts.position Position abbreviation filter
     * @param {Number} opts.playerId Player id filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayerUsage>}
     */
    this.getPlayerUsage = function(year, opts) {
      return this.getPlayerUsageWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Team returning production metrics
     * Returning production metrics
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ReturningProduction>} and HTTP response
     */
    this.getReturningProductionWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'year': opts['year'],
        'team': opts['team'],
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
      var returnType = [ReturningProduction];

      return this.apiClient.callApi(
        '/player/returning', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team returning production metrics
     * Returning production metrics
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ReturningProduction>}
     */
    this.getReturningProduction = function(opts) {
      return this.getReturningProductionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search for player information
     * Search for players
     * @param {String} searchTerm Term to search on
     * @param {Object} opts Optional parameters
     * @param {String} opts.position Position abbreviation filter
     * @param {String} opts.team Team filter
     * @param {Number} opts.year Year filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayerSearchResult>} and HTTP response
     */
    this.playerSearchWithHttpInfo = function(searchTerm, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'searchTerm' is set
      if (searchTerm === undefined || searchTerm === null) {
        throw new Error("Missing the required parameter 'searchTerm' when calling playerSearch");
      }


      var pathParams = {
      };
      var queryParams = {
        'searchTerm': searchTerm,
        'position': opts['position'],
        'team': opts['team'],
        'year': opts['year'],
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
      var returnType = [PlayerSearchResult];

      return this.apiClient.callApi(
        '/player/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search for player information
     * Search for players
     * @param {String} searchTerm Term to search on
     * @param {Object} opts Optional parameters
     * @param {String} opts.position Position abbreviation filter
     * @param {String} opts.team Team filter
     * @param {Number} opts.year Year filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayerSearchResult>}
     */
    this.playerSearch = function(searchTerm, opts) {
      return this.playerSearchWithHttpInfo(searchTerm, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
