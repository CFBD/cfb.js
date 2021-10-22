/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.2.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.23
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DraftPick', 'model/DraftPosition', 'model/DraftTeam'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DraftPick'), require('../model/DraftPosition'), require('../model/DraftTeam'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.DraftApi = factory(root.cfb.ApiClient, root.cfb.DraftPick, root.cfb.DraftPosition, root.cfb.DraftTeam);
  }
}(this, function(ApiClient, DraftPick, DraftPosition, DraftTeam) {
  'use strict';

  /**
   * Draft service.
   * @module api/DraftApi
   * @version 4.2.0
   */

  /**
   * Constructs a new DraftApi. 
   * @alias module:api/DraftApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * List of NFL Draft picks
     * List of NFL Draft picks
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.nflTeam NFL team filter
     * @param {String} opts.college Player college filter
     * @param {String} opts.conference College confrence abbreviation filter
     * @param {String} opts.position NFL position filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DraftPick>} and HTTP response
     */
    this.getDraftPicksWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'year': opts['year'],
        'nflTeam': opts['nflTeam'],
        'college': opts['college'],
        'conference': opts['conference'],
        'position': opts['position'],
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
      var returnType = [DraftPick];

      return this.apiClient.callApi(
        '/draft/picks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List of NFL Draft picks
     * List of NFL Draft picks
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.nflTeam NFL team filter
     * @param {String} opts.college Player college filter
     * @param {String} opts.conference College confrence abbreviation filter
     * @param {String} opts.position NFL position filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DraftPick>}
     */
    this.getDraftPicks = function(opts) {
      return this.getDraftPicksWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List of NFL positions
     * List of NFL positions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DraftPosition>} and HTTP response
     */
    this.getNFLPositionsWithHttpInfo = function() {
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
      var returnType = [DraftPosition];

      return this.apiClient.callApi(
        '/draft/positions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List of NFL positions
     * List of NFL positions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DraftPosition>}
     */
    this.getNFLPositions = function() {
      return this.getNFLPositionsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List of NFL teams
     * List of NFL teams
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DraftTeam>} and HTTP response
     */
    this.getNFLTeamsWithHttpInfo = function() {
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
      var returnType = [DraftTeam];

      return this.apiClient.callApi(
        '/draft/teams', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List of NFL teams
     * List of NFL teams
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DraftTeam>}
     */
    this.getNFLTeams = function() {
      return this.getNFLTeamsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
