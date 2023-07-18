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
    define(['ApiClient', 'model/PositionGroupRecruitingRating', 'model/Recruit', 'model/TeamRecruitingRank'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PositionGroupRecruitingRating'), require('../model/Recruit'), require('../model/TeamRecruitingRank'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.RecruitingApi = factory(root.cfb.ApiClient, root.cfb.PositionGroupRecruitingRating, root.cfb.Recruit, root.cfb.TeamRecruitingRank);
  }
}(this, function(ApiClient, PositionGroupRecruitingRating, Recruit, TeamRecruitingRank) {
  'use strict';

  /**
   * Recruiting service.
   * @module api/RecruitingApi
   * @version 4.4.13
   */

  /**
   * Constructs a new RecruitingApi. 
   * @alias module:api/RecruitingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Recruit position group ratings
     * Gets a list of aggregated statistics by team and position grouping
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startYear Starting year
     * @param {Number} opts.endYear Ending year
     * @param {String} opts.team Team filter
     * @param {String} opts.conference conference filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PositionGroupRecruitingRating>} and HTTP response
     */
    this.getRecruitingGroupsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'startYear': opts['startYear'],
        'endYear': opts['endYear'],
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
      var returnType = [PositionGroupRecruitingRating];

      return this.apiClient.callApi(
        '/recruiting/groups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Recruit position group ratings
     * Gets a list of aggregated statistics by team and position grouping
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startYear Starting year
     * @param {Number} opts.endYear Ending year
     * @param {String} opts.team Team filter
     * @param {String} opts.conference conference filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PositionGroupRecruitingRating>}
     */
    this.getRecruitingGroups = function(opts) {
      return this.getRecruitingGroupsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Player recruiting ratings and rankings
     * Get player recruiting rankings and data. Requires either a year or team to be specified.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Recruiting class year (required if team no specified)
     * @param {String} opts.classification Type of recruit (HighSchool, JUCO, PrepSchool) (default to HighSchool)
     * @param {String} opts.position Position abbreviation filter
     * @param {String} opts.state State or province abbreviation filter
     * @param {String} opts.team Committed team filter (required if year not specified)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Recruit>} and HTTP response
     */
    this.getRecruitingPlayersWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'year': opts['year'],
        'classification': opts['classification'],
        'position': opts['position'],
        'state': opts['state'],
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
      var returnType = [Recruit];

      return this.apiClient.callApi(
        '/recruiting/players', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Player recruiting ratings and rankings
     * Get player recruiting rankings and data. Requires either a year or team to be specified.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Recruiting class year (required if team no specified)
     * @param {String} opts.classification Type of recruit (HighSchool, JUCO, PrepSchool) (default to HighSchool)
     * @param {String} opts.position Position abbreviation filter
     * @param {String} opts.state State or province abbreviation filter
     * @param {String} opts.team Committed team filter (required if year not specified)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Recruit>}
     */
    this.getRecruitingPlayers = function(opts) {
      return this.getRecruitingPlayersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Team recruiting rankings and ratings
     * Team recruiting rankings
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Recruiting class year
     * @param {String} opts.team Team filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TeamRecruitingRank>} and HTTP response
     */
    this.getRecruitingTeamsWithHttpInfo = function(opts) {
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
      var returnType = [TeamRecruitingRank];

      return this.apiClient.callApi(
        '/recruiting/teams', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team recruiting rankings and ratings
     * Team recruiting rankings
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Recruiting class year
     * @param {String} opts.team Team filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TeamRecruitingRank>}
     */
    this.getRecruitingTeams = function(opts) {
      return this.getRecruitingTeamsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
