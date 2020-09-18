module.exports = {
  verbose: true,
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ["js", "json", "vue"],
  testMatch: ['**/components/**/*.test.js','**/components/**/*.spec.js', '**/tests/unit/*'],
  transformIgnorePatterns: ["node_modules/(?!(primevue)/)"],
  transform: {
  }
}

