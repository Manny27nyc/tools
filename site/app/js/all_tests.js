// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var allTests = [
  'claat/ui/cards/cardsorter_test.html',
  'claat/uri/params_test.html',
];

// If we're running in a nodejs context, export tests. Used when running tests
// externally on a CI.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = _allTests;
}
