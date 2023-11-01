/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.5.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.33
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
    instance = new cfb.PlaysApi();
  });

  describe('(package)', function() {
    describe('PlaysApi', function() {
      describe('getLivePlays', function() {
        it('should call getLivePlays successfully', function(done) {
          // TODO: uncomment, update parameter values for getLivePlays call and complete the assertions
          /*
          var id = 56;

          instance.getLivePlays(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(cfb.LivePlayByPlay);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.period).to.be.a('number');
            expect(data.period).to.be(0);
            expect(data.clock).to.be.a('string');
            expect(data.clock).to.be("");
            expect(data.possession).to.be.a('string');
            expect(data.possession).to.be("");
            expect(data.down).to.be.a('number');
            expect(data.down).to.be(0);
            expect(data.distance).to.be.a('number');
            expect(data.distance).to.be(0);
            expect(data.yardsToGoal).to.be.a('number');
            expect(data.yardsToGoal).to.be(0);
            {
              let dataCtr = data.teams;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(cfb.LivePlayByPlayTeams);
                expect(data.teamId).to.be.a('number');
                expect(data.teamId).to.be(0);
                expect(data.team).to.be.a('string');
                expect(data.team).to.be("");
                expect(data.homeAway).to.be.a('string');
                expect(data.homeAway).to.be("");
                expect(data.points).to.be.a('number');
                expect(data.points).to.be(0);
                expect(data.drives).to.be.a('number');
                expect(data.drives).to.be(0);
                expect(data.scoringOpportunities).to.be.a('number');
                expect(data.scoringOpportunities).to.be(0);
                expect(data.pointsPerOpportunity).to.be.a('number');
                expect(data.pointsPerOpportunity).to.be();
                expect(data.plays).to.be.a('number');
                expect(data.plays).to.be(0);
                expect(data.lineYards).to.be.a('number');
                expect(data.lineYards).to.be(0);
                expect(data.lineYardsPerRush).to.be.a('number');
                expect(data.lineYardsPerRush).to.be();
                expect(data.secondLevelYards).to.be.a('number');
                expect(data.secondLevelYards).to.be(0);
                expect(data.secondLevelYardsPerRush).to.be.a('number');
                expect(data.secondLevelYardsPerRush).to.be();
                expect(data.openFieldYards).to.be.a('number');
                expect(data.openFieldYards).to.be(0);
                expect(data.openFieldYardsPerRush).to.be.a('number');
                expect(data.openFieldYardsPerRush).to.be();
                expect(data.epaPerPlay).to.be.a('number');
                expect(data.epaPerPlay).to.be();
                expect(data.totalEpa).to.be.a('number');
                expect(data.totalEpa).to.be();
                expect(data.passingEpa).to.be.a('number');
                expect(data.passingEpa).to.be();
                expect(data.epaPerPass).to.be.a('number');
                expect(data.epaPerPass).to.be();
                expect(data.rushingEpa).to.be.a('number');
                expect(data.rushingEpa).to.be();
                expect(data.epaPerRush).to.be.a('number');
                expect(data.epaPerRush).to.be();
                expect(data.successRate).to.be.a('number');
                expect(data.successRate).to.be();
                expect(data.standardDownSuccessRate).to.be.a('number');
                expect(data.standardDownSuccessRate).to.be();
                expect(data.passingDownSuccessRate).to.be.a('number');
                expect(data.passingDownSuccessRate).to.be();
                expect(data.explosiveness).to.be.a('number');
                expect(data.explosiveness).to.be();

                      }
            }
            {
              let dataCtr = data.drives;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(cfb.LivePlayByPlayDrives);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.offenseId).to.be.a('number');
                expect(data.offenseId).to.be(0);
                expect(data.offense).to.be.a('string');
                expect(data.offense).to.be("");
                expect(data.defenseId).to.be.a('number');
                expect(data.defenseId).to.be(0);
                expect(data.defense).to.be.a('string');
                expect(data.defense).to.be("");
                expect(data.playCount).to.be.a('number');
                expect(data.playCount).to.be(0);
                expect(data.yards).to.be.a('number');
                expect(data.yards).to.be(0);
                expect(data.startPeriod).to.be.a('number');
                expect(data.startPeriod).to.be(0);
                expect(data.startClock).to.be.a('string');
                expect(data.startClock).to.be("");
                expect(data.startYardsToGoal).to.be.a('number');
                expect(data.startYardsToGoal).to.be(0);
                expect(data.endPeriod).to.be.a('number');
                expect(data.endPeriod).to.be(0);
                expect(data.endClock).to.be.a('string');
                expect(data.endClock).to.be("");
                expect(data.endYardsToGoal).to.be.a('number');
                expect(data.endYardsToGoal).to.be(0);
                expect(data.duration).to.be.a('string');
                expect(data.duration).to.be("");
                expect(data.scoringOpportunity).to.be.a('boolean');
                expect(data.scoringOpportunity).to.be(false);
                {
                  let dataCtr = data.plays;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(cfb.LivePlayByPlayPlays);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be(0);
                    expect(data.homeScore).to.be.a('number');
                    expect(data.homeScore).to.be(0);
                    expect(data.awayScore).to.be.a('number');
                    expect(data.awayScore).to.be(0);
                    expect(data.period).to.be.a('number');
                    expect(data.period).to.be(0);
                    expect(data.clock).to.be.a('string');
                    expect(data.clock).to.be("");
                    expect(data.wallclock).to.be.a('string');
                    expect(data.wallclock).to.be("");
                    expect(data.teamId).to.be.a('number');
                    expect(data.teamId).to.be(0);
                    expect(data.team).to.be.a('string');
                    expect(data.team).to.be("");
                    expect(data.down).to.be.a('number');
                    expect(data.down).to.be(0);
                    expect(data.distance).to.be.a('number');
                    expect(data.distance).to.be(0);
                    expect(data.yardsToGoal).to.be.a('number');
                    expect(data.yardsToGoal).to.be(0);
                    expect(data.yardsGained).to.be.a('number');
                    expect(data.yardsGained).to.be(0);
                    expect(data.playTypeId).to.be.a('number');
                    expect(data.playTypeId).to.be(0);
                    expect(data.playType).to.be.a('string');
                    expect(data.playType).to.be("");
                    expect(data.epa).to.be.a('number');
                    expect(data.epa).to.be();
                    expect(data.garbageTime).to.be.a('boolean');
                    expect(data.garbageTime).to.be(false);
                    expect(data.success).to.be.a('boolean');
                    expect(data.success).to.be(false);
                    expect(data.rushPass).to.be.a('string');
                    expect(data.rushPass).to.be("");
                    expect(data.downType).to.be.a('string');
                    expect(data.downType).to.be("");
                    expect(data.playText).to.be.a('string');
                    expect(data.playText).to.be("");
    
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
      describe('getPlayStatTypes', function() {
        it('should call getPlayStatTypes successfully', function(done) {
          // TODO: uncomment getPlayStatTypes call and complete the assertions
          /*

          instance.getPlayStatTypes().then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayStatType);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
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
      describe('getPlayStats', function() {
        it('should call getPlayStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getPlayStats call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.week = 56;
          opts.team = "team_example";
          opts.gameId = 56;
          opts.athleteId = 56;
          opts.statTypeId = 56;
          opts.seasonType = "seasonType_example";
          opts.conference = "conference_example";

          instance.getPlayStats(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayStat);
              expect(data.gameId).to.be.a('number');
              expect(data.gameId).to.be(0);
              expect(data.season).to.be.a('number');
              expect(data.season).to.be(0);
              expect(data.week).to.be.a('number');
              expect(data.week).to.be(0);
              expect(data.team).to.be.a('string');
              expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              expect(data.conference).to.be("");
              expect(data.opponent).to.be.a('string');
              expect(data.opponent).to.be("");
              expect(data.teamScore).to.be.a('number');
              expect(data.teamScore).to.be(0);
              expect(data.opponentScore).to.be.a('number');
              expect(data.opponentScore).to.be(0);
              expect(data.driveId).to.be.a('number');
              expect(data.driveId).to.be(0);
              expect(data.playId).to.be.a('number');
              expect(data.playId).to.be(0);
              expect(data.period).to.be.a('number');
              expect(data.period).to.be(0);
              expect(data.clock).to.be.a(cfb.DriveStartTime);
                    expect(data.clock.minutes).to.be.a('number');
                expect(data.clock.minutes).to.be(0);
                expect(data.clock.seconds).to.be.a('number');
                expect(data.clock.seconds).to.be(0);
              expect(data.yardsToGoal).to.be.a('number');
              expect(data.yardsToGoal).to.be(0);
              expect(data.down).to.be.a('number');
              expect(data.down).to.be(0);
              expect(data.distance).to.be.a('number');
              expect(data.distance).to.be(0);
              expect(data.athleteId).to.be.a('number');
              expect(data.athleteId).to.be(0);
              expect(data.athleteName).to.be.a('string');
              expect(data.athleteName).to.be("");
              expect(data.statType).to.be.a('string');
              expect(data.statType).to.be("");
              expect(data.stat).to.be.a('number');
              expect(data.stat).to.be(0);
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
      describe('getPlayTypes', function() {
        it('should call getPlayTypes successfully', function(done) {
          // TODO: uncomment getPlayTypes call and complete the assertions
          /*

          instance.getPlayTypes().then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayType);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.text).to.be.a('string');
              expect(data.text).to.be("");
              expect(data.abbreviation).to.be.a('string');
              expect(data.abbreviation).to.be("");
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
      describe('getPlays', function() {
        it('should call getPlays successfully', function(done) {
          // TODO: uncomment, update parameter values for getPlays call and complete the assertions
          /*
          var year = 56;
          var week = 56;
          var opts = {};
          opts.seasonType = "regular";
          opts.team = "team_example";
          opts.offense = "offense_example";
          opts.defense = "defense_example";
          opts.conference = "conference_example";
          opts.offenseConference = "offenseConference_example";
          opts.defenseConference = "defenseConference_example";
          opts.playType = 56;
          opts.classification = "classification_example";

          instance.getPlays(year, week, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.Play);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.driveId).to.be.a('number');
              expect(data.driveId).to.be(0);
              expect(data.gameId).to.be.a('number');
              expect(data.gameId).to.be(0);
              expect(data.driveNumber).to.be.a('number');
              expect(data.driveNumber).to.be(0);
              expect(data.playNumber).to.be.a('number');
              expect(data.playNumber).to.be(0);
              expect(data.offense).to.be.a('string');
              expect(data.offense).to.be("");
              expect(data.offenseConference).to.be.a('string');
              expect(data.offenseConference).to.be("");
              expect(data.offenseScore).to.be.a('number');
              expect(data.offenseScore).to.be(0);
              expect(data.defense).to.be.a('string');
              expect(data.defense).to.be("");
              expect(data.home).to.be.a('string');
              expect(data.home).to.be("");
              expect(data.away).to.be.a('string');
              expect(data.away).to.be("");
              expect(data.defenseConference).to.be.a('string');
              expect(data.defenseConference).to.be("");
              expect(data.defenseScore).to.be.a('number');
              expect(data.defenseScore).to.be(0);
              expect(data.period).to.be.a('number');
              expect(data.period).to.be(0);
              expect(data.clock).to.be.a(cfb.DriveStartTime);
                    expect(data.clock.minutes).to.be.a('number');
                expect(data.clock.minutes).to.be(0);
                expect(data.clock.seconds).to.be.a('number');
                expect(data.clock.seconds).to.be(0);
              expect(data.offenseTimeouts).to.be.a('number');
              expect(data.offenseTimeouts).to.be(0);
              expect(data.defenseTimeouts).to.be.a('number');
              expect(data.defenseTimeouts).to.be(0);
              expect(data.yardLine).to.be.a('number');
              expect(data.yardLine).to.be(0);
              expect(data.yardsToGoal).to.be.a('number');
              expect(data.yardsToGoal).to.be(0);
              expect(data.down).to.be.a('number');
              expect(data.down).to.be(0);
              expect(data.distance).to.be.a('number');
              expect(data.distance).to.be(0);
              expect(data.yardsGained).to.be.a('number');
              expect(data.yardsGained).to.be(0);
              expect(data.scoring).to.be.a('boolean');
              expect(data.scoring).to.be(false);
              expect(data.playType).to.be.a('string');
              expect(data.playType).to.be("");
              expect(data.playText).to.be.a('string');
              expect(data.playText).to.be("");
              expect(data.ppa).to.be.a('number');
              expect(data.ppa).to.be();
              expect(data.wallclock).to.be.a('string');
              expect(data.wallclock).to.be("");
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
