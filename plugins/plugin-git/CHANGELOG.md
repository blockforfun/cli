# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [6.0.0](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@5.1.0...@blockforfun/plugin-git@6.0.0) (2018-12-13)


### Bug Fixes

* Remove invalid description from git-out-command ([3053c3d](https://github.com/blockforfun/cli/commit/3053c3d))


### Features

* Move json/text export to plugin-git ([826708a](https://github.com/blockforfun/cli/commit/826708a))


### BREAKING CHANGES

* json/text export removed from plugin-export





# [5.1.0](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@5.0.0...@blockforfun/plugin-git@5.1.0) (2018-12-13)


### Features

* Enable output in write:* commands ([b7c6c86](https://github.com/blockforfun/cli/commit/b7c6c86))





# [5.0.0](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@4.3.0...@blockforfun/plugin-git@5.0.0) (2018-12-13)


### Bug Fixes

* Only destroy this.in if it's set ([09bc115](https://github.com/blockforfun/cli/commit/09bc115))


### Features

* Move output argument to flag ([f32a018](https://github.com/blockforfun/cli/commit/f32a018))


### BREAKING CHANGES

* Move the `OUTPUT` argument to  the `-output` flag






# [4.3.0](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@4.2.5...@blockforfun/plugin-git@4.3.0) (2018-12-10)


### Bug Fixes

* Cleanup dead/bad code ([e9187db](https://github.com/blockforfun/cli/commit/e9187db))
* Fix mount log message ordering ([1aa865e](https://github.com/blockforfun/cli/commit/1aa865e))
* recurivelyMakeFile returned invalid tre ([0c4f782](https://github.com/blockforfun/cli/commit/0c4f782))
* saveEntry not saving ([3ce408d](https://github.com/blockforfun/cli/commit/3ce408d))


### Features

* Always redirect output using out.write ([fd0027f](https://github.com/blockforfun/cli/commit/fd0027f))
* Read input from stdin ([909a471](https://github.com/blockforfun/cli/commit/909a471))





## [4.2.5](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@4.2.4...@blockforfun/plugin-git@4.2.5) (2018-12-09)


### Bug Fixes

* Default arfs so finnaly can run before init ([fdf7537](https://github.com/blockforfun/cli/commit/fdf7537))
* Don't steal common aliases ([101205f](https://github.com/blockforfun/cli/commit/101205f))





## [4.2.4](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@4.2.3...@blockforfun/plugin-git@4.2.4) (2018-12-09)

**Note:** Version bump only for package @blockforfun/plugin-git





## [4.2.3](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@4.2.2...@blockforfun/plugin-git@4.2.3) (2018-12-09)


### Bug Fixes

* Default args = {} so finally can safely run before init ([e6ef33c](https://github.com/blockforfun/cli/commit/e6ef33c))





## [4.2.2](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@4.2.1...@blockforfun/plugin-git@4.2.2) (2018-12-09)


### Bug Fixes

* Normalized log messages ([ccb6d3e](https://github.com/blockforfun/cli/commit/ccb6d3e))





## [4.2.1](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@4.2.0...@blockforfun/plugin-git@4.2.1) (2018-12-09)

**Note:** Version bump only for package @blockforfun/plugin-git





# [4.2.0](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@4.1.0...@blockforfun/plugin-git@4.2.0) (2018-12-09)


### Bug Fixes

* Don't forget to stringify before out ([5c9334a](https://github.com/blockforfun/cli/commit/5c9334a))


### Features

* Add output support to delete ([07816bd](https://github.com/blockforfun/cli/commit/07816bd))





# [4.1.0](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@4.0.0...@blockforfun/plugin-git@4.1.0) (2018-12-09)


### Bug Fixes

* compile should check before serializing ([141c6b7](https://github.com/blockforfun/cli/commit/141c6b7))


### Features

* Added delete command(s) ([48940b8](https://github.com/blockforfun/cli/commit/48940b8))





# [4.0.0](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@3.0.0...@blockforfun/plugin-git@4.0.0) (2018-12-08)


### Features

* Added write command to git plugin ([0ab0a37](https://github.com/blockforfun/cli/commit/0ab0a37))


### BREAKING CHANGES

* API changes






# [3.0.0](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@2.0.0...@blockforfun/plugin-git@3.0.0) (2018-11-27)


### Code Refactoring

* Relocate files in and remove lib folder ([901ebb5](https://github.com/blockforfun/cli/commit/901ebb5))


### BREAKING CHANGES

* This changes paths in plugin-git





# [2.0.0](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@1.1.3...@blockforfun/plugin-git@2.0.0) (2018-11-27)


### Bug Fixes

* Update ARGS docs for list:text ([f3d3de1](https://github.com/blockforfun/cli/commit/f3d3de1))


### Features

* Implement read command ([f368823](https://github.com/blockforfun/cli/commit/f368823))
* Slim down listEntries result ([bfd2b5c](https://github.com/blockforfun/cli/commit/bfd2b5c))


### BREAKING CHANGES

* This changes `list:json` output





## [1.1.3](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@1.1.2...@blockforfun/plugin-git@1.1.3) (2018-11-27)


### Bug Fixes

* remove @ from GitHub badge link ([27ca1cb](https://github.com/blockforfun/cli/commit/27ca1cb))





## [1.1.2](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@1.1.1...@blockforfun/plugin-git@1.1.2) (2018-11-27)


### Bug Fixes

* Fix README ([73fc0e8](https://github.com/blockforfun/cli/commit/73fc0e8))





## [1.1.1](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@1.1.0...@blockforfun/plugin-git@1.1.1) (2018-11-27)


### Bug Fixes

* Add description for top-level list command ([e65a60b](https://github.com/blockforfun/cli/commit/e65a60b))
* Clean up README ([ff79d5b](https://github.com/blockforfun/cli/commit/ff79d5b))
* Don't take ownership of list alias ([ea6871c](https://github.com/blockforfun/cli/commit/ea6871c))





# [1.1.0](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@1.0.1...@blockforfun/plugin-git@1.1.0) (2018-11-27)


### Bug Fixes

* No punctuation in descriptions ([ed68e74](https://github.com/blockforfun/cli/commit/ed68e74))
* Remove redundant 'list:text' alias ([9fe1a60](https://github.com/blockforfun/cli/commit/9fe1a60))
* Update wording in plugin descriptions ([fd64806](https://github.com/blockforfun/cli/commit/fd64806))


### Features

* Sort flags when listing entries ([05c4331](https://github.com/blockforfun/cli/commit/05c4331))





## [1.0.1](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@1.0.0...@blockforfun/plugin-git@1.0.1) (2018-11-26)


### Bug Fixes

* Don't expose separate 'list' command in plugin-git ([162e77d](https://github.com/blockforfun/cli/commit/162e77d))





# [1.0.0](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@0.2.2...@blockforfun/plugin-git@1.0.0) (2018-11-26)


### Bug Fixes

* Fix README (again) ([13d36ed](https://github.com/blockforfun/cli/commit/13d36ed))


### Features

* Added json file serialization to plugin-git ([0322337](https://github.com/blockforfun/cli/commit/0322337))
* Restructure plugin-git to sub-commands ([3988ac8](https://github.com/blockforfun/cli/commit/3988ac8))


### BREAKING CHANGES

* This moves the json command to list:json






## [0.2.2](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@0.2.1...@blockforfun/plugin-git@0.2.2) (2018-11-25)


### Bug Fixes

* Rebuild **/README.md ([2db584b](https://github.com/blockforfun/cli/commit/2db584b))






## [0.2.1](https://github.com/blockforfun/cli/compare/@blockforfun/plugin-git@0.2.0...@blockforfun/plugin-git@0.2.1) (2018-11-25)

**Note:** Version bump only for package @blockforfun/plugin-git






# 0.2.0 (2018-11-25)


### Features

* Added json command to plugins-git ([a69d82f](https://github.com/blockforfun/cli/commit/a69d82f))
* Added plugin-git ([e341a6c](https://github.com/blockforfun/cli/commit/e341a6c))
