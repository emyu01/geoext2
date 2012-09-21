Ext.data.JsonP.GeoExt_tree_LayerContainer({"parentMixins":[],"inheritdoc":null,"extends":"Ext.AbstractPlugin","alternateClassNames":[],"requires":["GeoExt.tree.LayerLoader"],"tagname":"class","singleton":false,"inheritable":false,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"mixins":[],"code_type":"ext_define","component":false,"uses":[],"members":{"cfg":[{"owner":"GeoExt.tree.LayerContainer","tagname":"cfg","meta":{},"name":"loader","id":"cfg-loader"}],"method":[{"owner":"GeoExt.tree.LayerContainer","tagname":"method","meta":{"private":true},"name":"init","id":"method-init"},{"owner":"GeoExt.tree.LayerContainer","tagname":"method","meta":{"private":true},"name":"recordIndexToNodeIndex","id":"method-recordIndexToNodeIndex"}],"property":[{"owner":"GeoExt.tree.LayerContainer","tagname":"property","meta":{"private":true},"name":"defaultText","id":"property-defaultText"}],"css_var":[],"event":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.AbstractPlugin<div class='subclass '><strong>GeoExt.tree.LayerContainer</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.tree.LayerLoader' rel='GeoExt.tree.LayerLoader' class='docClass'>GeoExt.tree.LayerLoader</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/GeoExt.tree.BaseLayerContainer' rel='GeoExt.tree.BaseLayerContainer' class='docClass'>GeoExt.tree.BaseLayerContainer</a></div><div class='dependency'><a href='#!/api/GeoExt.tree.OverlayLayerContainer' rel='GeoExt.tree.OverlayLayerContainer' class='docClass'>GeoExt.tree.OverlayLayerContainer</a></div><h4>Files</h4><div class='dependency'><a href='source/LayerContainer.html#GeoExt-tree-LayerContainer' target='_blank'>LayerContainer.js</a></div></pre><div class='doc-contents'><p>A layer node plugin that will collect all layers of an OpenLayers map. Only\nlayers that have displayInLayerSwitcher set to true will be included.\nThe childrens' iconCls defaults to \"gx-tree-layer-icon\" and this node'\ntext defaults to \"Layers\".</p>\n\n<p>To create a tree node that holds the layers of a tree, it needs to be\nconfigured with the gx_layercontainer plugin that this class provides - like\nthe root node in the example below:</p>\n\n<pre><code>var mapPanel = Ext.create('<a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a>', {\n    layers: [new OpenLayers.Layer('foo)]\n});\n\nvar treeStore = Ext.create('Ext.data.TreeStore', {\n    model: '<a href=\"#!/api/GeoExt.data.LayerTreeModel\" rel=\"GeoExt.data.LayerTreeModel\" class=\"docClass\">GeoExt.data.LayerTreeModel</a>',\n    root: {\n        plugins: [{\n            ptype: 'gx_layercontainer',\n            loader: {store: mapPanel.layers}\n        }],\n        expanded: true\n    }\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-loader' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.LayerContainer'>GeoExt.tree.LayerContainer</span><br/><a href='source/LayerContainer.html#GeoExt-tree-LayerContainer-cfg-loader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.LayerContainer-cfg-loader' class='name expandable'>loader</a><span> : <a href=\"#!/api/GeoExt.tree.LayerLoader\" rel=\"GeoExt.tree.LayerLoader\" class=\"docClass\">GeoExt.tree.LayerLoader</a>/Object</span></div><div class='description'><div class='short'>The loader to use with this container. ...</div><div class='long'><p>The loader to use with this container. If an Object is provided, a\n<a href=\"#!/api/GeoExt.tree.LayerLoader\" rel=\"GeoExt.tree.LayerLoader\" class=\"docClass\">GeoExt.tree.LayerLoader</a>, configured with the the properties from\nthe provided object, will be created. By default, a LayerLoader for\nall layers of the first MapPanel found by the ComponentManager will be\ncreated.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-defaultText' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.LayerContainer'>GeoExt.tree.LayerContainer</span><br/><a href='source/LayerContainer.html#GeoExt-tree-LayerContainer-property-defaultText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.LayerContainer-property-defaultText' class='name expandable'>defaultText</a><span> : String</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>The default text for the target node. ...</div><div class='long'><p>The default text for the target node.</p>\n<p>Defaults to: <code>&quot;Layers&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-init' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.LayerContainer'>GeoExt.tree.LayerContainer</span><br/><a href='source/LayerContainer.html#GeoExt-tree-LayerContainer-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.LayerContainer-method-init' class='name expandable'>init</a>( <span class='pre'>Object target</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-recordIndexToNodeIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.LayerContainer'>GeoExt.tree.LayerContainer</span><br/><a href='source/LayerContainer.html#GeoExt-tree-LayerContainer-method-recordIndexToNodeIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.LayerContainer-method-recordIndexToNodeIndex' class='name expandable'>recordIndexToNodeIndex</a>( <span class='pre'>Number index</span> ) : Number<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The record index in the layer store.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The appropriate child node index for the record.</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":["GeoExt.tree.BaseLayerContainer","GeoExt.tree.OverlayLayerContainer"],"meta":{},"html_meta":{},"name":"GeoExt.tree.LayerContainer","files":[{"href":"LayerContainer.html#GeoExt-tree-LayerContainer","filename":"LayerContainer.js"}],"mixedInto":[],"aliases":{"plugin":["gx_layercontainer"]},"id":"class-GeoExt.tree.LayerContainer","superclasses":["Ext.AbstractPlugin"]});