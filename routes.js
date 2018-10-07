const UrlPrettifier = require('next-url-prettifier').default

const routes = [
  {
    page: 'index',
    prettyUrl: '/'
  },
  {
    page: 'index',
    prettyUrl: ({number = '', slug = ''}) => `/show/${number}/${slug}`,
    prettyUrlPatterns: [{ pattern: '/show/:number/:slug' }]
  },
  {
    page: 'download',
    prettyUrl: '/download'
  }
]

const urlPrettifier = new UrlPrettifier(routes)
exports.default = routes
exports.Router = urlPrettifier
