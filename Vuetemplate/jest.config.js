﻿

module.exports = {
    "testEnvironment": 'jsdom',
    "moduleFileExtensions": [
        "js",
        "jsx",
        "json",
        "ts",
        "tsx",
        "vue"
    ],
    "moduleNameMapper": {
        "^@/(.*)$": "<rootDir>/ClientApp/$1",
    },
    "transform": {
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
        ".*\\.(vue)$": "<rootDir>/node_modules/@vue/vue3-jest",
        '^.+\\.tsx?$': "<rootDir>/node_modules/ts-jest",
        '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|avif)$': 'jest-transform-stub'
    },
    "transformIgnorePatterns": ['/node_modules/'],
    "snapshotSerializers": [
        "<rootDir>/node_modules/jest-serializer-vue"
    ],
    "testMatch": [
        "<rootDir>/ClientApp/**/*.spec.(js|jsx|ts|tsx)"
    ],
    "snapshotSerializers": [
        'jest-serializer-vue'
    ],
    "testURL": 'http://localhost/',
    "watchPlugins": [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname",
    ],
    "globals": {
        'ts-jest': {
            "babelConfig": true
        }
    }
}
