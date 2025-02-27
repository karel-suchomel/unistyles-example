module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'react-native-unistyles/plugin',
        {
          autoProcessRoot: 'src',
        },
      ],
    ],
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
  }
}
