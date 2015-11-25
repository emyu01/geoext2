Ext.data.JsonP.GeoExt_LegendImage({"tagname":"class","name":"GeoExt.LegendImage","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"LegendImage.js","href":"LegendImage.html#GeoExt-LegendImage"}],"aliases":{"widget":["gx_legendimage"]},"alternateClassNames":[],"extends":"Ext.Component","mixins":[],"requires":["GeoExt.Version"],"uses":[],"members":[{"name":"defaultImgSrc","tagname":"cfg","owner":"GeoExt.LegendImage","id":"cfg-defaultImgSrc","meta":{}},{"name":"imgCls","tagname":"cfg","owner":"GeoExt.LegendImage","id":"cfg-imgCls","meta":{}},{"name":"noImgCls","tagname":"cfg","owner":"GeoExt.LegendImage","id":"cfg-noImgCls","meta":{}},{"name":"url","tagname":"cfg","owner":"GeoExt.LegendImage","id":"cfg-url","meta":{}},{"name":"initComponent","tagname":"method","owner":"GeoExt.LegendImage","id":"method-initComponent","meta":{}},{"name":"onDestroy","tagname":"method","owner":"GeoExt.LegendImage","id":"method-onDestroy","meta":{"private":true}},{"name":"onImageLoad","tagname":"method","owner":"GeoExt.LegendImage","id":"method-onImageLoad","meta":{"private":true}},{"name":"onImageLoadError","tagname":"method","owner":"GeoExt.LegendImage","id":"method-onImageLoadError","meta":{"private":true}},{"name":"onRender","tagname":"method","owner":"GeoExt.LegendImage","id":"method-onRender","meta":{"private":true}},{"name":"setUrl","tagname":"method","owner":"GeoExt.LegendImage","id":"method-setUrl","meta":{}},{"name":"legendimageloaded","tagname":"event","owner":"GeoExt.LegendImage","id":"event-legendimageloaded","meta":{}}],"code_type":"ext_define","id":"class-GeoExt.LegendImage","component":true,"superclasses":["Ext.Component"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Component<div class='subclass '><strong>GeoExt.LegendImage</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.Version' rel='GeoExt.Version' class='docClass'>GeoExt.Version</a></div><h4>Files</h4><div class='dependency'><a href='source/LegendImage.html#GeoExt-LegendImage' target='_blank'>LegendImage.js</a></div></pre><div class='doc-contents'><p>The legend image.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaultImgSrc' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.LegendImage'>GeoExt.LegendImage</span><br/><a href='source/LegendImage.html#GeoExt-LegendImage-cfg-defaultImgSrc' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.LegendImage-cfg-defaultImgSrc' class='name expandable'>defaultImgSrc</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Path to image that will be used if the legend image fails\nto load. ...</div><div class='long'><p>Path to image that will be used if the legend image fails\nto load.  Default is Ext.BLANK_IMAGE_URL.</p>\n</div></div></div><div id='cfg-imgCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.LegendImage'>GeoExt.LegendImage</span><br/><a href='source/LegendImage.html#GeoExt-LegendImage-cfg-imgCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.LegendImage-cfg-imgCls' class='name expandable'>imgCls</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Optional CSS class to apply to img tag.</p>\n</div><div class='long'><p>Optional CSS class to apply to img tag.</p>\n</div></div></div><div id='cfg-noImgCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.LegendImage'>GeoExt.LegendImage</span><br/><a href='source/LegendImage.html#GeoExt-LegendImage-cfg-noImgCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.LegendImage-cfg-noImgCls' class='name expandable'>noImgCls</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>CSS class applied to img tag when no image is available or the default\nimage was loaded. ...</div><div class='long'><p>CSS class applied to img tag when no image is available or the default\nimage was loaded.</p>\n<p>Defaults to: <code>&quot;gx-legend-noimage&quot;</code></p></div></div></div><div id='cfg-url' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.LegendImage'>GeoExt.LegendImage</span><br/><a href='source/LegendImage.html#GeoExt-LegendImage-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.LegendImage-cfg-url' class='name expandable'>url</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The url of the image to load.</p>\n</div><div class='long'><p>The url of the image to load.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initComponent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.LegendImage'>GeoExt.LegendImage</span><br/><a href='source/LegendImage.html#GeoExt-LegendImage-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.LegendImage-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Initializes this component. ...</div><div class='long'><p>Initializes this component.</p>\n</div></div></div><div id='method-onDestroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.LegendImage'>GeoExt.LegendImage</span><br/><a href='source/LegendImage.html#GeoExt-LegendImage-method-onDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.LegendImage-method-onDestroy' class='name expandable'>onDestroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Private method called during the destroy sequence. ...</div><div class='long'><p>Private method called during the destroy sequence.</p>\n</div></div></div><div id='method-onImageLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.LegendImage'>GeoExt.LegendImage</span><br/><a href='source/LegendImage.html#GeoExt-LegendImage-method-onImageLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.LegendImage-method-onImageLoad' class='name expandable'>onImageLoad</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Private method called after the legend image finished loading. ...</div><div class='long'><p>Private method called after the legend image finished loading.</p>\n<h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/GeoExt.LegendImage-event-legendimageloaded\" rel=\"GeoExt.LegendImage-event-legendimageloaded\" class=\"docClass\">legendimageloaded</a></li></ul></div></div></div><div id='method-onImageLoadError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.LegendImage'>GeoExt.LegendImage</span><br/><a href='source/LegendImage.html#GeoExt-LegendImage-method-onImageLoadError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.LegendImage-method-onImageLoadError' class='name expandable'>onImageLoadError</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Private method called if the legend image fails loading. ...</div><div class='long'><p>Private method called if the legend image fails loading.</p>\n</div></div></div><div id='method-onRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.LegendImage'>GeoExt.LegendImage</span><br/><a href='source/LegendImage.html#GeoExt-LegendImage-method-onRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.LegendImage-method-onRender' class='name expandable'>onRender</a>( <span class='pre'>ct, position</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Private method called when the legend image component is being rendered. ...</div><div class='long'><p>Private method called when the legend image component is being rendered.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>position</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.LegendImage'>GeoExt.LegendImage</span><br/><a href='source/LegendImage.html#GeoExt-LegendImage-method-setUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.LegendImage-method-setUrl' class='name expandable'>setUrl</a>( <span class='pre'>url</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the url of the legend image. ...</div><div class='long'><p>Sets the url of the legend image.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The new URL.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-legendimageloaded' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.LegendImage'>GeoExt.LegendImage</span><br/><a href='source/LegendImage.html#GeoExt-LegendImage-event-legendimageloaded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.LegendImage-event-legendimageloaded' class='name expandable'>legendimageloaded</a>( <span class='pre'>eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires after legend image has loaded. ...</div><div class='long'><p>Fires after legend image has loaded.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});