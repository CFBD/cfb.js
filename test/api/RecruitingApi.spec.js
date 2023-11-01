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
    instance = new cfb.RecruitingApi();
  });

  describe('(package)', function() {
    describe('RecruitingApi', function() {
      describe('getRecruitingGroups', function() {
        it('should call getRecruitingGroups successfully', function(done) {
          // TODO: uncomment, update parameter values for getRecruitingGroups call and complete the assertions
          /*
          var opts = {};
          opts.startYear = 56;
          opts.endYear = 56;
          opts.team = "team_example";
          opts.conference = "conference_example";

          instance.getRecruitingGroups(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.PositionGroupRecruitingRating);
              expect(data.team).to.be.a('string');
              expect(data.team).to.be("");
              expect(data.conference).to.be.a('string');
              expect(data.conference).to.be("");
              expect(data.positionGroup).to.be.a('string');
              expect(data.positionGroup).to.be("");
              expect(data.averageRating).to.be.a('number');
              expect(data.averageRating).to.be();
              expect(data.totalRating).to.be.a('number');
              expect(data.totalRating).to.be();
              expect(data.commits).to.be.a('number');
              expect(data.commits).to.be();
              expect(data.averageStars).to.be.a('number');
              expect(data.averageStars).to.be();
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
      describe('getRecruitingPlayers', function() {
        it('should call getRecruitingPlayers successfully', function(done) {
          // TODO: uncomment, update parameter values for getRecruitingPlayers call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.classification = "HighSchool";
          opts.position = "position_example";
          opts.state = "state_example";
          opts.team = "team_example";

          instance.getRecruitingPlayers(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.Recruit);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.athleteId).to.be.a('number');
              expect(data.athleteId).to.be(0);
              expect(data.recruitType).to.be.a('string');
              expect(data.recruitType).to.be("");
              expect(data.year).to.be.a('number');
              expect(data.year).to.be(0);
              expect(data.ranking).to.be.a('number');
              expect(data.ranking).to.be(0);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.school).to.be.a('string');
              expect(data.school).to.be("");
              expect(data.committedTo).to.be.a('string');
              expect(data.committedTo).to.be("");
              expect(data.position).to.be.a('string');
              expect(data.position).to.be("");
              expect(data.height).to.be.a('number');
              expect(data.height).to.be();
              expect(data.weight).to.be.a('number');
              expect(data.weight).to.be(0);
              expect(data.stars).to.be.a('number');
              expect(data.stars).to.be(0);
              expect(data.rating).to.be.a('number');
              expect(data.rating).to.be();
              expect(data.city).to.be.a('string');
              expect(data.city).to.be("");
              expect(data.stateProvince).to.be.a('string');
              expect(data.stateProvince).to.be("");
              expect(data.country).to.be.a('string');
              expect(data.country).to.be("");
              expect(data.hometownInfo).to.be.a(cfb.RecruitHometownInfo);
                    expect(data.hometownInfo.latitude).to.be.a('number');
                expect(data.hometownInfo.latitude).to.be();
                expect(data.hometownInfo.longitude).to.be.a('number');
                expect(data.hometownInfo.longitude).to.be();
                expect(data.hometownInfo.countyFips).to.be.a('string');
                expect(data.hometownInfo.countyFips).to.be("");
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
      describe('getRecruitingTeams', function() {
        it('should call getRecruitingTeams successfully', function(done) {
          // TODO: uncomment, update parameter values for getRecruitingTeams call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.team = "team_example";

          instance.getRecruitingTeams(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.TeamRecruitingRank);
              expect(data.year).to.be.a('number');
              expect(data.year).to.be(0);
              expect(data.rank).to.be.a('number');
              expect(data.rank).to.be(0);
              expect(data.team).to.be.a('string');
              expect(data.team).to.be("");
              expect(data.points).to.be.a('number');
              expect(data.points).to.be();
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
