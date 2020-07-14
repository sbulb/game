chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    var  pattern, from, to, redirecUrl;
    var redirects = [];
    var linksJson = [
{"inside_url": "http://inside-files/dev/eps/WIT/WebWidgets/js-doc/latest/ActionDataService.html"},
{"inside_url": "http://inside-files/dev/eps/WIT/WebWidgets/js-doc/latest/RadioButton.html"},
{"inside_url": "http://inside-files/dev/eps/WIT/WebWidgets/js-doc/latest/UIContainer.html"},
{"inside_url": "http://inside-files/dev/eps/WIT/WebWidgets/js-doc/latest/deprecation.html"},
{"inside_url": "http://inside-files/dev/eps/WIT/WebWidgets/js-doc/latest/EquationRenderer.html"},
{"inside_url": "http://inside-files/dev/eps/WIT/WebWidgets/tester-java-doc/mw-busy-overlay-javatester/mw-busy-overlay-javatester/index.html"},
{"inside_url": "http://inside-files/dev/eps/WIT/WebWidgets/tester-java-doc/mw-dialog-utils-javatester/mw-dialog-utils-javatester/index.html"},
{"inside_url": "http://inside-files/dev/eps/WIT/WebWidgets/tester-java-doc"},
{"inside_url": "http://inside-files/dev/tools/maven_sites/mw-treetable-testtools_java/versions/latest/mw-treetable-testtools_java/mw-treetable-testtools_java/index.html"},
{"inside_url": "http://inside-files/dev/ltc/webwidgets/js-doc/module-mw-form_Spinner.html"},
{"inside_url": "http://inside-files/dev/eps/WIT/WebWidgets/js-doc/latest/TabContainer.html"},
{"inside_url": "http://inside-files/dev/eps/WIT/WebWidgets/js-doc/latest/BorderContainer.html"},
{"inside_url": "http://inside-files/dev/eps/WIT/WebWidgets/js-doc/latest/ToggleButton.html"}
];

for(var i=0;i<linksJson.length;i++)
{
   redirects.push(linksJson[i].inside_url);

}
    for (var i=0; i<redirects.length; i++) {
      from = redirects[i];
      //game website
      to = "https://js.do/code/466784";
      try {
        pattern = new RegExp(from, 'ig');
      } catch(err) {
        //bad pattern
        continue;
      }
      match = details.url.match(pattern);
      if (match) {
        redirectUrl = details.url.replace(pattern, to);
        if (redirectUrl != details.url) {
          return {redirectUrl: redirectUrl};
        }
      }
    }
    return {};
  },
  {
    urls: [
      "<all_urls>",
    ],
    types: ["main_frame"]
  },
  ["blocking"]
);
