/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.13
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
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
    describe('PlayerGamePPAAveragePPA', function() {
      beforeEach(function() {
        instance = new cfb.PlayerGamePPAAveragePPA();
      });

      it('should create an instance of PlayerGamePPAAveragePPA', function() {
        // TODO: update the code to test PlayerGamePPAAveragePPA
        expect(instance).to.be.a(cfb.PlayerGamePPAAveragePPA);
      });

      it('should have the property all (base name: "all")', function() {
        // TODO: update the code to test the property all
        expect(instance).to.have.property('all');
        // expect(instance.all).to.be(expectedValueLiteral);
      });

      it('should have the property pass (base name: "pass")', function() {
        // TODO: update the code to test the property pass
        expect(instance).to.have.property('pass');
        // expect(instance.pass).to.be(expectedValueLiteral);
      });

      it('should have the property rush (base name: "rush")', function() {
        // TODO: update the code to test the property rush
        expect(instance).to.have.property('rush');
        // expect(instance.rush).to.be(expectedValueLiteral);
      });

    });
  });

}));
