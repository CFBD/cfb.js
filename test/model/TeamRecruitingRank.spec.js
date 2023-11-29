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
 * Swagger Codegen version: 2.4.37
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
    describe('TeamRecruitingRank', function() {
      beforeEach(function() {
        instance = new cfb.TeamRecruitingRank();
      });

      it('should create an instance of TeamRecruitingRank', function() {
        // TODO: update the code to test TeamRecruitingRank
        expect(instance).to.be.a(cfb.TeamRecruitingRank);
      });

      it('should have the property year (base name: "year")', function() {
        // TODO: update the code to test the property year
        expect(instance).to.have.property('year');
        // expect(instance.year).to.be(expectedValueLiteral);
      });

      it('should have the property rank (base name: "rank")', function() {
        // TODO: update the code to test the property rank
        expect(instance).to.have.property('rank');
        // expect(instance.rank).to.be(expectedValueLiteral);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property points (base name: "points")', function() {
        // TODO: update the code to test the property points
        expect(instance).to.have.property('points');
        // expect(instance.points).to.be(expectedValueLiteral);
      });

    });
  });

}));
