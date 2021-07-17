/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.1
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
    instance = new cfb.PlaysApi();
  });

  describe('(package)', function() {
    describe('PlaysApi', function() {
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
              expect(data.clock).to.be.a(Object);
              expect(data.clock).to.be();
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
              expect(data.clock).to.be.a(Object);
              expect(data.clock).to.be();
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
