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
    describe('TeamPPAOffense', function() {
      beforeEach(function() {
        instance = new cfb.TeamPPAOffense();
      });

      it('should create an instance of TeamPPAOffense', function() {
        // TODO: update the code to test TeamPPAOffense
        expect(instance).to.be.a(cfb.TeamPPAOffense);
      });

      it('should have the property overall (base name: "overall")', function() {
        // TODO: update the code to test the property overall
        expect(instance).to.have.property('overall');
        // expect(instance.overall).to.be(expectedValueLiteral);
      });

      it('should have the property passing (base name: "passing")', function() {
        // TODO: update the code to test the property passing
        expect(instance).to.have.property('passing');
        // expect(instance.passing).to.be(expectedValueLiteral);
      });

      it('should have the property rushing (base name: "rushing")', function() {
        // TODO: update the code to test the property rushing
        expect(instance).to.have.property('rushing');
        // expect(instance.rushing).to.be(expectedValueLiteral);
      });

      it('should have the property firstDown (base name: "firstDown")', function() {
        // TODO: update the code to test the property firstDown
        expect(instance).to.have.property('firstDown');
        // expect(instance.firstDown).to.be(expectedValueLiteral);
      });

      it('should have the property secondDown (base name: "secondDown")', function() {
        // TODO: update the code to test the property secondDown
        expect(instance).to.have.property('secondDown');
        // expect(instance.secondDown).to.be(expectedValueLiteral);
      });

      it('should have the property thirdDown (base name: "thirdDown")', function() {
        // TODO: update the code to test the property thirdDown
        expect(instance).to.have.property('thirdDown');
        // expect(instance.thirdDown).to.be(expectedValueLiteral);
      });

      it('should have the property cumulative (base name: "cumulative")', function() {
        // TODO: update the code to test the property cumulative
        expect(instance).to.have.property('cumulative');
        // expect(instance.cumulative).to.be(expectedValueLiteral);
      });

    });
  });

}));
