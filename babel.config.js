module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          config: './src/config',
          dictionary: './src/dictionary',
          features: './src/features',
          hooks: './src/hooks',
          navigation: './src/navigation',
          screens: './src/screens',
          store: './src/store',
          themes: './src/themes',
          utils: './src/utils',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
