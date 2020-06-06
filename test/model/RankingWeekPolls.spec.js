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

  describe('(package)', function() {
    describe('RankingWeekPolls', function() {
      beforeEach(function() {
        instance = new cfb.RankingWeekPolls();
      });

      it('should create an instance of RankingWeekPolls', function() {
        // TODO: update the code to test RankingWeekPolls
        expect(instance).to.be.a(cfb.RankingWeekPolls);
      });

      it('should have the property poll (base name: "poll")', function() {
        // TODO: update the code to test the property poll
        expect(instance).to.have.property('poll');
        // expect(instance.poll).to.be(expectedValueLiteral);
      });

      it('should have the property ranks (base name: "ranks")', function() {
        // TODO: update the code to test the property ranks
        expect(instance).to.have.property('ranks');
        // expect(instance.ranks).to.be(expectedValueLiteral);
      });

    });
  });

}));
