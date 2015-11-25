Ext.data.JsonP.Ext_grid_selection_Selection({"tagname":"class","name":"Ext.grid.selection.Selection","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Selection.js","href":"Selection.html#Ext-grid-selection-Selection"}],"since":"5.1.0","aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"constructor","tagname":"method","owner":"Ext.grid.selection.Selection","id":"method-constructor","meta":{}},{"name":"clear","tagname":"method","owner":"Ext.grid.selection.Selection","id":"method-clear","meta":{"private":true}},{"name":"clone","tagname":"method","owner":"Ext.grid.selection.Selection","id":"method-clone","meta":{}},{"name":"eachCell","tagname":"method","owner":"Ext.grid.selection.Selection","id":"method-eachCell","meta":{}},{"name":"eachColumn","tagname":"method","owner":"Ext.grid.selection.Selection","id":"method-eachColumn","meta":{}},{"name":"eachRow","tagname":"method","owner":"Ext.grid.selection.Selection","id":"method-eachRow","meta":{}}],"code_type":"ext_define","id":"class-Ext.grid.selection.Selection","short_doc":"Base class for selections which may be of three subtypes:\n\n\nCells A rectangular range of cells defined by a start\nrec...","component":false,"superclasses":["Ext.Base"],"subclasses":["Ext.grid.selection.Cells","Ext.grid.selection.Columns","Ext.grid.selection.Rows"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.grid.selection.Selection</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.grid.selection.Cells' rel='Ext.grid.selection.Cells' class='docClass'>Ext.grid.selection.Cells</a></div><div class='dependency'><a href='#!/api/Ext.grid.selection.Columns' rel='Ext.grid.selection.Columns' class='docClass'>Ext.grid.selection.Columns</a></div><div class='dependency'><a href='#!/api/Ext.grid.selection.Rows' rel='Ext.grid.selection.Rows' class='docClass'>Ext.grid.selection.Rows</a></div><h4>Files</h4><div class='dependency'><a href='source/Selection.html#Ext-grid-selection-Selection' target='_blank'>Selection.js</a></div></pre><div class='doc-contents'><p>Base class for selections which may be of three subtypes:</p>\n\n<ul>\n<li><a href=\"#!/api/Ext.grid.selection.Cells\" rel=\"Ext.grid.selection.Cells\" class=\"docClass\">Cells</a> A rectangular range of cells defined by a start\nrecord/column and an end record/column.</li>\n<li><a href=\"#!/api/Ext.grid.selection.Rows\" rel=\"Ext.grid.selection.Rows\" class=\"docClass\">Rows</a> An array of records.</li>\n<li><a href=\"#!/api/Ext.grid.selection.Columns\" rel=\"Ext.grid.selection.Columns\" class=\"docClass\">Columns</a> An array of columns in which all records\nare included.</li>\n</ul>\n\n        <p>Available since: <b>5.1.0</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Selection'>Ext.grid.selection.Selection</span><br/><a href='source/Selection.html#Ext-grid-selection-Selection-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.grid.selection.Selection-method-constructor' class='name expandable'>Ext.grid.selection.Selection</a>( <span class='pre'>view</span> ) : <a href=\"#!/api/Ext.grid.selection.Selection\" rel=\"Ext.grid.selection.Selection\" class=\"docClass\">Ext.grid.selection.Selection</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.grid.selection.Selection\" rel=\"Ext.grid.selection.Selection\" class=\"docClass\">Ext.grid.selection.Selection</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-clear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Selection'>Ext.grid.selection.Selection</span><br/><a href='source/Selection.html#Ext-grid-selection-Selection-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Selection-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Clears the selection represented by this selection object. ...</div><div class='long'><p>Clears the selection represented by this selection object.</p>\n</div></div></div><div id='method-clone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Selection'>Ext.grid.selection.Selection</span><br/><a href='source/Selection.html#Ext-grid-selection-Selection-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Selection-method-clone' class='name expandable'>clone</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.grid.selection.Selection\" rel=\"Ext.grid.selection.Selection\" class=\"docClass\">Ext.grid.selection.Selection</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Clones this selection object. ...</div><div class='long'><p>Clones this selection object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.grid.selection.Selection\" rel=\"Ext.grid.selection.Selection\" class=\"docClass\">Ext.grid.selection.Selection</a></span><div class='sub-desc'><p>A clone of this instance.</p>\n\n\n\n</div></li></ul></div></div></div><div id='method-eachCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Selection'>Ext.grid.selection.Selection</span><br/><a href='source/Selection.html#Ext-grid-selection-Selection-method-eachCell' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Selection-method-eachCell' class='name expandable'>eachCell</a>( <span class='pre'>fn, [scope]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls the passed function for each selected cell from top left to bottom right\niterating over columns within each row. ...</div><div class='long'><p>Calls the passed function for each selected cell from top left to bottom right\niterating over columns within each row.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The function to call. If this returns <code>false</code>, the iteration is\nhalted with no further calls.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : <a href=\"#!/api/Ext.grid.CellContext\" rel=\"Ext.grid.CellContext\" class=\"docClass\">Ext.grid.CellContext</a><div class='sub-desc'><p>The CellContext representing the current cell.</p>\n</div></li><li><span class='pre'>columnIndex</span> : Number<div class='sub-desc'><p>The column index of the current cell.</p>\n</div></li><li><span class='pre'>rowIndex</span> : Number<div class='sub-desc'><p>The row index of the current cell.</p>\n</div></li></ul></div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The context (<code>this</code> reference) in which <code>fn</code> is executed.\nDefaults to this Selection object.</p>\n</div></li></ul></div></div></div><div id='method-eachColumn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Selection'>Ext.grid.selection.Selection</span><br/><a href='source/Selection.html#Ext-grid-selection-Selection-method-eachColumn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Selection-method-eachColumn' class='name expandable'>eachColumn</a>( <span class='pre'>fn, [scope]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls the passed function for each selected column from left to right. ...</div><div class='long'><p>Calls the passed function for each selected column from left to right.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The function to call. If this returns false, the iteration is\nhalted with no further calls.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>column</span> : <a href=\"#!/api/Ext.grid.column.Column\" rel=\"Ext.grid.column.Column\" class=\"docClass\">Ext.grid.column.Column</a><div class='sub-desc'><p>The current column.</p>\n</div></li><li><span class='pre'>columnIndex</span> : Number<div class='sub-desc'><p>The index of the current column. <em>Note that in a\nlocked grid, this is relative to the outermost grid encompassing both sides</em>.</p>\n</div></li></ul></div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The context (<code>this</code> reference) in which <code>fn</code> is executed.\nDefaults to this Selection object.</p>\n</div></li></ul></div></div></div><div id='method-eachRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Selection'>Ext.grid.selection.Selection</span><br/><a href='source/Selection.html#Ext-grid-selection-Selection-method-eachRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Selection-method-eachRow' class='name expandable'>eachRow</a>( <span class='pre'>fn, [scope]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls the passed function for each selected record. ...</div><div class='long'><p>Calls the passed function for each selected record.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The function to call. If this returns <code>false</code>, the iteration is\nhalted with no further calls.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'><p>The current record.</p>\n</div></li></ul></div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The context (<code>this</code> reference) in which the function is executed.\nDefaults to this Selection object.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});