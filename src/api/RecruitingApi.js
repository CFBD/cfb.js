/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.7
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from "../ApiClient";
import {PositionGroupRecruitingRating} from '../model/PositionGroupRecruitingRating';
import {Recruit} from '../model/Recruit';
import {TeamRecruitingRank} from '../model/TeamRecruitingRank';

/**
* Recruiting service.
* @module api/RecruitingApi
* @version 2.2.7
*/
export class RecruitingApi {

    /**
    * Constructs a new RecruitingApi. 
    * @alias module:api/RecruitingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



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
    getRecruitingGroupsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'startYear': opts['startYear'],
        'endYear': opts['endYear'],
        'team': opts['team'],
        'conference': opts['conference']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PositionGroupRecruitingRating];

      return this.apiClient.callApi(
        '/recruiting/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    getRecruitingGroups(opts) {
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
    getRecruitingPlayersWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year'],
        'classification': opts['classification'],
        'position': opts['position'],
        'state': opts['state'],
        'team': opts['team']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Recruit];

      return this.apiClient.callApi(
        '/recruiting/players', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    getRecruitingPlayers(opts) {
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
    getRecruitingTeamsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year'],
        'team': opts['team']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TeamRecruitingRank];

      return this.apiClient.callApi(
        '/recruiting/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    getRecruitingTeams(opts) {
      return this.getRecruitingTeamsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
