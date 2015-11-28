"use strict";

const expect = require('chai').expect;
const utils = require('../lib/utils');

describe('#isContain', function() {
  it('matches the substring', function() {
      expect(utils.isContain('text 1a2b3c zzz', 'a2b')).to.be.ok;
  });

  it('to be case insensitive', function() {
      expect(utils.isContain('text AbC zzz', 'aBc')).to.be.ok;
  });

  it('doesnt match the substring if its not a part of a main string', function() {
      expect(utils.isContain('text 1a2b3c zzz', 'LoL')).to.be.falsy;
  });
});
