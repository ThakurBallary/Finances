module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          api: './src/api',
          assets: './src/assets',
          components: './src/components',
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
