/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.3
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.27
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
    instance = new cfb.DrivesApi();
  });

  describe('(package)', function() {
    describe('DrivesApi', function() {
      describe('getDrives', function() {
        it('should call getDrives successfully', function(done) {
          // TODO: uncomment, update parameter values for getDrives call and complete the assertions
          /*
          var year = 56;
          var opts = {};
          opts.seasonType = "regular";
          opts.week = 56;
          opts.team = "team_example";
          opts.offense = "offense_example";
          opts.defense = "defense_example";
          opts.conference = "conference_example";
          opts.offenseConference = "offenseConference_example";
          opts.defenseConference = "defenseConference_example";
          opts.classification = "classification_example";

          instance.getDrives(year, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.Drive);
              expect(data.offense).to.be.a('string');
              expect(data.offense).to.be("");
              expect(data.offenseConference).to.be.a('string');
              expect(data.offenseConference).to.be("");
              expect(data.defense).to.be.a('string');
              expect(data.defense).to.be("");
              expect(data.defenseConference).to.be.a('string');
              expect(data.defenseConference).to.be("");
              expect(data.gameId).to.be.a('number');
              expect(data.gameId).to.be(0);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.driveNumber).to.be.a('number');
              expect(data.driveNumber).to.be(0);
              expect(data.scoring).to.be.a('boolean');
              expect(data.scoring).to.be(false);
              expect(data.startPeriod).to.be.a('number');
              expect(data.startPeriod).to.be(0);
              expect(data.startYardline).to.be.a('number');
              expect(data.startYardline).to.be(0);
              expect(data.startYardsToGoal).to.be.a('number');
              expect(data.startYardsToGoal).to.be(0);
              expect(data.startTime).to.be.a(Object);
              expect(data.startTime).to.be();
              expect(data.endPeriod).to.be.a('number');
              expect(data.endPeriod).to.be(0);
              expect(data.endYardline).to.be.a('number');
              expect(data.endYardline).to.be(0);
              expect(data.endYardsToGoal).to.be.a('number');
              expect(data.endYardsToGoal).to.be(0);
              expect(data.endTime).to.be.a(Object);
              expect(data.endTime).to.be();
              expect(data.plays).to.be.a('number');
              expect(data.plays).to.be(0);
              expect(data.yards).to.be.a('number');
              expect(data.yards).to.be(0);
              expect(data.driveResult).to.be.a('string');
              expect(data.driveResult).to.be("");
              expect(data.isHomeOffense).to.be.a('boolean');
              expect(data.isHomeOffense).to.be(false);
              expect(data.startOffenseScore).to.be.a('number');
              expect(data.startOffenseScore).to.be(0);
              expect(data.startDefenseScore).to.be.a('number');
              expect(data.startDefenseScore).to.be(0);
              expect(data.endOffenseScore).to.be.a('number');
              expect(data.endOffenseScore).to.be(0);
              expect(data.endDefenseScore).to.be.a('number');
              expect(data.endDefenseScore).to.be(0);
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
