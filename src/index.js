module.exports = function({ types: t }) {
  return {
    name: 'babel-example-plugin',
    visitor: {
      Identifier(path) {
        if (path.node.name === 'foo') {
          path.node.name = 'bar'
        }
      },
      BinaryExpression(path, state) {
        if (path.node.operator  !== '===') {
          return
        }
        path.node.left = t.identifier('sebmck')
        path.node.right = t.identifier('dork')
      }
    }
  }
}
