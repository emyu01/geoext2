Ext.data.JsonP.Ext_fx_DrawPath({"tagname":"class","name":"Ext.fx.DrawPath","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true,"singleton":true},"files":[{"filename":"DrawPath.js","href":"DrawPath.html#Ext-fx-DrawPath"}],"private":true,"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"pathCommandRE","tagname":"property","owner":"Ext.fx.DrawPath","id":"property-pathCommandRE","meta":{"private":true}},{"name":"pathToStringRE","tagname":"property","owner":"Ext.fx.DrawPath","id":"property-pathToStringRE","meta":{"private":true}},{"name":"pathValuesRE","tagname":"property","owner":"Ext.fx.DrawPath","id":"property-pathValuesRE","meta":{"private":true}},{"name":"radian","tagname":"property","owner":"Ext.fx.DrawPath","id":"property-radian","meta":{"private":true}},{"name":"stopsRE","tagname":"property","owner":"Ext.fx.DrawPath","id":"property-stopsRE","meta":{"private":true}},{"name":"arc2curve","tagname":"method","owner":"Ext.fx.DrawPath","id":"method-arc2curve","meta":{"private":true}},{"name":"command2curve","tagname":"method","owner":"Ext.fx.DrawPath","id":"method-command2curve","meta":{"private":true}},{"name":"interpolatePaths","tagname":"method","owner":"Ext.fx.DrawPath","id":"method-interpolatePaths","meta":{"private":true}},{"name":"is","tagname":"method","owner":"Ext.fx.DrawPath","id":"method-is","meta":{"private":true}},{"name":"parsePathString","tagname":"method","owner":"Ext.fx.DrawPath","id":"method-parsePathString","meta":{"private":true}},{"name":"path2string","tagname":"method","owner":"Ext.fx.DrawPath","id":"method-path2string","meta":{"private":true}},{"name":"pathClone","tagname":"method","owner":"Ext.fx.DrawPath","id":"method-pathClone","meta":{"private":true}},{"name":"pathToAbsolute","tagname":"method","owner":"Ext.fx.DrawPath","id":"method-pathToAbsolute","meta":{"private":true}},{"name":"pathToString","tagname":"method","owner":"Ext.fx.DrawPath","id":"method-pathToString","meta":{"private":true}},{"name":"quadratic2curve","tagname":"method","owner":"Ext.fx.DrawPath","id":"method-quadratic2curve","meta":{"private":true}},{"name":"rotate","tagname":"method","owner":"Ext.fx.DrawPath","id":"method-rotate","meta":{"private":true}}],"code_type":"ext_define","singleton":true,"id":"class-Ext.fx.DrawPath","short_doc":"Provides SVG Paths handling functions. ...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.fx.DrawPath</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/DrawPath.html#Ext-fx-DrawPath' target='_blank'>DrawPath.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Provides SVG Paths handling functions. Copied from Ext.draw.Draw in ExtJs 4.2 in order\nto break the dependencies on parsePathString() and interpolatePaths() in PropertyHandler.js</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-pathCommandRE' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-property-pathCommandRE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-property-pathCommandRE' class='name expandable'>pathCommandRE</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/([achlmqstvz])[\\s,]*((-?\\d*\\.?\\d*(?:e[-+]?\\d+)?\\s*,?\\s*)+)/ig</code></p></div></div></div><div id='property-pathToStringRE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-property-pathToStringRE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-property-pathToStringRE' class='name expandable'>pathToStringRE</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>End Definitions ...</div><div class='long'><p>End Definitions</p>\n<p>Defaults to: <code>/,?([achlmqrstvxz]),?/gi</code></p></div></div></div><div id='property-pathValuesRE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-property-pathValuesRE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-property-pathValuesRE' class='name expandable'>pathValuesRE</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/(-?\\d*\\.?\\d*(?:e[-+]?\\d+)?)\\s*,?\\s*/ig</code></p></div></div></div><div id='property-radian' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-property-radian' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-property-radian' class='name expandable'>radian</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-stopsRE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-property-stopsRE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-property-stopsRE' class='name expandable'>stopsRE</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/^(\\d+%?)$/</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-arc2curve' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-method-arc2curve' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-method-arc2curve' class='name expandable'>arc2curve</a>( <span class='pre'>x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x1</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>y1</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>rx</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>ry</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>angle</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>large_arc_flag</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>sweep_flag</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>x2</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>y2</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>recursive</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-command2curve' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-method-command2curve' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-method-command2curve' class='name expandable'>command2curve</a>( <span class='pre'>pathCommand, d</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Returns any path command as a curveto command based on the attrs passed ...</div><div class='long'><p>Returns any path command as a curveto command based on the attrs passed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pathCommand</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>d</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-interpolatePaths' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-method-interpolatePaths' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-method-interpolatePaths' class='name expandable'>interpolatePaths</a>( <span class='pre'>path, path2</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>path2</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-is' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-method-is' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-method-is' class='name expandable'>is</a>( <span class='pre'>o, type</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>type</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-parsePathString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-method-parsePathString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-method-parsePathString' class='name expandable'>parsePathString</a>( <span class='pre'>pathString</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pathString</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-path2string' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-method-path2string' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-method-path2string' class='name expandable'>path2string</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>To be deprecated, converts itself (an arrayPath) to a proper SVG path string ...</div><div class='long'><p>To be deprecated, converts itself (an arrayPath) to a proper SVG path string</p>\n</div></div></div><div id='method-pathClone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-method-pathClone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-method-pathClone' class='name expandable'>pathClone</a>( <span class='pre'>pathArray</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pathArray</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-pathToAbsolute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-method-pathToAbsolute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-method-pathToAbsolute' class='name expandable'>pathToAbsolute</a>( <span class='pre'>pathArray</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pathArray</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-pathToString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-method-pathToString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-method-pathToString' class='name expandable'>pathToString</a>( <span class='pre'>arrayPath</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Convert the passed arrayPath to a proper SVG path string (d attribute) ...</div><div class='long'><p>Convert the passed arrayPath to a proper SVG path string (d attribute)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arrayPath</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-quadratic2curve' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-method-quadratic2curve' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-method-quadratic2curve' class='name expandable'>quadratic2curve</a>( <span class='pre'>x1, y1, ax, ay, x2, y2</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x1</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>y1</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>ax</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>ay</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>x2</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>y2</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-rotate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.DrawPath'>Ext.fx.DrawPath</span><br/><a href='source/DrawPath.html#Ext-fx-DrawPath-method-rotate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.DrawPath-method-rotate' class='name expandable'>rotate</a>( <span class='pre'>x, y, rad</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>rad</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});