/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.3.4
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
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
    describe('PositionGroupRecruitingRating', function() {
      beforeEach(function() {
        instance = new cfb.PositionGroupRecruitingRating();
      });

      it('should create an instance of PositionGroupRecruitingRating', function() {
        // TODO: update the code to test PositionGroupRecruitingRating
        expect(instance).to.be.a(cfb.PositionGroupRecruitingRating);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property conference (base name: "conference")', function() {
        // TODO: update the code to test the property conference
        expect(instance).to.have.property('conference');
        // expect(instance.conference).to.be(expectedValueLiteral);
      });

      it('should have the property positiionGroup (base name: "positiionGroup")', function() {
        // TODO: update the code to test the property positiionGroup
        expect(instance).to.have.property('positiionGroup');
        // expect(instance.positiionGroup).to.be(expectedValueLiteral);
      });

      it('should have the property averageRating (base name: "averageRating")', function() {
        // TODO: update the code to test the property averageRating
        expect(instance).to.have.property('averageRating');
        // expect(instance.averageRating).to.be(expectedValueLiteral);
      });

      it('should have the property totalRating (base name: "totalRating")', function() {
        // TODO: update the code to test the property totalRating
        expect(instance).to.have.property('totalRating');
        // expect(instance.totalRating).to.be(expectedValueLiteral);
      });

      it('should have the property commits (base name: "commits")', function() {
        // TODO: update the code to test the property commits
        expect(instance).to.have.property('commits');
        // expect(instance.commits).to.be(expectedValueLiteral);
      });

      it('should have the property averageStars (base name: "averageStars")', function() {
        // TODO: update the code to test the property averageStars
        expect(instance).to.have.property('averageStars');
        // expect(instance.averageStars).to.be(expectedValueLiteral);
      });

    });
  });

}));
