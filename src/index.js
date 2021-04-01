/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 3.0.0
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

import {ApiClient} from './ApiClient';
import {AdvancedGameStat} from './model/AdvancedGameStat';
import {AdvancedSeasonStat} from './model/AdvancedSeasonStat';
import {BoxScore} from './model/BoxScore';
import {Conference} from './model/Conference';
import {ConferenceSPRating} from './model/ConferenceSPRating';
import {Drive} from './model/Drive';
import {Game} from './model/Game';
import {GameLines} from './model/GameLines';
import {GameMedia} from './model/GameMedia';
import {GamePPA} from './model/GamePPA';
import {Play} from './model/Play';
import {PlayStat} from './model/PlayStat';
import {PlayStatType} from './model/PlayStatType';
import {PlayType} from './model/PlayType';
import {PlayWP} from './model/PlayWP';
import {Player} from './model/Player';
import {PlayerGame} from './model/PlayerGame';
import {PlayerGamePPA} from './model/PlayerGamePPA';
import {PlayerSearchResult} from './model/PlayerSearchResult';
import {PlayerSeasonPPA} from './model/PlayerSeasonPPA';
import {PlayerSeasonStat} from './model/PlayerSeasonStat';
import {PlayerUsage} from './model/PlayerUsage';
import {PositionGroupRecruitingRating} from './model/PositionGroupRecruitingRating';
import {PredictedPoints} from './model/PredictedPoints';
import {PregameWP} from './model/PregameWP';
import {RankingWeek} from './model/RankingWeek';
import {Recruit} from './model/Recruit';
import {ReturningProduction} from './model/ReturningProduction';
import {Team} from './model/Team';
import {TeamGame} from './model/TeamGame';
import {TeamMatchup} from './model/TeamMatchup';
import {TeamPPA} from './model/TeamPPA';
import {TeamRecord} from './model/TeamRecord';
import {TeamRecruitingRank} from './model/TeamRecruitingRank';
import {TeamSPRating} from './model/TeamSPRating';
import {TeamSRSRating} from './model/TeamSRSRating';
import {TeamSeason} from './model/TeamSeason';
import {TeamSeasonStat} from './model/TeamSeasonStat';
import {TeamTalent} from './model/TeamTalent';
import {Venue} from './model/Venue';
import {Week} from './model/Week';
import {BettingApi} from './api/BettingApi';
import {CoachesApi} from './api/CoachesApi';
import {ConferencesApi} from './api/ConferencesApi';
import {DrivesApi} from './api/DrivesApi';
import {GamesApi} from './api/GamesApi';
import {MetricsApi} from './api/MetricsApi';
import {PlayersApi} from './api/PlayersApi';
import {PlaysApi} from './api/PlaysApi';
import {RankingsApi} from './api/RankingsApi';
import {RatingsApi} from './api/RatingsApi';
import {RecruitingApi} from './api/RecruitingApi';
import {StatsApi} from './api/StatsApi';
import {TeamsApi} from './api/TeamsApi';
import {VenuesApi} from './api/VenuesApi';


/**
* This_is_an_API_for_accessing_all_sorts_of_college_football_data___It_currently_has_a_wide_array_of_data_ranging_from_play_by_play_to_player_statistics_to_game_scores_and_more_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var cfb = require('index'); // See note below*.
* var xxxSvc = new cfb.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new cfb.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new cfb.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new cfb.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 3.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AdvancedGameStat model constructor.
     * @property {module:model/AdvancedGameStat}
     */
    AdvancedGameStat,

    /**
     * The AdvancedSeasonStat model constructor.
     * @property {module:model/AdvancedSeasonStat}
     */
    AdvancedSeasonStat,

    /**
     * The BoxScore model constructor.
     * @property {module:model/BoxScore}
     */
    BoxScore,

    /**
     * The Conference model constructor.
     * @property {module:model/Conference}
     */
    Conference,

    /**
     * The ConferenceSPRating model constructor.
     * @property {module:model/ConferenceSPRating}
     */
    ConferenceSPRating,

    /**
     * The Drive model constructor.
     * @property {module:model/Drive}
     */
    Drive,

    /**
     * The Game model constructor.
     * @property {module:model/Game}
     */
    Game,

    /**
     * The GameLines model constructor.
     * @property {module:model/GameLines}
     */
    GameLines,

    /**
     * The GameMedia model constructor.
     * @property {module:model/GameMedia}
     */
    GameMedia,

    /**
     * The GamePPA model constructor.
     * @property {module:model/GamePPA}
     */
    GamePPA,

    /**
     * The Play model constructor.
     * @property {module:model/Play}
     */
    Play,

    /**
     * The PlayStat model constructor.
     * @property {module:model/PlayStat}
     */
    PlayStat,

    /**
     * The PlayStatType model constructor.
     * @property {module:model/PlayStatType}
     */
    PlayStatType,

    /**
     * The PlayType model constructor.
     * @property {module:model/PlayType}
     */
    PlayType,

    /**
     * The PlayWP model constructor.
     * @property {module:model/PlayWP}
     */
    PlayWP,

    /**
     * The Player model constructor.
     * @property {module:model/Player}
     */
    Player,

    /**
     * The PlayerGame model constructor.
     * @property {module:model/PlayerGame}
     */
    PlayerGame,

    /**
     * The PlayerGamePPA model constructor.
     * @property {module:model/PlayerGamePPA}
     */
    PlayerGamePPA,

    /**
     * The PlayerSearchResult model constructor.
     * @property {module:model/PlayerSearchResult}
     */
    PlayerSearchResult,

    /**
     * The PlayerSeasonPPA model constructor.
     * @property {module:model/PlayerSeasonPPA}
     */
    PlayerSeasonPPA,

    /**
     * The PlayerSeasonStat model constructor.
     * @property {module:model/PlayerSeasonStat}
     */
    PlayerSeasonStat,

    /**
     * The PlayerUsage model constructor.
     * @property {module:model/PlayerUsage}
     */
    PlayerUsage,

    /**
     * The PositionGroupRecruitingRating model constructor.
     * @property {module:model/PositionGroupRecruitingRating}
     */
    PositionGroupRecruitingRating,

    /**
     * The PredictedPoints model constructor.
     * @property {module:model/PredictedPoints}
     */
    PredictedPoints,

    /**
     * The PregameWP model constructor.
     * @property {module:model/PregameWP}
     */
    PregameWP,

    /**
     * The RankingWeek model constructor.
     * @property {module:model/RankingWeek}
     */
    RankingWeek,

    /**
     * The Recruit model constructor.
     * @property {module:model/Recruit}
     */
    Recruit,

    /**
     * The ReturningProduction model constructor.
     * @property {module:model/ReturningProduction}
     */
    ReturningProduction,

    /**
     * The Team model constructor.
     * @property {module:model/Team}
     */
    Team,

    /**
     * The TeamGame model constructor.
     * @property {module:model/TeamGame}
     */
    TeamGame,

    /**
     * The TeamMatchup model constructor.
     * @property {module:model/TeamMatchup}
     */
    TeamMatchup,

    /**
     * The TeamPPA model constructor.
     * @property {module:model/TeamPPA}
     */
    TeamPPA,

    /**
     * The TeamRecord model constructor.
     * @property {module:model/TeamRecord}
     */
    TeamRecord,

    /**
     * The TeamRecruitingRank model constructor.
     * @property {module:model/TeamRecruitingRank}
     */
    TeamRecruitingRank,

    /**
     * The TeamSPRating model constructor.
     * @property {module:model/TeamSPRating}
     */
    TeamSPRating,

    /**
     * The TeamSRSRating model constructor.
     * @property {module:model/TeamSRSRating}
     */
    TeamSRSRating,

    /**
     * The TeamSeason model constructor.
     * @property {module:model/TeamSeason}
     */
    TeamSeason,

    /**
     * The TeamSeasonStat model constructor.
     * @property {module:model/TeamSeasonStat}
     */
    TeamSeasonStat,

    /**
     * The TeamTalent model constructor.
     * @property {module:model/TeamTalent}
     */
    TeamTalent,

    /**
     * The Venue model constructor.
     * @property {module:model/Venue}
     */
    Venue,

    /**
     * The Week model constructor.
     * @property {module:model/Week}
     */
    Week,

    /**
    * The BettingApi service constructor.
    * @property {module:api/BettingApi}
    */
    BettingApi,

    /**
    * The CoachesApi service constructor.
    * @property {module:api/CoachesApi}
    */
    CoachesApi,

    /**
    * The ConferencesApi service constructor.
    * @property {module:api/ConferencesApi}
    */
    ConferencesApi,

    /**
    * The DrivesApi service constructor.
    * @property {module:api/DrivesApi}
    */
    DrivesApi,

    /**
    * The GamesApi service constructor.
    * @property {module:api/GamesApi}
    */
    GamesApi,

    /**
    * The MetricsApi service constructor.
    * @property {module:api/MetricsApi}
    */
    MetricsApi,

    /**
    * The PlayersApi service constructor.
    * @property {module:api/PlayersApi}
    */
    PlayersApi,

    /**
    * The PlaysApi service constructor.
    * @property {module:api/PlaysApi}
    */
    PlaysApi,

    /**
    * The RankingsApi service constructor.
    * @property {module:api/RankingsApi}
    */
    RankingsApi,

    /**
    * The RatingsApi service constructor.
    * @property {module:api/RatingsApi}
    */
    RatingsApi,

    /**
    * The RecruitingApi service constructor.
    * @property {module:api/RecruitingApi}
    */
    RecruitingApi,

    /**
    * The StatsApi service constructor.
    * @property {module:api/StatsApi}
    */
    StatsApi,

    /**
    * The TeamsApi service constructor.
    * @property {module:api/TeamsApi}
    */
    TeamsApi,

    /**
    * The VenuesApi service constructor.
    * @property {module:api/VenuesApi}
    */
    VenuesApi
};
