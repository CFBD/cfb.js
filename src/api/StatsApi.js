/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\").
 *
 * OpenAPI spec version: 3.1.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from "../ApiClient";
import {AdvancedGameStat} from '../model/AdvancedGameStat';
import {AdvancedSeasonStat} from '../model/AdvancedSeasonStat';
import {TeamSeasonStat} from '../model/TeamSeasonStat';

/**
* Stats service.
* @module api/StatsApi
* @version 3.1.0
*/
export class StatsApi {

    /**
    * Constructs a new StatsApi. 
    * @alias module:api/StatsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AdvancedGameStat>} and HTTP response
     */
    getAdvancedTeamGameStatsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year'],
        'week': opts['week'],
        'team': opts['team'],
        'opponent': opts['opponent'],
        'excludeGarbageTime': opts['excludeGarbageTime'],
        'seasonType': opts['seasonType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AdvancedGameStat];

      return this.apiClient.callApi(
        '/stats/game/advanced', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    getAdvancedTeamGameStats(opts) {
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
    getAdvancedTeamSeasonStatsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year'],
        'team': opts['team'],
        'excludeGarbageTime': opts['excludeGarbageTime'],
        'startWeek': opts['startWeek'],
        'endWeek': opts['endWeek']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AdvancedSeasonStat];

      return this.apiClient.callApi(
        '/stats/season/advanced', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    getAdvancedTeamSeasonStats(opts) {
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
    getStatCategoriesWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['String'];

      return this.apiClient.callApi(
        '/stats/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team stat categories
     * Stat category list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<'String'>}
     */
    getStatCategories() {
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
    getTeamSeasonStatsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year'],
        'team': opts['team'],
        'conference': opts['conference'],
        'startWeek': opts['startWeek'],
        'endWeek': opts['endWeek']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TeamSeasonStat];

      return this.apiClient.callApi(
        '/stats/season', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    getTeamSeasonStats(opts) {
      return this.getTeamSeasonStatsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
