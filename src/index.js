module.exports = function({ types: t }) {
  return {
    name: 'babel-example-plugin',
    visitor: {
      Identifier(path) {
        if (path.node.name === 'foo') {
          path.node.name = 'bar'
        }
      }
    }
  }
}
