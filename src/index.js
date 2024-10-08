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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AdvancedGameStat', 'model/AdvancedGameStatOffense', 'model/AdvancedGameStatOffenseRushingPlays', 'model/AdvancedGameStatOffenseStandardDowns', 'model/AdvancedSeasonStat', 'model/AdvancedSeasonStatOffense', 'model/AdvancedSeasonStatOffenseFieldPosition', 'model/AdvancedSeasonStatOffenseRushingPlays', 'model/AdvancedSeasonStatOffenseStandardDowns', 'model/BoxScore', 'model/BoxScorePlayers', 'model/BoxScorePlayersAverage', 'model/BoxScorePlayersPpa', 'model/BoxScorePlayersUsage', 'model/BoxScoreTeams', 'model/BoxScoreTeamsExplosiveness', 'model/BoxScoreTeamsFieldPosition', 'model/BoxScoreTeamsHavoc', 'model/BoxScoreTeamsOverall', 'model/BoxScoreTeamsPpa', 'model/BoxScoreTeamsRushing', 'model/BoxScoreTeamsScoringOpportunities', 'model/BoxScoreTeamsSuccessRates', 'model/Coach', 'model/CoachSeasons', 'model/Conference', 'model/ConferenceSPRating', 'model/ConferenceSPRatingDefense', 'model/ConferenceSPRatingOffense', 'model/DraftPick', 'model/DraftPickHometownInfo', 'model/DraftPosition', 'model/DraftTeam', 'model/Drive', 'model/DriveStartTime', 'model/FieldGoalExpectedPoints', 'model/Game', 'model/GameLines', 'model/GameLinesLines', 'model/GameMedia', 'model/GamePPA', 'model/GamePPAOffense', 'model/GameWeather', 'model/LivePlayByPlay', 'model/LivePlayByPlayDrives', 'model/LivePlayByPlayPlays', 'model/LivePlayByPlayTeams', 'model/Play', 'model/PlayStat', 'model/PlayStatType', 'model/PlayType', 'model/PlayWP', 'model/Player', 'model/PlayerGame', 'model/PlayerGameAthletes', 'model/PlayerGameCategories', 'model/PlayerGamePPA', 'model/PlayerGamePPAAveragePPA', 'model/PlayerGameTeams', 'model/PlayerGameTypes', 'model/PlayerSearchResult', 'model/PlayerSeasonPPA', 'model/PlayerSeasonPPAAveragePPA', 'model/PlayerSeasonStat', 'model/PlayerUsage', 'model/PlayerUsageUsage', 'model/PortalPlayer', 'model/PositionGroupRecruitingRating', 'model/PredictedPoints', 'model/PregameWP', 'model/RankingWeek', 'model/RankingWeekPolls', 'model/RankingWeekRanks', 'model/Recruit', 'model/RecruitHometownInfo', 'model/ReturningProduction', 'model/ScoreboardGame', 'model/ScoreboardGameBetting', 'model/ScoreboardGameHomeTeam', 'model/ScoreboardGameVenue', 'model/ScoreboardGameWeather', 'model/Team', 'model/TeamEloRating', 'model/TeamFPIRating', 'model/TeamFPIRatingEfficiencies', 'model/TeamFPIRatingResumeRanks', 'model/TeamGame', 'model/TeamGameStats', 'model/TeamGameTeams', 'model/TeamLocation', 'model/TeamMatchup', 'model/TeamMatchupGames', 'model/TeamPPA', 'model/TeamPPAOffense', 'model/TeamPPAOffenseCumulative', 'model/TeamRecord', 'model/TeamRecordTotal', 'model/TeamRecruitingRank', 'model/TeamSPRating', 'model/TeamSPRatingDefense', 'model/TeamSPRatingDefenseHavoc', 'model/TeamSPRatingOffense', 'model/TeamSPRatingSpecialTeams', 'model/TeamSRSRating', 'model/TeamSeason', 'model/TeamSeasonStat', 'model/TeamTalent', 'model/Venue', 'model/VenueLocation', 'model/Week', 'api/BettingApi', 'api/CoachesApi', 'api/ConferencesApi', 'api/DraftApi', 'api/DrivesApi', 'api/GamesApi', 'api/MetricsApi', 'api/PlayersApi', 'api/PlaysApi', 'api/RankingsApi', 'api/RatingsApi', 'api/RecruitingApi', 'api/StatsApi', 'api/TeamsApi', 'api/VenuesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AdvancedGameStat'), require('./model/AdvancedGameStatOffense'), require('./model/AdvancedGameStatOffenseRushingPlays'), require('./model/AdvancedGameStatOffenseStandardDowns'), require('./model/AdvancedSeasonStat'), require('./model/AdvancedSeasonStatOffense'), require('./model/AdvancedSeasonStatOffenseFieldPosition'), require('./model/AdvancedSeasonStatOffenseRushingPlays'), require('./model/AdvancedSeasonStatOffenseStandardDowns'), require('./model/BoxScore'), require('./model/BoxScorePlayers'), require('./model/BoxScorePlayersAverage'), require('./model/BoxScorePlayersPpa'), require('./model/BoxScorePlayersUsage'), require('./model/BoxScoreTeams'), require('./model/BoxScoreTeamsExplosiveness'), require('./model/BoxScoreTeamsFieldPosition'), require('./model/BoxScoreTeamsHavoc'), require('./model/BoxScoreTeamsOverall'), require('./model/BoxScoreTeamsPpa'), require('./model/BoxScoreTeamsRushing'), require('./model/BoxScoreTeamsScoringOpportunities'), require('./model/BoxScoreTeamsSuccessRates'), require('./model/Coach'), require('./model/CoachSeasons'), require('./model/Conference'), require('./model/ConferenceSPRating'), require('./model/ConferenceSPRatingDefense'), require('./model/ConferenceSPRatingOffense'), require('./model/DraftPick'), require('./model/DraftPickHometownInfo'), require('./model/DraftPosition'), require('./model/DraftTeam'), require('./model/Drive'), require('./model/DriveStartTime'), require('./model/FieldGoalExpectedPoints'), require('./model/Game'), require('./model/GameLines'), require('./model/GameLinesLines'), require('./model/GameMedia'), require('./model/GamePPA'), require('./model/GamePPAOffense'), require('./model/GameWeather'), require('./model/LivePlayByPlay'), require('./model/LivePlayByPlayDrives'), require('./model/LivePlayByPlayPlays'), require('./model/LivePlayByPlayTeams'), require('./model/Play'), require('./model/PlayStat'), require('./model/PlayStatType'), require('./model/PlayType'), require('./model/PlayWP'), require('./model/Player'), require('./model/PlayerGame'), require('./model/PlayerGameAthletes'), require('./model/PlayerGameCategories'), require('./model/PlayerGamePPA'), require('./model/PlayerGamePPAAveragePPA'), require('./model/PlayerGameTeams'), require('./model/PlayerGameTypes'), require('./model/PlayerSearchResult'), require('./model/PlayerSeasonPPA'), require('./model/PlayerSeasonPPAAveragePPA'), require('./model/PlayerSeasonStat'), require('./model/PlayerUsage'), require('./model/PlayerUsageUsage'), require('./model/PortalPlayer'), require('./model/PositionGroupRecruitingRating'), require('./model/PredictedPoints'), require('./model/PregameWP'), require('./model/RankingWeek'), require('./model/RankingWeekPolls'), require('./model/RankingWeekRanks'), require('./model/Recruit'), require('./model/RecruitHometownInfo'), require('./model/ReturningProduction'), require('./model/ScoreboardGame'), require('./model/ScoreboardGameBetting'), require('./model/ScoreboardGameHomeTeam'), require('./model/ScoreboardGameVenue'), require('./model/ScoreboardGameWeather'), require('./model/Team'), require('./model/TeamEloRating'), require('./model/TeamFPIRating'), require('./model/TeamFPIRatingEfficiencies'), require('./model/TeamFPIRatingResumeRanks'), require('./model/TeamGame'), require('./model/TeamGameStats'), require('./model/TeamGameTeams'), require('./model/TeamLocation'), require('./model/TeamMatchup'), require('./model/TeamMatchupGames'), require('./model/TeamPPA'), require('./model/TeamPPAOffense'), require('./model/TeamPPAOffenseCumulative'), require('./model/TeamRecord'), require('./model/TeamRecordTotal'), require('./model/TeamRecruitingRank'), require('./model/TeamSPRating'), require('./model/TeamSPRatingDefense'), require('./model/TeamSPRatingDefenseHavoc'), require('./model/TeamSPRatingOffense'), require('./model/TeamSPRatingSpecialTeams'), require('./model/TeamSRSRating'), require('./model/TeamSeason'), require('./model/TeamSeasonStat'), require('./model/TeamTalent'), require('./model/Venue'), require('./model/VenueLocation'), require('./model/Week'), require('./api/BettingApi'), require('./api/CoachesApi'), require('./api/ConferencesApi'), require('./api/DraftApi'), require('./api/DrivesApi'), require('./api/GamesApi'), require('./api/MetricsApi'), require('./api/PlayersApi'), require('./api/PlaysApi'), require('./api/RankingsApi'), require('./api/RatingsApi'), require('./api/RecruitingApi'), require('./api/StatsApi'), require('./api/TeamsApi'), require('./api/VenuesApi'));
  }
}(function(ApiClient, AdvancedGameStat, AdvancedGameStatOffense, AdvancedGameStatOffenseRushingPlays, AdvancedGameStatOffenseStandardDowns, AdvancedSeasonStat, AdvancedSeasonStatOffense, AdvancedSeasonStatOffenseFieldPosition, AdvancedSeasonStatOffenseRushingPlays, AdvancedSeasonStatOffenseStandardDowns, BoxScore, BoxScorePlayers, BoxScorePlayersAverage, BoxScorePlayersPpa, BoxScorePlayersUsage, BoxScoreTeams, BoxScoreTeamsExplosiveness, BoxScoreTeamsFieldPosition, BoxScoreTeamsHavoc, BoxScoreTeamsOverall, BoxScoreTeamsPpa, BoxScoreTeamsRushing, BoxScoreTeamsScoringOpportunities, BoxScoreTeamsSuccessRates, Coach, CoachSeasons, Conference, ConferenceSPRating, ConferenceSPRatingDefense, ConferenceSPRatingOffense, DraftPick, DraftPickHometownInfo, DraftPosition, DraftTeam, Drive, DriveStartTime, FieldGoalExpectedPoints, Game, GameLines, GameLinesLines, GameMedia, GamePPA, GamePPAOffense, GameWeather, LivePlayByPlay, LivePlayByPlayDrives, LivePlayByPlayPlays, LivePlayByPlayTeams, Play, PlayStat, PlayStatType, PlayType, PlayWP, Player, PlayerGame, PlayerGameAthletes, PlayerGameCategories, PlayerGamePPA, PlayerGamePPAAveragePPA, PlayerGameTeams, PlayerGameTypes, PlayerSearchResult, PlayerSeasonPPA, PlayerSeasonPPAAveragePPA, PlayerSeasonStat, PlayerUsage, PlayerUsageUsage, PortalPlayer, PositionGroupRecruitingRating, PredictedPoints, PregameWP, RankingWeek, RankingWeekPolls, RankingWeekRanks, Recruit, RecruitHometownInfo, ReturningProduction, ScoreboardGame, ScoreboardGameBetting, ScoreboardGameHomeTeam, ScoreboardGameVenue, ScoreboardGameWeather, Team, TeamEloRating, TeamFPIRating, TeamFPIRatingEfficiencies, TeamFPIRatingResumeRanks, TeamGame, TeamGameStats, TeamGameTeams, TeamLocation, TeamMatchup, TeamMatchupGames, TeamPPA, TeamPPAOffense, TeamPPAOffenseCumulative, TeamRecord, TeamRecordTotal, TeamRecruitingRank, TeamSPRating, TeamSPRatingDefense, TeamSPRatingDefenseHavoc, TeamSPRatingOffense, TeamSPRatingSpecialTeams, TeamSRSRating, TeamSeason, TeamSeasonStat, TeamTalent, Venue, VenueLocation, Week, BettingApi, CoachesApi, ConferencesApi, DraftApi, DrivesApi, GamesApi, MetricsApi, PlayersApi, PlaysApi, RankingsApi, RatingsApi, RecruitingApi, StatsApi, TeamsApi, VenuesApi) {
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
   * @version 4.6.0
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
     * The AdvancedGameStatOffense model constructor.
     * @property {module:model/AdvancedGameStatOffense}
     */
    AdvancedGameStatOffense: AdvancedGameStatOffense,
    /**
     * The AdvancedGameStatOffenseRushingPlays model constructor.
     * @property {module:model/AdvancedGameStatOffenseRushingPlays}
     */
    AdvancedGameStatOffenseRushingPlays: AdvancedGameStatOffenseRushingPlays,
    /**
     * The AdvancedGameStatOffenseStandardDowns model constructor.
     * @property {module:model/AdvancedGameStatOffenseStandardDowns}
     */
    AdvancedGameStatOffenseStandardDowns: AdvancedGameStatOffenseStandardDowns,
    /**
     * The AdvancedSeasonStat model constructor.
     * @property {module:model/AdvancedSeasonStat}
     */
    AdvancedSeasonStat: AdvancedSeasonStat,
    /**
     * The AdvancedSeasonStatOffense model constructor.
     * @property {module:model/AdvancedSeasonStatOffense}
     */
    AdvancedSeasonStatOffense: AdvancedSeasonStatOffense,
    /**
     * The AdvancedSeasonStatOffenseFieldPosition model constructor.
     * @property {module:model/AdvancedSeasonStatOffenseFieldPosition}
     */
    AdvancedSeasonStatOffenseFieldPosition: AdvancedSeasonStatOffenseFieldPosition,
    /**
     * The AdvancedSeasonStatOffenseRushingPlays model constructor.
     * @property {module:model/AdvancedSeasonStatOffenseRushingPlays}
     */
    AdvancedSeasonStatOffenseRushingPlays: AdvancedSeasonStatOffenseRushingPlays,
    /**
     * The AdvancedSeasonStatOffenseStandardDowns model constructor.
     * @property {module:model/AdvancedSeasonStatOffenseStandardDowns}
     */
    AdvancedSeasonStatOffenseStandardDowns: AdvancedSeasonStatOffenseStandardDowns,
    /**
     * The BoxScore model constructor.
     * @property {module:model/BoxScore}
     */
    BoxScore: BoxScore,
    /**
     * The BoxScorePlayers model constructor.
     * @property {module:model/BoxScorePlayers}
     */
    BoxScorePlayers: BoxScorePlayers,
    /**
     * The BoxScorePlayersAverage model constructor.
     * @property {module:model/BoxScorePlayersAverage}
     */
    BoxScorePlayersAverage: BoxScorePlayersAverage,
    /**
     * The BoxScorePlayersPpa model constructor.
     * @property {module:model/BoxScorePlayersPpa}
     */
    BoxScorePlayersPpa: BoxScorePlayersPpa,
    /**
     * The BoxScorePlayersUsage model constructor.
     * @property {module:model/BoxScorePlayersUsage}
     */
    BoxScorePlayersUsage: BoxScorePlayersUsage,
    /**
     * The BoxScoreTeams model constructor.
     * @property {module:model/BoxScoreTeams}
     */
    BoxScoreTeams: BoxScoreTeams,
    /**
     * The BoxScoreTeamsExplosiveness model constructor.
     * @property {module:model/BoxScoreTeamsExplosiveness}
     */
    BoxScoreTeamsExplosiveness: BoxScoreTeamsExplosiveness,
    /**
     * The BoxScoreTeamsFieldPosition model constructor.
     * @property {module:model/BoxScoreTeamsFieldPosition}
     */
    BoxScoreTeamsFieldPosition: BoxScoreTeamsFieldPosition,
    /**
     * The BoxScoreTeamsHavoc model constructor.
     * @property {module:model/BoxScoreTeamsHavoc}
     */
    BoxScoreTeamsHavoc: BoxScoreTeamsHavoc,
    /**
     * The BoxScoreTeamsOverall model constructor.
     * @property {module:model/BoxScoreTeamsOverall}
     */
    BoxScoreTeamsOverall: BoxScoreTeamsOverall,
    /**
     * The BoxScoreTeamsPpa model constructor.
     * @property {module:model/BoxScoreTeamsPpa}
     */
    BoxScoreTeamsPpa: BoxScoreTeamsPpa,
    /**
     * The BoxScoreTeamsRushing model constructor.
     * @property {module:model/BoxScoreTeamsRushing}
     */
    BoxScoreTeamsRushing: BoxScoreTeamsRushing,
    /**
     * The BoxScoreTeamsScoringOpportunities model constructor.
     * @property {module:model/BoxScoreTeamsScoringOpportunities}
     */
    BoxScoreTeamsScoringOpportunities: BoxScoreTeamsScoringOpportunities,
    /**
     * The BoxScoreTeamsSuccessRates model constructor.
     * @property {module:model/BoxScoreTeamsSuccessRates}
     */
    BoxScoreTeamsSuccessRates: BoxScoreTeamsSuccessRates,
    /**
     * The Coach model constructor.
     * @property {module:model/Coach}
     */
    Coach: Coach,
    /**
     * The CoachSeasons model constructor.
     * @property {module:model/CoachSeasons}
     */
    CoachSeasons: CoachSeasons,
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
     * The ConferenceSPRatingDefense model constructor.
     * @property {module:model/ConferenceSPRatingDefense}
     */
    ConferenceSPRatingDefense: ConferenceSPRatingDefense,
    /**
     * The ConferenceSPRatingOffense model constructor.
     * @property {module:model/ConferenceSPRatingOffense}
     */
    ConferenceSPRatingOffense: ConferenceSPRatingOffense,
    /**
     * The DraftPick model constructor.
     * @property {module:model/DraftPick}
     */
    DraftPick: DraftPick,
    /**
     * The DraftPickHometownInfo model constructor.
     * @property {module:model/DraftPickHometownInfo}
     */
    DraftPickHometownInfo: DraftPickHometownInfo,
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
     * The DriveStartTime model constructor.
     * @property {module:model/DriveStartTime}
     */
    DriveStartTime: DriveStartTime,
    /**
     * The FieldGoalExpectedPoints model constructor.
     * @property {module:model/FieldGoalExpectedPoints}
     */
    FieldGoalExpectedPoints: FieldGoalExpectedPoints,
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
     * The GameLinesLines model constructor.
     * @property {module:model/GameLinesLines}
     */
    GameLinesLines: GameLinesLines,
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
     * The GamePPAOffense model constructor.
     * @property {module:model/GamePPAOffense}
     */
    GamePPAOffense: GamePPAOffense,
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
     * The LivePlayByPlayDrives model constructor.
     * @property {module:model/LivePlayByPlayDrives}
     */
    LivePlayByPlayDrives: LivePlayByPlayDrives,
    /**
     * The LivePlayByPlayPlays model constructor.
     * @property {module:model/LivePlayByPlayPlays}
     */
    LivePlayByPlayPlays: LivePlayByPlayPlays,
    /**
     * The LivePlayByPlayTeams model constructor.
     * @property {module:model/LivePlayByPlayTeams}
     */
    LivePlayByPlayTeams: LivePlayByPlayTeams,
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
     * The PlayerGameAthletes model constructor.
     * @property {module:model/PlayerGameAthletes}
     */
    PlayerGameAthletes: PlayerGameAthletes,
    /**
     * The PlayerGameCategories model constructor.
     * @property {module:model/PlayerGameCategories}
     */
    PlayerGameCategories: PlayerGameCategories,
    /**
     * The PlayerGamePPA model constructor.
     * @property {module:model/PlayerGamePPA}
     */
    PlayerGamePPA: PlayerGamePPA,
    /**
     * The PlayerGamePPAAveragePPA model constructor.
     * @property {module:model/PlayerGamePPAAveragePPA}
     */
    PlayerGamePPAAveragePPA: PlayerGamePPAAveragePPA,
    /**
     * The PlayerGameTeams model constructor.
     * @property {module:model/PlayerGameTeams}
     */
    PlayerGameTeams: PlayerGameTeams,
    /**
     * The PlayerGameTypes model constructor.
     * @property {module:model/PlayerGameTypes}
     */
    PlayerGameTypes: PlayerGameTypes,
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
     * The PlayerSeasonPPAAveragePPA model constructor.
     * @property {module:model/PlayerSeasonPPAAveragePPA}
     */
    PlayerSeasonPPAAveragePPA: PlayerSeasonPPAAveragePPA,
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
     * The PlayerUsageUsage model constructor.
     * @property {module:model/PlayerUsageUsage}
     */
    PlayerUsageUsage: PlayerUsageUsage,
    /**
     * The PortalPlayer model constructor.
     * @property {module:model/PortalPlayer}
     */
    PortalPlayer: PortalPlayer,
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
     * The RankingWeekPolls model constructor.
     * @property {module:model/RankingWeekPolls}
     */
    RankingWeekPolls: RankingWeekPolls,
    /**
     * The RankingWeekRanks model constructor.
     * @property {module:model/RankingWeekRanks}
     */
    RankingWeekRanks: RankingWeekRanks,
    /**
     * The Recruit model constructor.
     * @property {module:model/Recruit}
     */
    Recruit: Recruit,
    /**
     * The RecruitHometownInfo model constructor.
     * @property {module:model/RecruitHometownInfo}
     */
    RecruitHometownInfo: RecruitHometownInfo,
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
     * The ScoreboardGameBetting model constructor.
     * @property {module:model/ScoreboardGameBetting}
     */
    ScoreboardGameBetting: ScoreboardGameBetting,
    /**
     * The ScoreboardGameHomeTeam model constructor.
     * @property {module:model/ScoreboardGameHomeTeam}
     */
    ScoreboardGameHomeTeam: ScoreboardGameHomeTeam,
    /**
     * The ScoreboardGameVenue model constructor.
     * @property {module:model/ScoreboardGameVenue}
     */
    ScoreboardGameVenue: ScoreboardGameVenue,
    /**
     * The ScoreboardGameWeather model constructor.
     * @property {module:model/ScoreboardGameWeather}
     */
    ScoreboardGameWeather: ScoreboardGameWeather,
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
     * The TeamFPIRating model constructor.
     * @property {module:model/TeamFPIRating}
     */
    TeamFPIRating: TeamFPIRating,
    /**
     * The TeamFPIRatingEfficiencies model constructor.
     * @property {module:model/TeamFPIRatingEfficiencies}
     */
    TeamFPIRatingEfficiencies: TeamFPIRatingEfficiencies,
    /**
     * The TeamFPIRatingResumeRanks model constructor.
     * @property {module:model/TeamFPIRatingResumeRanks}
     */
    TeamFPIRatingResumeRanks: TeamFPIRatingResumeRanks,
    /**
     * The TeamGame model constructor.
     * @property {module:model/TeamGame}
     */
    TeamGame: TeamGame,
    /**
     * The TeamGameStats model constructor.
     * @property {module:model/TeamGameStats}
     */
    TeamGameStats: TeamGameStats,
    /**
     * The TeamGameTeams model constructor.
     * @property {module:model/TeamGameTeams}
     */
    TeamGameTeams: TeamGameTeams,
    /**
     * The TeamLocation model constructor.
     * @property {module:model/TeamLocation}
     */
    TeamLocation: TeamLocation,
    /**
     * The TeamMatchup model constructor.
     * @property {module:model/TeamMatchup}
     */
    TeamMatchup: TeamMatchup,
    /**
     * The TeamMatchupGames model constructor.
     * @property {module:model/TeamMatchupGames}
     */
    TeamMatchupGames: TeamMatchupGames,
    /**
     * The TeamPPA model constructor.
     * @property {module:model/TeamPPA}
     */
    TeamPPA: TeamPPA,
    /**
     * The TeamPPAOffense model constructor.
     * @property {module:model/TeamPPAOffense}
     */
    TeamPPAOffense: TeamPPAOffense,
    /**
     * The TeamPPAOffenseCumulative model constructor.
     * @property {module:model/TeamPPAOffenseCumulative}
     */
    TeamPPAOffenseCumulative: TeamPPAOffenseCumulative,
    /**
     * The TeamRecord model constructor.
     * @property {module:model/TeamRecord}
     */
    TeamRecord: TeamRecord,
    /**
     * The TeamRecordTotal model constructor.
     * @property {module:model/TeamRecordTotal}
     */
    TeamRecordTotal: TeamRecordTotal,
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
     * The TeamSPRatingDefense model constructor.
     * @property {module:model/TeamSPRatingDefense}
     */
    TeamSPRatingDefense: TeamSPRatingDefense,
    /**
     * The TeamSPRatingDefenseHavoc model constructor.
     * @property {module:model/TeamSPRatingDefenseHavoc}
     */
    TeamSPRatingDefenseHavoc: TeamSPRatingDefenseHavoc,
    /**
     * The TeamSPRatingOffense model constructor.
     * @property {module:model/TeamSPRatingOffense}
     */
    TeamSPRatingOffense: TeamSPRatingOffense,
    /**
     * The TeamSPRatingSpecialTeams model constructor.
     * @property {module:model/TeamSPRatingSpecialTeams}
     */
    TeamSPRatingSpecialTeams: TeamSPRatingSpecialTeams,
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
     * The VenueLocation model constructor.
     * @property {module:model/VenueLocation}
     */
    VenueLocation: VenueLocation,
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
