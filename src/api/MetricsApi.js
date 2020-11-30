/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.3.3
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
import {GamePPA} from '../model/GamePPA';
import {PlayWP} from '../model/PlayWP';
import {PlayerGamePPA} from '../model/PlayerGamePPA';
import {PlayerSeasonPPA} from '../model/PlayerSeasonPPA';
import {PredictedPoints} from '../model/PredictedPoints';
import {PregameWP} from '../model/PregameWP';
import {TeamPPA} from '../model/TeamPPA';

/**
* Metrics service.
* @module api/MetricsApi
* @version 2.3.3
*/
export class MetricsApi {

    /**
    * Constructs a new MetricsApi. 
    * @alias module:api/MetricsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Team Predicated Points Added (PPA/EPA) by game
     * Predicted Points Added (PPA) by game
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GamePPA>} and HTTP response
     */
    getGamePPAWithHttpInfo(year, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getGamePPA");
      }


      let pathParams = {
      };
      let queryParams = {
        'year': year,
        'week': opts['week'],
        'team': opts['team'],
        'conference': opts['conference'],
        'excludeGarbageTime': opts['excludeGarbageTime'],
        'seasonType': opts['seasonType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GamePPA];

      return this.apiClient.callApi(
        '/ppa/games', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team Predicated Points Added (PPA/EPA) by game
     * Predicted Points Added (PPA) by game
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GamePPA>}
     */
    getGamePPA(year, opts) {
      return this.getGamePPAWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Player Predicated Points Added (PPA/EPA) broken down by game
     * Predicted Points Added (PPA) by player game
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {String} opts.position Position abbreviation filter
     * @param {Number} opts.playerId Player id filter
     * @param {String} opts.threshold Minimum play threshold filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayerGamePPA>} and HTTP response
     */
    getPlayerGamePPAWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year'],
        'week': opts['week'],
        'team': opts['team'],
        'position': opts['position'],
        'playerId': opts['playerId'],
        'threshold': opts['threshold'],
        'excludeGarbageTime': opts['excludeGarbageTime'],
        'seasonType': opts['seasonType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PlayerGamePPA];

      return this.apiClient.callApi(
        '/ppa/players/games', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Player Predicated Points Added (PPA/EPA) broken down by game
     * Predicted Points Added (PPA) by player game
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {String} opts.position Position abbreviation filter
     * @param {Number} opts.playerId Player id filter
     * @param {String} opts.threshold Minimum play threshold filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayerGamePPA>}
     */
    getPlayerGamePPA(opts) {
      return this.getPlayerGamePPAWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Player Predicated Points Added (PPA/EPA) broken down by season
     * Predicted Points Added (PPA) by player season
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {String} opts.position Position abbreviation filter
     * @param {Number} opts.playerId Player id filter
     * @param {String} opts.threshold Minimum play threshold filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayerSeasonPPA>} and HTTP response
     */
    getPlayerSeasonPPAWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year'],
        'team': opts['team'],
        'conference': opts['conference'],
        'position': opts['position'],
        'playerId': opts['playerId'],
        'threshold': opts['threshold'],
        'excludeGarbageTime': opts['excludeGarbageTime']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PlayerSeasonPPA];

      return this.apiClient.callApi(
        '/ppa/players/season', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Player Predicated Points Added (PPA/EPA) broken down by season
     * Predicted Points Added (PPA) by player season
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {String} opts.position Position abbreviation filter
     * @param {Number} opts.playerId Player id filter
     * @param {String} opts.threshold Minimum play threshold filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayerSeasonPPA>}
     */
    getPlayerSeasonPPA(opts) {
      return this.getPlayerSeasonPPAWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Predicted Points (i.e. Expected Points or EP)
     * Predicted Points
     * @param {Number} down Down filter
     * @param {Number} distance Distance filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PredictedPoints>} and HTTP response
     */
    getPredictedPointsWithHttpInfo(down, distance) {
      let postBody = null;

      // verify the required parameter 'down' is set
      if (down === undefined || down === null) {
        throw new Error("Missing the required parameter 'down' when calling getPredictedPoints");
      }

      // verify the required parameter 'distance' is set
      if (distance === undefined || distance === null) {
        throw new Error("Missing the required parameter 'distance' when calling getPredictedPoints");
      }


      let pathParams = {
      };
      let queryParams = {
        'down': down,
        'distance': distance
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PredictedPoints];

      return this.apiClient.callApi(
        '/ppa/predicted', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Predicted Points (i.e. Expected Points or EP)
     * Predicted Points
     * @param {Number} down Down filter
     * @param {Number} distance Distance filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PredictedPoints>}
     */
    getPredictedPoints(down, distance) {
      return this.getPredictedPointsWithHttpInfo(down, distance)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Pregame win probability data
     * Pregame win probabilities
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {String} opts.seasonType regular or postseason
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PregameWP>} and HTTP response
     */
    getPregameWinProbabilitiesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year'],
        'week': opts['week'],
        'team': opts['team'],
        'seasonType': opts['seasonType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PregameWP];

      return this.apiClient.callApi(
        '/metrics/wp/pregame', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Pregame win probability data
     * Pregame win probabilities
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {Number} opts.week Week filter
     * @param {String} opts.team Team filter
     * @param {String} opts.seasonType regular or postseason
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PregameWP>}
     */
    getPregameWinProbabilities(opts) {
      return this.getPregameWinProbabilitiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Predicted Points Added (PPA/EPA) data by team
     * Predicted Points Added (PPA)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter (required if team not specified)
     * @param {String} opts.team Team filter (required if year not specified)
     * @param {String} opts.conference Conference filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TeamPPA>} and HTTP response
     */
    getTeamPPAWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'year': opts['year'],
        'team': opts['team'],
        'conference': opts['conference'],
        'excludeGarbageTime': opts['excludeGarbageTime']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TeamPPA];

      return this.apiClient.callApi(
        '/ppa/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Predicted Points Added (PPA/EPA) data by team
     * Predicted Points Added (PPA)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter (required if team not specified)
     * @param {String} opts.team Team filter (required if year not specified)
     * @param {String} opts.conference Conference filter
     * @param {Boolean} opts.excludeGarbageTime Filter to remove garbage time plays from calculations
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TeamPPA>}
     */
    getTeamPPA(opts) {
      return this.getTeamPPAWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Win probability chart data
     * Win probability data
     * @param {Number} gameId Game id filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayWP>} and HTTP response
     */
    getWinProbabilityDataWithHttpInfo(gameId) {
      let postBody = null;

      // verify the required parameter 'gameId' is set
      if (gameId === undefined || gameId === null) {
        throw new Error("Missing the required parameter 'gameId' when calling getWinProbabilityData");
      }


      let pathParams = {
      };
      let queryParams = {
        'gameId': gameId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PlayWP];

      return this.apiClient.callApi(
        '/metrics/wp', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Win probability chart data
     * Win probability data
     * @param {Number} gameId Game id filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayWP>}
     */
    getWinProbabilityData(gameId) {
      return this.getWinProbabilityDataWithHttpInfo(gameId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
