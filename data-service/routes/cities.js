/*##############################################################################
# Copyright 2019 IBM Corp. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.
##############################################################################*/
/**
 * Router for cities
 */

var express = require('express');
var router = express.Router();

var datalake = require('../service/datalake');

/* GET list of cities from Data Lake. */
router.get('/', function(req, res, next) {

  var getCityList = datalake.getCityList();
  
 	getCityList.then(function(cities) {
  	res.send({cities:cities});
  }).catch(function(err) {
		res.sendStatus(500);
	})
});

module.exports = router;