/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.5
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
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
    instance = new cfb.MetricsApi();
  });

  describe('(package)', function() {
    describe('MetricsApi', function() {
      describe('getGamePPA', function() {
        it('should call getGamePPA successfully', function(done) {
          // TODO: uncomment, update parameter values for getGamePPA call and complete the assertions
          /*
          var year = 56;
          var opts = {};
          opts.week = 56;
          opts.team = "team_example";
          opts.conference = "conference_example";
          opts.excludeGarbageTime = true;

          instance.getGamePPA(year, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.GamePPA);
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be(0);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.week).to.be.a('number');
              // expect(data.week).to.be(0);
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.opponnent).to.be.a('string');
              // expect(data.opponnent).to.be("");
              expect(data.offense).to.be.a(cfb.GamePPAOffense);
                    expect(data.offense.overall).to.be.a('number');
                // expect(data.offense.overall).to.be();
                expect(data.offense.passing).to.be.a('number');
                // expect(data.offense.passing).to.be();
                expect(data.offense.rushing).to.be.a('number');
                // expect(data.offense.rushing).to.be();
                expect(data.offense.firstDown).to.be.a('number');
                // expect(data.offense.firstDown).to.be();
                expect(data.offense.secondDown).to.be.a('number');
                // expect(data.offense.secondDown).to.be();
                expect(data.offense.thirdDown).to.be.a('number');
                // expect(data.offense.thirdDown).to.be();
              expect(data.defense).to.be.a(cfb.GamePPAOffense);
                    expect(data.defense.overall).to.be.a('number');
                // expect(data.defense.overall).to.be();
                expect(data.defense.passing).to.be.a('number');
                // expect(data.defense.passing).to.be();
                expect(data.defense.rushing).to.be.a('number');
                // expect(data.defense.rushing).to.be();
                expect(data.defense.firstDown).to.be.a('number');
                // expect(data.defense.firstDown).to.be();
                expect(data.defense.secondDown).to.be.a('number');
                // expect(data.defense.secondDown).to.be();
                expect(data.defense.thirdDown).to.be.a('number');
                // expect(data.defense.thirdDown).to.be();
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
      describe('getPlayerGamePPA', function() {
        it('should call getPlayerGamePPA successfully', function(done) {
          // TODO: uncomment, update parameter values for getPlayerGamePPA call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.week = 56;
          opts.team = "team_example";
          opts.position = "position_example";
          opts.playerId = 56;
          opts.threshold = "threshold_example";
          opts.excludeGarbageTime = true;

          instance.getPlayerGamePPA(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayerGamePPA);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.week).to.be.a('number');
              // expect(data.week).to.be(0);
              expect(data.name).to.be.a('string');
              // expect(data.name).to.be("");
              expect(data.position).to.be.a('string');
              // expect(data.position).to.be("");
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.opponent).to.be.a('string');
              // expect(data.opponent).to.be("");
              expect(data.averagePPA).to.be.a(cfb.PlayerGamePPAAveragePPA);
                    expect(data.averagePPA.all).to.be.a('number');
                // expect(data.averagePPA.all).to.be();
                expect(data.averagePPA.pass).to.be.a('number');
                // expect(data.averagePPA.pass).to.be();
                expect(data.averagePPA.rush).to.be.a('number');
                // expect(data.averagePPA.rush).to.be();
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
      describe('getPlayerSeasonPPA', function() {
        it('should call getPlayerSeasonPPA successfully', function(done) {
          // TODO: uncomment, update parameter values for getPlayerSeasonPPA call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.team = "team_example";
          opts.conference = "conference_example";
          opts.position = "position_example";
          opts.playerId = 56;
          opts.threshold = "threshold_example";
          opts.excludeGarbageTime = true;

          instance.getPlayerSeasonPPA(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayerSeasonPPA);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be(0);
              expect(data.name).to.be.a('string');
              // expect(data.name).to.be("");
              expect(data.position).to.be.a('string');
              // expect(data.position).to.be("");
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.averagePPA).to.be.a(cfb.PlayerSeasonPPAAveragePPA);
                    expect(data.averagePPA.all).to.be.a('number');
                // expect(data.averagePPA.all).to.be();
                expect(data.averagePPA.pass).to.be.a('number');
                // expect(data.averagePPA.pass).to.be();
                expect(data.averagePPA.rush).to.be.a('number');
                // expect(data.averagePPA.rush).to.be();
                expect(data.averagePPA.firstDown).to.be.a('number');
                // expect(data.averagePPA.firstDown).to.be();
                expect(data.averagePPA.secondDown).to.be.a('number');
                // expect(data.averagePPA.secondDown).to.be();
                expect(data.averagePPA.thirdDown).to.be.a('number');
                // expect(data.averagePPA.thirdDown).to.be();
                expect(data.averagePPA.standardDowns).to.be.a('number');
                // expect(data.averagePPA.standardDowns).to.be();
                expect(data.averagePPA.passingDowns).to.be.a('number');
                // expect(data.averagePPA.passingDowns).to.be();
              expect(data.totalPPA).to.be.a(cfb.PlayerSeasonPPAAveragePPA);
                    expect(data.totalPPA.all).to.be.a('number');
                // expect(data.totalPPA.all).to.be();
                expect(data.totalPPA.pass).to.be.a('number');
                // expect(data.totalPPA.pass).to.be();
                expect(data.totalPPA.rush).to.be.a('number');
                // expect(data.totalPPA.rush).to.be();
                expect(data.totalPPA.firstDown).to.be.a('number');
                // expect(data.totalPPA.firstDown).to.be();
                expect(data.totalPPA.secondDown).to.be.a('number');
                // expect(data.totalPPA.secondDown).to.be();
                expect(data.totalPPA.thirdDown).to.be.a('number');
                // expect(data.totalPPA.thirdDown).to.be();
                expect(data.totalPPA.standardDowns).to.be.a('number');
                // expect(data.totalPPA.standardDowns).to.be();
                expect(data.totalPPA.passingDowns).to.be.a('number');
                // expect(data.totalPPA.passingDowns).to.be();
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
      describe('getPredictedPoints', function() {
        it('should call getPredictedPoints successfully', function(done) {
          // TODO: uncomment, update parameter values for getPredictedPoints call and complete the assertions
          /*
          var down = 56;
          var distance = 56;

          instance.getPredictedPoints(down, distance).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PredictedPoints);
              expect(data.yardLine).to.be.a('number');
              // expect(data.yardLine).to.be(0);
              expect(data.predictedPoints).to.be.a('number');
              // expect(data.predictedPoints).to.be();
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
      describe('getPregameWinProbabilities', function() {
        it('should call getPregameWinProbabilities successfully', function(done) {
          // TODO: uncomment, update parameter values for getPregameWinProbabilities call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.week = 56;
          opts.team = "team_example";
          opts.seasonType = "seasonType_example";

          instance.getPregameWinProbabilities(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PregameWP);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.seasonType).to.be.a('string');
              // expect(data.seasonType).to.be("");
              expect(data.week).to.be.a('number');
              // expect(data.week).to.be(0);
              expect(data.gameId).to.be.a('number');
              // expect(data.gameId).to.be(0);
              expect(data.homeTeam).to.be.a('string');
              // expect(data.homeTeam).to.be("");
              expect(data.awayTeam).to.be.a('string');
              // expect(data.awayTeam).to.be("");
              expect(data.spread).to.be.a('number');
              // expect(data.spread).to.be();
              expect(data.homeWinProb).to.be.a('number');
              // expect(data.homeWinProb).to.be();
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
      describe('getTeamPPA', function() {
        it('should call getTeamPPA successfully', function(done) {
          // TODO: uncomment, update parameter values for getTeamPPA call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.team = "team_example";
          opts.conference = "conference_example";
          opts.excludeGarbageTime = true;

          instance.getTeamPPA(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.TeamPPA);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.offense).to.be.a(cfb.TeamPPAOffense);
                    expect(data.offense.overall).to.be.a('number');
                // expect(data.offense.overall).to.be();
                expect(data.offense.passing).to.be.a('number');
                // expect(data.offense.passing).to.be();
                expect(data.offense.rushing).to.be.a('number');
                // expect(data.offense.rushing).to.be();
                expect(data.offense.firstDown).to.be.a('number');
                // expect(data.offense.firstDown).to.be();
                expect(data.offense.secondDown).to.be.a('number');
                // expect(data.offense.secondDown).to.be();
                expect(data.offense.thirdDown).to.be.a('number');
                // expect(data.offense.thirdDown).to.be();
                expect(data.offense.cumulative).to.be.a(cfb.TeamPPAOffenseCumulative);
                      expect(data.offense.cumulative.total).to.be.a('number');
                  // expect(data.offense.cumulative.total).to.be();
                  expect(data.offense.cumulative.passing).to.be.a('number');
                  // expect(data.offense.cumulative.passing).to.be();
                  expect(data.offense.cumulative.rushing).to.be.a('number');
                  // expect(data.offense.cumulative.rushing).to.be();
              expect(data.defense).to.be.a(cfb.TeamPPAOffense);
                    expect(data.defense.overall).to.be.a('number');
                // expect(data.defense.overall).to.be();
                expect(data.defense.passing).to.be.a('number');
                // expect(data.defense.passing).to.be();
                expect(data.defense.rushing).to.be.a('number');
                // expect(data.defense.rushing).to.be();
                expect(data.defense.firstDown).to.be.a('number');
                // expect(data.defense.firstDown).to.be();
                expect(data.defense.secondDown).to.be.a('number');
                // expect(data.defense.secondDown).to.be();
                expect(data.defense.thirdDown).to.be.a('number');
                // expect(data.defense.thirdDown).to.be();
                expect(data.defense.cumulative).to.be.a(cfb.TeamPPAOffenseCumulative);
                      expect(data.defense.cumulative.total).to.be.a('number');
                  // expect(data.defense.cumulative.total).to.be();
                  expect(data.defense.cumulative.passing).to.be.a('number');
                  // expect(data.defense.cumulative.passing).to.be();
                  expect(data.defense.cumulative.rushing).to.be.a('number');
                  // expect(data.defense.cumulative.rushing).to.be();
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
      describe('getWinProbabilityData', function() {
        it('should call getWinProbabilityData successfully', function(done) {
          // TODO: uncomment, update parameter values for getWinProbabilityData call and complete the assertions
          /*
          var gameId = 56;
          var opts = {};
          opts.adjustForSpread = true;

          instance.getWinProbabilityData(gameId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayWP);
              expect(data.playId).to.be.a('number');
              // expect(data.playId).to.be(0);
              expect(data.playText).to.be.a('string');
              // expect(data.playText).to.be("");
              expect(data.homeId).to.be.a('number');
              // expect(data.homeId).to.be(0);
              expect(data.home).to.be.a('string');
              // expect(data.home).to.be("");
              expect(data.awayId).to.be.a('number');
              // expect(data.awayId).to.be(0);
              expect(data.away).to.be.a('string');
              // expect(data.away).to.be("");
              expect(data.spread).to.be.a('number');
              // expect(data.spread).to.be();
              expect(data.homeBall).to.be.a('boolean');
              // expect(data.homeBall).to.be(false);
              expect(data.homeScore).to.be.a('number');
              // expect(data.homeScore).to.be(0);
              expect(data.awayScore).to.be.a('number');
              // expect(data.awayScore).to.be(0);
              expect(data.timeRemaining).to.be.a('number');
              // expect(data.timeRemaining).to.be(0);
              expect(data.yardLine).to.be.a('number');
              // expect(data.yardLine).to.be(0);
              expect(data.down).to.be.a('number');
              // expect(data.down).to.be(0);
              expect(data.distance).to.be.a('number');
              // expect(data.distance).to.be(0);
              expect(data.homeWinner).to.be.a('boolean');
              // expect(data.homeWinner).to.be(false);
              expect(data.homeWinProb).to.be.a('number');
              // expect(data.homeWinProb).to.be();
              expect(data.playNumber).to.be.a('number');
              // expect(data.playNumber).to.be(0);
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
