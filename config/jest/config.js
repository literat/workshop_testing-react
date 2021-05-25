module.exports = {
  rootDir: '../../',
  setupFiles: ['./config/jest/setup.js'],
  testEnvironment: 'jsdom',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
