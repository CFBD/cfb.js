/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.2
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
    describe('Team', function() {
      beforeEach(function() {
        instance = new cfb.Team();
      });

      it('should create an instance of Team', function() {
        // TODO: update the code to test Team
        expect(instance).to.be.a(cfb.Team);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property school (base name: "school")', function() {
        // TODO: update the code to test the property school
        expect(instance).to.have.property('school');
        // expect(instance.school).to.be(expectedValueLiteral);
      });

      it('should have the property mascot (base name: "mascot")', function() {
        // TODO: update the code to test the property mascot
        expect(instance).to.have.property('mascot');
        // expect(instance.mascot).to.be(expectedValueLiteral);
      });

      it('should have the property abbreviation (base name: "abbreviation")', function() {
        // TODO: update the code to test the property abbreviation
        expect(instance).to.have.property('abbreviation');
        // expect(instance.abbreviation).to.be(expectedValueLiteral);
      });

      it('should have the property altName1 (base name: "alt_name_1")', function() {
        // TODO: update the code to test the property altName1
        expect(instance).to.have.property('altName1');
        // expect(instance.altName1).to.be(expectedValueLiteral);
      });

      it('should have the property altName2 (base name: "alt_name_2")', function() {
        // TODO: update the code to test the property altName2
        expect(instance).to.have.property('altName2');
        // expect(instance.altName2).to.be(expectedValueLiteral);
      });

      it('should have the property altName3 (base name: "alt_name_3")', function() {
        // TODO: update the code to test the property altName3
        expect(instance).to.have.property('altName3');
        // expect(instance.altName3).to.be(expectedValueLiteral);
      });

      it('should have the property conference (base name: "conference")', function() {
        // TODO: update the code to test the property conference
        expect(instance).to.have.property('conference');
        // expect(instance.conference).to.be(expectedValueLiteral);
      });

      it('should have the property division (base name: "division")', function() {
        // TODO: update the code to test the property division
        expect(instance).to.have.property('division');
        // expect(instance.division).to.be(expectedValueLiteral);
      });

      it('should have the property color (base name: "color")', function() {
        // TODO: update the code to test the property color
        expect(instance).to.have.property('color');
        // expect(instance.color).to.be(expectedValueLiteral);
      });

      it('should have the property altColor (base name: "alt_color")', function() {
        // TODO: update the code to test the property altColor
        expect(instance).to.have.property('altColor');
        // expect(instance.altColor).to.be(expectedValueLiteral);
      });

      it('should have the property logos (base name: "logos")', function() {
        // TODO: update the code to test the property logos
        expect(instance).to.have.property('logos');
        // expect(instance.logos).to.be(expectedValueLiteral);
      });

    });
  });

}));
