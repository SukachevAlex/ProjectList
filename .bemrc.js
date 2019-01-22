module.exports = {
  levels: [
    {
      layer: 'common',
      path: 'src/components/common'
    }
  ].map(level => Object.assign({
    schemeOptions: 'react',
    naming: 'react',
    scheme: 'nested' }, level)
  ),
  modules: {
    'bem-tools': {
      plugins: {
        create: {
          levels: {
            'src/components/common': { default: true }
          },
          techs: ['tsx', 'css'],
          templates: {
            tsx: '.bem/templates/tsx.js'
          }
        }
      }
    }
  }
}
