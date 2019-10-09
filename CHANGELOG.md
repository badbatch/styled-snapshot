#### 0.1.14 (2019-10-09)

##### Bug Fixes

*  correcting visit logic to deal with edge cases ([5bae79fa](https://github.com/dylanaubrey/styled-snapshot/commit/5bae79fa0a3d195f663577792370494253c5e9e6))

#### 0.1.13 (2019-10-08)

##### New Features

*  add contextKeySetter to set keys for extracted contexts ([c7423284](https://github.com/dylanaubrey/styled-snapshot/commit/c74232849de396ebd818bbf98b932d7a660ab6f3))

#### 0.1.12 (2019-10-08)

##### Bug Fixes

*  merge context values and then spread ([c5045548](https://github.com/dylanaubrey/styled-snapshot/commit/c50455488b3329067feb5f670f6033517218ae39))

#### 0.1.11 (2019-10-08)

##### Bug Fixes

*  deal with styled components separately ([b2b5599e](https://github.com/dylanaubrey/styled-snapshot/commit/b2b5599eac8fdc9bd28d71dfefd80e75ab55cff5))

#### 0.1.10 (2019-10-01)

##### Bug Fixes

*  add unwrap case for styled components to get children ([03a864a2](https://github.com/dylanaubrey/styled-snapshot/commit/03a864a2b8775bad24e92ea6260d3fe1c274b6ab))

#### 0.1.9 (2019-09-27)

##### Bug Fixes

*  stop unwrapping styled components unless have data attr ([837fc59f](https://github.com/dylanaubrey/styled-snapshot/commit/837fc59fbb00e4d2677d4e8e0c2d96ef70c6bd06))

#### 0.1.8 (2019-09-26)

##### New Features

*  add more logging and make it configurable ([2f10ee77](https://github.com/dylanaubrey/styled-snapshot/commit/2f10ee7707442cbb80d48cc97b1739de76aaa57d))

#### 0.1.7 (2019-09-26)

##### New Features

*  add support for elementsToIgnore list ([75375cab](https://github.com/dylanaubrey/styled-snapshot/commit/75375cab98faeca9521e95036a59fee83a726a6f))

#### 0.1.6 (2019-09-26)

##### New Features

*  add additional logging to unwrap execeptions ([d5bc7481](https://github.com/dylanaubrey/styled-snapshot/commit/d5bc7481eed36a26edda3a7a5e2dec683673b29b))

#### 0.1.5 (2019-09-26)

##### Bug Fixes

*  add name param to toMatchStyledSnapshot function ([dd127d54](https://github.com/dylanaubrey/styled-snapshot/commit/dd127d54002a3fecaa91ecc23d1c92b06531f1ba))

#### 0.1.4 (2019-09-25)

##### Bug Fixes

*  add tsx to extensions for babel to transpile ([0241a628](https://github.com/dylanaubrey/styled-snapshot/commit/0241a628a2dded9fbb9006257cca6a9e719ed744))

#### 0.1.3 (2019-09-25)

##### Bug Fixes

*  add main fields to package.json ([7a2ab9a9](https://github.com/dylanaubrey/styled-snapshot/commit/7a2ab9a91241aa71dcd3acd76fd474345c6bd94f))

#### 0.1.2 (2019-09-24)

##### Bug Fixes

*  add npmignore and missing dependency ([a877eb09](https://github.com/dylanaubrey/styled-snapshot/commit/a877eb09d21e981a193fbefeeee711c8fec67a8f))

#### 0.1.1 (2019-09-24)

##### Bug Fixes

*  remove private field from package.json ([ba61eab8](https://github.com/dylanaubrey/styled-snapshot/commit/ba61eab8064cc1c98630b7112ac32adc35c38ded))
*  variable name change to make purpose clearer ([822c18f3](https://github.com/dylanaubrey/styled-snapshot/commit/822c18f3795cccbbf0852f6ab80c8adfe462cb2c))
*  styled element display in snapshots ([cc529ef0](https://github.com/dylanaubrey/styled-snapshot/commit/cc529ef0c3e56ff2a75351ce7fde684b52101e5f))

### 0.1.0 (2019-09-24)

##### Documentation Changes

*  remove typedoc files and references to docs script ([88290bce](https://github.com/dylanaubrey/styled-snapshot/commit/88290bce364e98cd546320d01240ccd8e5c6585f))
*  generate typedoc files ([30aa0cc2](https://github.com/dylanaubrey/styled-snapshot/commit/30aa0cc2e6f1754b9f7377a740f33c327ec425a7))

##### New Features

*  finish to match styled snapshot ([beb4a244](https://github.com/dylanaubrey/styled-snapshot/commit/beb4a2440f021c421b6cd2f86d75b897563546db))
*  initial commit ([43a9a2df](https://github.com/dylanaubrey/styled-snapshot/commit/43a9a2dfa65c54928e1fbdd58cf9563dcf182af6))
* **collate-css:**  add css collation and finish main file ([ada49f24](https://github.com/dylanaubrey/styled-snapshot/commit/ada49f246bdf83a322751635d04030d5ae63c2ec))
* **unwrap:**
  *  add ignore data attr support ([54ca0d4f](https://github.com/dylanaubrey/styled-snapshot/commit/54ca0d4ff493784493c9f9fd7c6fadf66111df8f))
  *  add unwrap decorator support ([90bab5ab](https://github.com/dylanaubrey/styled-snapshot/commit/90bab5ab606e167178ddf9b8449e4d21cf7e279a))
* **visit:**  add snapshot element to represent certain elements ([4919d035](https://github.com/dylanaubrey/styled-snapshot/commit/4919d035dc7cdd8e3ab53df8be524d5374e58daf))
* **repodog:**  scaffold, install and bootstrap ([7fa152bf](https://github.com/dylanaubrey/styled-snapshot/commit/7fa152bf012607d81a4da16da7a4d18dba73e1b6))

##### Bug Fixes

* **package.json:**
  *  add source maps into compile scripts ([57961414](https://github.com/dylanaubrey/styled-snapshot/commit/5796141457accb6525a5e7a80f98f6be84ad32d6))
  *  remove unnecessary scripts ([ca08a8f7](https://github.com/dylanaubrey/styled-snapshot/commit/ca08a8f78a8035f8b952587fb2d666619b7c1d53))
* **visit:**  change way child nodes are visited ([cea8aa49](https://github.com/dylanaubrey/styled-snapshot/commit/cea8aa4965187c0241dec8a2072b817ce454f062))

##### Tests

* **visit:**  add test for visitor removing props ([9c1c5133](https://github.com/dylanaubrey/styled-snapshot/commit/9c1c51337d0567cb57ceb22db4877a7de489ab9f))

