var BrowserHandler=function(){"use strict";var e=null;return"object"==typeof browser?(e=Object.create(browser),e.notifications={clear:function(e,t){t(!1)},create:function(e,t,n){"undefined"!=typeof t&&null!==t&&"undefined"!=typeof t.priority&&null!==t.priority&&t.priority>0&&window.alert(t.message),n(e)},onButtonClicked:{addListener:function(e){}},onClicked:{addListener:function(e){}}},e.runtime.getPlatformInfo=function(e){}):"object"==typeof chrome&&(e=Object.create(chrome)),e}();