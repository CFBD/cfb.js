/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.25.2
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
    instance = new cfb.TeamsApi();
  });

  describe('(package)', function() {
    describe('TeamsApi', function() {
      describe('getFbsTeams', function() {
        it('should call getFbsTeams successfully', function(done) {
          // TODO: uncomment, update parameter values for getFbsTeams call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;

          instance.getFbsTeams(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.Team);
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be(0);
              expect(data.school).to.be.a('string');
              // expect(data.school).to.be("");
              expect(data.mascot).to.be.a('string');
              // expect(data.mascot).to.be("");
              expect(data.abbreviation).to.be.a('string');
              // expect(data.abbreviation).to.be("");
              expect(data.altName1).to.be.a('string');
              // expect(data.altName1).to.be("");
              expect(data.altName2).to.be.a('string');
              // expect(data.altName2).to.be("");
              expect(data.altName3).to.be.a('string');
              // expect(data.altName3).to.be("");
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.division).to.be.a('string');
              // expect(data.division).to.be("");
              expect(data.color).to.be.a('string');
              // expect(data.color).to.be("");
              expect(data.altColor).to.be.a('string');
              // expect(data.altColor).to.be("");
              {
                let dataCtr = data.logos;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  // expect(data).to.be("");
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
      describe('getRoster', function() {
        it('should call getRoster successfully', function(done) {
          // TODO: uncomment, update parameter values for getRoster call and complete the assertions
          /*
          var team = "team_example";
          var opts = {};
          opts.year = 56;

          instance.getRoster(team, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.Player);
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be(0);
              expect(data.firstName).to.be.a('string');
              // expect(data.firstName).to.be("");
              expect(data.lastName).to.be.a('string');
              // expect(data.lastName).to.be("");
              expect(data.height).to.be.a('number');
              // expect(data.height).to.be(0);
              expect(data.weight).to.be.a('number');
              // expect(data.weight).to.be(0);
              expect(data.jersey).to.be.a('number');
              // expect(data.jersey).to.be(0);
              expect(data.year).to.be.a('number');
              // expect(data.year).to.be(0);
              expect(data.position).to.be.a('string');
              // expect(data.position).to.be("");
              expect(data.city).to.be.a('string');
              // expect(data.city).to.be("");
              expect(data.state).to.be.a('string');
              // expect(data.state).to.be("");
              expect(data.country).to.be.a('string');
              // expect(data.country).to.be("");
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
      describe('getTalent', function() {
        it('should call getTalent successfully', function(done) {
          // TODO: uncomment, update parameter values for getTalent call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;

          instance.getTalent(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.TeamTalent);
              expect(data.year).to.be.a('number');
              // expect(data.year).to.be(0);
              expect(data.school).to.be.a('string');
              // expect(data.school).to.be("");
              expect(data.talent).to.be.a('number');
              // expect(data.talent).to.be();
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
      describe('getTeamMatchup', function() {
        it('should call getTeamMatchup successfully', function(done) {
          // TODO: uncomment, update parameter values for getTeamMatchup call and complete the assertions
          /*
          var team1 = "team1_example";
          var team2 = "team2_example";
          var opts = {};
          opts.minYear = 56;
          opts.maxYear = 56;

          instance.getTeamMatchup(team1, team2, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.TeamMatchup);
              expect(data.team1).to.be.a('string');
              // expect(data.team1).to.be("");
              expect(data.team2).to.be.a('string');
              // expect(data.team2).to.be("");
              expect(data.startYear).to.be.a('number');
              // expect(data.startYear).to.be(0);
              expect(data.endYear).to.be.a('number');
              // expect(data.endYear).to.be(0);
              expect(data.team1Wins).to.be.a('number');
              // expect(data.team1Wins).to.be(0);
              expect(data.team2Wins).to.be.a('number');
              // expect(data.team2Wins).to.be(0);
              expect(data.ties).to.be.a('number');
              // expect(data.ties).to.be(0);
              {
                let dataCtr = data.games;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(cfb.TeamMatchupGames);
                  expect(data.season).to.be.a('number');
                  // expect(data.season).to.be(0);
                  expect(data.week).to.be.a('number');
                  // expect(data.week).to.be(0);
                  expect(data.seasonType).to.be.a('string');
                  // expect(data.seasonType).to.be("");
                  expect(data._date).to.be.a('string');
                  // expect(data._date).to.be("");
                  expect(data.neutralSite).to.be.a('boolean');
                  // expect(data.neutralSite).to.be(false);
                  expect(data.venue).to.be.a('string');
                  // expect(data.venue).to.be("");
                  expect(data.homeTeam).to.be.a('string');
                  // expect(data.homeTeam).to.be("");
                  expect(data.homeScore).to.be.a('number');
                  // expect(data.homeScore).to.be(0);
                  expect(data.awayTeam).to.be.a('string');
                  // expect(data.awayTeam).to.be("");
                  expect(data.awayScore).to.be.a('number');
                  // expect(data.awayScore).to.be(0);
                  expect(data.winner).to.be.a('string');
                  // expect(data.winner).to.be("");
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
      describe('getTeams', function() {
        it('should call getTeams successfully', function(done) {
          // TODO: uncomment, update parameter values for getTeams call and complete the assertions
          /*
          var opts = {};
          opts.conference = "conference_example";

          instance.getTeams(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.Team);
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be(0);
              expect(data.school).to.be.a('string');
              // expect(data.school).to.be("");
              expect(data.mascot).to.be.a('string');
              // expect(data.mascot).to.be("");
              expect(data.abbreviation).to.be.a('string');
              // expect(data.abbreviation).to.be("");
              expect(data.altName1).to.be.a('string');
              // expect(data.altName1).to.be("");
              expect(data.altName2).to.be.a('string');
              // expect(data.altName2).to.be("");
              expect(data.altName3).to.be.a('string');
              // expect(data.altName3).to.be("");
              expect(data.conference).to.be.a('string');
              // expect(data.conference).to.be("");
              expect(data.division).to.be.a('string');
              // expect(data.division).to.be("");
              expect(data.color).to.be.a('string');
              // expect(data.color).to.be("");
              expect(data.altColor).to.be.a('string');
              // expect(data.altColor).to.be("");
              {
                let dataCtr = data.logos;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  // expect(data).to.be("");
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
    });
  });

}));
