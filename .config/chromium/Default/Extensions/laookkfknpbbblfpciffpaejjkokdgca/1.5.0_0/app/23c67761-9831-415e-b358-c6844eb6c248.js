var fn_addin=function(s,e,i){var l=l||{};l.styles=l.styles||{},l.commands=l.commands||{},l.dependencies=i||l.dependencies||{},l.styles.style=function(){},l.views=l.views||{},l.collect=l.collect||{},l.models=l.models||{},l.templates=l.templates||{},l.info={widget:!0,id:"quicklinks",class:"links",dependencies:["links_common"],label:"Links",appClass:"links-app",region:"top-left",order:"prepend",width:240,height:75,openState:"LinksOpen",keepOpenSetting:"linksKeepOpen",placeholderType:"pane",addin:"23c67761-9831-415e-b358-c6844eb6c248",requiredFeature:["!teamLinks"],toggleEvent:"globalEvent:key:L",closeOnEsc:"true",visibleSetting:"linksVisible"},s.console.log(s.elapsed()+": "+l.info.id+" started");var t=l.dependencies.links_common;return l.views.quicklinks=s.widgetManager.handover("quicklinks",null,{region:"top-left",order:"prepend",bootstrap:function(i,n){function e(e){s.models.customization.get("linksVisible")&&(s.collect.quicklinks=e,s.views.quicklinks=new t.views.QuickLinks({collection:s.collect.quicklinks,region:"top-left",order:"prepend",name:"Links",team:!1,id:"quicklinks",el:i,class:"links"}),n(s.views.quicklinks),s.stopListening(s.models.customization,"change:linksVisible"))}t.info=l.info,s.conditionalFeatures.checkFeatureAndMigrateData("serverlinks","linksVisible","momentum-quicklinks",function(){e(new t.collect.QuickLinks({model:l.models.QuickLink}))},function(){e(new t.collect.QuickLinksLegacy)},function(e){s.listenTo(s.models.customization,"change:linksVisible",e)})}}),l};m.addinManager&&m.addinManager.registerAddinFn("23c67761-9831-415e-b358-c6844eb6c248",fn_addin);