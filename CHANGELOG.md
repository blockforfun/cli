# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [10.0.0](https://github.com/blockforfun/cli/compare/@blockforfun/cli@9.1.0...@blockforfun/cli@10.0.0) (2018-12-13)


### Bug Fixes

* Remove invalid description from git-out-command ([3053c3d](https://github.com/blockforfun/cli/commit/3053c3d))


### Features

* Move json/text export to plugin-git ([826708a](https://github.com/blockforfun/cli/commit/826708a))


### BREAKING CHANGES

* json/text export removed from plugin-export





# [9.1.0](https://github.com/blockforfun/cli/compare/@blockforfun/cli@9.0.0...@blockforfun/cli@9.1.0) (2018-12-13)


### Features

* Enable output in write:* commands ([b7c6c86](https://github.com/blockforfun/cli/commit/b7c6c86))





# [9.0.0](https://github.com/blockforfun/cli/compare/@blockforfun/cli@8.3.0...@blockforfun/cli@9.0.0) (2018-12-13)


### Bug Fixes

* Only destroy this.in if it's set ([09bc115](https://github.com/blockforfun/cli/commit/09bc115))
* remove repo ([005d26f](https://github.com/blockforfun/cli/commit/005d26f))


### Features

* Move output argument to flag ([f32a018](https://github.com/blockforfun/cli/commit/f32a018))


### BREAKING CHANGES

* Move the `OUTPUT` argument to  the `-output` flag






# [8.3.0](https://github.com/blockforfun/cli/compare/@blockforfun/cli@8.2.5...@blockforfun/cli@8.3.0) (2018-12-10)


### Bug Fixes

* Cleanup dead/bad code ([e9187db](https://github.com/blockforfun/cli/commit/e9187db))
* Fix mount log message ordering ([1aa865e](https://github.com/blockforfun/cli/commit/1aa865e))
* recurivelyMakeFile returned invalid tre ([0c4f782](https://github.com/blockforfun/cli/commit/0c4f782))
* saveEntry not saving ([3ce408d](https://github.com/blockforfun/cli/commit/3ce408d))


### Features

* Always redirect output using out.write ([fd0027f](https://github.com/blockforfun/cli/commit/fd0027f))
* Read input from stdin ([909a471](https://github.com/blockforfun/cli/commit/909a471))





## [8.2.5](https://github.com/blockforfun/cli/compare/@blockforfun/cli@8.2.4...@blockforfun/cli@8.2.5) (2018-12-09)


### Bug Fixes

* Default arfs so finnaly can run before init ([fdf7537](https://github.com/blockforfun/cli/commit/fdf7537))
* Don't steal common aliases ([101205f](https://github.com/blockforfun/cli/commit/101205f))





## [8.2.4](https://github.com/blockforfun/cli/compare/@blockforfun/cli@8.2.3...@blockforfun/cli@8.2.4) (2018-12-09)

**Note:** Version bump only for package @blockforfun/cli





## [8.2.3](https://github.com/blockforfun/cli/compare/@blockforfun/cli@8.2.2...@blockforfun/cli@8.2.3) (2018-12-09)


### Bug Fixes

* Default args = {} so finally can safely run before init ([e6ef33c](https://github.com/blockforfun/cli/commit/e6ef33c))





## [8.2.2](https://github.com/blockforfun/cli/compare/@blockforfun/cli@8.2.1...@blockforfun/cli@8.2.2) (2018-12-09)


### Bug Fixes

* Normalized log messages ([ccb6d3e](https://github.com/blockforfun/cli/commit/ccb6d3e))





## [8.2.1](https://github.com/blockforfun/cli/compare/@blockforfun/cli@8.2.0...@blockforfun/cli@8.2.1) (2018-12-09)

**Note:** Version bump only for package @blockforfun/cli





# [8.2.0](https://github.com/blockforfun/cli/compare/@blockforfun/cli@8.1.0...@blockforfun/cli@8.2.0) (2018-12-09)


### Bug Fixes

* Don't forget to stringify before out ([5c9334a](https://github.com/blockforfun/cli/commit/5c9334a))


### Features

* Add output support to delete ([07816bd](https://github.com/blockforfun/cli/commit/07816bd))





# [8.1.0](https://github.com/blockforfun/cli/compare/@blockforfun/cli@8.0.0...@blockforfun/cli@8.1.0) (2018-12-09)


### Bug Fixes

* compile should check before serializing ([141c6b7](https://github.com/blockforfun/cli/commit/141c6b7))


### Features

* Added delete command(s) ([48940b8](https://github.com/blockforfun/cli/commit/48940b8))





# [8.0.0](https://github.com/blockforfun/cli/compare/@blockforfun/cli@7.0.0...@blockforfun/cli@8.0.0) (2018-12-08)


### Features

* Added write command to git plugin ([0ab0a37](https://github.com/blockforfun/cli/commit/0ab0a37))
* Rename build plugin to export ([2653c2f](https://github.com/blockforfun/cli/commit/2653c2f))


### BREAKING CHANGES

* plugin-build is now plugin-export
* API changes





# [7.0.0](https://github.com/blockforfun/cli/compare/@blockforfun/cli@6.0.0...@blockforfun/cli@7.0.0) (2018-11-27)


### Code Refactoring

* Relocate files in and remove lib folder ([901ebb5](https://github.com/blockforfun/cli/commit/901ebb5))


### BREAKING CHANGES

* This changes paths in plugin-git





# [6.0.0](https://github.com/blockforfun/cli/compare/@blockforfun/cli@5.0.2...@blockforfun/cli@6.0.0) (2018-11-27)


### Bug Fixes

* Update ARGS docs for list:text ([f3d3de1](https://github.com/blockforfun/cli/commit/f3d3de1))


### Features

* Implement read command ([f368823](https://github.com/blockforfun/cli/commit/f368823))
* Slim down listEntries result ([bfd2b5c](https://github.com/blockforfun/cli/commit/bfd2b5c))


### BREAKING CHANGES

* This changes `list:json` output





## [5.0.2](https://github.com/blockforfun/cli/compare/@blockforfun/cli@5.0.1...@blockforfun/cli@5.0.2) (2018-11-27)


### Bug Fixes

* remove @ from GitHub badge link ([27ca1cb](https://github.com/blockforfun/cli/commit/27ca1cb))





## [5.0.1](https://github.com/blockforfun/cli/compare/@blockforfun/cli@5.0.0...@blockforfun/cli@5.0.1) (2018-11-27)


### Bug Fixes

* Fix README ([73fc0e8](https://github.com/blockforfun/cli/commit/73fc0e8))





# [5.0.0](https://github.com/blockforfun/cli/compare/@blockforfun/cli@4.1.0...@blockforfun/cli@5.0.0) (2018-11-27)


### Bug Fixes

* Add description for top-level list command ([e65a60b](https://github.com/blockforfun/cli/commit/e65a60b))
* Clean up README ([ff79d5b](https://github.com/blockforfun/cli/commit/ff79d5b))
* Don't take ownership of list alias ([ea6871c](https://github.com/blockforfun/cli/commit/ea6871c))


### Features

* Move build command to build:sqlite ([54b300f](https://github.com/blockforfun/cli/commit/54b300f))


### BREAKING CHANGES

* This moves the `build` command to `build:sqlite`





# [4.1.0](https://github.com/blockforfun/cli/compare/@blockforfun/cli@4.0.2...@blockforfun/cli@4.1.0) (2018-11-27)


### Bug Fixes

* No punctuation in descriptions ([ed68e74](https://github.com/blockforfun/cli/commit/ed68e74))
* Remove redundant 'list:text' alias ([9fe1a60](https://github.com/blockforfun/cli/commit/9fe1a60))
* Update wording in plugin descriptions ([fd64806](https://github.com/blockforfun/cli/commit/fd64806))


### Features

* Sort flags when listing entries ([05c4331](https://github.com/blockforfun/cli/commit/05c4331))





## [4.0.2](https://github.com/blockforfun/cli/compare/@blockforfun/cli@4.0.1...@blockforfun/cli@4.0.2) (2018-11-26)


### Bug Fixes

* Don't expose separate 'list' command in plugin-git ([162e77d](https://github.com/blockforfun/cli/commit/162e77d))
* Unfuxk README ([46e56f2](https://github.com/blockforfun/cli/commit/46e56f2))
* Use version ranges for plugins ([655c853](https://github.com/blockforfun/cli/commit/655c853))





## [4.0.1](https://github.com/blockforfun/cli/compare/@blockforfun/cli@4.0.0...@blockforfun/cli@4.0.1) (2018-11-26)


### Bug Fixes

* Update plugin versions ([b14adf0](https://github.com/blockforfun/cli/commit/b14adf0))





# [4.0.0](https://github.com/blockforfun/cli/compare/@blockforfun/cli@3.0.1...@blockforfun/cli@4.0.0) (2018-11-26)


### Bug Fixes

* Fix README (again) ([13d36ed](https://github.com/blockforfun/cli/commit/13d36ed))


### Features

* Added json file serialization to plugin-git ([0322337](https://github.com/blockforfun/cli/commit/0322337))
* Restructure plugin-git to sub-commands ([3988ac8](https://github.com/blockforfun/cli/commit/3988ac8))


### BREAKING CHANGES

* This moves the json command to list:json






## [3.0.1](https://github.com/blockforfun/cli/compare/@blockforfun/cli@3.0.0...@blockforfun/cli@3.0.1) (2018-11-25)


### Bug Fixes

* Rebuild **/README.md ([2db584b](https://github.com/blockforfun/cli/commit/2db584b))






# 3.0.0 (2018-11-25)


### Bug Fixes

* Add root project to lerna packages ([884df53](https://github.com/blockforfun/cli/commit/884df53))


### Features

* Added json command to plugins-git ([a69d82f](https://github.com/blockforfun/cli/commit/a69d82f))
* Start managing monorepo with lerna ([d91a761](https://github.com/blockforfun/cli/commit/d91a761))
* Use lerna for release management ([e5ceb9d](https://github.com/blockforfun/cli/commit/e5ceb9d))



# 2.0.0 (2018-11-25)


### Features

* Normalize ARGS order across plugins ([c4861e9](https://github.com/blockforfun/cli/commit/c4861e9))
* Update README ([1bebfa0](https://github.com/blockforfun/cli/commit/1bebfa0))


### BREAKING CHANGES

* This changes the orde of SOURCE and TARGET for plugin-build



# 1.2.0 (2018-11-25)


### Bug Fixes

* Corrected cli homepage ([3e831c9](https://github.com/blockforfun/cli/commit/3e831c9))


### Features

* Add plugin-git to CLI ([8d9135c](https://github.com/blockforfun/cli/commit/8d9135c))
* Added plugin-git ([e341a6c](https://github.com/blockforfun/cli/commit/e341a6c))



## 1.1.1 (2018-11-25)


### Bug Fixes

* Update homepage in **/package.json ([60cfb60](https://github.com/blockforfun/cli/commit/60cfb60))



# 1.1.0 (2018-11-25)


### Bug Fixes

* Don't lint node_modules ([21cf532](https://github.com/blockforfun/cli/commit/21cf532))


### Features

* Added plugin-build ([61b0803](https://github.com/blockforfun/cli/commit/61b0803))
* Use plugin-build ([0a548ef](https://github.com/blockforfun/cli/commit/0a548ef))



## 1.0.4 (2018-11-24)


### Bug Fixes

* Don't capitalize build command description ([4ab1ba9](https://github.com/blockforfun/cli/commit/4ab1ba9))
* Fix git url in package.json ([58d5d47](https://github.com/blockforfun/cli/commit/58d5d47))



## 1.0.3 (2018-11-24)


### Bug Fixes

* Make babel-runtime a runtime dep ([b3caa54](https://github.com/blockforfun/cli/commit/b3caa54))



## 1.0.2 (2018-11-24)


### Bug Fixes

* Move non-command sources into lib ([bba3bd1](https://github.com/blockforfun/cli/commit/bba3bd1))



## 1.0.1 (2018-11-24)


### Bug Fixes

* Make sure to package commands ([3f7e474](https://github.com/blockforfun/cli/commit/3f7e474))



# 1.0.0 (2018-11-24)


### Code Refactoring

* Return number as array from listEntries ([3e587ed](https://github.com/blockforfun/cli/commit/3e587ed))


### Features

* Upgraded to OCLIF ([e6813ad](https://github.com/blockforfun/cli/commit/e6813ad))


### BREAKING CHANGES

* This CLI arguments - beware
* This breaks the shape of emitted entries from `listEntries`



# 0.0.0 (2018-11-24)


### Features

* Added README ([f71090e](https://github.com/blockforfun/cli/commit/f71090e))
* Detect invalid REF ([f1671b2](https://github.com/blockforfun/cli/commit/f1671b2))
* Exit with errorCode ([bbeb76d](https://github.com/blockforfun/cli/commit/bbeb76d))
* Use standard-version for release management ([65a3263](https://github.com/blockforfun/cli/commit/65a3263))





# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.0"></a>
# [2.0.0](https://github.com/blockforfun/cli/compare/v1.2.0...v2.0.0) (2018-11-25)


### Features

* Normalize ARGS order across plugins ([c4861e9](https://github.com/blockforfun/cli/commit/c4861e9))
* Update README ([1bebfa0](https://github.com/blockforfun/cli/commit/1bebfa0))


### BREAKING CHANGES

* This changes the orde of SOURCE and TARGET for plugin-build



<a name="1.2.0"></a>
# [1.2.0](https://github.com/blockforfun/cli/compare/v1.1.1...v1.2.0) (2018-11-25)


### Bug Fixes

* Corrected cli homepage ([3e831c9](https://github.com/blockforfun/cli/commit/3e831c9))


### Features

* Add plugin-git to CLI ([8d9135c](https://github.com/blockforfun/cli/commit/8d9135c))
* Added plugin-git ([e341a6c](https://github.com/blockforfun/cli/commit/e341a6c))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/blockforfun/cli/compare/v1.1.0...v1.1.1) (2018-11-25)


### Bug Fixes

* Update homepage in **/package.json ([60cfb60](https://github.com/blockforfun/cli/commit/60cfb60))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/blockforfun/cli/compare/v1.0.4...v1.1.0) (2018-11-25)


### Bug Fixes

* Don't lint node_modules ([21cf532](https://github.com/blockforfun/cli/commit/21cf532))


### Features

* Added plugin-build ([61b0803](https://github.com/blockforfun/cli/commit/61b0803))
* Use plugin-build ([0a548ef](https://github.com/blockforfun/cli/commit/0a548ef))



<a name="1.0.4"></a>
## [1.0.4](https://github.com/blockforfun/cli/compare/v1.0.3...v1.0.4) (2018-11-24)


### Bug Fixes

* Don't capitalize build command description ([4ab1ba9](https://github.com/blockforfun/cli/commit/4ab1ba9))
* Fix git url in package.json ([58d5d47](https://github.com/blockforfun/cli/commit/58d5d47))



<a name="1.0.3"></a>
## [1.0.3](https://github.com/blockforfun/registry/compare/v1.0.2...v1.0.3) (2018-11-24)


### Bug Fixes

* Make babel-runtime a runtime dep ([b3caa54](https://github.com/blockforfun/registry/commit/b3caa54))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/blockforfun/registry/compare/v1.0.1...v1.0.2) (2018-11-24)


### Bug Fixes

* Move non-command sources into lib ([bba3bd1](https://github.com/blockforfun/registry/commit/bba3bd1))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/blockforfun/registry/compare/v1.0.0...v1.0.1) (2018-11-24)


### Bug Fixes

* Make sure to package commands ([3f7e474](https://github.com/blockforfun/registry/commit/3f7e474))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/blockforfun/registry/compare/v0.0.0...v1.0.0) (2018-11-24)


### Code Refactoring

* Return number as array from listEntries ([3e587ed](https://github.com/blockforfun/registry/commit/3e587ed))


### Features

* Upgraded to OCLIF ([e6813ad](https://github.com/blockforfun/registry/commit/e6813ad))


### BREAKING CHANGES

* This CLI arguments - beware
* This breaks the shape of emitted entries from `listEntries`



<a name="0.0.0"></a>
# 0.0.0 (2018-11-24)


### Features

* Added README ([f71090e](https://github.com/blockforfun/registry/commit/f71090e))
* Detect invalid REF ([f1671b2](https://github.com/blockforfun/registry/commit/f1671b2))
* Exit with errorCode ([bbeb76d](https://github.com/blockforfun/registry/commit/bbeb76d))
* Use standard-version for release management ([65a3263](https://github.com/blockforfun/registry/commit/65a3263))
