/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.6.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Coach'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Coach'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.CoachesApi = factory(root.cfb.ApiClient, root.cfb.Coach);
  }
}(this, function(ApiClient, Coach) {
  'use strict';

  /**
   * Coaches service.
   * @module api/CoachesApi
   * @version 4.6.0
   */

  /**
   * Constructs a new CoachesApi. 
   * @alias module:api/CoachesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Coaching records and history
     * Coaching history
     * @param {Object} opts Optional parameters
     * @param {String} opts.firstName First name filter
     * @param {String} opts.lastName Last name filter
     * @param {String} opts.team Team name filter
     * @param {Number} opts.year Year filter
     * @param {Number} opts.minYear Minimum year filter (inclusive)
     * @param {Number} opts.maxYear Maximum year filter (inclusive)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Coach>} and HTTP response
     */
    this.getCoachesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'firstName': opts['firstName'],
        'lastName': opts['lastName'],
        'team': opts['team'],
        'year': opts['year'],
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
      var returnType = [Coach];

      return this.apiClient.callApi(
        '/coaches', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Coaching records and history
     * Coaching history
     * @param {Object} opts Optional parameters
     * @param {String} opts.firstName First name filter
     * @param {String} opts.lastName Last name filter
     * @param {String} opts.team Team name filter
     * @param {Number} opts.year Year filter
     * @param {Number} opts.minYear Minimum year filter (inclusive)
     * @param {Number} opts.maxYear Maximum year filter (inclusive)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Coach>}
     */
    this.getCoaches = function(opts) {
      return this.getCoachesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
