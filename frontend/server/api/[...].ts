import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer({
  target: 'http://localhost:3001/',
  changeOrigin: true,
});

export default defineEventHandler((event) => {
  return new Promise((resolve) => {
    const options = {};

    const origEnd = event.res.end;
    event.res.end = function() {
      resolve(null);
      return origEnd.call(event.res);
    }
  
    proxy.web(event.req, event.res, options);
  });
});