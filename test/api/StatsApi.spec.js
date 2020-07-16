/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.2
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
    instance = new cfb.StatsApi();
  });

  describe('(package)', function() {
    describe('StatsApi', function() {
      describe('getAdvancedTeamGameStats', function() {
        it('should call getAdvancedTeamGameStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getAdvancedTeamGameStats call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.week = 56;
          opts.team = "team_example";
          opts.opponent = "opponent_example";
          opts.excludeGarbageTime = true;
          opts.seasonType = "seasonType_example";

          instance.getAdvancedTeamGameStats(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.AdvancedGameStat);
              expect(data.gameId).to.be.a('number');
              // expect(data.gameId).to.be(0);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.week).to.be.a('number');
              // expect(data.week).to.be(0);
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.opponent).to.be.a('string');
              // expect(data.opponent).to.be("");
              expect(data.offense).to.be.a(cfb.AdvancedGameStatOffense);
                    expect(data.offense.plays).to.be.a('number');
                // expect(data.offense.plays).to.be(0);
                expect(data.offense.drives).to.be.a('number');
                // expect(data.offense.drives).to.be(0);
                expect(data.offense.ppa).to.be.a('number');
                // expect(data.offense.ppa).to.be();
                expect(data.offense.totalPPA).to.be.a('number');
                // expect(data.offense.totalPPA).to.be();
                expect(data.offense.successRate).to.be.a('number');
                // expect(data.offense.successRate).to.be();
                expect(data.offense.explosiveness).to.be.a('number');
                // expect(data.offense.explosiveness).to.be();
                expect(data.offense.powerSuccess).to.be.a('number');
                // expect(data.offense.powerSuccess).to.be();
                expect(data.offense.stuffRate).to.be.a('number');
                // expect(data.offense.stuffRate).to.be();
                expect(data.offense.lineYards).to.be.a('number');
                // expect(data.offense.lineYards).to.be();
                expect(data.offense.lineYardsTotal).to.be.a('number');
                // expect(data.offense.lineYardsTotal).to.be();
                expect(data.offense.secondLevelYards).to.be.a('number');
                // expect(data.offense.secondLevelYards).to.be();
                expect(data.offense.secondLevelYardsTotal).to.be.a('number');
                // expect(data.offense.secondLevelYardsTotal).to.be(0);
                expect(data.offense.openFieldYards).to.be.a('number');
                // expect(data.offense.openFieldYards).to.be();
                expect(data.offense.openFieldYardsTotal).to.be.a('number');
                // expect(data.offense.openFieldYardsTotal).to.be(0);
                expect(data.offense.standardDowns).to.be.a(cfb.AdvancedGameStatOffenseStandardDowns);
                      expect(data.offense.standardDowns.ppa).to.be.a('number');
                  // expect(data.offense.standardDowns.ppa).to.be();
                  expect(data.offense.standardDowns.successRate).to.be.a('number');
                  // expect(data.offense.standardDowns.successRate).to.be();
                  expect(data.offense.standardDowns.explosiveness).to.be.a('number');
                  // expect(data.offense.standardDowns.explosiveness).to.be();
                expect(data.offense.passingDowns).to.be.a(cfb.AdvancedGameStatOffenseStandardDowns);
                      expect(data.offense.passingDowns.ppa).to.be.a('number');
                  // expect(data.offense.passingDowns.ppa).to.be();
                  expect(data.offense.passingDowns.successRate).to.be.a('number');
                  // expect(data.offense.passingDowns.successRate).to.be();
                  expect(data.offense.passingDowns.explosiveness).to.be.a('number');
                  // expect(data.offense.passingDowns.explosiveness).to.be();
                expect(data.offense.rushingPlays).to.be.a(cfb.AdvancedGameStatOffenseRushingPlays);
                      expect(data.offense.rushingPlays.ppa).to.be.a('number');
                  // expect(data.offense.rushingPlays.ppa).to.be();
                  expect(data.offense.rushingPlays.totalPPA).to.be.a('number');
                  // expect(data.offense.rushingPlays.totalPPA).to.be();
                  expect(data.offense.rushingPlays.successRate).to.be.a('number');
                  // expect(data.offense.rushingPlays.successRate).to.be();
                  expect(data.offense.rushingPlays.explosiveness).to.be.a('number');
                  // expect(data.offense.rushingPlays.explosiveness).to.be();
                expect(data.offense.passingPlays).to.be.a(cfb.AdvancedGameStatOffenseRushingPlays);
                      expect(data.offense.passingPlays.ppa).to.be.a('number');
                  // expect(data.offense.passingPlays.ppa).to.be();
                  expect(data.offense.passingPlays.totalPPA).to.be.a('number');
                  // expect(data.offense.passingPlays.totalPPA).to.be();
                  expect(data.offense.passingPlays.successRate).to.be.a('number');
                  // expect(data.offense.passingPlays.successRate).to.be();
                  expect(data.offense.passingPlays.explosiveness).to.be.a('number');
                  // expect(data.offense.passingPlays.explosiveness).to.be();
              expect(data.defense).to.be.a(cfb.AdvancedGameStatOffense);
                    expect(data.defense.plays).to.be.a('number');
                // expect(data.defense.plays).to.be(0);
                expect(data.defense.drives).to.be.a('number');
                // expect(data.defense.drives).to.be(0);
                expect(data.defense.ppa).to.be.a('number');
                // expect(data.defense.ppa).to.be();
                expect(data.defense.totalPPA).to.be.a('number');
                // expect(data.defense.totalPPA).to.be();
                expect(data.defense.successRate).to.be.a('number');
                // expect(data.defense.successRate).to.be();
                expect(data.defense.explosiveness).to.be.a('number');
                // expect(data.defense.explosiveness).to.be();
                expect(data.defense.powerSuccess).to.be.a('number');
                // expect(data.defense.powerSuccess).to.be();
                expect(data.defense.stuffRate).to.be.a('number');
                // expect(data.defense.stuffRate).to.be();
                expect(data.defense.lineYards).to.be.a('number');
                // expect(data.defense.lineYards).to.be();
                expect(data.defense.lineYardsTotal).to.be.a('number');
                // expect(data.defense.lineYardsTotal).to.be();
                expect(data.defense.secondLevelYards).to.be.a('number');
                // expect(data.defense.secondLevelYards).to.be();
                expect(data.defense.secondLevelYardsTotal).to.be.a('number');
                // expect(data.defense.secondLevelYardsTotal).to.be(0);
                expect(data.defense.openFieldYards).to.be.a('number');
                // expect(data.defense.openFieldYards).to.be();
                expect(data.defense.openFieldYardsTotal).to.be.a('number');
                // expect(data.defense.openFieldYardsTotal).to.be(0);
                expect(data.defense.standardDowns).to.be.a(cfb.AdvancedGameStatOffenseStandardDowns);
                      expect(data.defense.standardDowns.ppa).to.be.a('number');
                  // expect(data.defense.standardDowns.ppa).to.be();
                  expect(data.defense.standardDowns.successRate).to.be.a('number');
                  // expect(data.defense.standardDowns.successRate).to.be();
                  expect(data.defense.standardDowns.explosiveness).to.be.a('number');
                  // expect(data.defense.standardDowns.explosiveness).to.be();
                expect(data.defense.passingDowns).to.be.a(cfb.AdvancedGameStatOffenseStandardDowns);
                      expect(data.defense.passingDowns.ppa).to.be.a('number');
                  // expect(data.defense.passingDowns.ppa).to.be();
                  expect(data.defense.passingDowns.successRate).to.be.a('number');
                  // expect(data.defense.passingDowns.successRate).to.be();
                  expect(data.defense.passingDowns.explosiveness).to.be.a('number');
                  // expect(data.defense.passingDowns.explosiveness).to.be();
                expect(data.defense.rushingPlays).to.be.a(cfb.AdvancedGameStatOffenseRushingPlays);
                      expect(data.defense.rushingPlays.ppa).to.be.a('number');
                  // expect(data.defense.rushingPlays.ppa).to.be();
                  expect(data.defense.rushingPlays.totalPPA).to.be.a('number');
                  // expect(data.defense.rushingPlays.totalPPA).to.be();
                  expect(data.defense.rushingPlays.successRate).to.be.a('number');
                  // expect(data.defense.rushingPlays.successRate).to.be();
                  expect(data.defense.rushingPlays.explosiveness).to.be.a('number');
                  // expect(data.defense.rushingPlays.explosiveness).to.be();
                expect(data.defense.passingPlays).to.be.a(cfb.AdvancedGameStatOffenseRushingPlays);
                      expect(data.defense.passingPlays.ppa).to.be.a('number');
                  // expect(data.defense.passingPlays.ppa).to.be();
                  expect(data.defense.passingPlays.totalPPA).to.be.a('number');
                  // expect(data.defense.passingPlays.totalPPA).to.be();
                  expect(data.defense.passingPlays.successRate).to.be.a('number');
                  // expect(data.defense.passingPlays.successRate).to.be();
                  expect(data.defense.passingPlays.explosiveness).to.be.a('number');
                  // expect(data.defense.passingPlays.explosiveness).to.be();
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
      describe('getAdvancedTeamSeasonStats', function() {
        it('should call getAdvancedTeamSeasonStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getAdvancedTeamSeasonStats call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.team = "team_example";
          opts.excludeGarbageTime = true;
          opts.startWeek = 56;
          opts.endWeek = 56;

          instance.getAdvancedTeamSeasonStats(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.AdvancedSeasonStat);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.offense).to.be.a(cfb.AdvancedSeasonStatOffense);
                    expect(data.offense.plays).to.be.a('number');
                // expect(data.offense.plays).to.be(0);
                expect(data.offense.drives).to.be.a('number');
                // expect(data.offense.drives).to.be(0);
                expect(data.offense.ppa).to.be.a('number');
                // expect(data.offense.ppa).to.be();
                expect(data.offense.totalPPA).to.be.a('number');
                // expect(data.offense.totalPPA).to.be();
                expect(data.offense.successRate).to.be.a('number');
                // expect(data.offense.successRate).to.be();
                expect(data.offense.explosiveness).to.be.a('number');
                // expect(data.offense.explosiveness).to.be();
                expect(data.offense.powerSuccess).to.be.a('number');
                // expect(data.offense.powerSuccess).to.be();
                expect(data.offense.stuffRate).to.be.a('number');
                // expect(data.offense.stuffRate).to.be();
                expect(data.offense.lineYards).to.be.a('number');
                // expect(data.offense.lineYards).to.be();
                expect(data.offense.lineYardsTotal).to.be.a('number');
                // expect(data.offense.lineYardsTotal).to.be();
                expect(data.offense.secondLevelYards).to.be.a('number');
                // expect(data.offense.secondLevelYards).to.be();
                expect(data.offense.secondLevelYardsTotal).to.be.a('number');
                // expect(data.offense.secondLevelYardsTotal).to.be(0);
                expect(data.offense.openFieldYards).to.be.a('number');
                // expect(data.offense.openFieldYards).to.be();
                expect(data.offense.openFieldYardsTotal).to.be.a('number');
                // expect(data.offense.openFieldYardsTotal).to.be(0);
                expect(data.offense.pointsPerOpportunity).to.be.a('number');
                // expect(data.offense.pointsPerOpportunity).to.be();
                expect(data.offense.fieldPosition).to.be.a(cfb.AdvancedSeasonStatOffenseFieldPosition);
                      expect(data.offense.fieldPosition.averageStart).to.be.a('number');
                  // expect(data.offense.fieldPosition.averageStart).to.be();
                  expect(data.offense.fieldPosition.averagePredictedPoints).to.be.a('number');
                  // expect(data.offense.fieldPosition.averagePredictedPoints).to.be();
                expect(data.offense.standardDowns).to.be.a(cfb.AdvancedSeasonStatOffenseStandardDowns);
                      expect(data.offense.standardDowns.rate).to.be.a('number');
                  // expect(data.offense.standardDowns.rate).to.be();
                  expect(data.offense.standardDowns.ppa).to.be.a('number');
                  // expect(data.offense.standardDowns.ppa).to.be();
                  expect(data.offense.standardDowns.successRate).to.be.a('number');
                  // expect(data.offense.standardDowns.successRate).to.be();
                  expect(data.offense.standardDowns.explosiveness).to.be.a('number');
                  // expect(data.offense.standardDowns.explosiveness).to.be();
                expect(data.offense.passingDowns).to.be.a(cfb.AdvancedSeasonStatOffenseStandardDowns);
                      expect(data.offense.passingDowns.rate).to.be.a('number');
                  // expect(data.offense.passingDowns.rate).to.be();
                  expect(data.offense.passingDowns.ppa).to.be.a('number');
                  // expect(data.offense.passingDowns.ppa).to.be();
                  expect(data.offense.passingDowns.successRate).to.be.a('number');
                  // expect(data.offense.passingDowns.successRate).to.be();
                  expect(data.offense.passingDowns.explosiveness).to.be.a('number');
                  // expect(data.offense.passingDowns.explosiveness).to.be();
                expect(data.offense.rushingPlays).to.be.a(cfb.AdvancedSeasonStatOffenseRushingPlays);
                      expect(data.offense.rushingPlays.rate).to.be.a('number');
                  // expect(data.offense.rushingPlays.rate).to.be();
                  expect(data.offense.rushingPlays.ppa).to.be.a('number');
                  // expect(data.offense.rushingPlays.ppa).to.be();
                  expect(data.offense.rushingPlays.totalPPA).to.be.a('number');
                  // expect(data.offense.rushingPlays.totalPPA).to.be();
                  expect(data.offense.rushingPlays.successRate).to.be.a('number');
                  // expect(data.offense.rushingPlays.successRate).to.be();
                  expect(data.offense.rushingPlays.explosiveness).to.be.a('number');
                  // expect(data.offense.rushingPlays.explosiveness).to.be();
                expect(data.offense.passingPlays).to.be.a(cfb.AdvancedSeasonStatOffenseRushingPlays);
                      expect(data.offense.passingPlays.rate).to.be.a('number');
                  // expect(data.offense.passingPlays.rate).to.be();
                  expect(data.offense.passingPlays.ppa).to.be.a('number');
                  // expect(data.offense.passingPlays.ppa).to.be();
                  expect(data.offense.passingPlays.totalPPA).to.be.a('number');
                  // expect(data.offense.passingPlays.totalPPA).to.be();
                  expect(data.offense.passingPlays.successRate).to.be.a('number');
                  // expect(data.offense.passingPlays.successRate).to.be();
                  expect(data.offense.passingPlays.explosiveness).to.be.a('number');
                  // expect(data.offense.passingPlays.explosiveness).to.be();
              expect(data.defense).to.be.a(cfb.AdvancedSeasonStatDefense);
                    expect(data.defense.plays).to.be.a('number');
                // expect(data.defense.plays).to.be(0);
                expect(data.defense.drives).to.be.a('number');
                // expect(data.defense.drives).to.be(0);
                expect(data.defense.ppa).to.be.a('number');
                // expect(data.defense.ppa).to.be();
                expect(data.defense.totalPPA).to.be.a('number');
                // expect(data.defense.totalPPA).to.be();
                expect(data.defense.successRate).to.be.a('number');
                // expect(data.defense.successRate).to.be();
                expect(data.defense.explosiveness).to.be.a('number');
                // expect(data.defense.explosiveness).to.be();
                expect(data.defense.powerSuccess).to.be.a('number');
                // expect(data.defense.powerSuccess).to.be();
                expect(data.defense.stuffRate).to.be.a('number');
                // expect(data.defense.stuffRate).to.be();
                expect(data.defense.lineYards).to.be.a('number');
                // expect(data.defense.lineYards).to.be();
                expect(data.defense.lineYardsTotal).to.be.a('number');
                // expect(data.defense.lineYardsTotal).to.be();
                expect(data.defense.secondLevelYards).to.be.a('number');
                // expect(data.defense.secondLevelYards).to.be();
                expect(data.defense.secondLevelYardsTotal).to.be.a('number');
                // expect(data.defense.secondLevelYardsTotal).to.be(0);
                expect(data.defense.openFieldYards).to.be.a('number');
                // expect(data.defense.openFieldYards).to.be();
                expect(data.defense.openFieldYardsTotal).to.be.a('number');
                // expect(data.defense.openFieldYardsTotal).to.be(0);
                expect(data.defense.pointsPerOpportunity).to.be.a('number');
                // expect(data.defense.pointsPerOpportunity).to.be();
                expect(data.defense.fieldPosition).to.be.a(cfb.AdvancedSeasonStatOffenseFieldPosition);
                      expect(data.defense.fieldPosition.averageStart).to.be.a('number');
                  // expect(data.defense.fieldPosition.averageStart).to.be();
                  expect(data.defense.fieldPosition.averagePredictedPoints).to.be.a('number');
                  // expect(data.defense.fieldPosition.averagePredictedPoints).to.be();
                expect(data.defense.havoc).to.be.a(cfb.TeamSPRatingDefenseHavoc);
                      expect(data.defense.havoc.total).to.be.a('number');
                  // expect(data.defense.havoc.total).to.be();
                  expect(data.defense.havoc.frontSeven).to.be.a('number');
                  // expect(data.defense.havoc.frontSeven).to.be();
                  expect(data.defense.havoc.db).to.be.a('number');
                  // expect(data.defense.havoc.db).to.be();
                expect(data.defense.standardDowns).to.be.a(cfb.AdvancedSeasonStatOffenseStandardDowns);
                      expect(data.defense.standardDowns.rate).to.be.a('number');
                  // expect(data.defense.standardDowns.rate).to.be();
                  expect(data.defense.standardDowns.ppa).to.be.a('number');
                  // expect(data.defense.standardDowns.ppa).to.be();
                  expect(data.defense.standardDowns.successRate).to.be.a('number');
                  // expect(data.defense.standardDowns.successRate).to.be();
                  expect(data.defense.standardDowns.explosiveness).to.be.a('number');
                  // expect(data.defense.standardDowns.explosiveness).to.be();
                expect(data.defense.passingDowns).to.be.a(cfb.AdvancedSeasonStatOffenseStandardDowns);
                      expect(data.defense.passingDowns.rate).to.be.a('number');
                  // expect(data.defense.passingDowns.rate).to.be();
                  expect(data.defense.passingDowns.ppa).to.be.a('number');
                  // expect(data.defense.passingDowns.ppa).to.be();
                  expect(data.defense.passingDowns.successRate).to.be.a('number');
                  // expect(data.defense.passingDowns.successRate).to.be();
                  expect(data.defense.passingDowns.explosiveness).to.be.a('number');
                  // expect(data.defense.passingDowns.explosiveness).to.be();
                expect(data.defense.rushingPlays).to.be.a(cfb.AdvancedSeasonStatOffenseRushingPlays);
                      expect(data.defense.rushingPlays.rate).to.be.a('number');
                  // expect(data.defense.rushingPlays.rate).to.be();
                  expect(data.defense.rushingPlays.ppa).to.be.a('number');
                  // expect(data.defense.rushingPlays.ppa).to.be();
                  expect(data.defense.rushingPlays.totalPPA).to.be.a('number');
                  // expect(data.defense.rushingPlays.totalPPA).to.be();
                  expect(data.defense.rushingPlays.successRate).to.be.a('number');
                  // expect(data.defense.rushingPlays.successRate).to.be();
                  expect(data.defense.rushingPlays.explosiveness).to.be.a('number');
                  // expect(data.defense.rushingPlays.explosiveness).to.be();
                expect(data.defense.passingPlays).to.be.a(cfb.AdvancedSeasonStatOffenseRushingPlays);
                      expect(data.defense.passingPlays.rate).to.be.a('number');
                  // expect(data.defense.passingPlays.rate).to.be();
                  expect(data.defense.passingPlays.ppa).to.be.a('number');
                  // expect(data.defense.passingPlays.ppa).to.be();
                  expect(data.defense.passingPlays.totalPPA).to.be.a('number');
                  // expect(data.defense.passingPlays.totalPPA).to.be();
                  expect(data.defense.passingPlays.successRate).to.be.a('number');
                  // expect(data.defense.passingPlays.successRate).to.be();
                  expect(data.defense.passingPlays.explosiveness).to.be.a('number');
                  // expect(data.defense.passingPlays.explosiveness).to.be();
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
      describe('getStatCategories', function() {
        it('should call getStatCategories successfully', function(done) {
          // TODO: uncomment getStatCategories call and complete the assertions
          /*

          instance.getStatCategories().then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a('string');
              // expect(data).to.be(null);
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
      describe('getTeamSeasonStats', function() {
        it('should call getTeamSeasonStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getTeamSeasonStats call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.team = "team_example";
          opts.conference = "conference_example";
          opts.startWeek = 56;
          opts.endWeek = 56;

          instance.getTeamSeasonStats(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.TeamSeasonStat);
              expect(data.season).to.be.a('number');
              // expect(data.season).to.be(0);
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.statName).to.be.a('string');
              // expect(data.statName).to.be("");
              expect(data.statValue).to.be.a('number');
              // expect(data.statValue).to.be(0);
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
