/**
 * Copyright © 2016 OpenText Corporation All rights reserved.
 * 
 * The stub data set for datum property values. Include this script before
 * iw_module_api
 */
(function () {

    if (!global) {
      // for server side javascript, global should already be defined for global scope variables
      var global = window;
    }

    if (!global.iw) {
      global.iw = {
        server: {}
      };
    }

    global.iw.local = {
        stubs: [ 
          { "id": "todosTitle"
          , "type": "String"
          , "name": "Todo Title"
          , "min": -1
          , "max": 40
          , "mask": "regular expression"
          , "exposed": true
          , "replicatable": false
          , "value": "My Todo's" },
          { "id": "todosStorage"
          , "type": "String"
          , "name": "Todo Storage"
          , "exposed": false
          , "replicatable": false
          , "value": [] }
        ]
    };
})();
