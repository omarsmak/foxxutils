/* jshint esnext: false*/
/* global applicationContext*/

'use strict';


/**
 *
 *	Module Dependencies
 *
 */
var console = require('console');
var _ = require('underscore');
var Foxx = require('org/arangodb/foxx');
var db = require('org/arangodb').db;
var col = db._collection('_apps');






/**
 * Load Foxx app by name
 * @param  {string} appName application name
 * @return {FoxxApp}         Foxx App to be loaded
 */
var requireApp = function(appName){
  //get app object
  var appObject = col.byExample({
    'name' : appName
  }).toArray();
  var mountPoint = appObject[0].mount;

  return Foxx.requireApp(mountPoint);
};



/**
 *	Export functions
 */
exports.requireApp = requireApp;
