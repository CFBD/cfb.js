/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.3.2
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.cfb);
  }
}(this, function(expect, cfb) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new cfb.GamesApi();
  });

  describe('(package)', function() {
    describe('GamesApi', function() {
      describe('getAdvancedBoxScore', function() {
        it('should call getAdvancedBoxScore successfully', function(done) {
          // TODO: uncomment, update parameter values for getAdvancedBoxScore call and complete the assertions
          /*
          var gameId = 56;

          instance.getAdvancedBoxScore(gameId).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.BoxScore);
              expect(data.teams).to.be.a(cfb.BoxScoreTeams);
                    {
                  let dataCtr = data.teams.ppa;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(cfb.BoxScoreTeamsPpa);
                    expect(data.team).to.be.a('string');
                    // expect(data.team).to.be("");
                    expect(data.plays).to.be.a('number');
                    // expect(data.plays).to.be();
                    expect(data.overall).to.be.a(cfb.BoxScoreTeamsOverall);
                          expect(data.overall.total).to.be.a('number');
                      // expect(data.overall.total).to.be();
                      expect(data.overall.quarter1).to.be.a('number');
                      // expect(data.overall.quarter1).to.be();
                      expect(data.overall.quarter2).to.be.a('number');
                      // expect(data.overall.quarter2).to.be();
                      expect(data.overall.quarter3).to.be.a('number');
                      // expect(data.overall.quarter3).to.be();
                      expect(data.overall.quarter4).to.be.a('number');
                      // expect(data.overall.quarter4).to.be();
                    expect(data.passing).to.be.a(cfb.BoxScoreTeamsOverall);
                          expect(data.passing.total).to.be.a('number');
                      // expect(data.passing.total).to.be();
                      expect(data.passing.quarter1).to.be.a('number');
                      // expect(data.passing.quarter1).to.be();
                      expect(data.passing.quarter2).to.be.a('number');
                      // expect(data.passing.quarter2).to.be();
                      expect(data.passing.quarter3).to.be.a('number');
                      // expect(data.passing.quarter3).to.be();
                      expect(data.passing.quarter4).to.be.a('number');
                      // expect(data.passing.quarter4).to.be();
                    expect(data.rushing).to.be.a(cfb.BoxScoreTeamsOverall);
                          expect(data.rushing.total).to.be.a('number');
                      // expect(data.rushing.total).to.be();
                      expect(data.rushing.quarter1).to.be.a('number');
                      // expect(data.rushing.quarter1).to.be();
                      expect(data.rushing.quarter2).to.be.a('number');
                      // expect(data.rushing.quarter2).to.be();
                      expect(data.rushing.quarter3).to.be.a('number');
                      // expect(data.rushing.quarter3).to.be();
                      expect(data.rushing.quarter4).to.be.a('number');
                      // expect(data.rushing.quarter4).to.be();
                  }
                }
                {
                  let dataCtr = data.teams.cumulativePpa;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(cfb.BoxScoreTeamsPpa);
                    expect(data.team).to.be.a('string');
                    // expect(data.team).to.be("");
                    expect(data.plays).to.be.a('number');
                    // expect(data.plays).to.be();
                    expect(data.overall).to.be.a(cfb.BoxScoreTeamsOverall);
                          expect(data.overall.total).to.be.a('number');
                      // expect(data.overall.total).to.be();
                      expect(data.overall.quarter1).to.be.a('number');
                      // expect(data.overall.quarter1).to.be();
                      expect(data.overall.quarter2).to.be.a('number');
                      // expect(data.overall.quarter2).to.be();
                      expect(data.overall.quarter3).to.be.a('number');
                      // expect(data.overall.quarter3).to.be();
                      expect(data.overall.quarter4).to.be.a('number');
                      // expect(data.overall.quarter4).to.be();
                    expect(data.passing).to.be.a(cfb.BoxScoreTeamsOverall);
                          expect(data.passing.total).to.be.a('number');
                      // expect(data.passing.total).to.be();
                      expect(data.passing.quarter1).to.be.a('number');
                      // expect(data.passing.quarter1).to.be();
                      expect(data.passing.quarter2).to.be.a('number');
                      // expect(data.passing.quarter2).to.be();
                      expect(data.passing.quarter3).to.be.a('number');
                      // expect(data.passing.quarter3).to.be();
                      expect(data.passing.quarter4).to.be.a('number');
                      // expect(data.passing.quarter4).to.be();
                    expect(data.rushing).to.be.a(cfb.BoxScoreTeamsOverall);
                          expect(data.rushing.total).to.be.a('number');
                      // expect(data.rushing.total).to.be();
                      expect(data.rushing.quarter1).to.be.a('number');
                      // expect(data.rushing.quarter1).to.be();
                      expect(data.rushing.quarter2).to.be.a('number');
                      // expect(data.rushing.quarter2).to.be();
                      expect(data.rushing.quarter3).to.be.a('number');
                      // expect(data.rushing.quarter3).to.be();
                      expect(data.rushing.quarter4).to.be.a('number');
                      // expect(data.rushing.quarter4).to.be();
                  }
                }
                {
                  let dataCtr = data.teams.successRates;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(cfb.BoxScoreTeamsSuccessRates);
                    expect(data.team).to.be.a('string');
                    // expect(data.team).to.be("");
                    expect(data.overall).to.be.a(cfb.BoxScoreTeamsOverall);
                          expect(data.overall.total).to.be.a('number');
                      // expect(data.overall.total).to.be();
                      expect(data.overall.quarter1).to.be.a('number');
                      // expect(data.overall.quarter1).to.be();
                      expect(data.overall.quarter2).to.be.a('number');
                      // expect(data.overall.quarter2).to.be();
                      expect(data.overall.quarter3).to.be.a('number');
                      // expect(data.overall.quarter3).to.be();
                      expect(data.overall.quarter4).to.be.a('number');
                      // expect(data.overall.quarter4).to.be();
                    expect(data.standardDowns).to.be.a(cfb.BoxScoreTeamsOverall);
                          expect(data.standardDowns.total).to.be.a('number');
                      // expect(data.standardDowns.total).to.be();
                      expect(data.standardDowns.quarter1).to.be.a('number');
                      // expect(data.standardDowns.quarter1).to.be();
                      expect(data.standardDowns.quarter2).to.be.a('number');
                      // expect(data.standardDowns.quarter2).to.be();
                      expect(data.standardDowns.quarter3).to.be.a('number');
                      // expect(data.standardDowns.quarter3).to.be();
                      expect(data.standardDowns.quarter4).to.be.a('number');
                      // expect(data.standardDowns.quarter4).to.be();
                    expect(data.passingDowns).to.be.a(cfb.BoxScoreTeamsOverall);
                          expect(data.passingDowns.total).to.be.a('number');
                      // expect(data.passingDowns.total).to.be();
                      expect(data.passingDowns.quarter1).to.be.a('number');
                      // expect(data.passingDowns.quarter1).to.be();
                      expect(data.passingDowns.quarter2).to.be.a('number');
                      // expect(data.passingDowns.quarter2).to.be();
                      expect(data.passingDowns.quarter3).to.be.a('number');
                      // expect(data.passingDowns.quarter3).to.be();
                      expect(data.passingDowns.quarter4).to.be.a('number');
                      // expect(data.passingDowns.quarter4).to.be();
                  }
                }
                {
                  let dataCtr = data.teams.explosiveness;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(cfb.BoxScoreTeamsExplosiveness);
                    expect(data.team).to.be.a('string');
                    // expect(data.team).to.be("");
                    expect(data.overall).to.be.a(cfb.BoxScoreTeamsOverall);
                          expect(data.overall.total).to.be.a('number');
                      // expect(data.overall.total).to.be();
                      expect(data.overall.quarter1).to.be.a('number');
                      // expect(data.overall.quarter1).to.be();
                      expect(data.overall.quarter2).to.be.a('number');
                      // expect(data.overall.quarter2).to.be();
                      expect(data.overall.quarter3).to.be.a('number');
                      // expect(data.overall.quarter3).to.be();
                      expect(data.overall.quarter4).to.be.a('number');
                      // expect(data.overall.quarter4).to.be();
                  }
                }
                {
                  let dataCtr = data.teams.rushing;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(cfb.BoxScoreTeamsRushing);
                    expect(data.team).to.be.a('string');
                    // expect(data.team).to.be("");
                    expect(data.powerSuccess).to.be.a('number');
                    // expect(data.powerSuccess).to.be();
                    expect(data.stuffRate).to.be.a('number');
                    // expect(data.stuffRate).to.be();
                    expect(data.lineYards).to.be.a('number');
                    // expect(data.lineYards).to.be();
                    expect(data.lineYardsAverage).to.be.a('number');
                    // expect(data.lineYardsAverage).to.be();
                    expect(data.secondLevelYards).to.be.a('number');
                    // expect(data.secondLevelYards).to.be(0);
                    expect(data.secondLevelYardsAverage).to.be.a('number');
                    // expect(data.secondLevelYardsAverage).to.be();
                    expect(data.openFieldYards).to.be.a('number');
                    // expect(data.openFieldYards).to.be(0);
                    expect(data.openFieldYardsAverage).to.be.a('number');
                    // expect(data.openFieldYardsAverage).to.be();
                  }
                }
                {
                  let dataCtr = data.teams.havoc;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(cfb.BoxScoreTeamsHavoc);
                    expect(data.team).to.be.a('string');
                    // expect(data.team).to.be("");
                    expect(data.total).to.be.a('number');
                    // expect(data.total).to.be();
                    expect(data.frontSeven).to.be.a('number');
                    // expect(data.frontSeven).to.be();
                    expect(data.db).to.be.a('number');
                    // expect(data.db).to.be();
                  }
                }
                {
                  let dataCtr = data.teams.scoringOpportunities;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(cfb.BoxScoreTeamsScoringOpportunities);
                    expect(data.team).to.be.a('string');
                    // expect(data.team).to.be("");
                    expect(data.opportunities).to.be.a('number');
                    // expect(data.opportunities).to.be(0);
                    expect(data.points).to.be.a('number');
                    // expect(data.points).to.be(0);
                    expect(data.pointsPerOpportunity).to.be.a('number');
                    // expect(data.pointsPerOpportunity).to.be();
                  }
                }
                {
                  let dataCtr = data.teams.fieldPosition;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(cfb.BoxScoreTeamsFieldPosition);
                    expect(data.team).to.be.a('string');
                    // expect(data.team).to.be("");
                    expect(data.averageStart).to.be.a('number');
                    // expect(data.averageStart).to.be();
                    expect(data.averageStartingPredictedPoints).to.be.a('number');
                    // expect(data.averageStartingPredictedPoints).to.be();
                  }
                }
              expect(data.players).to.be.a(cfb.BoxScorePlayers);
                    {
                  let dataCtr = data.players.usage;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(cfb.BoxScorePlayersUsage);
                    expect(data.player).to.be.a('string');
                    // expect(data.player).to.be("");
                    expect(data.team).to.be.a('string');
                    // expect(data.team).to.be("");
                    expect(data.position).to.be.a('string');
                    // expect(data.position).to.be("");
                    expect(data.total).to.be.a('number');
                    // expect(data.total).to.be();
                    expect(data.quarter1).to.be.a('number');
                    // expect(data.quarter1).to.be();
                    expect(data.quarter2).to.be.a('number');
                    // expect(data.quarter2).to.be();
                    expect(data.quarter3).to.be.a('number');
                    // expect(data.quarter3).to.be();
                    expect(data.quarter4).to.be.a('number');
                    // expect(data.quarter4).to.be();
                    expect(data.rushing).to.be.a('number');
                    // expect(data.rushing).to.be();
                    expect(data.passing).to.be.a('number');
                    // expect(data.passing).to.be();
                  }
                }
                {
                  let dataCtr = data.players.ppa;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(cfb.BoxScorePlayersPpa);
                    expect(data.player).to.be.a('string');
                    // expect(data.player).to.be("");
                    expect(data.team).to.be.a('string');
                    // expect(data.team).to.be("");
                    expect(data.position).to.be.a('string');
                    // expect(data.position).to.be("");
                    expect(data.average).to.be.a(cfb.BoxScorePlayersAverage);
                          expect(data.average.total).to.be.a('number');
                      // expect(data.average.total).to.be();
                      expect(data.average.quarter1).to.be.a('number');
                      // expect(data.average.quarter1).to.be();
                      expect(data.average.quarter2).to.be.a('number');
                      // expect(data.average.quarter2).to.be();
                      expect(data.average.quarter3).to.be.a('number');
                      // expect(data.average.quarter3).to.be();
                      expect(data.average.quarter4).to.be.a('number');
                      // expect(data.average.quarter4).to.be();
                      expect(data.average.rushing).to.be.a('number');
                      // expect(data.average.rushing).to.be();
                      expect(data.average.passing).to.be.a('number');
                      // expect(data.average.passing).to.be();
                    expect(data.cumulative).to.be.a(cfb.BoxScorePlayersAverage);
                          expect(data.cumulative.total).to.be.a('number');
                      // expect(data.cumulative.total).to.be();
                      expect(data.cumulative.quarter1).to.be.a('number');
                      // expect(data.cumulative.quarter1).to.be();
                      expect(data.cumulative.quarter2).to.be.a('number');
                      // expect(data.cumulative.quarter2).to.be();
                      expect(data.cumulative.quarter3).to.be.a('number');
                      // expect(data.cumulative.quarter3).to.be();
                      expect(data.cumulative.quarter4).to.be.a('number');
                      // expect(data.cumulative.quarter4).to.be();
                      expect(data.cumulative.rushing).to.be.a('number');
                      // expect(data.cumulative.rushing).to.be();
                      expect(data.cumulative.passing).to.be.a('number');
                      // expect(data.cumulative.passing).to.be();
                  }
                }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getGameMedia', function() {
        it('should call getGameMedia successfully', function(done) {
          // TODO: uncomment, update parameter values for getGameMedia call and complete the assertions
          /*
          var year = 56;
          var opts = {};
          opts.week = 56;
          opts.seasonType = "seasonType_example";
          opts.team = "team_example";
          opts.conference = "conference_example";
          opts.mediaType = "mediaType_example";

          instance.getGameMedia(year, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.GameMedia);
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be(0);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.week).to.be.a('number');
              // expect(data.week).to.be(0);
              expect(data.seasonType).to.be.a('string');
              // expect(data.seasonType).to.be("");
              expect(data.startTime).to.be.a('string');
              // expect(data.startTime).to.be("");
              expect(data.isStartTimeTBD).to.be.a('boolean');
              // expect(data.isStartTimeTBD).to.be(false);
              expect(data.homeTeam).to.be.a('string');
              // expect(data.homeTeam).to.be("");
              expect(data.homeConference).to.be.a('string');
              // expect(data.homeConference).to.be("");
              expect(data.awayTeam).to.be.a('string');
              // expect(data.awayTeam).to.be("");
              expect(data.awayConference).to.be.a('string');
              // expect(data.awayConference).to.be("");
              expect(data.mediaType).to.be.a('string');
              // expect(data.mediaType).to.be("");
              expect(data.outlet).to.be.a('string');
              // expect(data.outlet).to.be("");
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getGames', function() {
        it('should call getGames successfully', function(done) {
          // TODO: uncomment, update parameter values for getGames call and complete the assertions
          /*
          var year = 56;
          var opts = {};
          opts.week = 56;
          opts.seasonType = "regular";
          opts.team = "team_example";
          opts.home = "home_example";
          opts.away = "away_example";
          opts.conference = "conference_example";
          opts.id = 56;

          instance.getGames(year, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.Game);
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be(0);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.week).to.be.a('number');
              // expect(data.week).to.be(0);
              expect(data.seasonType).to.be.a('string');
              // expect(data.seasonType).to.be("");
              expect(data.startDate).to.be.a('string');
              // expect(data.startDate).to.be("");
              expect(data.startTimeTbd).to.be.a('boolean');
              // expect(data.startTimeTbd).to.be(false);
              expect(data.neutralSite).to.be.a('boolean');
              // expect(data.neutralSite).to.be(false);
              expect(data.conferenceGame).to.be.a('boolean');
              // expect(data.conferenceGame).to.be(false);
              expect(data.attendance).to.be.a('number');
              // expect(data.attendance).to.be(0);
              expect(data.venueId).to.be.a('number');
              // expect(data.venueId).to.be(0);
              expect(data.venue).to.be.a('string');
              // expect(data.venue).to.be("");
              expect(data.homeId).to.be.a('number');
              // expect(data.homeId).to.be(0);
              expect(data.homeTeam).to.be.a('string');
              // expect(data.homeTeam).to.be("");
              expect(data.homeConference).to.be.a('string');
              // expect(data.homeConference).to.be("");
              expect(data.homePoints).to.be.a('number');
              // expect(data.homePoints).to.be(0);
              {
                let dataCtr = data.homeLineScores;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  // expect(data).to.be(0);
                }
              }
              expect(data.homePostWinProb).to.be.a('number');
              // expect(data.homePostWinProb).to.be();
              expect(data.awayId).to.be.a('number');
              // expect(data.awayId).to.be(0);
              expect(data.awayTeam).to.be.a('string');
              // expect(data.awayTeam).to.be("");
              expect(data.awayConference).to.be.a('string');
              // expect(data.awayConference).to.be("");
              expect(data.awayPoints).to.be.a('number');
              // expect(data.awayPoints).to.be(0);
              {
                let dataCtr = data.awayLineScores;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  // expect(data).to.be(0);
                }
              }
              expect(data.awayPostWinProb).to.be.a('number');
              // expect(data.awayPostWinProb).to.be();
              expect(data.excitementIndex).to.be.a('number');
              // expect(data.excitementIndex).to.be();
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getPlayerGameStats', function() {
        it('should call getPlayerGameStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getPlayerGameStats call and complete the assertions
          /*
          var year = 56;
          var opts = {};
          opts.week = 56;
          opts.seasonType = "regular";
          opts.team = "team_example";
          opts.conference = "conference_example";
          opts.category = "category_example";
          opts.gameId = 56;

          instance.getPlayerGameStats(year, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayerGame);
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be(0);
              {
                let dataCtr = data.teams;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(cfb.PlayerGameTeams);
                  expect(data.school).to.be.a(cfb.PlayerGameSchool);
                        expect(data.school.name).to.be.a('string');
                    // expect(data.school.name).to.be("");
                    expect(data.school.conference).to.be.a('string');
                    // expect(data.school.conference).to.be("");
                  expect(data.homeAway).to.be.a('boolean');
                  // expect(data.homeAway).to.be(false);
                  expect(data.points).to.be.a('number');
                  // expect(data.points).to.be(0);
                  {
                    let dataCtr = data.categories;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(cfb.PlayerGameCategories);
                      expect(data.name).to.be.a('string');
                      // expect(data.name).to.be("");
                      {
                        let dataCtr = data.types;
                        expect(dataCtr).to.be.an(Array);
                        expect(dataCtr).to.not.be.empty();
                        for (let p in dataCtr) {
                          let data = dataCtr[p];
                          expect(data).to.be.a(cfb.PlayerGameTypes);
                          expect(data.name).to.be.a('string');
                          // expect(data.name).to.be("");
                          {
                            let dataCtr = data.athletes;
                            expect(dataCtr).to.be.an(Array);
                            expect(dataCtr).to.not.be.empty();
                            for (let p in dataCtr) {
                              let data = dataCtr[p];
                              expect(data).to.be.a(cfb.PlayerGameAthletes);
                              expect(data.id).to.be.a('number');
                              // expect(data.id).to.be(0);
                              expect(data.name).to.be.a('string');
                              // expect(data.name).to.be("");
                              expect(data.stat).to.be.a('string');
                              // expect(data.stat).to.be("");
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTeamGameStats', function() {
        it('should call getTeamGameStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getTeamGameStats call and complete the assertions
          /*
          var year = 56;
          var opts = {};
          opts.week = 56;
          opts.seasonType = "regular";
          opts.team = "team_example";
          opts.conference = "conference_example";
          opts.gameId = 56;

          instance.getTeamGameStats(year, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.TeamGame);
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be(0);
              {
                let dataCtr = data.teams;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(cfb.TeamGameTeams);
                  expect(data.school).to.be.a('string');
                  // expect(data.school).to.be("");
                  expect(data.conference).to.be.a('string');
                  // expect(data.conference).to.be("");
                  expect(data.homeAway).to.be.a('boolean');
                  // expect(data.homeAway).to.be(false);
                  expect(data.points).to.be.a('number');
                  // expect(data.points).to.be(0);
                  {
                    let dataCtr = data.stats;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(cfb.TeamGameStats);
                      expect(data.category).to.be.a('string');
                      // expect(data.category).to.be("");
                      expect(data.stat).to.be.a('string');
                      // expect(data.stat).to.be("");
                    }
                  }
                }
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTeamRecords', function() {
        it('should call getTeamRecords successfully', function(done) {
          // TODO: uncomment, update parameter values for getTeamRecords call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.team = "team_example";
          opts.conference = "conference_example";

          instance.getTeamRecords(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.TeamRecord);
              expect(data.year).to.be.a('number');
              // expect(data.year).to.be(0);
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.division).to.be.a('string');
              // expect(data.division).to.be("");
              expect(data.total).to.be.a(cfb.TeamRecordTotal);
                    expect(data.total.games).to.be.a('number');
                // expect(data.total.games).to.be(0);
                expect(data.total.wins).to.be.a('number');
                // expect(data.total.wins).to.be(0);
                expect(data.total.losses).to.be.a('number');
                // expect(data.total.losses).to.be(0);
                expect(data.total.ties).to.be.a('number');
                // expect(data.total.ties).to.be(0);
              expect(data.conferenceGames).to.be.a(cfb.TeamRecordTotal);
                    expect(data.conferenceGames.games).to.be.a('number');
                // expect(data.conferenceGames.games).to.be(0);
                expect(data.conferenceGames.wins).to.be.a('number');
                // expect(data.conferenceGames.wins).to.be(0);
                expect(data.conferenceGames.losses).to.be.a('number');
                // expect(data.conferenceGames.losses).to.be(0);
                expect(data.conferenceGames.ties).to.be.a('number');
                // expect(data.conferenceGames.ties).to.be(0);
              expect(data.homeGames).to.be.a(cfb.TeamRecordTotal);
                    expect(data.homeGames.games).to.be.a('number');
                // expect(data.homeGames.games).to.be(0);
                expect(data.homeGames.wins).to.be.a('number');
                // expect(data.homeGames.wins).to.be(0);
                expect(data.homeGames.losses).to.be.a('number');
                // expect(data.homeGames.losses).to.be(0);
                expect(data.homeGames.ties).to.be.a('number');
                // expect(data.homeGames.ties).to.be(0);
              expect(data.awayGames).to.be.a(cfb.TeamRecordTotal);
                    expect(data.awayGames.games).to.be.a('number');
                // expect(data.awayGames.games).to.be(0);
                expect(data.awayGames.wins).to.be.a('number');
                // expect(data.awayGames.wins).to.be(0);
                expect(data.awayGames.losses).to.be.a('number');
                // expect(data.awayGames.losses).to.be(0);
                expect(data.awayGames.ties).to.be.a('number');
                // expect(data.awayGames.ties).to.be(0);
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
