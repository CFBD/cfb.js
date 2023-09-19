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
    define(['ApiClient', 'model/ConferenceSPRating', 'model/TeamEloRating', 'model/TeamFPIRating', 'model/TeamSPRating', 'model/TeamSRSRating'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ConferenceSPRating'), require('../model/TeamEloRating'), require('../model/TeamFPIRating'), require('../model/TeamSPRating'), require('../model/TeamSRSRating'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.RatingsApi = factory(root.cfb.ApiClient, root.cfb.ConferenceSPRating, root.cfb.TeamEloRating, root.cfb.TeamFPIRating, root.cfb.TeamSPRating, root.cfb.TeamSRSRating);
  }
}(this, function(ApiClient, ConferenceSPRating, TeamEloRating, TeamFPIRating, TeamSPRating, TeamSRSRating) {
  'use strict';

  /**
   * Ratings service.
   * @module api/RatingsApi
   * @version 4.5.1
   */

  /**
   * Constructs a new RatingsApi. 
   * @alias module:api/RatingsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Historical SP+ ratings by conference
     * Get average SP+ historical rating data by conference
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Season filter
     * @param {String} opts.conference Conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ConferenceSPRating>} and HTTP response
     */
    this.getConferenceSPRatingsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'year': opts['year'],
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
      var returnType = [ConferenceSPRating];

      return this.apiClient.callApi(
        '/ratings/sp/conferences', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Historical SP+ ratings by conference
     * Get average SP+ historical rating data by conference
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Season filter
     * @param {String} opts.conference Conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ConferenceSPRating>}
     */
    this.getConferenceSPRatings = function(opts) {
      return this.getConferenceSPRatingsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Historical Elo ratings
     * Elo rating data
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Season filter
     * @param {Number} opts.week Maximum week filter
     * @param {String} opts.seasonType Maximum season type to consider (defaults to regular if week is specified else defaults to postseason)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TeamEloRating>} and HTTP response
     */
    this.getEloRatingsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'year': opts['year'],
        'week': opts['week'],
        'seasonType': opts['seasonType'],
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
      var returnType = [TeamEloRating];

      return this.apiClient.callApi(
        '/ratings/elo', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Historical Elo ratings
     * Elo rating data
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Season filter
     * @param {Number} opts.week Maximum week filter
     * @param {String} opts.seasonType Maximum season type to consider (defaults to regular if week is specified else defaults to postseason)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TeamEloRating>}
     */
    this.getEloRatings = function(opts) {
      return this.getEloRatingsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Historical FPI ratings
     * FPI rating data
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Season filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TeamFPIRating>} and HTTP response
     */
    this.getFPIRatingsWithHttpInfo = function(opts) {
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
      var returnType = [TeamFPIRating];

      return this.apiClient.callApi(
        '/ratings/fpi', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Historical FPI ratings
     * FPI rating data
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Season filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TeamFPIRating>}
     */
    this.getFPIRatings = function(opts) {
      return this.getFPIRatingsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Historical SP+ ratings
     * SP+ rating data
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Season filter (required if team not specified)
     * @param {String} opts.team Team filter (required if year not specified)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TeamSPRating>} and HTTP response
     */
    this.getSPRatingsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'year': opts['year'],
        'team': opts['team'],
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
      var returnType = [TeamSPRating];

      return this.apiClient.callApi(
        '/ratings/sp', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Historical SP+ ratings
     * SP+ rating data
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Season filter (required if team not specified)
     * @param {String} opts.team Team filter (required if year not specified)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TeamSPRating>}
     */
    this.getSPRatings = function(opts) {
      return this.getSPRatingsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Historical SRS ratings
     * SRS rating data (requires either a year or team specified)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Season filter (required if team not specified)
     * @param {String} opts.team Team filter (required if year not specified)
     * @param {String} opts.conference Conference filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TeamSRSRating>} and HTTP response
     */
    this.getSRSRatingsWithHttpInfo = function(opts) {
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
      var returnType = [TeamSRSRating];

      return this.apiClient.callApi(
        '/ratings/srs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Historical SRS ratings
     * SRS rating data (requires either a year or team specified)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Season filter (required if team not specified)
     * @param {String} opts.team Team filter (required if year not specified)
     * @param {String} opts.conference Conference filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TeamSRSRating>}
     */
    this.getSRSRatings = function(opts) {
      return this.getSRSRatingsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
