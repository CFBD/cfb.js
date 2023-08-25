/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.14
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
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
    instance = new cfb.PlayersApi();
  });

  describe('(package)', function() {
    describe('PlayersApi', function() {
      describe('getPlayerSeasonStats', function() {
        it('should call getPlayerSeasonStats successfully', function(done) {
          // TODO: uncomment, update parameter values for getPlayerSeasonStats call and complete the assertions
          /*
          var year = 56;
          var opts = {};
          opts.team = "team_example";
          opts.conference = "conference_example";
          opts.startWeek = 56;
          opts.endWeek = 56;
          opts.seasonType = "seasonType_example";
          opts.category = "category_example";

          instance.getPlayerSeasonStats(year, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayerSeasonStat);
              expect(data.season).to.be.a('number');
              expect(data.season).to.be(0);
              expect(data.playerId).to.be.a('number');
              expect(data.playerId).to.be(0);
              expect(data.player).to.be.a('string');
              expect(data.player).to.be("");
              expect(data.team).to.be.a('string');
              expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              expect(data.conference).to.be("");
              expect(data.category).to.be.a('string');
              expect(data.category).to.be("");
              expect(data.statType).to.be.a('string');
              expect(data.statType).to.be("");
              expect(data.stat).to.be.a('number');
              expect(data.stat).to.be();
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
      describe('getPlayerUsage', function() {
        it('should call getPlayerUsage successfully', function(done) {
          // TODO: uncomment, update parameter values for getPlayerUsage call and complete the assertions
          /*
          var year = 2022;
          var opts = {};
          opts.team = "team_example";
          opts.conference = "conference_example";
          opts.position = "position_example";
          opts.playerId = 56;
          opts.excludeGarbageTime = true;

          instance.getPlayerUsage(year, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayerUsage);
              expect(data.season).to.be.a('number');
              expect(data.season).to.be(0);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.position).to.be.a('string');
              expect(data.position).to.be("");
              expect(data.team).to.be.a('string');
              expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              expect(data.conference).to.be("");
              expect(data.usage).to.be.a(cfb.PlayerUsageUsage);
                    expect(data.usage.overall).to.be.a('number');
                expect(data.usage.overall).to.be();
                expect(data.usage.pass).to.be.a('number');
                expect(data.usage.pass).to.be();
                expect(data.usage.rush).to.be.a('number');
                expect(data.usage.rush).to.be();
                expect(data.usage.firstDown).to.be.a('number');
                expect(data.usage.firstDown).to.be();
                expect(data.usage.secondDown).to.be.a('number');
                expect(data.usage.secondDown).to.be();
                expect(data.usage.thirdDown).to.be.a('number');
                expect(data.usage.thirdDown).to.be();
                expect(data.usage.standardDowns).to.be.a('number');
                expect(data.usage.standardDowns).to.be();
                expect(data.usage.passingDowns).to.be.a('number');
                expect(data.usage.passingDowns).to.be();
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
      describe('getReturningProduction', function() {
        it('should call getReturningProduction successfully', function(done) {
          // TODO: uncomment, update parameter values for getReturningProduction call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.team = "team_example";
          opts.conference = "conference_example";

          instance.getReturningProduction(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.ReturningProduction);
              expect(data.season).to.be.a('number');
              expect(data.season).to.be(0);
              expect(data.team).to.be.a('string');
              expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              expect(data.conference).to.be("");
              expect(data.totalPPA).to.be.a('number');
              expect(data.totalPPA).to.be();
              expect(data.totalPassingPPA).to.be.a('number');
              expect(data.totalPassingPPA).to.be();
              expect(data.totalReceivingPPA).to.be.a('number');
              expect(data.totalReceivingPPA).to.be();
              expect(data.totalRushingPPA).to.be.a('number');
              expect(data.totalRushingPPA).to.be();
              expect(data.percentPPA).to.be.a('number');
              expect(data.percentPPA).to.be();
              expect(data.percentPassingPPA).to.be.a('number');
              expect(data.percentPassingPPA).to.be();
              expect(data.percentReceivingPPA).to.be.a('number');
              expect(data.percentReceivingPPA).to.be();
              expect(data.percentRushingPPA).to.be.a('number');
              expect(data.percentRushingPPA).to.be();
              expect(data.usage).to.be.a('number');
              expect(data.usage).to.be();
              expect(data.passingUsage).to.be.a('number');
              expect(data.passingUsage).to.be();
              expect(data.receivingUsage).to.be.a('number');
              expect(data.receivingUsage).to.be();
              expect(data.rushingUsage).to.be.a('number');
              expect(data.rushingUsage).to.be();
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
      describe('getTransferPortal', function() {
        it('should call getTransferPortal successfully', function(done) {
          // TODO: uncomment, update parameter values for getTransferPortal call and complete the assertions
          /*
          var year = 56;

          instance.getTransferPortal(year).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PortalPlayer);
              expect(data.season).to.be.a('number');
              expect(data.season).to.be(0);
              expect(data.firstName).to.be.a('string');
              expect(data.firstName).to.be("");
              expect(data.lastName).to.be.a('string');
              expect(data.lastName).to.be("");
              expect(data.position).to.be.a('string');
              expect(data.position).to.be("");
              expect(data.origin).to.be.a('string');
              expect(data.origin).to.be("");
              expect(data.destination).to.be.a('string');
              expect(data.destination).to.be("");
              expect(data.transferDate).to.be.a('string');
              expect(data.transferDate).to.be("");
              expect(data.rating).to.be.a('number');
              expect(data.rating).to.be();
              expect(data.stars).to.be.a('number');
              expect(data.stars).to.be(0);
              expect(data.eligibility).to.be.a('string');
              expect(data.eligibility).to.be("");
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
      describe('playerSearch', function() {
        it('should call playerSearch successfully', function(done) {
          // TODO: uncomment, update parameter values for playerSearch call and complete the assertions
          /*
          var searchTerm = "searchTerm_example";
          var opts = {};
          opts.position = "position_example";
          opts.team = "team_example";
          opts.year = 56;

          instance.playerSearch(searchTerm, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PlayerSearchResult);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.team).to.be.a('string');
              expect(data.team).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.firstName).to.be.a('string');
              expect(data.firstName).to.be("");
              expect(data.lastName).to.be.a('string');
              expect(data.lastName).to.be("");
              expect(data.weight).to.be.a('number');
              expect(data.weight).to.be(0);
              expect(data.height).to.be.a('number');
              expect(data.height).to.be(0);
              expect(data.jersey).to.be.a('number');
              expect(data.jersey).to.be(0);
              expect(data.position).to.be.a('string');
              expect(data.position).to.be("");
              expect(data.hometown).to.be.a('string');
              expect(data.hometown).to.be("");
              expect(data.teamColor).to.be.a('string');
              expect(data.teamColor).to.be("");
              expect(data.teamColorSecondary).to.be.a('string');
              expect(data.teamColorSecondary).to.be("");
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
