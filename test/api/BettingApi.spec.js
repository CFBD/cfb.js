/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.15
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
    instance = new cfb.BettingApi();
  });

  describe('(package)', function() {
    describe('BettingApi', function() {
      describe('getLines', function() {
        it('should call getLines successfully', function(done) {
          // TODO: uncomment, update parameter values for getLines call and complete the assertions
          /*
          var opts = {};
          opts.gameId = 56;
          opts.year = 56;
          opts.week = 56;
          opts.seasonType = "regular";
          opts.team = "team_example";
          opts.home = "home_example";
          opts.away = "away_example";
          opts.conference = "conference_example";

          instance.getLines(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.GameLines);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.season).to.be.a('number');
              expect(data.season).to.be(0);
              expect(data.week).to.be.a('number');
              expect(data.week).to.be(0);
              expect(data.seasonType).to.be.a('string');
              expect(data.seasonType).to.be("");
              expect(data.startDate).to.be.a('string');
              expect(data.startDate).to.be("");
              expect(data.homeTeam).to.be.a('string');
              expect(data.homeTeam).to.be("");
              expect(data.homeConference).to.be.a('string');
              expect(data.homeConference).to.be("");
              expect(data.homeScore).to.be.a('number');
              expect(data.homeScore).to.be(0);
              expect(data.awayTeam).to.be.a('string');
              expect(data.awayTeam).to.be("");
              expect(data.awayConference).to.be.a('string');
              expect(data.awayConference).to.be("");
              expect(data.awayScore).to.be.a('number');
              expect(data.awayScore).to.be(0);
              {
                let dataCtr = data.lines;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(cfb.GameLinesLines);
                  expect(data.provider).to.be.a('string');
                  expect(data.provider).to.be("");
                  expect(data.spread).to.be.a('number');
                  expect(data.spread).to.be();
                  expect(data.formattedSpread).to.be.a('string');
                  expect(data.formattedSpread).to.be("");
                  expect(data.spreadOpen).to.be.a('number');
                  expect(data.spreadOpen).to.be();
                  expect(data.overUnder).to.be.a('number');
                  expect(data.overUnder).to.be();
                  expect(data.overUnderOpen).to.be.a('number');
                  expect(data.overUnderOpen).to.be();
                  expect(data.homeMoneyline).to.be.a('number');
                  expect(data.homeMoneyline).to.be();
                  expect(data.awayMoneyline).to.be.a('number');
                  expect(data.awayMoneyline).to.be();
  
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
