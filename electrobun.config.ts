export default {
  app: {
    name: 'electrobun-next',
    identifier: 'electrobun-next',
    version: '0.0.1',
  },
  build: {
    views: {
      mainview: {
        entrypoint: 'src/mainview/index.ts',
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
