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
 * Swagger Codegen version: 2.4.33
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Player', 'model/Team', 'model/TeamMatchup', 'model/TeamTalent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Player'), require('../model/Team'), require('../model/TeamMatchup'), require('../model/TeamTalent'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.TeamsApi = factory(root.cfb.ApiClient, root.cfb.Player, root.cfb.Team, root.cfb.TeamMatchup, root.cfb.TeamTalent);
  }
}(this, function(ApiClient, Player, Team, TeamMatchup, TeamTalent) {
  'use strict';

  /**
   * Teams service.
   * @module api/TeamsApi
   * @version 4.5.1
   */

  /**
   * Constructs a new TeamsApi. 
   * @alias module:api/TeamsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * FBS team list
     * Information on major division teams
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Team>} and HTTP response
     */
    this.getFbsTeamsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = [Team];

      return this.apiClient.callApi(
        '/teams/fbs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * FBS team list
     * Information on major division teams
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Team>}
     */
    this.getFbsTeams = function(opts) {
      return this.getFbsTeamsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Team rosters
     * Roster data
     * @param {Object} opts Optional parameters
     * @param {String} opts.team Team name
     * @param {Number} opts.year Season year
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Player>} and HTTP response
     */
    this.getRosterWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = [Player];

      return this.apiClient.callApi(
        '/roster', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team rosters
     * Roster data
     * @param {Object} opts Optional parameters
     * @param {String} opts.team Team name
     * @param {Number} opts.year Season year
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Player>}
     */
    this.getRoster = function(opts) {
      return this.getRosterWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Team talent composite rankings
     * Team talent composite
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TeamTalent>} and HTTP response
     */
    this.getTalentWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = [TeamTalent];

      return this.apiClient.callApi(
        '/talent', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team talent composite rankings
     * Team talent composite
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TeamTalent>}
     */
    this.getTalent = function(opts) {
      return this.getTalentWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Team matchup history
     * Matchup history
     * @param {String} team1 First team
     * @param {String} team2 Second team
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minYear Minimum year
     * @param {Number} opts.maxYear Maximum year
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TeamMatchup} and HTTP response
     */
    this.getTeamMatchupWithHttpInfo = function(team1, team2, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'team1' is set
      if (team1 === undefined || team1 === null) {
        throw new Error("Missing the required parameter 'team1' when calling getTeamMatchup");
      }

      // verify the required parameter 'team2' is set
      if (team2 === undefined || team2 === null) {
        throw new Error("Missing the required parameter 'team2' when calling getTeamMatchup");
      }


      var pathParams = {
      };
      var queryParams = {
        'team1': team1,
        'team2': team2,
        'minYear': opts['minYear'],
        'maxYear': opts['maxYear'],
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
      var returnType = TeamMatchup;

      return this.apiClient.callApi(
        '/teams/matchup', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team matchup history
     * Matchup history
     * @param {String} team1 First team
     * @param {String} team2 Second team
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minYear Minimum year
     * @param {Number} opts.maxYear Maximum year
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TeamMatchup}
     */
    this.getTeamMatchup = function(team1, team2, opts) {
      return this.getTeamMatchupWithHttpInfo(team1, team2, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Team information
     * Get team information
     * @param {Object} opts Optional parameters
     * @param {String} opts.conference Conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Team>} and HTTP response
     */
    this.getTeamsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = [Team];

      return this.apiClient.callApi(
        '/teams', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team information
     * Get team information
     * @param {Object} opts Optional parameters
     * @param {String} opts.conference Conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Team>}
     */
    this.getTeams = function(opts) {
      return this.getTeamsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
