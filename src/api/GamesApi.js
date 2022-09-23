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
    define(['ApiClient', 'model/BoxScore', 'model/Game', 'model/GameMedia', 'model/GameWeather', 'model/PlayerGame', 'model/ScoreboardGame', 'model/TeamGame', 'model/TeamRecord', 'model/Week'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BoxScore'), require('../model/Game'), require('../model/GameMedia'), require('../model/GameWeather'), require('../model/PlayerGame'), require('../model/ScoreboardGame'), require('../model/TeamGame'), require('../model/TeamRecord'), require('../model/Week'));
  } else {
    // Browser globals (root is window)
    if (!root.cfb) {
      root.cfb = {};
    }
    root.cfb.GamesApi = factory(root.cfb.ApiClient, root.cfb.BoxScore, root.cfb.Game, root.cfb.GameMedia, root.cfb.GameWeather, root.cfb.PlayerGame, root.cfb.ScoreboardGame, root.cfb.TeamGame, root.cfb.TeamRecord, root.cfb.Week);
  }
}(this, function(ApiClient, BoxScore, Game, GameMedia, GameWeather, PlayerGame, ScoreboardGame, TeamGame, TeamRecord, Week) {
  'use strict';

  /**
   * Games service.
   * @module api/GamesApi
   * @version 4.4.5
   */

  /**
   * Constructs a new GamesApi. 
   * @alias module:api/GamesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Advanced box scores
     * Get advanced box score data
     * @param {Number} gameId Game id parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BoxScore} and HTTP response
     */
    this.getAdvancedBoxScoreWithHttpInfo = function(gameId) {
      var postBody = null;

      // verify the required parameter 'gameId' is set
      if (gameId === undefined || gameId === null) {
        throw new Error("Missing the required parameter 'gameId' when calling getAdvancedBoxScore");
      }


      var pathParams = {
      };
      var queryParams = {
        'gameId': gameId,
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
      var returnType = BoxScore;

      return this.apiClient.callApi(
        '/game/box/advanced', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Advanced box scores
     * Get advanced box score data
     * @param {Number} gameId Game id parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BoxScore}
     */
    this.getAdvancedBoxScore = function(gameId) {
      return this.getAdvancedBoxScoreWithHttpInfo(gameId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Season calendar
     * Get calendar of weeks by season
     * @param {Number} year Year filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Week>} and HTTP response
     */
    this.getCalendarWithHttpInfo = function(year) {
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getCalendar");
      }


      var pathParams = {
      };
      var queryParams = {
        'year': year,
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
      var returnType = [Week];

      return this.apiClient.callApi(
        '/calendar', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Season calendar
     * Get calendar of weeks by season
     * @param {Number} year Year filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Week>}
     */
    this.getCalendar = function(year) {
      return this.getCalendarWithHttpInfo(year)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Game media information and schedules
     * Game media information (TV, radio, etc)
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular, postseason, or both)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @param {String} opts.mediaType Media type filter (tv, radio, web, ppv, or mobile)
     * @param {String} opts.classification Division classification filter (fbs/fcs/ii/iii)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GameMedia>} and HTTP response
     */
    this.getGameMediaWithHttpInfo = function(year, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getGameMedia");
      }


      var pathParams = {
      };
      var queryParams = {
        'year': year,
        'week': opts['week'],
        'seasonType': opts['seasonType'],
        'team': opts['team'],
        'conference': opts['conference'],
        'mediaType': opts['mediaType'],
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
      var returnType = [GameMedia];

      return this.apiClient.callApi(
        '/games/media', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Game media information and schedules
     * Game media information (TV, radio, etc)
     * @param {Number} year Year filter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular, postseason, or both)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @param {String} opts.mediaType Media type filter (tv, radio, web, ppv, or mobile)
     * @param {String} opts.classification Division classification filter (fbs/fcs/ii/iii)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GameMedia>}
     */
    this.getGameMedia = function(year, opts) {
      return this.getGameMediaWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Game weather information (Patreon only)
     * Weather information for the hour of kickoff
     * @param {Object} opts Optional parameters
     * @param {Number} opts.gameId Game id filter (required if no year)
     * @param {Number} opts.year Year filter (required if no game id)
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular, postseason, or both)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @param {String} opts.classification Division classification filter (fbs/fcs/ii/iii)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GameWeather>} and HTTP response
     */
    this.getGameWeatherWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'gameId': opts['gameId'],
        'year': opts['year'],
        'week': opts['week'],
        'seasonType': opts['seasonType'],
        'team': opts['team'],
        'conference': opts['conference'],
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
      var returnType = [GameWeather];

      return this.apiClient.callApi(
        '/games/weather', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Game weather information (Patreon only)
     * Weather information for the hour of kickoff
     * @param {Object} opts Optional parameters
     * @param {Number} opts.gameId Game id filter (required if no year)
     * @param {Number} opts.year Year filter (required if no game id)
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular, postseason, or both)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @param {String} opts.classification Division classification filter (fbs/fcs/ii/iii)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GameWeather>}
     */
    this.getGameWeather = function(opts) {
      return this.getGameWeatherWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Games and results
     * Get game results
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team
     * @param {String} opts.home Home team filter
     * @param {String} opts.away Away team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {String} opts.division Division classification filter (fbs/fcs/ii/iii)
     * @param {Number} opts.id id filter for querying a single game
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Game>} and HTTP response
     */
    this.getGamesWithHttpInfo = function(year, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getGames");
      }


      var pathParams = {
      };
      var queryParams = {
        'year': year,
        'week': opts['week'],
        'seasonType': opts['seasonType'],
        'team': opts['team'],
        'home': opts['home'],
        'away': opts['away'],
        'conference': opts['conference'],
        'division': opts['division'],
        'id': opts['id'],
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
      var returnType = [Game];

      return this.apiClient.callApi(
        '/games', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Games and results
     * Get game results
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team
     * @param {String} opts.home Home team filter
     * @param {String} opts.away Away team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {String} opts.division Division classification filter (fbs/fcs/ii/iii)
     * @param {Number} opts.id id filter for querying a single game
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Game>}
     */
    this.getGames = function(year, opts) {
      return this.getGamesWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Player game stats
     * Player stats broken down by game
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {String} opts.category Category filter (e.g defensive)
     * @param {Number} opts.gameId Game id filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PlayerGame>} and HTTP response
     */
    this.getPlayerGameStatsWithHttpInfo = function(year, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getPlayerGameStats");
      }


      var pathParams = {
      };
      var queryParams = {
        'year': year,
        'week': opts['week'],
        'seasonType': opts['seasonType'],
        'team': opts['team'],
        'conference': opts['conference'],
        'category': opts['category'],
        'gameId': opts['gameId'],
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
      var returnType = [PlayerGame];

      return this.apiClient.callApi(
        '/games/players', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Player game stats
     * Player stats broken down by game
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {String} opts.category Category filter (e.g defensive)
     * @param {Number} opts.gameId Game id filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PlayerGame>}
     */
    this.getPlayerGameStats = function(year, opts) {
      return this.getPlayerGameStatsWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Live game results (Patreon only)
     * Get live game results
     * @param {Object} opts Optional parameters
     * @param {String} opts.classification Classification filter (fbs, fcs, ii, or iii). Defaults to fbs.
     * @param {String} opts.conference Conference abbreviation filter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ScoreboardGame>} and HTTP response
     */
    this.getScoreboardWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'classification': opts['classification'],
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
      var returnType = [ScoreboardGame];

      return this.apiClient.callApi(
        '/scoreboard', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Live game results (Patreon only)
     * Get live game results
     * @param {Object} opts Optional parameters
     * @param {String} opts.classification Classification filter (fbs, fcs, ii, or iii). Defaults to fbs.
     * @param {String} opts.conference Conference abbreviation filter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ScoreboardGame>}
     */
    this.getScoreboard = function(opts) {
      return this.getScoreboardWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Team game stats
     * Team stats broken down by game
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {Number} opts.gameId Game id filter
     * @param {String} opts.classification Division classification filter (fbs/fcs/ii/iii)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TeamGame>} and HTTP response
     */
    this.getTeamGameStatsWithHttpInfo = function(year, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getTeamGameStats");
      }


      var pathParams = {
      };
      var queryParams = {
        'year': year,
        'week': opts['week'],
        'seasonType': opts['seasonType'],
        'team': opts['team'],
        'conference': opts['conference'],
        'gameId': opts['gameId'],
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
      var returnType = [TeamGame];

      return this.apiClient.callApi(
        '/games/teams', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team game stats
     * Team stats broken down by game
     * @param {Number} year Year/season filter for games
     * @param {Object} opts Optional parameters
     * @param {Number} opts.week Week filter
     * @param {String} opts.seasonType Season type filter (regular or postseason) (default to regular)
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference abbreviation filter
     * @param {Number} opts.gameId Game id filter
     * @param {String} opts.classification Division classification filter (fbs/fcs/ii/iii)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TeamGame>}
     */
    this.getTeamGameStats = function(year, opts) {
      return this.getTeamGameStatsWithHttpInfo(year, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Team records
     * Get team records by year
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TeamRecord>} and HTTP response
     */
    this.getTeamRecordsWithHttpInfo = function(opts) {
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
      var returnType = [TeamRecord];

      return this.apiClient.callApi(
        '/records', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Team records
     * Get team records by year
     * @param {Object} opts Optional parameters
     * @param {Number} opts.year Year filter
     * @param {String} opts.team Team filter
     * @param {String} opts.conference Conference filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TeamRecord>}
     */
    this.getTeamRecords = function(opts) {
      return this.getTeamRecordsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
