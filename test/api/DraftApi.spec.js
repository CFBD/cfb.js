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
    instance = new cfb.DraftApi();
  });

  describe('(package)', function() {
    describe('DraftApi', function() {
      describe('getDraftPicks', function() {
        it('should call getDraftPicks successfully', function(done) {
          // TODO: uncomment, update parameter values for getDraftPicks call and complete the assertions
          /*
          var opts = {};
          opts.year = 56;
          opts.nflTeam = "nflTeam_example";
          opts.college = "college_example";
          opts.conference = "conference_example";
          opts.position = "position_example";

          instance.getDraftPicks(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.DraftPick);
              expect(data.collegeAthleteId).to.be.a('number');
              expect(data.collegeAthleteId).to.be(0);
              expect(data.nflAthleteId).to.be.a('number');
              expect(data.nflAthleteId).to.be(0);
              expect(data.collegeId).to.be.a('number');
              expect(data.collegeId).to.be(0);
              expect(data.collegeTeam).to.be.a('string');
              expect(data.collegeTeam).to.be("");
              expect(data.collegeConference).to.be.a('string');
              expect(data.collegeConference).to.be("");
              expect(data.nflTeam).to.be.a('string');
              expect(data.nflTeam).to.be("");
              expect(data.year).to.be.a('number');
              expect(data.year).to.be(0);
              expect(data.overall).to.be.a('number');
              expect(data.overall).to.be(0);
              expect(data.round).to.be.a('number');
              expect(data.round).to.be(0);
              expect(data.pick).to.be.a('number');
              expect(data.pick).to.be(0);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.position).to.be.a('string');
              expect(data.position).to.be("");
              expect(data.height).to.be.a('number');
              expect(data.height).to.be(0);
              expect(data.weight).to.be.a('number');
              expect(data.weight).to.be(0);
              expect(data.preDraftRanking).to.be.a('number');
              expect(data.preDraftRanking).to.be(0);
              expect(data.preDraftPositionRanking).to.be.a('number');
              expect(data.preDraftPositionRanking).to.be(0);
              expect(data.preDraftGrade).to.be.a('number');
              expect(data.preDraftGrade).to.be(0);
              expect(data.hometownInfo).to.be.a(cfb.DraftPickHometownInfo);
                    expect(data.hometownInfo.city).to.be.a('string');
                expect(data.hometownInfo.city).to.be("");
                expect(data.hometownInfo.state).to.be.a('string');
                expect(data.hometownInfo.state).to.be("");
                expect(data.hometownInfo.country).to.be.a('string');
                expect(data.hometownInfo.country).to.be("");
                expect(data.hometownInfo.latitude).to.be.a('number');
                expect(data.hometownInfo.latitude).to.be();
                expect(data.hometownInfo.longitude).to.be.a('number');
                expect(data.hometownInfo.longitude).to.be();
                expect(data.hometownInfo.countryFips).to.be.a('number');
                expect(data.hometownInfo.countryFips).to.be(0);
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
      describe('getNFLPositions', function() {
        it('should call getNFLPositions successfully', function(done) {
          // TODO: uncomment getNFLPositions call and complete the assertions
          /*

          instance.getNFLPositions().then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.DraftPosition);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
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
      describe('getNFLTeams', function() {
        it('should call getNFLTeams successfully', function(done) {
          // TODO: uncomment getNFLTeams call and complete the assertions
          /*

          instance.getNFLTeams().then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.DraftTeam);
              expect(data.location).to.be.a('string');
              expect(data.location).to.be("");
              expect(data.nickname).to.be.a('string');
              expect(data.nickname).to.be("");
              expect(data.displayName).to.be.a('string');
              expect(data.displayName).to.be("");
              expect(data.logo).to.be.a('string');
              expect(data.logo).to.be("");
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
