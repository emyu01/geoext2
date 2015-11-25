Ext.data.JsonP.single_file_build({"guide":"<h1 id='single_file_build-section-sencha-cmd'>Sencha Cmd</h1>\n\n<p>Assuming that you have Ext JS 4 SDK at the parent path ../ext-4.2.1.883 you can create a compressed full single file build with the following command line:</p>\n\n<pre><code>sencha -sdk ../ext-4.2.1.883 compile --classpath=src exclude -all and include -namespace GeoExt and concat -closure geoext2.js\n</code></pre>\n\n<p>Refer to <a href=\"http://www.sencha.com/products/sencha-cmd\">this page</a> for more information about Sencha Cmd.</p>\n\n<h1 id='single_file_build-section-jsbuild'>Jsbuild</h1>\n\n<p>Assuming you have jsbuild available at command line simply run the following command to create a full single file build:</p>\n\n<pre><code>jsbuild ./build.cfg\n</code></pre>\n\n<p>Refer to <a href=\"https://github.com/whitmo/jstools\">this page</a> for more information about jsbuild.</p>\n","title":"Single file build"});