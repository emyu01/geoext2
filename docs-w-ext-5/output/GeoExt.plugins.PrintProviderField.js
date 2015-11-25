Ext.data.JsonP.GeoExt_plugins_PrintProviderField({"tagname":"class","name":"GeoExt.plugins.PrintProviderField","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"PrintProviderField.js","href":"PrintProviderField.html#GeoExt-plugins-PrintProviderField"}],"aliases":{"widget":["gx_printproviderfield"]},"alternateClassNames":["GeoExt.PrintProviderField"],"extends":"Ext.Base","mixins":["Ext.util.Observable"],"requires":["Ext.form.field.ComboBox","GeoExt.data.MapfishPrintProvider"],"uses":[],"members":[{"name":"printProvider","tagname":"cfg","owner":"GeoExt.plugins.PrintProviderField","id":"cfg-printProvider","meta":{}},{"name":"target","tagname":"property","owner":"GeoExt.plugins.PrintProviderField","id":"property-target","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"GeoExt.plugins.PrintProviderField","id":"method-constructor","meta":{"private":true}},{"name":"init","tagname":"method","owner":"GeoExt.plugins.PrintProviderField","id":"method-init","meta":{"private":true}},{"name":"onBeforeDestroy","tagname":"method","owner":"GeoExt.plugins.PrintProviderField","id":"method-onBeforeDestroy","meta":{"private":true}},{"name":"onFieldChange","tagname":"method","owner":"GeoExt.plugins.PrintProviderField","id":"method-onFieldChange","meta":{"private":true}},{"name":"onProviderChange","tagname":"method","owner":"GeoExt.plugins.PrintProviderField","id":"method-onProviderChange","meta":{"private":true}},{"name":"onRender","tagname":"method","owner":"GeoExt.plugins.PrintProviderField","id":"method-onRender","meta":{"private":true}}],"code_type":"ext_define","id":"class-GeoExt.plugins.PrintProviderField","short_doc":"A plugin for Ext.form.Field components which provides synchronization\nwith a GeoExt.data.MapfishPrintProvider. ...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>GeoExt.PrintProviderField</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>GeoExt.plugins.PrintProviderField</strong></div></div><h4>Mixins</h4><div class='dependency'>Ext.util.Observable</div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.form.field.ComboBox' rel='Ext.form.field.ComboBox' class='docClass'>Ext.form.field.ComboBox</a></div><div class='dependency'><a href='#!/api/GeoExt.data.MapfishPrintProvider' rel='GeoExt.data.MapfishPrintProvider' class='docClass'>GeoExt.data.MapfishPrintProvider</a></div><h4>Files</h4><div class='dependency'><a href='source/PrintProviderField.html#GeoExt-plugins-PrintProviderField' target='_blank'>PrintProviderField.js</a></div></pre><div class='doc-contents'><p>A plugin for <a href=\"#!/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.Field</a> components which provides synchronization\nwith a <a href=\"#!/api/GeoExt.data.MapfishPrintProvider\" rel=\"GeoExt.data.MapfishPrintProvider\" class=\"docClass\">GeoExt.data.MapfishPrintProvider</a>.</p>\n\n<p>A form with combo boxes for layout and resolution, and a text field for a\nmap title. The latter is a custom parameter to the print module, which is\na default for all print pages. For setting custom parameters on the page\nlevel, use <a href=\"#!/api/GeoExt.plugins.PrintPageField\" rel=\"GeoExt.plugins.PrintPageField\" class=\"docClass\">GeoExt.plugins.PrintPageField</a>.</p>\n\n<pre><code>var printProvider = Ext.create('<a href=\"#!/api/GeoExt.data.MapfishPrintProvider\" rel=\"GeoExt.data.MapfishPrintProvider\" class=\"docClass\">GeoExt.data.MapfishPrintProvider</a>', {\n    capabilities: printCapabilities\n});\nExt.create('<a href=\"#!/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.FormPanel</a>', {\n    renderTo: \"form\",\n    width: 200,\n    height: 300,\n    items: [{\n        xtype: \"combo\",\n        displayField: \"name\",\n        store: printProvider.layouts, // printProvider.layout\n        fieldLabel: \"Layout\",\n        typeAhead: true,\n        mode: \"local\",\n        forceSelection: true,\n        triggerAction: \"all\",\n        selectOnFocus: true,\n        plugins: Ext.create('<a href=\"#!/api/GeoExt.plugins.PrintProviderField\" rel=\"GeoExt.plugins.PrintProviderField\" class=\"docClass\">GeoExt.plugins.PrintProviderField</a>', {\n            printProvider: printProvider\n        })\n    }, {\n        xtype: \"combo\",\n        displayField: \"name\",\n        store: printProvider.dpis, // printProvider.dpi\n        fieldLabel: \"Resolution\",\n        typeAhead: true,\n        mode: \"local\",\n        forceSelection: true,\n        triggerAction: \"all\",\n        selectOnFocus: true,\n        plugins: Ext.create('<a href=\"#!/api/GeoExt.plugins.PrintProviderField\" rel=\"GeoExt.plugins.PrintProviderField\" class=\"docClass\">GeoExt.plugins.PrintProviderField</a>', {\n            printProvider: printProvider\n        })\n    }, {\n        xtype: \"textfield\",\n        name: \"mapTitle\", // printProvider.customParams.mapTitle\n        fieldLabel: \"Map Title\",\n        plugins: Ext.create('<a href=\"#!/api/GeoExt.plugins.PrintProviderField\" rel=\"GeoExt.plugins.PrintProviderField\" class=\"docClass\">GeoExt.plugins.PrintProviderField</a>', {\n            printProvider: printProvider\n        })\n    }]\n}):\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-printProvider' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.plugins.PrintProviderField'>GeoExt.plugins.PrintProviderField</span><br/><a href='source/PrintProviderField.html#GeoExt-plugins-PrintProviderField-cfg-printProvider' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.plugins.PrintProviderField-cfg-printProvider' class='name expandable'>printProvider</a> : <a href=\"#!/api/GeoExt.data.MapfishPrintProvider\" rel=\"GeoExt.data.MapfishPrintProvider\" class=\"docClass\">GeoExt.data.MapfishPrintProvider</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The print provider to use with this plugin's field. ...</div><div class='long'><p>The print provider to use with this plugin's field. Not required if set\non the owner container of the field.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-target' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.plugins.PrintProviderField'>GeoExt.plugins.PrintProviderField</span><br/><a href='source/PrintProviderField.html#GeoExt-plugins-PrintProviderField-property-target' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.plugins.PrintProviderField-property-target' class='name expandable'>target</a> : <a href=\"#!/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.Field</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>This plugin's target field.</p>\n</div><div class='long'><p>This plugin's target field.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.plugins.PrintProviderField'>GeoExt.plugins.PrintProviderField</span><br/><a href='source/PrintProviderField.html#GeoExt-plugins-PrintProviderField-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.plugins.PrintProviderField-method-constructor' class='name expandable'>GeoExt.plugins.PrintProviderField</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/GeoExt.plugins.PrintProviderField\" rel=\"GeoExt.plugins.PrintProviderField\" class=\"docClass\">GeoExt.plugins.PrintProviderField</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.plugins.PrintProviderField\" rel=\"GeoExt.plugins.PrintProviderField\" class=\"docClass\">GeoExt.plugins.PrintProviderField</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.plugins.PrintProviderField'>GeoExt.plugins.PrintProviderField</span><br/><a href='source/PrintProviderField.html#GeoExt-plugins-PrintProviderField-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.plugins.PrintProviderField-method-init' class='name expandable'>init</a>( <span class='pre'>target</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.Field</a><div class='sub-desc'><p>The component that this plugin extends.</p>\n</div></li></ul></div></div></div><div id='method-onBeforeDestroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.plugins.PrintProviderField'>GeoExt.plugins.PrintProviderField</span><br/><a href='source/PrintProviderField.html#GeoExt-plugins-PrintProviderField-method-onBeforeDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.plugins.PrintProviderField-method-onBeforeDestroy' class='name expandable'>onBeforeDestroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Private method called during the destroy sequence. ...</div><div class='long'><p>Private method called during the destroy sequence.</p>\n</div></div></div><div id='method-onFieldChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.plugins.PrintProviderField'>GeoExt.plugins.PrintProviderField</span><br/><a href='source/PrintProviderField.html#GeoExt-plugins-PrintProviderField-method-onFieldChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.plugins.PrintProviderField-method-onFieldChange' class='name expandable'>onFieldChange</a>( <span class='pre'>field, record</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handler for the target field's \"change\" or \"select\" event. ...</div><div class='long'><p>Handler for the target field's \"change\" or \"select\" event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : <a href=\"#!/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.Field</a><div class='sub-desc'>\n</div></li><li><span class='pre'>record</span> : Ext.data.Record<div class='sub-desc'><p>Optional.</p>\n</div></li></ul></div></div></div><div id='method-onProviderChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.plugins.PrintProviderField'>GeoExt.plugins.PrintProviderField</span><br/><a href='source/PrintProviderField.html#GeoExt-plugins-PrintProviderField-method-onProviderChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.plugins.PrintProviderField-method-onProviderChange' class='name expandable'>onProviderChange</a>( <span class='pre'>printProvider, rec</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handler for the printProvider's dpichange and layoutchange event. ...</div><div class='long'><p>Handler for the printProvider's dpichange and layoutchange event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>printProvider</span> : <a href=\"#!/api/GeoExt.data.MapfishPrintProvider\" rel=\"GeoExt.data.MapfishPrintProvider\" class=\"docClass\">GeoExt.data.MapfishPrintProvider</a><div class='sub-desc'>\n</div></li><li><span class='pre'>rec</span> : Ext.data.Record<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.plugins.PrintProviderField'>GeoExt.plugins.PrintProviderField</span><br/><a href='source/PrintProviderField.html#GeoExt-plugins-PrintProviderField-method-onRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.plugins.PrintProviderField-method-onRender' class='name expandable'>onRender</a>( <span class='pre'>field</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handler for the target field's \"render\" event. ...</div><div class='long'><p>Handler for the target field's \"render\" event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : Ext.Form.Field<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});