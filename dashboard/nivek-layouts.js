'use strict';

// NodeCG injects the '$bundle' variable, which is a jQuery selector targeting all of our bundle's panels.
// To target one specific panel within our bundle, we can use '.filter()'.
var panel = $bundle.filter('.nivek-layouts');

var obsRemote = new OBSRemote();
obsRemote.connect('localhost', 'admin');

console.log(obsRemote);