/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.13
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
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
    instance = new cfb.RatingsApi();
  });

  describe('(package)', function() {
    describe('RatingsApi', function() {
      describe('getConferenceSPRatings', function() {
        it('should call getConferenceSPRatings successfully', function(done) {
          // TODO: uncomment, update parameter values for getConferenceSPRatings call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.conference = "conference_example";

          instance.getConferenceSPRatings(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.ConferenceSPRating);
              expect(data.year).to.be.a('number');
              // expect(data.year).to.be(0);
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.rating).to.be.a('number');
              // expect(data.rating).to.be();
              expect(data.secondOrderWins).to.be.a('number');
              // expect(data.secondOrderWins).to.be();
              expect(data.sos).to.be.a('number');
              // expect(data.sos).to.be();
              expect(data.offense).to.be.a(cfb.TeamSPRatingOffense);
                    expect(data.offense.rating).to.be.a('number');
                // expect(data.offense.rating).to.be();
                expect(data.offense.success).to.be.a('number');
                // expect(data.offense.success).to.be();
                expect(data.offense.explosiveness).to.be.a('number');
                // expect(data.offense.explosiveness).to.be();
                expect(data.offense.rushing).to.be.a('number');
                // expect(data.offense.rushing).to.be();
                expect(data.offense.passing).to.be.a('number');
                // expect(data.offense.passing).to.be();
                expect(data.offense.standardDowns).to.be.a('number');
                // expect(data.offense.standardDowns).to.be();
                expect(data.offense.passingDowns).to.be.a('number');
                // expect(data.offense.passingDowns).to.be();
                expect(data.offense.runRate).to.be.a('number');
                // expect(data.offense.runRate).to.be();
                expect(data.offense.pace).to.be.a('number');
                // expect(data.offense.pace).to.be();
              expect(data.defense).to.be.a(cfb.TeamSPRatingDefense);
                    expect(data.defense.rating).to.be.a('number');
                // expect(data.defense.rating).to.be();
                expect(data.defense.success).to.be.a('number');
                // expect(data.defense.success).to.be();
                expect(data.defense.explosiveness).to.be.a('number');
                // expect(data.defense.explosiveness).to.be();
                expect(data.defense.rushing).to.be.a('number');
                // expect(data.defense.rushing).to.be();
                expect(data.defense.pasing).to.be.a('number');
                // expect(data.defense.pasing).to.be();
                expect(data.defense.standardDowns).to.be.a('number');
                // expect(data.defense.standardDowns).to.be();
                expect(data.defense.passingDowns).to.be.a('number');
                // expect(data.defense.passingDowns).to.be();
                expect(data.defense.havoc).to.be.a(cfb.TeamSPRatingDefenseHavoc);
                      expect(data.defense.havoc.total).to.be.a('number');
                  // expect(data.defense.havoc.total).to.be();
                  expect(data.defense.havoc.frontSeven).to.be.a('number');
                  // expect(data.defense.havoc.frontSeven).to.be();
                  expect(data.defense.havoc.db).to.be.a('number');
                  // expect(data.defense.havoc.db).to.be();
              expect(data.specialTeams).to.be.a(cfb.TeamSPRatingSpecialTeams);
                    expect(data.specialTeams.rating).to.be.a('number');
                // expect(data.specialTeams.rating).to.be();
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
      describe('getSPRatings', function() {
        it('should call getSPRatings successfully', function(done) {
          // TODO: uncomment, update parameter values for getSPRatings call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.team = "team_example";

          instance.getSPRatings(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.TeamSPRating);
              expect(data.year).to.be.a('number');
              // expect(data.year).to.be(0);
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.rating).to.be.a('number');
              // expect(data.rating).to.be();
              expect(data.secondOrderWins).to.be.a('number');
              // expect(data.secondOrderWins).to.be();
              expect(data.sos).to.be.a('number');
              // expect(data.sos).to.be();
              expect(data.offense).to.be.a(cfb.TeamSPRatingOffense);
                    expect(data.offense.rating).to.be.a('number');
                // expect(data.offense.rating).to.be();
                expect(data.offense.success).to.be.a('number');
                // expect(data.offense.success).to.be();
                expect(data.offense.explosiveness).to.be.a('number');
                // expect(data.offense.explosiveness).to.be();
                expect(data.offense.rushing).to.be.a('number');
                // expect(data.offense.rushing).to.be();
                expect(data.offense.passing).to.be.a('number');
                // expect(data.offense.passing).to.be();
                expect(data.offense.standardDowns).to.be.a('number');
                // expect(data.offense.standardDowns).to.be();
                expect(data.offense.passingDowns).to.be.a('number');
                // expect(data.offense.passingDowns).to.be();
                expect(data.offense.runRate).to.be.a('number');
                // expect(data.offense.runRate).to.be();
                expect(data.offense.pace).to.be.a('number');
                // expect(data.offense.pace).to.be();
              expect(data.defense).to.be.a(cfb.TeamSPRatingDefense);
                    expect(data.defense.rating).to.be.a('number');
                // expect(data.defense.rating).to.be();
                expect(data.defense.success).to.be.a('number');
                // expect(data.defense.success).to.be();
                expect(data.defense.explosiveness).to.be.a('number');
                // expect(data.defense.explosiveness).to.be();
                expect(data.defense.rushing).to.be.a('number');
                // expect(data.defense.rushing).to.be();
                expect(data.defense.pasing).to.be.a('number');
                // expect(data.defense.pasing).to.be();
                expect(data.defense.standardDowns).to.be.a('number');
                // expect(data.defense.standardDowns).to.be();
                expect(data.defense.passingDowns).to.be.a('number');
                // expect(data.defense.passingDowns).to.be();
                expect(data.defense.havoc).to.be.a(cfb.TeamSPRatingDefenseHavoc);
                      expect(data.defense.havoc.total).to.be.a('number');
                  // expect(data.defense.havoc.total).to.be();
                  expect(data.defense.havoc.frontSeven).to.be.a('number');
                  // expect(data.defense.havoc.frontSeven).to.be();
                  expect(data.defense.havoc.db).to.be.a('number');
                  // expect(data.defense.havoc.db).to.be();
              expect(data.specialTeams).to.be.a(cfb.TeamSPRatingSpecialTeams);
                    expect(data.specialTeams.rating).to.be.a('number');
                // expect(data.specialTeams.rating).to.be();
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
      describe('getSRSRatings', function() {
        it('should call getSRSRatings successfully', function(done) {
          // TODO: uncomment, update parameter values for getSRSRatings call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.team = "team_example";
          opts.conference = "conference_example";

          instance.getSRSRatings(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.TeamSRSRating);
              expect(data.year).to.be.a('number');
              // expect(data.year).to.be(0);
              expect(data.team).to.be.a('string');
              // expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.division).to.be.a('string');
              // expect(data.division).to.be("");
              expect(data.rating).to.be.a('number');
              // expect(data.rating).to.be();
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
