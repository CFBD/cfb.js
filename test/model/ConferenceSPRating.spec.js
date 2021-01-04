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
 * Swagger Codegen version: 2.4.18
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
    describe('ConferenceSPRating', function() {
      beforeEach(function() {
        instance = new cfb.ConferenceSPRating();
      });

      it('should create an instance of ConferenceSPRating', function() {
        // TODO: update the code to test ConferenceSPRating
        expect(instance).to.be.a(cfb.ConferenceSPRating);
      });

      it('should have the property year (base name: "year")', function() {
        // TODO: update the code to test the property year
        expect(instance).to.have.property('year');
        // expect(instance.year).to.be(expectedValueLiteral);
      });

      it('should have the property conference (base name: "conference")', function() {
        // TODO: update the code to test the property conference
        expect(instance).to.have.property('conference');
        // expect(instance.conference).to.be(expectedValueLiteral);
      });

      it('should have the property rating (base name: "rating")', function() {
        // TODO: update the code to test the property rating
        expect(instance).to.have.property('rating');
        // expect(instance.rating).to.be(expectedValueLiteral);
      });

      it('should have the property secondOrderWins (base name: "secondOrderWins")', function() {
        // TODO: update the code to test the property secondOrderWins
        expect(instance).to.have.property('secondOrderWins');
        // expect(instance.secondOrderWins).to.be(expectedValueLiteral);
      });

      it('should have the property sos (base name: "sos")', function() {
        // TODO: update the code to test the property sos
        expect(instance).to.have.property('sos');
        // expect(instance.sos).to.be(expectedValueLiteral);
      });

      it('should have the property offense (base name: "offense")', function() {
        // TODO: update the code to test the property offense
        expect(instance).to.have.property('offense');
        // expect(instance.offense).to.be(expectedValueLiteral);
      });

      it('should have the property defense (base name: "defense")', function() {
        // TODO: update the code to test the property defense
        expect(instance).to.have.property('defense');
        // expect(instance.defense).to.be(expectedValueLiteral);
      });

      it('should have the property specialTeams (base name: "specialTeams")', function() {
        // TODO: update the code to test the property specialTeams
        expect(instance).to.have.property('specialTeams');
        // expect(instance.specialTeams).to.be(expectedValueLiteral);
      });

    });
  });

}));
