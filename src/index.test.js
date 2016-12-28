import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

//passing in the "done" callback function is needed because
//jsdom makes an ASYNCHRONOUS call...so we need to make our
//test async by telling the callback that we're "done" and that
//it's ready to evaluate the html.

describe('index.html', () => {
  it('should say Users', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");

    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];

      expect(h1.innerHTML).to.equal("Users");

      done();

      window.close();
    });
  });
});
