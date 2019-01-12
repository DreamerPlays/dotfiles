!function(){"use strict";function e(){return{require:"ngModel",restrict:"A",link:function(e,n,t,o){n.bind("change",function(e){o.$setViewValue(e.target.files)})}}}function n(e){return{require:"ngModel",restrict:"A",link:function(n,t,o,i){t.bind("dragover",function(e){e.stopPropagation(),e.preventDefault(),e.originalEvent.dataTransfer.dropEffect="copy"}),t.bind("drop",function(n){n.stopPropagation(),n.preventDefault(),e.trackEvent("OpenDocument_Local_AppDragAndDrop"),i.$setViewValue(n.originalEvent.dataTransfer.files)})}}}function t(e,n){return{restrict:"A",link:function(t,o){o.bind("mousedown keydown keypress",function(t){t.which!==e.JQUERY.EVENT_ID.MOUSEDOWN.LEFT_BUTTON_CLICK&&t.which!==e.JQUERY.EVENT_ID.KEYPRESS.ENTER||(n.trackEvent("OpenDocument_Local"),angular.element(t.currentTarget.parentElement).children("#file_picker").trigger("click"),t.preventDefault())})}}}function o(e,n,t,o,i,s,r,l,c,a){function u(){D.getSignInInfo(function(e){D.hasSignedIn=e,D.hasSignedIn===D.constants.SIGNINSTATUS.HASSIGNININFO&&p()}),D.storage.get("webRedirect_disabled").then(function(e){D.webRedirectInputChecked=!(Utilities.isNotUndefinedOrNull(e.webRedirect_disabled)&&e.webRedirect_disabled)}),o.getEnabledSetting().then(function(e){o.setEnabledSetting(e),D.telemetryInputChecked=e})}function d(){l.getUserPhoto().then(function(e){D.profilePicture=e},function(e){D.profilePicture="",o.info(String.format("PopupController.getUserPhoto: Profile Picture Error - {0}",e))})}function I(e){D.currentViewMode=D.currentViewMode===e?D.constants.MENU_VIEWMODE.NONE:D.currentViewMode=e}function p(){o.debug("PopupController.refreshSignInStatus(): Method start"),D.userService.getUserType().then(function(e){o.debug(String.format("PopupController.getSignInStatus(): hasSignedIn: {0}",e)),o.trackEvent("PopupSignedIn_"+e),n.userType=e,D.hasSignedIn=e===D.constants.USER_TYPE.NONE?D.constants.SIGNINSTATUS.NONE:D.constants.SIGNINSTATUS.SIGNEDIN,D.hasSignedIn===D.constants.SIGNINSTATUS.SIGNEDIN&&(D.userService.waitForUserInfo(e).then(function(e){return Utilities.isUndefinedOrNull(e)?void o.warn("self.UserService.getUserInfo(): userInfo is undefined or null when hasSignedIn is SIGNINSTATUS.SIGNEDIN"):Utilities.isUndefinedOrNull(e.email)?void o.warn("self.UserService.getUserInfo(): userInfo.email is undefined or null when hasSignedIn is SIGNINSTATUS.SIGNEDIN"):void(D.username=e.email)}),d())})}function N(){D.currentViewMode=D.constants.MENU_VIEWMODE.NONE,D.hasSignedIn===D.constants.SIGNINSTATUS.SIGNEDIN&&f()}function S(e){o.trackEvent("PopupSignInLinkClick"),BrowserHandler.runtime.sendMessage({activity:D.constants.ACTIVITY.AUTHENTICATION.NAME,type:e}),window.close()}function f(){o.trackEvent("PopupSignOutLinkClick"),D.userService.logout(n.userType),D.hasSignedIn=D.constants.SIGNINSTATUS.NONE,n.userType=D.constants.USER_TYPE.NONE,r.remove("localRecentDocuments")}function E(){o.trackEvent("PopupSignupLinkClick"),Utilities.navigateToUrlWithNewTab(D.constants.LINKS.SIGNUP,!0)}function U(){D.telemetryInputChecked=!D.telemetryInputChecked,o.setEnabledSetting(D.telemetryInputChecked),o.trackEvent("PopupTelemetryInputChecked",{enabled:D.telemetryInputChecked})}function g(){D.webRedirectInputChecked=!D.webRedirectInputChecked,D.storage.set({webRedirect_disabled:!D.webRedirectInputChecked}),o.trackEvent("PopupWebRedirectChecked",{enabled:D.webRedirectInputChecked})}function T(){Utilities.navigateToUrlWithNewTab(BrowserHandler.extension.getURL(D.constants.LINKS.FEEDBACK_URL),!0)}function O(){D.accountPanelOpened=!D.accountPanelOpened}function P(){o.trackEvent("PopupOpenDocument_"+n.userType),D.userService.getUserInfo(n.userType,function(e){return Utilities.isUndefinedOrNull(e)?void o.warn("PopupController.openDocument(): invalid userInfo"):Utilities.isUndefinedOrNull(e.serviceInfo)||Utilities.isUndefinedOrNull(e.serviceInfo.resource)?void o.warn("PopupController.openDocument(): invalid serviceInfo"):void Utilities.navigateToUrlWithNewTab(e.serviceInfo.resource,!0)})}function C(){D.userService.getUserInfo(n.userType,function(e){return Utilities.isNotUndefinedOrNull(e)&&Utilities.isNotUndefinedOrNull(e.sharePointUrl)?void Utilities.navigateToUrlWithNewTab(e.sharePointUrl,!0):(o.warn("PopupController.openDocument(): invalid sharePointUrl"),void Utilities.navigateToUrlWithNewTab(D.constants.LINKS.APP.SHAREPOINT_DEFAULT,!0))})}function v(){Utilities.navigateToUrlWithNewTab(D.constants.LINKS.OFFICE_HOME_URL,!0)}function h(){Utilities.navigateToUrlWithNewTab(D.constants.LINKS.SUPPORT_URL,!0)}function m(){var e=A()?D.constants.LINKS.MYACCOUNT_O365_URL:D.constants.LINKS.MYACCOUNT_MSA_URL;Utilities.navigateToUrlWithNewTab(e,!0)}function b(){o.trackEvent("PopupBrowseToRecents_"+n.userType),D.userService.getUserInfo(n.userType,function(e){return Utilities.isUndefinedOrNull(e)?void o.warn("PopupController.browseToRecents(): invalid userInfo"):Utilities.isUndefinedOrNull(e.serviceInfo)||Utilities.isUndefinedOrNull(e.serviceInfo.resource)?void o.warn("PopupController.browseToRecents(): invalid serviceInfo"):void Utilities.navigateToUrlWithNewTab(String.format("{0}{1}",e.serviceInfo.resource,A()?"":"/?qt=mru"),!0)})}function L(e,n){o.trackEvent("PopupCreateDocument_"+e.id);var t;if("OneDrive"===e.id)return void P();if("Outlook"===e.id)t=A()?D.constants.LINKS.APP.OUTLOOK_O365:D.constants.LINKS.APP.OUTLOOK_DEFAULT;else{if("SharePoint"===e.id)return void C();t=String.format(e.url,D.hasSignedIn!==D.constants.SIGNINSTATUS.SIGNEDIN?"0":A()?"2":"1")}Utilities.navigateToUrlWithNewTab(t,!(!Utilities.isUndefinedOrNull(n)&&!Utilities.isUndefinedOrNull(n.ctrlKey))||!n.ctrlKey)}function w(){D.loadFile(),o.trackEvent("PopupFileInputChange")}function k(){return o.trackEvent("PopupLoadFile",{filesSelectedCount:D.filesSelected.length}),D.filesSelected.length>1&&o.warn(String.format("loadFile called with {0} files selected",D.filesSelected.length)),D.constants.FILE.SUPPORTED_FILE_TYPES[Utilities.getFileExtension(D.filesSelected[0].name)]?void _(D.filesSelected[0]):(o.info(String.format("PopupController.loadFile(): User attempted to open an unsupported file type of {0} extension",Utilities.getFileExtension(D.filesSelected[0].name))),void a.show(D.constants.NOTIFICATION.UNSUPPORTEDFILETYPE))}function A(){return n.userType===D.constants.USER_TYPE.O365}function _(e){BrowserHandler.extension.getBackgroundPage().postMessage(e,window.location)}var D=this;D.accountPanelOpened=!1,D.filesSelected=null,D.webRedirectInputChecked=!1,D.telemetryInputChecked=!1,D.onLine=!0,D.username="",D.profilePicture="",D.rtl=Utilities.isRTL(),D.isChrome=Utilities.isChrome(),D.onMenuItemClick=I,D.onSignOutClick=N,D.onWelcomeSignInClick=S,D.onProfileClick=O,D.onSignOutLinkClick=f,D.onSignupLinkClick=E,D.onWebRedirectInputChange=g,D.onTelemetryInputChange=U,D.onFileInputChange=w,D.onFeedbackClick=T,D.openDocument=P,D.openOfficeHome=v,D.openSupportPage=h,D.openMyAccountPage=m,D.browseToRecents=b,D.createDocument=L,D.loadFile=k,D.constants=s,D.storage=r,D.userService=l,D.localize=c,D.hasSignedIn=D.constants.SIGNINSTATUS.UNKNOWN,D.currentViewMode=D.constants.MENU_VIEWMODE.NONE,n.userType=D.constants.USER_TYPE.NONE,D.menuItems=[{id:"NewDocument",label:"CreateNewLabel",iconClass:"o365-Icon--circlePlus",viewMode:D.constants.MENU_VIEWMODE.NEW},{id:"OpenDocument",label:"OpenDocumentLabel",iconClass:"o365-Icon--folderOpen",viewMode:D.constants.MENU_VIEWMODE.OPEN},{id:"AccountInfo",label:"AccountLabel",iconClass:"o365-Icon--person2",viewMode:D.constants.MENU_VIEWMODE.ACCOUNT},{id:"Settings",label:"SettingsLabel",iconClass:"o365-Icon--gear",viewMode:D.constants.MENU_VIEWMODE.SETTINGS}],D.appLaunchers=[[{id:"Outlook",label:"OutlookAppName",iconClass:"ms-Icon ms-Icon--OutlookLogo ",colorClass:"outlook_color_fix",url:D.constants.LINKS.APP.OUTLOOK_DEFAULT,isBusinessOnly:!1},{id:"OneDrive",label:"OneDriveAppName",iconClass:"ms-Icon ms-Icon--OneDrive ",colorClass:"oneDrive_color_fix",url:D.constants.LINKS.APP.ONEDRIVE,isBusinessOnly:!1}],[{id:"WordOnline",label:"WordAppName",iconClass:"ms-Icon ms-Icon--WordLogo ",colorClass:"word_color_fix",url:D.constants.LINKS.APP.WORD,isBusinessOnly:!1},{id:"ExcelOnline",label:"ExcelAppName",iconClass:"ms-Icon ms-Icon--ExcelLogo ",colorClass:"excel_color_fix",url:D.constants.LINKS.APP.EXCEL,isBusinessOnly:!1}],[{id:"PowerPointOnline",label:"PowerPointAppName",iconClass:"ms-Icon ms-Icon--PowerPointLogo ",colorClass:"powerpoint_color_fix",url:D.constants.LINKS.APP.POWERPOINT,isBusinessOnly:!1},{id:"OneNoteOnline",label:"OneNoteAppName",iconClass:"ms-Icon ms-Icon--OneNoteLogo ",colorClass:"oneNote_color_fix",url:D.constants.LINKS.APP.ONENOTE,isBusinessOnly:!1}],[{id:"SharePoint",label:"SharePointSiteAppName",iconClass:"ms-Icon ms-Icon--SharepointLogo ",colorClass:"sharepoint_color_fix",url:D.constants.LINKS.APP.SHAREPOINT_DEFAULT,isBusinessOnly:!0},{id:"Teams",label:"TeamsAppName",iconClass:"ms-Icon ms-Icon--TeamsLogo ",colorClass:"teams_color_fix",url:D.constants.LINKS.APP.TEAMS,isBusinessOnly:!0}]],D.filePickers=[{id:D.constants.USER_TYPE.O365,label:"O365FilesLabel",fontClass:"o365-Icon--onedrive",isLocal:!1},{id:D.constants.USER_TYPE.MSA,label:"OneDriveFilesLabel",fontClass:"o365-Icon--onedrive",isLocal:!1},{id:"Local",label:"BrowseToOpenLabel",fontClass:"o365-Icon--desktop",isLocal:!0,isChrome:D.isChrome,isEdge:!1},{id:D.constants.USER_TYPE.O365,label:"UploadToOneDriveBusinessLabel",fontClass:"o365-Icon--desktop",isLocal:!0,isChrome:!1,isEdge:!D.isChrome},{id:D.constants.USER_TYPE.MSA,label:"UploadToOneDriveLabel",fontClass:"o365-Icon--desktop",isLocal:!0,isChrome:!1,isEdge:!D.isChrome}],i.ready(function(){e(function(){o.trackEvent("PopupPageLoad")});for(var n=document.querySelectorAll(".ms-Spinner"),t=0;t<n.length;t++)new fabric.Spinner(n[t]);for(var i=document.querySelectorAll(".ms-CheckBox"),t=0;t<i.length;t++)new fabric.CheckBox(i[t])}),this.getSignInInfo=function(e){o.debug("PopupController.getSignInInfo(): Method start"),D.storage.get("refreshToken").then(function(n){e(Utilities.isNotUndefinedOrNull(n.refreshToken)?D.constants.SIGNINSTATUS.HASSIGNININFO:D.constants.SIGNINSTATUS.NONE)})},u()}angular.module("app.popup",[]).controller("PopupController",["$timeout","$scope","$q","$log","$document","constants","storage","userService","localize","notification",o]).directive("bindFileChange",e).directive("bindDragAndDrop",["$log",n]).directive("bindFileInputContainerClick",["constants","$log",t])}();