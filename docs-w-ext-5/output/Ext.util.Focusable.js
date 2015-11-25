Ext.data.JsonP.Ext_util_Focusable({"tagname":"class","name":"Ext.util.Focusable","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Focusable.js","href":"Focusable.html#Ext-util-Focusable"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"focusCls","tagname":"cfg","owner":"Ext.util.Focusable","id":"cfg-focusCls","meta":{}},{"name":"tabIndex","tagname":"cfg","owner":"Ext.util.Focusable","id":"cfg-tabIndex","meta":{}},{"name":"focusable","tagname":"property","owner":"Ext.util.Focusable","id":"property-focusable","meta":{}},{"name":"mixinId","tagname":"property","owner":"Ext.util.Focusable","id":"property-mixinId","meta":{"private":true}},{"name":"privates","tagname":"property","owner":"Ext.util.Focusable","id":"property-privates","meta":{"private":true}},{"name":"beforeBlur","tagname":"method","owner":"Ext.util.Focusable","id":"method-beforeBlur","meta":{"protected":true}},{"name":"beforeFocus","tagname":"method","owner":"Ext.util.Focusable","id":"method-beforeFocus","meta":{"protected":true}},{"name":"canFocus","tagname":"method","owner":"Ext.util.Focusable","id":"method-canFocus","meta":{"private":true}},{"name":"cancelFocus","tagname":"method","owner":"Ext.util.Focusable","id":"method-cancelFocus","meta":{"protected":true}},{"name":"destroyFocusable","tagname":"method","owner":"Ext.util.Focusable","id":"method-destroyFocusable","meta":{"private":true}},{"name":"disableFocusable","tagname":"method","owner":"Ext.util.Focusable","id":"method-disableFocusable","meta":{"private":true}},{"name":"enableFocusable","tagname":"method","owner":"Ext.util.Focusable","id":"method-enableFocusable","meta":{"private":true}},{"name":"focus","tagname":"method","owner":"Ext.util.Focusable","id":"method-focus","meta":{}},{"name":"getFocusClsEl","tagname":"method","owner":"Ext.util.Focusable","id":"method-getFocusClsEl","meta":{"private":true}},{"name":"getFocusEl","tagname":"method","owner":"Ext.util.Focusable","id":"method-getFocusEl","meta":{"private":true}},{"name":"getTabIndex","tagname":"method","owner":"Ext.util.Focusable","id":"method-getTabIndex","meta":{}},{"name":"initFocusable","tagname":"method","owner":"Ext.util.Focusable","id":"method-initFocusable","meta":{"protected":true}},{"name":"initFocusableElement","tagname":"method","owner":"Ext.util.Focusable","id":"method-initFocusableElement","meta":{"private":true}},{"name":"initFocusableEvents","tagname":"method","owner":"Ext.util.Focusable","id":"method-initFocusableEvents","meta":{"protected":true}},{"name":"isFocusable","tagname":"method","owner":"Ext.util.Focusable","id":"method-isFocusable","meta":{}},{"name":"onBlur","tagname":"method","owner":"Ext.util.Focusable","id":"method-onBlur","meta":{"private":true}},{"name":"onFocus","tagname":"method","owner":"Ext.util.Focusable","id":"method-onFocus","meta":{"private":true}},{"name":"onFocusEnter","tagname":"method","owner":"Ext.util.Focusable","id":"method-onFocusEnter","meta":{"protected":true,"template":true}},{"name":"onFocusLeave","tagname":"method","owner":"Ext.util.Focusable","id":"method-onFocusLeave","meta":{"protected":true,"template":true}},{"name":"postBlur","tagname":"method","owner":"Ext.util.Focusable","id":"method-postBlur","meta":{"protected":true}},{"name":"postFocus","tagname":"method","owner":"Ext.util.Focusable","id":"method-postFocus","meta":{"protected":true}},{"name":"setTabIndex","tagname":"method","owner":"Ext.util.Focusable","id":"method-setTabIndex","meta":{}},{"name":"blur","tagname":"event","owner":"Ext.util.Focusable","id":"event-blur","meta":{}},{"name":"focus","tagname":"event","owner":"Ext.util.Focusable","id":"event-focus","meta":{}}],"code_type":"ext_define","id":"class-Ext.util.Focusable","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":["Ext.Component","Ext.grid.locking.View"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.util.Focusable</strong></div></div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/Ext.Component' rel='Ext.Component' class='docClass'>Ext.Component</a></div><div class='dependency'><a href='#!/api/Ext.grid.locking.View' rel='Ext.grid.locking.View' class='docClass'>Ext.grid.locking.View</a></div><h4>Files</h4><div class='dependency'><a href='source/Focusable.html#Ext-util-Focusable' target='_blank'>Focusable.js</a></div></pre><div class='doc-contents'><p>A mixin for individually focusable things (Components, Widgets, etc)</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-focusCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-cfg-focusCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-cfg-focusCls' class='name expandable'>focusCls</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>CSS class that will be added to focused\nComponent, and removed when Component blurs. ...</div><div class='long'><p>CSS class that will be added to focused\nComponent, and removed when Component blurs.</p>\n<p>Defaults to: <code>'x-focus'</code></p></div></div></div><div id='cfg-tabIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-cfg-tabIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-cfg-tabIndex' class='name expandable'>tabIndex</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'><p>DOM tabIndex attribute for this Focusable</p>\n</div><div class='long'><p>DOM tabIndex attribute for this Focusable</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-focusable' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-property-focusable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-property-focusable' class='name expandable'>focusable</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true for interactive Components, false for static Components. ...</div><div class='long'><p><code>true</code> for interactive Components, <code>false</code> for static Components.\nFor Containers, this property reflects interactiveness of the\nContainer itself, not its children. See <a href=\"#!/api/Ext.util.Focusable-method-isFocusable\" rel=\"Ext.util.Focusable-method-isFocusable\" class=\"docClass\">isFocusable</a>.</p>\n\n<p><strong>Note:</strong> Plain components are static, so not focusable.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-mixinId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-property-mixinId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-property-mixinId' class='name expandable'>mixinId</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'focusable'</code></p><p>Overrides: <a href=\"#!/api/Ext.util.Floating-property-mixinId\" rel=\"Ext.util.Floating-property-mixinId\" class=\"docClass\">Ext.util.Floating.mixinId</a>, <a href=\"#!/api/Ext.util.StoreHolder-property-mixinId\" rel=\"Ext.util.StoreHolder-property-mixinId\" class=\"docClass\">Ext.util.StoreHolder.mixinId</a></p></div></div></div><div id='property-privates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-property-privates' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-property-privates' class='name expandable'>privates</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/Ext.util.Renderable-property-privates\" rel=\"Ext.util.Renderable-property-privates\" class=\"docClass\">Ext.util.Renderable.privates</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-beforeBlur' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-beforeBlur' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-beforeBlur' class='name expandable'>beforeBlur</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Template method to do any pre-blur processing. ...</div><div class='long'><p>Template method to do any pre-blur processing.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Ext.event.Event<div class='sub-desc'><p>The event object</p>\n</div></li></ul></div></div></div><div id='method-beforeFocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-beforeFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-beforeFocus' class='name expandable'>beforeFocus</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Template method to do any pre-focus processing. ...</div><div class='long'><p>Template method to do any pre-focus processing.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Ext.event.Event<div class='sub-desc'><p>The event object</p>\n</div></li></ul></div></div></div><div id='method-canFocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-canFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-canFocus' class='name expandable'>canFocus</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-cancelFocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-cancelFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-cancelFocus' class='name expandable'>cancelFocus</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Cancel any deferred focus on this component ...</div><div class='long'><p>Cancel any deferred focus on this component</p>\n</div></div></div><div id='method-destroyFocusable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-destroyFocusable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-destroyFocusable' class='name expandable'>destroyFocusable</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-disableFocusable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-disableFocusable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-disableFocusable' class='name expandable'>disableFocusable</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-enableFocusable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-enableFocusable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-enableFocusable' class='name expandable'>enableFocusable</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-focus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-focus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-focus' class='name expandable'>focus</a>( <span class='pre'>[selectText], [delay], [callback], [scope]</span> ) : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Try to focus this component. ...</div><div class='long'><p>Try to focus this component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selectText</span> : Mixed (optional)<div class='sub-desc'><p>If applicable, <code>true</code> to also select all the text in this component, or an array consisting of start and end (defaults to start) position of selection.</p>\n</div></li><li><span class='pre'>delay</span> : Boolean/Number (optional)<div class='sub-desc'><p>Delay the focus this number of milliseconds (true for 10 milliseconds).</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>Only needed if the <code>delay</code> parameter is used. A function to call upon focus.</p>\n</div></li><li><span class='pre'>scope</span> : Function (optional)<div class='sub-desc'><p>Only needed if the <code>delay</code> parameter is used. The scope (<code>this</code> reference) in which to execute the callback.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a></span><div class='sub-desc'><p>The focused Component. Usually <code>this</code> Component. Some Containers may\ndelegate focus to a descendant Component (<a href=\"#!/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s can do this through their\n<a href=\"#!/api/Ext.window.Window-cfg-defaultFocus\" rel=\"Ext.window.Window-cfg-defaultFocus\" class=\"docClass\">defaultFocus</a> config option.</p>\n\n\n\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li>tofront</li></ul></div></div></div><div id='method-getFocusClsEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-getFocusClsEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-getFocusClsEl' class='name expandable'>getFocusClsEl</a>( <span class='pre'></span> ) : Ext.Element<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Returns the focus styling holder element associated with this Focusable. ...</div><div class='long'><p>Returns the focus styling holder element associated with this Focusable.\nBy default it is the same element as <a href=\"#!/api/Ext.util.Focusable-method-getFocusEl\" rel=\"Ext.util.Focusable-method-getFocusEl\" class=\"docClass\">getFocusEl</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.Element</span><div class='sub-desc'><p>The focus styling element.</p>\n</div></li></ul></div></div></div><div id='method-getFocusEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-getFocusEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-getFocusEl' class='name expandable'>getFocusEl</a>( <span class='pre'></span> ) : Ext.Element<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Returns the focus holder element associated with this Focusable. ...</div><div class='long'><p>Returns the focus holder element associated with this Focusable. At the\nlevel of the Focusable base, this function returns <code>this.el</code> (or for Widgets,\n<code>this.element</code>).</p>\n\n<p>Subclasses with embedded focusable elements (such as Window, Field and Button)\nshould override this for use by <a href=\"#!/api/Ext.util.Focusable-method-focus\" rel=\"Ext.util.Focusable-method-focus\" class=\"docClass\">focus</a>\nmethod.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.Element</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTabIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-getTabIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-getTabIndex' class='name expandable'>getTabIndex</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the actual tabIndex for this Focusable. ...</div><div class='long'><p>Return the actual tabIndex for this Focusable.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>tabIndex attribute value</p>\n</div></li></ul></div></div></div><div id='method-initFocusable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-initFocusable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-initFocusable' class='name expandable'>initFocusable</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Template method to do any Focusable related initialization that\ndoes not involve event listeners creation. ...</div><div class='long'><p>Template method to do any Focusable related initialization that\ndoes not involve event listeners creation.</p>\n</div></div></div><div id='method-initFocusableElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-initFocusableElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-initFocusableElement' class='name expandable'>initFocusableElement</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Sets up the focus listener on this Component's focusEl if it has one. ...</div><div class='long'><p>Sets up the focus listener on this Component's <a href=\"#!/api/Ext.util.Focusable-method-getFocusEl\" rel=\"Ext.util.Focusable-method-getFocusEl\" class=\"docClass\">focusEl</a> if it has one.</p>\n\n<p>Form Components which must implicitly participate in tabbing order usually have a naturally\nfocusable element as their <a href=\"#!/api/Ext.util.Focusable-method-getFocusEl\" rel=\"Ext.util.Focusable-method-getFocusEl\" class=\"docClass\">focusEl</a>, and it is the DOM event of that\nreceiving focus which drives the Component's <code>onFocus</code> handling, and the DOM event of it\nbeing blurred which drives the <code>onBlur</code> handling.</p>\n</div></div></div><div id='method-initFocusableEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-initFocusableEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-initFocusableEvents' class='name expandable'>initFocusableEvents</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Template method to do any event listener initialization for a Focusable. ...</div><div class='long'><p>Template method to do any event listener initialization for a Focusable.\nThis generally happens after the focusEl is available.</p>\n</div></div></div><div id='method-isFocusable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-isFocusable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-isFocusable' class='name expandable'>isFocusable</a>( <span class='pre'>[deep]</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Determine if this Focusable can receive focus at this time. ...</div><div class='long'><p>Determine if this Focusable can receive focus at this time.</p>\n\n<p>Note that Containers can be non-focusable themselves while delegating\nfocus treatment to a child Component; see\n<a href=\"#!/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">#defaultFocus</a> for more information.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>deep</span> : Boolean (optional)<div class='sub-desc'><p>Optionally determine if the container itself\nis focusable, or if container's focus is delegated to a child component\nand that child is focusable.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if component is focusable, false if not.</p>\n</div></li></ul></div></div></div><div id='method-onBlur' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-onBlur' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-onBlur' class='name expandable'>onBlur</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/Ext.util.Focusable-event-blur\" rel=\"Ext.util.Focusable-event-blur\" class=\"docClass\">blur</a></li></ul></div></div></div><div id='method-onFocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-onFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-onFocus' class='name expandable'>onFocus</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/Ext.util.Focusable-event-focus\" rel=\"Ext.util.Focusable-event-focus\" class=\"docClass\">focus</a></li></ul></div></div></div><div id='method-onFocusEnter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-onFocusEnter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-onFocusEnter' class='name expandable'>onFocusEnter</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='protected' >protected</span><span class='template' >template</span></span></div><div class='description'><div class='short'>Called when focus enters this Component's hierarchy ...</div><div class='long'><p>Called when focus enters this Component's hierarchy</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : type<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li>focusenter</li></ul></div></div></div><div id='method-onFocusLeave' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-onFocusLeave' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-onFocusLeave' class='name expandable'>onFocusLeave</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='protected' >protected</span><span class='template' >template</span></span></div><div class='description'><div class='short'>Called when focus exits from this Component's hierarchy ...</div><div class='long'><p>Called when focus exits from this Component's hierarchy</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : type<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li>focusleave</li></ul></div></div></div><div id='method-postBlur' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-postBlur' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-postBlur' class='name expandable'>postBlur</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Template method to do any post-blur processing. ...</div><div class='long'><p>Template method to do any post-blur processing.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Ext.event.Event<div class='sub-desc'><p>The event object</p>\n</div></li></ul></div></div></div><div id='method-postFocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-postFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-postFocus' class='name expandable'>postFocus</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Template method to do any post-focus processing. ...</div><div class='long'><p>Template method to do any post-focus processing.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Ext.event.Event<div class='sub-desc'><p>The event object</p>\n</div></li></ul></div></div></div><div id='method-setTabIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-method-setTabIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-method-setTabIndex' class='name expandable'>setTabIndex</a>( <span class='pre'>newTabIndex</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the tabIndex property for this Focusable. ...</div><div class='long'><p>Set the tabIndex property for this Focusable. If the focusEl\nis avalable, set tabIndex attribute on it, too.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newTabIndex</span> : Number<div class='sub-desc'><p>new tabIndex to set</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-blur' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-event-blur' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-event-blur' class='name expandable'>blur</a>( <span class='pre'>this, event, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when this Component loses focus. ...</div><div class='long'><p>Fires when this Component loses focus.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'>\n</div></li><li><span class='pre'>event</span> : Ext.event.Event<div class='sub-desc'><p>The blur event.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-focus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Focusable'>Ext.util.Focusable</span><br/><a href='source/Focusable.html#Ext-util-Focusable-event-focus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Focusable-event-focus' class='name expandable'>focus</a>( <span class='pre'>this, event, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when this Component receives focus. ...</div><div class='long'><p>Fires when this Component receives focus.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'>\n</div></li><li><span class='pre'>event</span> : Ext.event.Event<div class='sub-desc'><p>The focus event.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});