Ext.data.JsonP.GeoExt_Form({"tagname":"class","name":"GeoExt.Form","autodetected":{},"files":[{"filename":"Form.js","href":"Form.html#GeoExt-Form"}],"singleton":true,"members":[{"name":"CONTAINS","tagname":"property","owner":"GeoExt.Form","id":"property-CONTAINS","meta":{}},{"name":"ENDS_WITH","tagname":"property","owner":"GeoExt.Form","id":"property-ENDS_WITH","meta":{}},{"name":"STARTS_WITH","tagname":"property","owner":"GeoExt.Form","id":"property-STARTS_WITH","meta":{}},{"name":"recordToField","tagname":"method","owner":"GeoExt.Form","id":"method-recordToField","meta":{}},{"name":"toFilter","tagname":"method","owner":"GeoExt.Form","id":"method-toFilter","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-GeoExt.Form","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Form.html#GeoExt-Form' target='_blank'>Form.js</a></div></pre><div class='doc-contents'><p>A set of useful static functions to work with forms.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-CONTAINS' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.Form'>GeoExt.Form</span><br/><a href='source/Form.html#GeoExt-Form-property-CONTAINS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.Form-property-CONTAINS' class='name expandable'>CONTAINS</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Use GeoExt.Form.CONTAINS as the wildcard param to toFilter\nif you want a wildcards to be both prepended and appended ...</div><div class='long'><p>Use <code><a href=\"#!/api/GeoExt.Form-property-CONTAINS\" rel=\"GeoExt.Form-property-CONTAINS\" class=\"docClass\">GeoExt.Form.CONTAINS</a></code> as the <code>wildcard</code> param to <code><a href=\"#!/api/GeoExt.Form-method-toFilter\" rel=\"GeoExt.Form-method-toFilter\" class=\"docClass\">toFilter</a></code>\nif you want a wildcards to be both prepended and appended to LIKE\nfield values.</p>\n<p>Defaults to: <code>3</code></p></div></div></div><div id='property-ENDS_WITH' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.Form'>GeoExt.Form</span><br/><a href='source/Form.html#GeoExt-Form-property-ENDS_WITH' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.Form-property-ENDS_WITH' class='name expandable'>ENDS_WITH</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Use GeoExt.Form.ENDS_WITH as the wildcard param to toFilter\nif you want wildcards to be prepended to LIKE field values. ...</div><div class='long'><p>Use <code><a href=\"#!/api/GeoExt.Form-property-ENDS_WITH\" rel=\"GeoExt.Form-property-ENDS_WITH\" class=\"docClass\">GeoExt.Form.ENDS_WITH</a></code> as the <code>wildcard</code> param to <code><a href=\"#!/api/GeoExt.Form-method-toFilter\" rel=\"GeoExt.Form-method-toFilter\" class=\"docClass\">toFilter</a></code>\nif you want wildcards to be prepended to LIKE field values.</p>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='property-STARTS_WITH' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.Form'>GeoExt.Form</span><br/><a href='source/Form.html#GeoExt-Form-property-STARTS_WITH' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.Form-property-STARTS_WITH' class='name expandable'>STARTS_WITH</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Use GeoExt.Form.STARTS_WITH as the wildcard param to toFilter\nif you want wildcards to be appended to LIKE field values. ...</div><div class='long'><p>Use <code><a href=\"#!/api/GeoExt.Form-property-STARTS_WITH\" rel=\"GeoExt.Form-property-STARTS_WITH\" class=\"docClass\">GeoExt.Form.STARTS_WITH</a></code> as the <code>wildcard</code> param to <code><a href=\"#!/api/GeoExt.Form-method-toFilter\" rel=\"GeoExt.Form-method-toFilter\" class=\"docClass\">toFilter</a></code>\nif you want wildcards to be appended to LIKE field values.</p>\n<p>Defaults to: <code>2</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-recordToField' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.Form'>GeoExt.Form</span><br/><a href='source/Form.html#GeoExt-Form-method-recordToField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.Form-method-recordToField' class='name expandable'>recordToField</a>( <span class='pre'>record, options</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>This function can be used to create an Ext.form.Field from\nan Ext.data.Model object containing name, type,\nrestrictio...</div><div class='long'><p>This function can be used to create an <code><a href=\"#!/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.Field</a></code> from\nan <code>Ext.data.Model</code> object containing <code>name</code>, <code>type</code>,\n<code>restriction</code> and <code>label</code> fields.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'><p>Typically from an Attribute Store.</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>Optional object literal. Valid options:</p>\n\n<ul>\n<li><code>checkboxLabelProperty</code> - <code>String</code> The name of the property\n    used to set the label in the checkbox. Only applies if the\n    record is of the \"boolean\" type. Possible values are \"boxLabel\"\n    and \"fieldLabel\". Default is \"boxLabel\".</li>\n<li><code>mandatoryFieldLabelStyle</code> - <code>String</code> A CSS style specification\n    string to apply to the field label if the field is not nillable\n    (that is, the corresponding record has the \"nillable\" attribute\n    set to <code>false</code>). Default is <code>\"font-weight: bold;\"</code>.</li>\n<li><code>labelTpl</code> - <code>Ext.Template</code> or <code>String</code> or <code>Array</code> If set, the\n    field label is obtained by applying the record's data hash to\n    this  template. This allows for very customizable field labels.</li>\n</ul>\n\n\n<p>See for instance :</p>\n\n<pre><code>var formPanel = Ext.create('<a href=\"#!/api/GeoExt.Form\" rel=\"GeoExt.Form\" class=\"docClass\">GeoExt.Form</a>', {\n    autoScroll: true,\n    attributeStore: store,\n    recordToFieldOptions: {\n        mandatoryFieldLabelStyle: 'font-style:italic;',\n        labelTpl: new Ext.XTemplate(\n            '&lt;span ext:qtip=\"{[this.getTip(values)]}\"&gt;{name}&lt;/span&gt;',\n            {\n                compiled: true,\n                disableFormats: true,\n                getTip: function(v) {\n                    if (!v.type) {\n                        return '';\n                    }\n                    var type = v.type.split(\":\").pop();\n                    return OpenLayers.i18n(type) +\n                        (v.nillable ? '' : ' (required)');\n                }\n            }\n        )\n    }\n});\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p><code>Object</code> An object literal with a xtype property, use\n    <code>Ext.ComponentMgr.create</code> to create an <code><a href=\"#!/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.Field</a></code> from this\n    object.</p>\n</div></li></ul></div></div></div><div id='method-toFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.Form'>GeoExt.Form</span><br/><a href='source/Form.html#GeoExt-Form-method-toFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.Form-method-toFilter' class='name expandable'>toFilter</a>( <span class='pre'>form, logicalOp, wildcard</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Create an OpenLayers.Filter object from an Ext.form.Basic\nor an Ext.form.Panel instance. ...</div><div class='long'><p>Create an <code>OpenLayers.Filter</code> object from an <code><a href=\"#!/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a></code>\nor an <code><a href=\"#!/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a></code> instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>form</span> : Ext.form.Form/Ext.form.Panel<div class='sub-desc'><p>The form.</p>\n</div></li><li><span class='pre'>logicalOp</span> : String<div class='sub-desc'><p>Either <code>OpenLayers.Filter.Logical.AND</code> or\n    <code>OpenLayers.Filter.Logical.OR</code>. If null or undefined, we use\n    <code>OpenLayers.Filter.Logical.AND</code></p>\n</div></li><li><span class='pre'>wildcard</span> : Integer<div class='sub-desc'><p>Determines the wildcard behaviour of LIKE\n    queries. See <a href=\"#!/api/GeoExt.Form-property-ENDS_WITH\" rel=\"GeoExt.Form-property-ENDS_WITH\" class=\"docClass\">ENDS_WITH</a>, <a href=\"#!/api/GeoExt.Form-property-STARTS_WITH\" rel=\"GeoExt.Form-property-STARTS_WITH\" class=\"docClass\">STARTS_WITH</a> and <a href=\"#!/api/GeoExt.Form-property-CONTAINS\" rel=\"GeoExt.Form-property-CONTAINS\" class=\"docClass\">CONTAINS</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p><code>OpenLayers.Filter</code></p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});