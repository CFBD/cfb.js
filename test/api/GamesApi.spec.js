/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.7
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
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
            expect(data).to.be.a(cfb.BoxScore);
            expect(data.teams).to.be.a(Object);
            expect(data.teams).to.be();
            expect(data.players).to.be.a(Object);
            expect(data.players).to.be();

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCalendar', function() {
        it('should call getCalendar successfully', function(done) {
          // TODO: uncomment, update parameter values for getCalendar call and complete the assertions
          /*
          var year = 56;

          instance.getCalendar(year).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.Week);
              expect(data.season).to.be.a('number');
              expect(data.season).to.be(0);
              expect(data.week).to.be.a('number');
              expect(data.week).to.be(0);
              expect(data.seasonType).to.be.a('string');
              expect(data.seasonType).to.be("");
              expect(data.firstGameStart).to.be.a('string');
              expect(data.firstGameStart).to.be("");
              expect(data.lastGameStart).to.be.a('string');
              expect(data.lastGameStart).to.be("");
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
              expect(data.id).to.be(0);
              expect(data.season).to.be.a('number');
              expect(data.season).to.be(0);
              expect(data.week).to.be.a('number');
              expect(data.week).to.be(0);
              expect(data.seasonType).to.be.a('string');
              expect(data.seasonType).to.be("");
              expect(data.startTime).to.be.a('string');
              expect(data.startTime).to.be("");
              expect(data.isStartTimeTBD).to.be.a('boolean');
              expect(data.isStartTimeTBD).to.be(false);
              expect(data.homeTeam).to.be.a('string');
              expect(data.homeTeam).to.be("");
              expect(data.homeConference).to.be.a('string');
              expect(data.homeConference).to.be("");
              expect(data.awayTeam).to.be.a('string');
              expect(data.awayTeam).to.be("");
              expect(data.awayConference).to.be.a('string');
              expect(data.awayConference).to.be("");
              expect(data.mediaType).to.be.a('string');
              expect(data.mediaType).to.be("");
              expect(data.outlet).to.be.a('string');
              expect(data.outlet).to.be("");
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
      describe('getGameWeather', function() {
        it('should call getGameWeather successfully', function(done) {
          // TODO: uncomment, update parameter values for getGameWeather call and complete the assertions
          /*
          var year = 56;
          var opts = {};
          opts.week = 56;
          opts.seasonType = "seasonType_example";
          opts.team = "team_example";
          opts.conference = "conference_example";

          instance.getGameWeather(year, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.GameWeather);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.season).to.be.a('number');
              expect(data.season).to.be(0);
              expect(data.week).to.be.a('number');
              expect(data.week).to.be(0);
              expect(data.seasonType).to.be.a('string');
              expect(data.seasonType).to.be("");
              expect(data.startTime).to.be.a('string');
              expect(data.startTime).to.be("");
              expect(data.isStartTimeTBD).to.be.a('boolean');
              expect(data.isStartTimeTBD).to.be(false);
              expect(data.homeTeam).to.be.a('string');
              expect(data.homeTeam).to.be("");
              expect(data.homeConference).to.be.a('string');
              expect(data.homeConference).to.be("");
              expect(data.awayTeam).to.be.a('string');
              expect(data.awayTeam).to.be("");
              expect(data.awayConference).to.be.a('string');
              expect(data.awayConference).to.be("");
              expect(data.venueId).to.be.a('number');
              expect(data.venueId).to.be(0);
              expect(data.venue).to.be.a('string');
              expect(data.venue).to.be("");
              expect(data.temperature).to.be.a('number');
              expect(data.temperature).to.be();
              expect(data.dewPoint).to.be.a('number');
              expect(data.dewPoint).to.be();
              expect(data.humidity).to.be.a('number');
              expect(data.humidity).to.be();
              expect(data.precipitation).to.be.a('number');
              expect(data.precipitation).to.be();
              expect(data.snowfall).to.be.a('number');
              expect(data.snowfall).to.be();
              expect(data.windDirection).to.be.a('number');
              expect(data.windDirection).to.be();
              expect(data.windSpeed).to.be.a('number');
              expect(data.windSpeed).to.be();
              expect(data.pressure).to.be.a('number');
              expect(data.pressure).to.be();
              expect(data.weatherConditionCode).to.be.a('number');
              expect(data.weatherConditionCode).to.be(0);
              expect(data.weatherCondition).to.be.a('string');
              expect(data.weatherCondition).to.be("");
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
              expect(data.id).to.be(0);
              expect(data.season).to.be.a('number');
              expect(data.season).to.be(0);
              expect(data.week).to.be.a('number');
              expect(data.week).to.be(0);
              expect(data.seasonType).to.be.a('string');
              expect(data.seasonType).to.be("");
              expect(data.startDate).to.be.a('string');
              expect(data.startDate).to.be("");
              expect(data.startTimeTbd).to.be.a('boolean');
              expect(data.startTimeTbd).to.be(false);
              expect(data.neutralSite).to.be.a('boolean');
              expect(data.neutralSite).to.be(false);
              expect(data.conferenceGame).to.be.a('boolean');
              expect(data.conferenceGame).to.be(false);
              expect(data.attendance).to.be.a('number');
              expect(data.attendance).to.be(0);
              expect(data.venueId).to.be.a('number');
              expect(data.venueId).to.be(0);
              expect(data.venue).to.be.a('string');
              expect(data.venue).to.be("");
              expect(data.homeId).to.be.a('number');
              expect(data.homeId).to.be(0);
              expect(data.homeTeam).to.be.a('string');
              expect(data.homeTeam).to.be("");
              expect(data.homeConference).to.be.a('string');
              expect(data.homeConference).to.be("");
              expect(data.homePoints).to.be.a('number');
              expect(data.homePoints).to.be(0);
              {
                let dataCtr = data.homeLineScores;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              expect(data.homePostWinProb).to.be.a('number');
              expect(data.homePostWinProb).to.be();
              expect(data.awayId).to.be.a('number');
              expect(data.awayId).to.be(0);
              expect(data.awayTeam).to.be.a('string');
              expect(data.awayTeam).to.be("");
              expect(data.awayConference).to.be.a('string');
              expect(data.awayConference).to.be("");
              expect(data.awayPoints).to.be.a('number');
              expect(data.awayPoints).to.be(0);
              {
                let dataCtr = data.awayLineScores;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              expect(data.awayPostWinProb).to.be.a('number');
              expect(data.awayPostWinProb).to.be();
              expect(data.excitementIndex).to.be.a('number');
              expect(data.excitementIndex).to.be();
              expect(data.highlights).to.be.a('string');
              expect(data.highlights).to.be("");
              expect(data.notes).to.be.a('string');
              expect(data.notes).to.be("");
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
              expect(data.id).to.be(0);
              {
                let dataCtr = data.teams;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Object);
                  expect(data).to.be();
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
              expect(data.id).to.be(0);
              {
                let dataCtr = data.teams;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Object);
                  expect(data).to.be();
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
              expect(data.year).to.be(0);
              expect(data.team).to.be.a('string');
              expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              expect(data.conference).to.be("");
              expect(data.division).to.be.a('string');
              expect(data.division).to.be("");
              expect(data.total).to.be.a(Object);
              expect(data.total).to.be();
              expect(data.conferenceGames).to.be.a(Object);
              expect(data.conferenceGames).to.be();
              expect(data.homeGames).to.be.a(Object);
              expect(data.homeGames).to.be();
              expect(data.awayGames).to.be.a(Object);
              expect(data.awayGames).to.be();
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
