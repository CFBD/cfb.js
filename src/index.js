/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.2.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.23
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AdvancedGameStat', 'model/AdvancedSeasonStat', 'model/BoxScore', 'model/Coach', 'model/Conference', 'model/ConferenceSPRating', 'model/DraftPick', 'model/DraftPosition', 'model/DraftTeam', 'model/Drive', 'model/Game', 'model/GameLines', 'model/GameMedia', 'model/GamePPA', 'model/GameWeather', 'model/LivePlayByPlay', 'model/Play', 'model/PlayStat', 'model/PlayStatType', 'model/PlayType', 'model/PlayWP', 'model/Player', 'model/PlayerGame', 'model/PlayerGamePPA', 'model/PlayerSearchResult', 'model/PlayerSeasonPPA', 'model/PlayerSeasonStat', 'model/PlayerUsage', 'model/PositionGroupRecruitingRating', 'model/PredictedPoints', 'model/PregameWP', 'model/RankingWeek', 'model/Recruit', 'model/ReturningProduction', 'model/ScoreboardGame', 'model/Team', 'model/TeamEloRating', 'model/TeamGame', 'model/TeamMatchup', 'model/TeamPPA', 'model/TeamRecord', 'model/TeamRecruitingRank', 'model/TeamSPRating', 'model/TeamSRSRating', 'model/TeamSeason', 'model/TeamSeasonStat', 'model/TeamTalent', 'model/Venue', 'model/Week', 'api/BettingApi', 'api/CoachesApi', 'api/ConferencesApi', 'api/DraftApi', 'api/DrivesApi', 'api/GamesApi', 'api/MetricsApi', 'api/PlayersApi', 'api/PlaysApi', 'api/RankingsApi', 'api/RatingsApi', 'api/RecruitingApi', 'api/StatsApi', 'api/TeamsApi', 'api/VenuesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AdvancedGameStat'), require('./model/AdvancedSeasonStat'), require('./model/BoxScore'), require('./model/Coach'), require('./model/Conference'), require('./model/ConferenceSPRating'), require('./model/DraftPick'), require('./model/DraftPosition'), require('./model/DraftTeam'), require('./model/Drive'), require('./model/Game'), require('./model/GameLines'), require('./model/GameMedia'), require('./model/GamePPA'), require('./model/GameWeather'), require('./model/LivePlayByPlay'), require('./model/Play'), require('./model/PlayStat'), require('./model/PlayStatType'), require('./model/PlayType'), require('./model/PlayWP'), require('./model/Player'), require('./model/PlayerGame'), require('./model/PlayerGamePPA'), require('./model/PlayerSearchResult'), require('./model/PlayerSeasonPPA'), require('./model/PlayerSeasonStat'), require('./model/PlayerUsage'), require('./model/PositionGroupRecruitingRating'), require('./model/PredictedPoints'), require('./model/PregameWP'), require('./model/RankingWeek'), require('./model/Recruit'), require('./model/ReturningProduction'), require('./model/ScoreboardGame'), require('./model/Team'), require('./model/TeamEloRating'), require('./model/TeamGame'), require('./model/TeamMatchup'), require('./model/TeamPPA'), require('./model/TeamRecord'), require('./model/TeamRecruitingRank'), require('./model/TeamSPRating'), require('./model/TeamSRSRating'), require('./model/TeamSeason'), require('./model/TeamSeasonStat'), require('./model/TeamTalent'), require('./model/Venue'), require('./model/Week'), require('./api/BettingApi'), require('./api/CoachesApi'), require('./api/ConferencesApi'), require('./api/DraftApi'), require('./api/DrivesApi'), require('./api/GamesApi'), require('./api/MetricsApi'), require('./api/PlayersApi'), require('./api/PlaysApi'), require('./api/RankingsApi'), require('./api/RatingsApi'), require('./api/RecruitingApi'), require('./api/StatsApi'), require('./api/TeamsApi'), require('./api/VenuesApi'));
  }
}(function(ApiClient, AdvancedGameStat, AdvancedSeasonStat, BoxScore, Coach, Conference, ConferenceSPRating, DraftPick, DraftPosition, DraftTeam, Drive, Game, GameLines, GameMedia, GamePPA, GameWeather, LivePlayByPlay, Play, PlayStat, PlayStatType, PlayType, PlayWP, Player, PlayerGame, PlayerGamePPA, PlayerSearchResult, PlayerSeasonPPA, PlayerSeasonStat, PlayerUsage, PositionGroupRecruitingRating, PredictedPoints, PregameWP, RankingWeek, Recruit, ReturningProduction, ScoreboardGame, Team, TeamEloRating, TeamGame, TeamMatchup, TeamPPA, TeamRecord, TeamRecruitingRank, TeamSPRating, TeamSRSRating, TeamSeason, TeamSeasonStat, TeamTalent, Venue, Week, BettingApi, CoachesApi, ConferencesApi, DraftApi, DrivesApi, GamesApi, MetricsApi, PlayersApi, PlaysApi, RankingsApi, RatingsApi, RecruitingApi, StatsApi, TeamsApi, VenuesApi) {
  'use strict';

  /**
   * This_is_an_API_for_accessing_all_sorts_of_college_football_data___Please_note_that_API_keys_should_be_supplied_with_Bearer__prepended__e_g__Bearer_your_key__API_keys_can_be_acquired_from_the_CollegeFootballData_com_website_.<br>
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
   * @version 4.2.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AdvancedGameStat model constructor.
     * @property {module:model/AdvancedGameStat}
     */
    AdvancedGameStat: AdvancedGameStat,
    /**
     * The AdvancedSeasonStat model constructor.
     * @property {module:model/AdvancedSeasonStat}
     */
    AdvancedSeasonStat: AdvancedSeasonStat,
    /**
     * The BoxScore model constructor.
     * @property {module:model/BoxScore}
     */
    BoxScore: BoxScore,
    /**
     * The Coach model constructor.
     * @property {module:model/Coach}
     */
    Coach: Coach,
    /**
     * The Conference model constructor.
     * @property {module:model/Conference}
     */
    Conference: Conference,
    /**
     * The ConferenceSPRating model constructor.
     * @property {module:model/ConferenceSPRating}
     */
    ConferenceSPRating: ConferenceSPRating,
    /**
     * The DraftPick model constructor.
     * @property {module:model/DraftPick}
     */
    DraftPick: DraftPick,
    /**
     * The DraftPosition model constructor.
     * @property {module:model/DraftPosition}
     */
    DraftPosition: DraftPosition,
    /**
     * The DraftTeam model constructor.
     * @property {module:model/DraftTeam}
     */
    DraftTeam: DraftTeam,
    /**
     * The Drive model constructor.
     * @property {module:model/Drive}
     */
    Drive: Drive,
    /**
     * The Game model constructor.
     * @property {module:model/Game}
     */
    Game: Game,
    /**
     * The GameLines model constructor.
     * @property {module:model/GameLines}
     */
    GameLines: GameLines,
    /**
     * The GameMedia model constructor.
     * @property {module:model/GameMedia}
     */
    GameMedia: GameMedia,
    /**
     * The GamePPA model constructor.
     * @property {module:model/GamePPA}
     */
    GamePPA: GamePPA,
    /**
     * The GameWeather model constructor.
     * @property {module:model/GameWeather}
     */
    GameWeather: GameWeather,
    /**
     * The LivePlayByPlay model constructor.
     * @property {module:model/LivePlayByPlay}
     */
    LivePlayByPlay: LivePlayByPlay,
    /**
     * The Play model constructor.
     * @property {module:model/Play}
     */
    Play: Play,
    /**
     * The PlayStat model constructor.
     * @property {module:model/PlayStat}
     */
    PlayStat: PlayStat,
    /**
     * The PlayStatType model constructor.
     * @property {module:model/PlayStatType}
     */
    PlayStatType: PlayStatType,
    /**
     * The PlayType model constructor.
     * @property {module:model/PlayType}
     */
    PlayType: PlayType,
    /**
     * The PlayWP model constructor.
     * @property {module:model/PlayWP}
     */
    PlayWP: PlayWP,
    /**
     * The Player model constructor.
     * @property {module:model/Player}
     */
    Player: Player,
    /**
     * The PlayerGame model constructor.
     * @property {module:model/PlayerGame}
     */
    PlayerGame: PlayerGame,
    /**
     * The PlayerGamePPA model constructor.
     * @property {module:model/PlayerGamePPA}
     */
    PlayerGamePPA: PlayerGamePPA,
    /**
     * The PlayerSearchResult model constructor.
     * @property {module:model/PlayerSearchResult}
     */
    PlayerSearchResult: PlayerSearchResult,
    /**
     * The PlayerSeasonPPA model constructor.
     * @property {module:model/PlayerSeasonPPA}
     */
    PlayerSeasonPPA: PlayerSeasonPPA,
    /**
     * The PlayerSeasonStat model constructor.
     * @property {module:model/PlayerSeasonStat}
     */
    PlayerSeasonStat: PlayerSeasonStat,
    /**
     * The PlayerUsage model constructor.
     * @property {module:model/PlayerUsage}
     */
    PlayerUsage: PlayerUsage,
    /**
     * The PositionGroupRecruitingRating model constructor.
     * @property {module:model/PositionGroupRecruitingRating}
     */
    PositionGroupRecruitingRating: PositionGroupRecruitingRating,
    /**
     * The PredictedPoints model constructor.
     * @property {module:model/PredictedPoints}
     */
    PredictedPoints: PredictedPoints,
    /**
     * The PregameWP model constructor.
     * @property {module:model/PregameWP}
     */
    PregameWP: PregameWP,
    /**
     * The RankingWeek model constructor.
     * @property {module:model/RankingWeek}
     */
    RankingWeek: RankingWeek,
    /**
     * The Recruit model constructor.
     * @property {module:model/Recruit}
     */
    Recruit: Recruit,
    /**
     * The ReturningProduction model constructor.
     * @property {module:model/ReturningProduction}
     */
    ReturningProduction: ReturningProduction,
    /**
     * The ScoreboardGame model constructor.
     * @property {module:model/ScoreboardGame}
     */
    ScoreboardGame: ScoreboardGame,
    /**
     * The Team model constructor.
     * @property {module:model/Team}
     */
    Team: Team,
    /**
     * The TeamEloRating model constructor.
     * @property {module:model/TeamEloRating}
     */
    TeamEloRating: TeamEloRating,
    /**
     * The TeamGame model constructor.
     * @property {module:model/TeamGame}
     */
    TeamGame: TeamGame,
    /**
     * The TeamMatchup model constructor.
     * @property {module:model/TeamMatchup}
     */
    TeamMatchup: TeamMatchup,
    /**
     * The TeamPPA model constructor.
     * @property {module:model/TeamPPA}
     */
    TeamPPA: TeamPPA,
    /**
     * The TeamRecord model constructor.
     * @property {module:model/TeamRecord}
     */
    TeamRecord: TeamRecord,
    /**
     * The TeamRecruitingRank model constructor.
     * @property {module:model/TeamRecruitingRank}
     */
    TeamRecruitingRank: TeamRecruitingRank,
    /**
     * The TeamSPRating model constructor.
     * @property {module:model/TeamSPRating}
     */
    TeamSPRating: TeamSPRating,
    /**
     * The TeamSRSRating model constructor.
     * @property {module:model/TeamSRSRating}
     */
    TeamSRSRating: TeamSRSRating,
    /**
     * The TeamSeason model constructor.
     * @property {module:model/TeamSeason}
     */
    TeamSeason: TeamSeason,
    /**
     * The TeamSeasonStat model constructor.
     * @property {module:model/TeamSeasonStat}
     */
    TeamSeasonStat: TeamSeasonStat,
    /**
     * The TeamTalent model constructor.
     * @property {module:model/TeamTalent}
     */
    TeamTalent: TeamTalent,
    /**
     * The Venue model constructor.
     * @property {module:model/Venue}
     */
    Venue: Venue,
    /**
     * The Week model constructor.
     * @property {module:model/Week}
     */
    Week: Week,
    /**
     * The BettingApi service constructor.
     * @property {module:api/BettingApi}
     */
    BettingApi: BettingApi,
    /**
     * The CoachesApi service constructor.
     * @property {module:api/CoachesApi}
     */
    CoachesApi: CoachesApi,
    /**
     * The ConferencesApi service constructor.
     * @property {module:api/ConferencesApi}
     */
    ConferencesApi: ConferencesApi,
    /**
     * The DraftApi service constructor.
     * @property {module:api/DraftApi}
     */
    DraftApi: DraftApi,
    /**
     * The DrivesApi service constructor.
     * @property {module:api/DrivesApi}
     */
    DrivesApi: DrivesApi,
    /**
     * The GamesApi service constructor.
     * @property {module:api/GamesApi}
     */
    GamesApi: GamesApi,
    /**
     * The MetricsApi service constructor.
     * @property {module:api/MetricsApi}
     */
    MetricsApi: MetricsApi,
    /**
     * The PlayersApi service constructor.
     * @property {module:api/PlayersApi}
     */
    PlayersApi: PlayersApi,
    /**
     * The PlaysApi service constructor.
     * @property {module:api/PlaysApi}
     */
    PlaysApi: PlaysApi,
    /**
     * The RankingsApi service constructor.
     * @property {module:api/RankingsApi}
     */
    RankingsApi: RankingsApi,
    /**
     * The RatingsApi service constructor.
     * @property {module:api/RatingsApi}
     */
    RatingsApi: RatingsApi,
    /**
     * The RecruitingApi service constructor.
     * @property {module:api/RecruitingApi}
     */
    RecruitingApi: RecruitingApi,
    /**
     * The StatsApi service constructor.
     * @property {module:api/StatsApi}
     */
    StatsApi: StatsApi,
    /**
     * The TeamsApi service constructor.
     * @property {module:api/TeamsApi}
     */
    TeamsApi: TeamsApi,
    /**
     * The VenuesApi service constructor.
     * @property {module:api/VenuesApi}
     */
    VenuesApi: VenuesApi
  };

  return exports;
}));
