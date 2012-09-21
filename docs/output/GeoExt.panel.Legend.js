Ext.data.JsonP.GeoExt_panel_Legend({"parentMixins":[],"inheritdoc":null,"extends":"Ext.panel.Panel","alternateClassNames":["GeoExt.LegendPanel"],"requires":["GeoExt.container.LayerLegend"],"tagname":"class","singleton":false,"inheritable":false,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"mixins":[],"code_type":"ext_define","component":false,"uses":[],"members":{"cfg":[{"owner":"GeoExt.panel.Legend","tagname":"cfg","meta":{},"name":"dynamic","id":"cfg-dynamic"},{"owner":"GeoExt.panel.Legend","tagname":"cfg","meta":{},"name":"filter","id":"cfg-filter"},{"owner":"GeoExt.panel.Legend","tagname":"cfg","meta":{},"name":"layerStore","id":"cfg-layerStore"},{"owner":"GeoExt.panel.Legend","tagname":"cfg","meta":{},"name":"preferredTypes","id":"cfg-preferredTypes"}],"method":[{"owner":"GeoExt.panel.Legend","tagname":"method","meta":{"private":true},"name":"addLegend","id":"method-addLegend"},{"owner":"GeoExt.panel.Legend","tagname":"method","meta":{"private":true},"name":"getIdForLayer","id":"method-getIdForLayer"},{"owner":"GeoExt.panel.Legend","tagname":"method","meta":{"private":true},"name":"onDestroy","id":"method-onDestroy"},{"owner":"GeoExt.panel.Legend","tagname":"method","meta":{"private":true},"name":"onRender","id":"method-onRender"},{"owner":"GeoExt.panel.Legend","tagname":"method","meta":{"private":true},"name":"onStoreAdd","id":"method-onStoreAdd"},{"owner":"GeoExt.panel.Legend","tagname":"method","meta":{"private":true},"name":"onStoreClear","id":"method-onStoreClear"},{"owner":"GeoExt.panel.Legend","tagname":"method","meta":{"private":true},"name":"onStoreRemove","id":"method-onStoreRemove"},{"owner":"GeoExt.panel.Legend","tagname":"method","meta":{"private":true},"name":"recordIndexToPanelIndex","id":"method-recordIndexToPanelIndex"},{"owner":"GeoExt.panel.Legend","tagname":"method","meta":{"private":true},"name":"removeAllLegends","id":"method-removeAllLegends"},{"owner":"GeoExt.panel.Legend","tagname":"method","meta":{"private":true},"name":"removeLegend","id":"method-removeLegend"}],"property":[],"css_var":[],"event":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>GeoExt.LegendPanel</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.panel.Panel<div class='subclass '><strong>GeoExt.panel.Legend</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.container.LayerLegend' rel='GeoExt.container.LayerLegend' class='docClass'>GeoExt.container.LayerLegend</a></div><h4>Files</h4><div class='dependency'><a href='source/Legend.html#GeoExt-panel-Legend' target='_blank'>Legend.js</a></div></pre><div class='doc-contents'><p>A panel showing legends of all layers in a layer store.\n Depending on the layer type, a legend renderer will be chosen.</p>\n\n<p> The LegendPanel will include legends for all the layers in the\n <code>layerStore</code> it is configured with, unless the layer is configured with\n <code>displayInLayerSwitcher: false</code>, or a layer record has a\n <code>hideInLegend</code> field with a value of <code>true</code>. Additional filtering can\n be done by configuring a <code>filter</code> on the LegendPanel.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-dynamic' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Legend'>GeoExt.panel.Legend</span><br/><a href='source/Legend.html#GeoExt-panel-Legend-cfg-dynamic' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Legend-cfg-dynamic' class='name expandable'>dynamic</a><span> : Boolean</span></div><div class='description'><div class='short'>If false the LegendPanel will not listen to the add, remove and change\nevents of the LayerStore. ...</div><div class='long'><p>If false the LegendPanel will not listen to the add, remove and change\nevents of the LayerStore. So it will load with the initial state of\nthe LayerStore and not change anymore.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-filter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Legend'>GeoExt.panel.Legend</span><br/><a href='source/Legend.html#GeoExt-panel-Legend-cfg-filter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Legend-cfg-filter' class='name expandable'>filter</a><span> : Function</span></div><div class='description'><div class='short'>A function, called in the scope of the legend panel, with a layer record\nas argument. ...</div><div class='long'><p>A function, called in the scope of the legend panel, with a layer record\nas argument. Is expected to return true for layers to be displayed, false\notherwise. By default, all layers will be displayed.</p>\n</div></div></div><div id='cfg-layerStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Legend'>GeoExt.panel.Legend</span><br/><a href='source/Legend.html#GeoExt-panel-Legend-cfg-layerStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Legend-cfg-layerStore' class='name expandable'>layerStore</a><span> : Ext.data.Store</span></div><div class='description'><div class='short'>The layer store containing layers to be displayed in the legend\ncontainer. ...</div><div class='long'><p>The layer store containing layers to be displayed in the legend\ncontainer. If not provided it will be taken from the MapPanel.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-preferredTypes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Legend'>GeoExt.panel.Legend</span><br/><a href='source/Legend.html#GeoExt-panel-Legend-cfg-preferredTypes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Legend-cfg-preferredTypes' class='name expandable'>preferredTypes</a><span> : Array</span></div><div class='description'><div class='short'>An array of preferred legend types. ...</div><div class='long'><p>An array of preferred legend types.</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addLegend' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Legend'>GeoExt.panel.Legend</span><br/><a href='source/Legend.html#GeoExt-panel-Legend-method-addLegend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Legend-method-addLegend' class='name expandable'>addLegend</a>( <span class='pre'>Ext.data.Record record, Integer index</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Add a legend for the layer. ...</div><div class='long'><p>Add a legend for the layer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Record<div class='sub-desc'><p>The record object from the layer\nstore.</p>\n</div></li><li><span class='pre'>index</span> : Integer<div class='sub-desc'><p>The position at which to add the legend.</p>\n</div></li></ul></div></div></div><div id='method-getIdForLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Legend'>GeoExt.panel.Legend</span><br/><a href='source/Legend.html#GeoExt-panel-Legend-method-getIdForLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Legend-method-getIdForLayer' class='name expandable'>getIdForLayer</a>( <span class='pre'>OpenLayers.Layer layer</span> ) : String<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Generate an element id that is unique to this panel/layer combo. ...</div><div class='long'><p>Generate an element id that is unique to this panel/layer combo.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : OpenLayers.Layer<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onDestroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Legend'>GeoExt.panel.Legend</span><br/><a href='source/Legend.html#GeoExt-panel-Legend-method-onDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Legend-method-onDestroy' class='name expandable'>onDestroy</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Private method called during the destroy sequence. ...</div><div class='long'><p>Private method called during the destroy sequence.</p>\n</div></div></div><div id='method-onRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Legend'>GeoExt.panel.Legend</span><br/><a href='source/Legend.html#GeoExt-panel-Legend-method-onRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Legend-method-onRender' class='name expandable'>onRender</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Private method called when the legend panel is being rendered. ...</div><div class='long'><p>Private method called when the legend panel is being rendered.</p>\n</div></div></div><div id='method-onStoreAdd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Legend'>GeoExt.panel.Legend</span><br/><a href='source/Legend.html#GeoExt-panel-Legend-method-onStoreAdd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Legend-method-onStoreAdd' class='name expandable'>onStoreAdd</a>( <span class='pre'>Ext.data.Store store, Ext.data.Record record, Integer index</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Private method called when a layer is added to the store. ...</div><div class='long'><p>Private method called when a layer is added to the store.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'><p>The store to which the record(s) was\nadded.</p>\n</div></li><li><span class='pre'>record</span> : Ext.data.Record<div class='sub-desc'><p>The record object(s) corresponding\nto the added layers.</p>\n</div></li><li><span class='pre'>index</span> : Integer<div class='sub-desc'><p>The index of the inserted record.</p>\n</div></li></ul></div></div></div><div id='method-onStoreClear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Legend'>GeoExt.panel.Legend</span><br/><a href='source/Legend.html#GeoExt-panel-Legend-method-onStoreClear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Legend-method-onStoreClear' class='name expandable'>onStoreClear</a>( <span class='pre'>Ext.data.Store store</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Private method called when a layer store is cleared. ...</div><div class='long'><p>Private method called when a layer store is cleared.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'><p>The store from which was cleared.</p>\n</div></li></ul></div></div></div><div id='method-onStoreRemove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Legend'>GeoExt.panel.Legend</span><br/><a href='source/Legend.html#GeoExt-panel-Legend-method-onStoreRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Legend-method-onStoreRemove' class='name expandable'>onStoreRemove</a>( <span class='pre'>Ext.data.Store store, Ext.data.Record record, Integer index</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Private method called when a layer is removed from the store. ...</div><div class='long'><p>Private method called when a layer is removed from the store.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'><p>The store from which the record(s) was\nremoved.</p>\n</div></li><li><span class='pre'>record</span> : Ext.data.Record<div class='sub-desc'><p>The record object(s) corresponding\nto the removed layers.</p>\n</div></li><li><span class='pre'>index</span> : Integer<div class='sub-desc'><p>The index of the removed record.</p>\n</div></li></ul></div></div></div><div id='method-recordIndexToPanelIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Legend'>GeoExt.panel.Legend</span><br/><a href='source/Legend.html#GeoExt-panel-Legend-method-recordIndexToPanelIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Legend-method-recordIndexToPanelIndex' class='name expandable'>recordIndexToPanelIndex</a>( <span class='pre'>Integer index</span> ) : Integer<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Private method to get the panel index for a layer represented by a\nrecord. ...</div><div class='long'><p>Private method to get the panel index for a layer represented by a\nrecord.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Integer<div class='sub-desc'><p>The index of the record in the store.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Integer</span><div class='sub-desc'><p>The index of the sub panel in this panel.</p>\n</div></li></ul></div></div></div><div id='method-removeAllLegends' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Legend'>GeoExt.panel.Legend</span><br/><a href='source/Legend.html#GeoExt-panel-Legend-method-removeAllLegends' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Legend-method-removeAllLegends' class='name expandable'>removeAllLegends</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Remove all legends from this legend panel. ...</div><div class='long'><p>Remove all legends from this legend panel.</p>\n</div></div></div><div id='method-removeLegend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.panel.Legend'>GeoExt.panel.Legend</span><br/><a href='source/Legend.html#GeoExt-panel-Legend-method-removeLegend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.panel.Legend-method-removeLegend' class='name expandable'>removeLegend</a>( <span class='pre'>Ext.data.Record record</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Remove the legend of a layer. ...</div><div class='long'><p>Remove the legend of a layer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Record<div class='sub-desc'><p>The record object from the layer\nstore to remove.</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"meta":{},"html_meta":{},"name":"GeoExt.panel.Legend","files":[{"href":"Legend.html#GeoExt-panel-Legend","filename":"Legend.js"}],"mixedInto":[],"aliases":{"widget":["gx_legendpanel"]},"id":"class-GeoExt.panel.Legend","superclasses":["Ext.panel.Panel"]});