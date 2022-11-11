/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.11
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LivePlayByPlay', 'model/Play', 'model/PlayStat', 'model/PlayStatType', 'model/PlayType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LivePlayByPlay'), require('../model/Play'), require('../model/PlayStat'), require('../model/PlayStatType'), require('../model/PlayType'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.PlaysApi = factory(root.cfb.ApiClient, root.cfb.LivePlayByPlay, root.cfb.Play, root.cfb.PlayStat, root.cfb.PlayStatType, root.cfb.PlayType);
  }
}(this, function(ApiClient, LivePlayByPlay, Play, PlayStat, PlayStatType, PlayType) {
  'use strict';

  /**
   * Plays service.
   * @module api/PlaysApi
   * @version 4.4.11
   */

  /**
   * Constructs a new PlaysApi. 
   * @alias module:api/PlaysApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Live metrics and PBP (Patreon only)
     * Get live metrics and PBP
     * @param {Number} id Game id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LivePlayByPlay} and HTTP response
     */
    this.getLivePlaysWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getLivePlays");
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
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
      var returnType = LivePlayByPlay;

      return this.apiClient.callApi(
        '/live/plays', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Live metrics and PBP (Patreon only)
     * Get live metrics and PBP
     * @param {Number} id Game id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LivePlayByPlay}
     */
    this.getLivePlays = function(id) {
      return this.getLivePlaysWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Types of player play stats
     * Type of play stats
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayStatType>} and HTTP response
     */
    this.getPlayStatTypesWithHttpInfo = function() {
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
      var returnType = [PlayStatType];

      return this.apiClient.callApi(
        '/play/stat/types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Types of player play stats
     * Type of play stats
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayStatType>}
     */
    this.getPlayStatTypes = function() {
      return this.getPlayStatTypesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Play stats by play
     * Gets player stats associated by play (limit 1000)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {Number} opts.gameId gameId filter (from /games endpoint)
     * @param {Number} opts.athleteId athleteId filter (from /roster endpoint)
     * @param {Number} opts.statTypeId statTypeId filter (from /play/stat/types endpoint)
     * @param {String} opts.seasonType regular, postseason, or both
     * @param {String} opts.conference conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayStat>} and HTTP response
     */
    this.getPlayStatsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'year': opts['year'],
        'week': opts['week'],
        'team': opts['team'],
        'gameId': opts['gameId'],
        'athleteId': opts['athleteId'],
        'statTypeId': opts['statTypeId'],
        'seasonType': opts['seasonType'],
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
      var returnType = [PlayStat];

      return this.apiClient.callApi(
        '/play/stats', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Play stats by play
     * Gets player stats associated by play (limit 1000)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {Number} opts.gameId gameId filter (from /games endpoint)
     * @param {Number} opts.athleteId athleteId filter (from /roster endpoint)
     * @param {Number} opts.statTypeId statTypeId filter (from /play/stat/types endpoint)
     * @param {String} opts.seasonType regular, postseason, or both
     * @param {String} opts.conference conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayStat>}
     */
    this.getPlayStats = function(opts) {
      return this.getPlayStatsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Play types
     * Types of plays
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayType>} and HTTP response
     */
    this.getPlayTypesWithHttpInfo = function() {
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
      var returnType = [PlayType];

      return this.apiClient.callApi(
        '/play/types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Play types
     * Types of plays
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayType>}
     */
    this.getPlayTypes = function() {
      return this.getPlayTypesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Play by play data
     * Get play data and results
     * @param {Number} year Year filter
     * @param {Number} week Week filter (required if team, offense, or defense, not specified)
     * @param {Object} opts Optional parameters
     * @param {String} opts.seasonType Season type filter (default to regular)
     * @param {String} opts.team Team filter
     * @param {String} opts.offense Offensive team filter
     * @param {String} opts.defense Defensive team filter
     * @param {String} opts.conference Conference filter
     * @param {String} opts.offenseConference Offensive conference filter
     * @param {String} opts.defenseConference Defensive conference filter
     * @param {Number} opts.playType Play type filter
     * @param {String} opts.classification Division classification filter (fbs/fcs/ii/iii)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Play>} and HTTP response
     */
    this.getPlaysWithHttpInfo = function(year, week, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getPlays");
      }

      // verify the required parameter 'week' is set
      if (week === undefined || week === null) {
        throw new Error("Missing the required parameter 'week' when calling getPlays");
      }


      var pathParams = {
      };
      var queryParams = {
        'seasonType': opts['seasonType'],
        'year': year,
        'week': week,
        'team': opts['team'],
        'offense': opts['offense'],
        'defense': opts['defense'],
        'conference': opts['conference'],
        'offenseConference': opts['offenseConference'],
        'defenseConference': opts['defenseConference'],
        'playType': opts['playType'],
        'classification': opts['classification'],
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
      var returnType = [Play];

      return this.apiClient.callApi(
        '/plays', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Play by play data
     * Get play data and results
     * @param {Number} year Year filter
     * @param {Number} week Week filter (required if team, offense, or defense, not specified)
     * @param {Object} opts Optional parameters
     * @param {String} opts.seasonType Season type filter (default to regular)
     * @param {String} opts.team Team filter
     * @param {String} opts.offense Offensive team filter
     * @param {String} opts.defense Defensive team filter
     * @param {String} opts.conference Conference filter
     * @param {String} opts.offenseConference Offensive conference filter
     * @param {String} opts.defenseConference Defensive conference filter
     * @param {Number} opts.playType Play type filter
     * @param {String} opts.classification Division classification filter (fbs/fcs/ii/iii)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Play>}
     */
    this.getPlays = function(year, week, opts) {
      return this.getPlaysWithHttpInfo(year, week, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
