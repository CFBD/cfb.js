/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.5
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.28
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Drive'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Drive'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.DrivesApi = factory(root.cfb.ApiClient, root.cfb.Drive);
  }
}(this, function(ApiClient, Drive) {
  'use strict';

  /**
   * Drives service.
   * @module api/DrivesApi
   * @version 4.4.5
   */

  /**
   * Constructs a new DrivesApi. 
   * @alias module:api/DrivesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Drive data and results
     * Get game drives
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.seasonType Season type filter (default to regular)
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {String} opts.offense Offensive team filter
     * @param {String} opts.defense Defensive team filter
     * @param {String} opts.conference Conference filter
     * @param {String} opts.offenseConference Offensive conference filter
     * @param {String} opts.defenseConference Defensive conference filter
     * @param {String} opts.classification Division classification filter (fbs/fcs/ii/iii)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Drive>} and HTTP response
     */
    this.getDrivesWithHttpInfo = function(year, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getDrives");
      }


      var pathParams = {
      };
      var queryParams = {
        'seasonType': opts['seasonType'],
        'year': year,
        'week': opts['week'],
        'team': opts['team'],
        'offense': opts['offense'],
        'defense': opts['defense'],
        'conference': opts['conference'],
        'offenseConference': opts['offenseConference'],
        'defenseConference': opts['defenseConference'],
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
      var returnType = [Drive];

      return this.apiClient.callApi(
        '/drives', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Drive data and results
     * Get game drives
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.seasonType Season type filter (default to regular)
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {String} opts.offense Offensive team filter
     * @param {String} opts.defense Defensive team filter
     * @param {String} opts.conference Conference filter
     * @param {String} opts.offenseConference Offensive conference filter
     * @param {String} opts.defenseConference Defensive conference filter
     * @param {String} opts.classification Division classification filter (fbs/fcs/ii/iii)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Drive>}
     */
    this.getDrives = function(year, opts) {
      return this.getDrivesWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
