import jsdom from 'jsdom';
const configure = require('enzyme').configure;
const Adapter = require('enzyme-adapter-react-16');

const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>', {url: 'https://example.org/'})).window;

global.document = document;
global.window = document.defaultView;
global.navigator = {
  userAgent: 'node.js',
};

Object.defineProperty(window, 'location', {
  writable: true,
  value: {},
});

process.env.REACT_APP_ENV = 'local';

configure({ adapter: new Adapter() });

