export default {
  app: {
    name: 'electrobun-react',
    identifier: 'electrobun-react',
    version: '0.0.1',
  },
  build: {
    views: {
      mainview: {
        entrypoint: 'src/mainview/index.tsx',
        external: [],
      },
    },
    copy: {
      'src/mainview/index.html': 'views/mainview/index.html',
      'src/mainview/index.css': 'views/mainview/index.css',
    },
    mac: {
      bundleCEF: false,
    },
    linux: {
      bundleCEF: false,
    },
    win: {
      bundleCEF: false,
    },
  },
};
