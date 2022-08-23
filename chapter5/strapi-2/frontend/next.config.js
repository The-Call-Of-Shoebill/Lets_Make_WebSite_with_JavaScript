module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  env: {
    pathDirectory: process.cwd() + '/content',
    graphQL_Server: 'http://10.10.10.173:1337/graphql',
    graphQL_Server_Root: 'http://10.10.10.173:1337'
	
  }
}
