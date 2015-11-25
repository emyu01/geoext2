Ext.data.JsonP.GeoExt_slider_LayerOpacity({"tagname":"class","name":"GeoExt.slider.LayerOpacity","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"LayerOpacity.js","href":"LayerOpacity.html#GeoExt-slider-LayerOpacity"}],"aliases":{"widget":["gx_opacityslider"]},"alternateClassNames":["GeoExt.LayerOpacitySlider"],"extends":"GeoExt.slider.MapPanelItem","mixins":[],"requires":["GeoExt.data.LayerModel"],"uses":[],"members":[{"name":"aggressive","tagname":"cfg","owner":"GeoExt.slider.LayerOpacity","id":"cfg-aggressive","meta":{}},{"name":"changeVisibility","tagname":"cfg","owner":"GeoExt.slider.LayerOpacity","id":"cfg-changeVisibility","meta":{}},{"name":"changeVisibilityDelay","tagname":"cfg","owner":"GeoExt.slider.LayerOpacity","id":"cfg-changeVisibilityDelay","meta":{}},{"name":"complementaryLayer","tagname":"cfg","owner":"GeoExt.slider.LayerOpacity","id":"cfg-complementaryLayer","meta":{}},{"name":"delay","tagname":"cfg","owner":"GeoExt.slider.LayerOpacity","id":"cfg-delay","meta":{}},{"name":"inverse","tagname":"cfg","owner":"GeoExt.slider.LayerOpacity","id":"cfg-inverse","meta":{}},{"name":"layer","tagname":"cfg","owner":"GeoExt.slider.LayerOpacity","id":"cfg-layer","meta":{}},{"name":"thumbHeight","tagname":"cfg","owner":"GeoExt.slider.MapPanelItem","id":"cfg-thumbHeight","meta":{}},{"name":"thumbWidth","tagname":"cfg","owner":"GeoExt.slider.MapPanelItem","id":"cfg-thumbWidth","meta":{}},{"name":"value","tagname":"cfg","owner":"GeoExt.slider.LayerOpacity","id":"cfg-value","meta":{}},{"name":"resizingDelayMS","tagname":"property","owner":"GeoExt.slider.MapPanelItem","id":"property-resizingDelayMS","meta":{"protected":true}},{"name":"constructor","tagname":"method","owner":"GeoExt.slider.LayerOpacity","id":"method-constructor","meta":{"private":true}},{"name":"addToMapPanel","tagname":"method","owner":"GeoExt.slider.MapPanelItem","id":"method-addToMapPanel","meta":{"protected":true}},{"name":"bindMap","tagname":"method","owner":"GeoExt.slider.LayerOpacity","id":"method-bindMap","meta":{"private":true}},{"name":"changeComplementaryLayerVisibility","tagname":"method","owner":"GeoExt.slider.LayerOpacity","id":"method-changeComplementaryLayerVisibility","meta":{"private":true}},{"name":"changeLayerOpacity","tagname":"method","owner":"GeoExt.slider.LayerOpacity","id":"method-changeLayerOpacity","meta":{"private":true}},{"name":"changeLayerVisibility","tagname":"method","owner":"GeoExt.slider.LayerOpacity","id":"method-changeLayerVisibility","meta":{"private":true}},{"name":"getLayer","tagname":"method","owner":"GeoExt.slider.LayerOpacity","id":"method-getLayer","meta":{"private":true}},{"name":"getOpacityValue","tagname":"method","owner":"GeoExt.slider.LayerOpacity","id":"method-getOpacityValue","meta":{"private":true}},{"name":"initComponent","tagname":"method","owner":"GeoExt.slider.LayerOpacity","id":"method-initComponent","meta":{"private":true}},{"name":"removeFromMapPanel","tagname":"method","owner":"GeoExt.slider.MapPanelItem","id":"method-removeFromMapPanel","meta":{"protected":true}},{"name":"setLayer","tagname":"method","owner":"GeoExt.slider.LayerOpacity","id":"method-setLayer","meta":{}},{"name":"stopMouseEvents","tagname":"method","owner":"GeoExt.slider.MapPanelItem","id":"method-stopMouseEvents","meta":{"private":true}},{"name":"unbindMap","tagname":"method","owner":"GeoExt.slider.LayerOpacity","id":"method-unbindMap","meta":{"private":true}},{"name":"update","tagname":"method","owner":"GeoExt.slider.LayerOpacity","id":"method-update","meta":{"private":true}}],"code_type":"ext_define","id":"class-GeoExt.slider.LayerOpacity","short_doc":"Create a slider to control the opacity of a layer. ...","component":false,"superclasses":["Ext.slider.Single","GeoExt.slider.MapPanelItem"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>GeoExt.LayerOpacitySlider</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.slider.Single<div class='subclass '><a href='#!/api/GeoExt.slider.MapPanelItem' rel='GeoExt.slider.MapPanelItem' class='docClass'>GeoExt.slider.MapPanelItem</a><div class='subclass '><strong>GeoExt.slider.LayerOpacity</strong></div></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.data.LayerModel' rel='GeoExt.data.LayerModel' class='docClass'>GeoExt.data.LayerModel</a></div><h4>Files</h4><div class='dependency'><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity' target='_blank'>LayerOpacity.js</a></div></pre><div class='doc-contents'><p>Create a slider to control the opacity of a layer.</p>\n\n<p>Sample code to render a slider outside the map viewport:</p>\n\n<pre><code>var slider = Ext.create('<a href=\"#!/api/GeoExt.slider.LayerOpacity\" rel=\"GeoExt.slider.LayerOpacity\" class=\"docClass\">GeoExt.slider.LayerOpacity</a>', {\n    renderTo: Ext.getBody(),\n    width: 200,\n    layer: layer\n});\n</code></pre>\n\n<p>Sample code to add a slider to a map panel:</p>\n\n<pre><code>var layer = new OpenLayers.Layer.WMS(\n    \"Global Imagery\",\n    \"http://maps.opengeo.org/geowebcache/service/wms\",\n     {layers: \"bluemarble\"}\n);\nvar panel = Ext.create('<a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a>', {\n    renderTo: document.body,\n    height: 300,\n    width: 400,\n    map: {\n        controls: [new OpenLayers.Control.Navigation()]\n    },\n    layers: [layer],\n    extent: [-5, 35, 15, 55],\n    items: [{\n        xtype: \"gx_opacityslider\",\n        layer: layer,\n        aggressive: true,\n        vertical: true,\n        height: 100,\n        x: 10,\n        y: 20\n    }]\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-aggressive' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-aggressive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-aggressive' class='name expandable'>aggressive</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If set to true, the opacity is changed as soon as the thumb is moved. ...</div><div class='long'><p>If set to true, the opacity is changed as soon as the thumb is moved.\nOtherwise when the thumb is released (default).</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-changeVisibility' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-changeVisibility' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-changeVisibility' class='name expandable'>changeVisibility</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If set to true, the layer's visibility is handled by the\nslider, the slider makes the layer invisible when its\nvalue ...</div><div class='long'><p>If set to true, the layer's visibility is handled by the\nslider, the slider makes the layer invisible when its\nvalue is changed to the min value, and makes the layer\nvisible again when its value goes from the min value\nto some other value. The layer passed to the constructor\nmust be visible, as its visibility is fully handled by\nthe slider. Defaults to false.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-changeVisibilityDelay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-changeVisibilityDelay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-changeVisibilityDelay' class='name expandable'>changeVisibilityDelay</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Time in milliseconds before changing the layer's visibility. ...</div><div class='long'><p>Time in milliseconds before changing the layer's visibility.\nIf the value changes again within that time, the layer's visibility\nchange does not occur. Only applicable if changeVisibility is true.\nDefaults to 5.</p>\n<p>Defaults to: <code>5</code></p></div></div></div><div id='cfg-complementaryLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-complementaryLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-complementaryLayer' class='name expandable'>complementaryLayer</a> : OpenLayers.Layer/<a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerModel</a><span class=\"signature\"></span></div><div class='description'><div class='short'>If provided, a layer that will be made invisible (its visibility is\nset to false) when the slider value is set to its...</div><div class='long'><p>If provided, a layer that will be made invisible (its visibility is\nset to false) when the slider value is set to its max value. If this\nslider is used to fade visibility between to layers, setting\n<code>complementaryLayer</code> and <code>changeVisibility</code> will make sure that\nonly visible tiles are loaded when the slider is set to its min or max\nvalue. (optional)</p>\n</div></div></div><div id='cfg-delay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-delay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-delay' class='name expandable'>delay</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Time in milliseconds before setting the opacity value to the\nlayer. ...</div><div class='long'><p>Time in milliseconds before setting the opacity value to the\nlayer. If the value change again within that time, the original value\nis not set. Only applicable if aggressive is true.</p>\n<p>Defaults to: <code>5</code></p></div></div></div><div id='cfg-inverse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-inverse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-inverse' class='name expandable'>inverse</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If true, we will work with transparency instead of with opacity. ...</div><div class='long'><p>If true, we will work with transparency instead of with opacity.\nDefaults to false.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-layer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-layer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-layer' class='name expandable'>layer</a> : OpenLayers.Layer/<a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerModel</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The layer this slider changes the opacity of. ...</div><div class='long'><p>The layer this slider changes the opacity of. (required)</p>\n</div></div></div><div id='cfg-thumbHeight' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.slider.MapPanelItem' rel='GeoExt.slider.MapPanelItem' class='defined-in docClass'>GeoExt.slider.MapPanelItem</a><br/><a href='source/MapPanelItem.html#GeoExt-slider-MapPanelItem-cfg-thumbHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.MapPanelItem-cfg-thumbHeight' class='name expandable'>thumbHeight</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The height in pixels of the slider thumb. ...</div><div class='long'><p>The height in pixels of the slider thumb. Will be used when we need to\nmanually resize ourself in case we are added to a mappanel. This will\nbe the height of the element containing the thumb when we are rendered\nhorizontally (see #vertical).</p>\n\n<p>This value shouldn't usually be adjusted, when the default stylesheet of\nExtJS is used.</p>\n<p>Defaults to: <code>14</code></p></div></div></div><div id='cfg-thumbWidth' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.slider.MapPanelItem' rel='GeoExt.slider.MapPanelItem' class='defined-in docClass'>GeoExt.slider.MapPanelItem</a><br/><a href='source/MapPanelItem.html#GeoExt-slider-MapPanelItem-cfg-thumbWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.MapPanelItem-cfg-thumbWidth' class='name expandable'>thumbWidth</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The width in pixels of the slider thumb. ...</div><div class='long'><p>The width in pixels of the slider thumb. Will be used when we need to\nmanually resize ourself in case we are added to a mappanel. This will\nbe the width of the element containing the thumb when we are rendered\nvertically (see #vertical).</p>\n\n<p>This value shouldn't usually be adjusted, when the default stylesheet of\nExtJS is used.</p>\n<p>Defaults to: <code>15</code></p></div></div></div><div id='cfg-value' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-value' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-value' class='name expandable'>value</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The value to initialize the slider with. ...</div><div class='long'><p>The value to initialize the slider with. This value is\ntaken into account only if the layer's opacity is null.\nIf the layer's opacity is null and this value is not\ndefined in the config object then the slider initializes\nit to the max value.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-resizingDelayMS' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.slider.MapPanelItem' rel='GeoExt.slider.MapPanelItem' class='defined-in docClass'>GeoExt.slider.MapPanelItem</a><br/><a href='source/MapPanelItem.html#GeoExt-slider-MapPanelItem-property-resizingDelayMS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.MapPanelItem-property-resizingDelayMS' class='name expandable'>resizingDelayMS</a> : Number<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>The number of milliseconds to wait (after rendering the slider) before\nresizing of the slider happens in case this sl...</div><div class='long'><p>The number of milliseconds to wait (after rendering the slider) before\nresizing of the slider happens in case this slider is rendered as child\nof a <a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a>.</p>\n\n<p>This defaults to 200 milliseconds, which is not really noticeable, and\nalso rather conservative big.</p>\n<p>Defaults to: <code>200</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.slider.LayerOpacity-method-constructor' class='name expandable'>GeoExt.slider.LayerOpacity</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/GeoExt.slider.LayerOpacity\" rel=\"GeoExt.slider.LayerOpacity\" class=\"docClass\">GeoExt.slider.LayerOpacity</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Construct the component. ...</div><div class='long'><p>Construct the component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.slider.LayerOpacity\" rel=\"GeoExt.slider.LayerOpacity\" class=\"docClass\">GeoExt.slider.LayerOpacity</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addToMapPanel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.slider.MapPanelItem' rel='GeoExt.slider.MapPanelItem' class='defined-in docClass'>GeoExt.slider.MapPanelItem</a><br/><a href='source/MapPanelItem.html#GeoExt-slider-MapPanelItem-method-addToMapPanel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.MapPanelItem-method-addToMapPanel' class='name expandable'>addToMapPanel</a>( <span class='pre'>panel</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Called by a MapPanel if this component is one of the items in the panel. ...</div><div class='long'><p>Called by a MapPanel if this component is one of the items in the panel.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>panel</span> : <a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-bindMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-bindMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-bindMap' class='name expandable'>bindMap</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Bind the slider to the layer. ...</div><div class='long'><p>Bind the slider to the layer.</p>\n</div></div></div><div id='method-changeComplementaryLayerVisibility' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-changeComplementaryLayerVisibility' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-changeComplementaryLayerVisibility' class='name expandable'>changeComplementaryLayerVisibility</a>( <span class='pre'>slider, value</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Updates the complementary OpenLayers.Layer visibility. ...</div><div class='long'><p>Updates the complementary <code>OpenLayers.Layer</code> visibility.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>slider</span> : <a href=\"#!/api/GeoExt.slider.LayerOpacity\" rel=\"GeoExt.slider.LayerOpacity\" class=\"docClass\">GeoExt.LayerOpacitySlider</a><div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The slider value</p>\n</div></li></ul></div></div></div><div id='method-changeLayerOpacity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-changeLayerOpacity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-changeLayerOpacity' class='name expandable'>changeLayerOpacity</a>( <span class='pre'>slider, value</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Updates the OpenLayers.Layer opacity value. ...</div><div class='long'><p>Updates the <code>OpenLayers.Layer</code> opacity value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>slider</span> : <a href=\"#!/api/GeoExt.slider.LayerOpacity\" rel=\"GeoExt.slider.LayerOpacity\" class=\"docClass\">GeoExt.LayerOpacitySlider</a><div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The slider value</p>\n</div></li></ul></div></div></div><div id='method-changeLayerVisibility' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-changeLayerVisibility' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-changeLayerVisibility' class='name expandable'>changeLayerVisibility</a>( <span class='pre'>slider, value</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Updates the OpenLayers.Layer visibility. ...</div><div class='long'><p>Updates the <code>OpenLayers.Layer</code> visibility.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>slider</span> : <a href=\"#!/api/GeoExt.slider.LayerOpacity\" rel=\"GeoExt.slider.LayerOpacity\" class=\"docClass\">GeoExt.LayerOpacitySlider</a><div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The slider value</p>\n</div></li></ul></div></div></div><div id='method-getLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-getLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-getLayer' class='name expandable'>getLayer</a>( <span class='pre'>layer</span> ) : OpenLayers.Layer<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Returns the OpenLayers layer object for a layer record or a plain layer\nobject. ...</div><div class='long'><p>Returns the OpenLayers layer object for a layer record or a plain layer\nobject.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : OpenLayers.Layer/<a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerModel</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>OpenLayers.Layer</span><div class='sub-desc'><p>The OpenLayers layer object</p>\n</div></li></ul></div></div></div><div id='method-getOpacityValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-getOpacityValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-getOpacityValue' class='name expandable'>getOpacityValue</a>( <span class='pre'>layer</span> ) : Integer<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Returns the opacity value for the layer. ...</div><div class='long'><p>Returns the opacity value for the layer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : OpenLayers.Layer/<a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerModel</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Integer</span><div class='sub-desc'><p>The opacity for the layer.</p>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Initialize the component. ...</div><div class='long'><p>Initialize the component.</p>\n</div></div></div><div id='method-removeFromMapPanel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.slider.MapPanelItem' rel='GeoExt.slider.MapPanelItem' class='defined-in docClass'>GeoExt.slider.MapPanelItem</a><br/><a href='source/MapPanelItem.html#GeoExt-slider-MapPanelItem-method-removeFromMapPanel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.MapPanelItem-method-removeFromMapPanel' class='name expandable'>removeFromMapPanel</a>( <span class='pre'>panel</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Called by a MapPanel if this component is one of the items in the panel. ...</div><div class='long'><p>Called by a MapPanel if this component is one of the items in the panel.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>panel</span> : <a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-setLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-setLayer' class='name expandable'>setLayer</a>( <span class='pre'>layer</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Bind a new layer to the opacity slider. ...</div><div class='long'><p>Bind a new layer to the opacity slider.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : OpenLayers.Layer/<a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerModel</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stopMouseEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.slider.MapPanelItem' rel='GeoExt.slider.MapPanelItem' class='defined-in docClass'>GeoExt.slider.MapPanelItem</a><br/><a href='source/MapPanelItem.html#GeoExt-slider-MapPanelItem-method-stopMouseEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.MapPanelItem-method-stopMouseEvents' class='name expandable'>stopMouseEvents</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Stops the event from propagating. ...</div><div class='long'><p>Stops the event from propagating.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-unbindMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-unbindMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-unbindMap' class='name expandable'>unbindMap</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Unbind the slider from the layer. ...</div><div class='long'><p>Unbind the slider from the layer.</p>\n<p>Overrides: <a href=\"#!/api/GeoExt.slider.MapPanelItem-method-unbindMap\" rel=\"GeoExt.slider.MapPanelItem-method-unbindMap\" class=\"docClass\">GeoExt.slider.MapPanelItem.unbindMap</a></p></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-update' class='name expandable'>update</a>( <span class='pre'>evt</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Registered as a listener for opacity change. ...</div><div class='long'><p>Registered as a listener for opacity change.  Updates the value of the\nslider.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});