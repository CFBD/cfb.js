/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.8
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
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
      describe('getDrvies', function() {
        it('should call getDrvies successfully', function(done) {
          // TODO: uncomment, update parameter values for getDrvies call and complete the assertions
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

          instance.getDrvies(year, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.Drive);
              expect(data.offense).to.be.a('string');
              // expect(data.offense).to.be("");
              expect(data.offenseConference).to.be.a('string');
              // expect(data.offenseConference).to.be("");
              expect(data.defense).to.be.a('string');
              // expect(data.defense).to.be("");
              expect(data.defenseConference).to.be.a('string');
              // expect(data.defenseConference).to.be("");
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be(0);
              expect(data.gameId).to.be.a('number');
              // expect(data.gameId).to.be(0);
              expect(data.scoring).to.be.a('boolean');
              // expect(data.scoring).to.be(false);
              expect(data.startPeriod).to.be.a('number');
              // expect(data.startPeriod).to.be(0);
              expect(data.startYardline).to.be.a('number');
              // expect(data.startYardline).to.be(0);
              expect(data.startYardsToGoal).to.be.a('number');
              // expect(data.startYardsToGoal).to.be(0);
              expect(data.startTime).to.be.a(cfb.DriveStartTime);
                    expect(data.startTime.minutes).to.be.a('number');
                // expect(data.startTime.minutes).to.be(0);
                expect(data.startTime.seconds).to.be.a('number');
                // expect(data.startTime.seconds).to.be(0);
              expect(data.endPeriod).to.be.a('number');
              // expect(data.endPeriod).to.be(0);
              expect(data.endYardline).to.be.a('number');
              // expect(data.endYardline).to.be(0);
              expect(data.endYardsToGoal).to.be.a('number');
              // expect(data.endYardsToGoal).to.be(0);
              expect(data.endTime).to.be.a(cfb.DriveStartTime);
                    expect(data.endTime.minutes).to.be.a('number');
                // expect(data.endTime.minutes).to.be(0);
                expect(data.endTime.seconds).to.be.a('number');
                // expect(data.endTime.seconds).to.be(0);
              expect(data.plays).to.be.a('number');
              // expect(data.plays).to.be(0);
              expect(data.yards).to.be.a('number');
              // expect(data.yards).to.be(0);
              expect(data.driveResult).to.be.a('string');
              // expect(data.driveResult).to.be("");
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
