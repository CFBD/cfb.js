/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.17
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from "../ApiClient";
import {ConferenceSPRating} from '../model/ConferenceSPRating';
import {TeamSPRating} from '../model/TeamSPRating';
import {TeamSRSRating} from '../model/TeamSRSRating';

/**
* Ratings service.
* @module api/RatingsApi
* @version 2.2.17
*/
export class RatingsApi {

    /**
    * Constructs a new RatingsApi. 
    * @alias module:api/RatingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Historical SP+ ratings by conference
     * Get average SP+ historical rating data by conference
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Season filter
     * @param {String} opts.conference Conference abbreviation filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ConferenceSPRating>} and HTTP response
     */
    getConferenceSPRatingsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year'],
        'conference': opts['conference']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ConferenceSPRating];

      return this.apiClient.callApi(
        '/ratings/sp/conferences', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    getConferenceSPRatings(opts) {
      return this.getConferenceSPRatingsWithHttpInfo(opts)
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
    getSPRatingsWithHttpInfo(opts) {
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
      let returnType = [TeamSPRating];

      return this.apiClient.callApi(
        '/ratings/sp', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    getSPRatings(opts) {
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
    getSRSRatingsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year'],
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
      let returnType = [TeamSRSRating];

      return this.apiClient.callApi(
        '/ratings/srs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    getSRSRatings(opts) {
      return this.getSRSRatingsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
