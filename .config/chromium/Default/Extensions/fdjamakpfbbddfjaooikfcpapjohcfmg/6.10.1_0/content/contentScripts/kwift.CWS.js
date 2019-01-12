/*
 * This script is used by the "manage extension" page to allow the user to
 * uninstall Dashlane directly from the webpage.
 */
(function() {
    var comPort = chrome.extension.connect({
        name : "fromInjectedTo"
    });

    document.getElementById("uninstall-extension").addEventListener('click', function(event) {
        comPort.postMessage("action=uninstallExtension");
    });
})();
