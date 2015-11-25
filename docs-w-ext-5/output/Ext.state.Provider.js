Ext.data.JsonP.Ext_state_Provider({"tagname":"class","name":"Ext.state.Provider","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Provider.js","href":"Provider.html#Ext-state-Provider"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":["Ext.util.Observable"],"requires":[],"uses":[],"members":[{"name":"prefix","tagname":"cfg","owner":"Ext.state.Provider","id":"cfg-prefix","meta":{}},{"name":"clear","tagname":"method","owner":"Ext.state.Provider","id":"method-clear","meta":{}},{"name":"decodeValue","tagname":"method","owner":"Ext.state.Provider","id":"method-decodeValue","meta":{}},{"name":"encodeValue","tagname":"method","owner":"Ext.state.Provider","id":"method-encodeValue","meta":{}},{"name":"get","tagname":"method","owner":"Ext.state.Provider","id":"method-get","meta":{}},{"name":"set","tagname":"method","owner":"Ext.state.Provider","id":"method-set","meta":{}},{"name":"statechange","tagname":"event","owner":"Ext.state.Provider","id":"event-statechange","meta":{}}],"code_type":"ext_define","id":"class-Ext.state.Provider","short_doc":"Abstract base class for state provider implementations. ...","component":false,"superclasses":["Ext.Base"],"subclasses":["Ext.state.CookieProvider","Ext.state.LocalStorageProvider","GeoExt.state.PermalinkProvider"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.state.Provider</strong></div></div><h4>Mixins</h4><div class='dependency'>Ext.util.Observable</div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.state.CookieProvider' rel='Ext.state.CookieProvider' class='docClass'>Ext.state.CookieProvider</a></div><div class='dependency'><a href='#!/api/Ext.state.LocalStorageProvider' rel='Ext.state.LocalStorageProvider' class='docClass'>Ext.state.LocalStorageProvider</a></div><div class='dependency'><a href='#!/api/GeoExt.state.PermalinkProvider' rel='GeoExt.state.PermalinkProvider' class='docClass'>GeoExt.state.PermalinkProvider</a></div><h4>Files</h4><div class='dependency'><a href='source/Provider.html#Ext-state-Provider' target='_blank'>Provider.js</a></div></pre><div class='doc-contents'><p>Abstract base class for state provider implementations. The provider is responsible\nfor setting values  and extracting values to/from the underlying storage source. The \nstorage source can vary and the details should be implemented in a subclass. For example\na provider could use a server side database or the browser localstorage where supported.</p>\n\n\n\n\n<p>This class provides methods for encoding and decoding <b>typed</b> variables including \ndates and defines the Provider interface. By default these methods put the value and the\ntype information into a delimited string that can be stored. These should be overridden in \na subclass if you want to change the format of the encoded value and subsequent decoding.</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-prefix' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.state.Provider'>Ext.state.Provider</span><br/><a href='source/Provider.html#Ext-state-Provider-cfg-prefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.state.Provider-cfg-prefix' class='name expandable'>prefix</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A string to prefix to items stored in the underlying state store. ...</div><div class='long'><p>A string to prefix to items stored in the underlying state store.\nDefaults to <tt>'ext-'</tt></p>\n<p>Defaults to: <code>'ext-'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clear' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.state.Provider'>Ext.state.Provider</span><br/><a href='source/Provider.html#Ext-state-Provider-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.state.Provider-method-clear' class='name expandable'>clear</a>( <span class='pre'>name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Clears a value from the state ...</div><div class='long'><p>Clears a value from the state</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The key name</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/Ext.state.Provider-event-statechange\" rel=\"Ext.state.Provider-event-statechange\" class=\"docClass\">statechange</a></li></ul></div></div></div><div id='method-decodeValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.state.Provider'>Ext.state.Provider</span><br/><a href='source/Provider.html#Ext-state-Provider-method-decodeValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.state.Provider-method-decodeValue' class='name expandable'>decodeValue</a>( <span class='pre'>value</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Decodes a string previously encoded with encodeValue. ...</div><div class='long'><p>Decodes a string previously encoded with <a href=\"#!/api/Ext.state.Provider-method-encodeValue\" rel=\"Ext.state.Provider-method-encodeValue\" class=\"docClass\">encodeValue</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p>The value to decode</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The decoded value</p>\n</div></li></ul></div></div></div><div id='method-encodeValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.state.Provider'>Ext.state.Provider</span><br/><a href='source/Provider.html#Ext-state-Provider-method-encodeValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.state.Provider-method-encodeValue' class='name expandable'>encodeValue</a>( <span class='pre'>value</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Encodes a value including type information. ...</div><div class='long'><p>Encodes a value including type information.  Decode with <a href=\"#!/api/Ext.state.Provider-method-decodeValue\" rel=\"Ext.state.Provider-method-decodeValue\" class=\"docClass\">decodeValue</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value to encode</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The encoded value</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.state.Provider'>Ext.state.Provider</span><br/><a href='source/Provider.html#Ext-state-Provider-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.state.Provider-method-get' class='name expandable'>get</a>( <span class='pre'>name, defaultValue</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the current value for a key ...</div><div class='long'><p>Returns the current value for a key</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The key name</p>\n</div></li><li><span class='pre'>defaultValue</span> : Object<div class='sub-desc'><p>A default value to return if the key's value is not found</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The state data</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.state.Provider'>Ext.state.Provider</span><br/><a href='source/Provider.html#Ext-state-Provider-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.state.Provider-method-set' class='name expandable'>set</a>( <span class='pre'>name, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value for a key ...</div><div class='long'><p>Sets the value for a key</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The key name</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value to set</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/Ext.state.Provider-event-statechange\" rel=\"Ext.state.Provider-event-statechange\" class=\"docClass\">statechange</a></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-statechange' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.state.Provider'>Ext.state.Provider</span><br/><a href='source/Provider.html#Ext-state-Provider-event-statechange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.state.Provider-event-statechange' class='name expandable'>statechange</a>( <span class='pre'>this, key, value, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when a state change occurs. ...</div><div class='long'><p>Fires when a state change occurs.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a><div class='sub-desc'><p>This state provider</p>\n</div></li><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The state key which was changed</p>\n</div></li><li><span class='pre'>value</span> : String<div class='sub-desc'><p>The encoded value for the state</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});