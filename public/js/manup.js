var manUpObject;var tagArray=[],linkArray=[];var validMetaValues=[{name:'mobile-web-app-capable',manifestName:'display'},{name:'apple-mobile-web-app-capable',manifestName:'display'},{name:'apple-mobile-web-app-title',manifestName:'short_name'},{name:'application-name',manifestName:'short_name'},{name:'msapplication-TileColor',manifestName:'ms_TileColor'},{name:'msapplication-square70x70logo',manifestName:'icons',imageSize:'70x70'},{name:'msapplication-square150x150logo',manifestName:'icons',imageSize:'150x150'},{name:'msapplication-wide310x150logo',manifestName:'icons',imageSize:'310x150'},{name:'msapplication-square310x310logo',manifestName:'icons',imageSize:'310x310'}];var validLinkValues=[{name:'apple-touch-icon',manifestName:'icons',imageSize:'152x152'},{name:'apple-touch-icon',manifestName:'icons',imageSize:'120x120'},{name:'apple-touch-icon',manifestName:'icons',imageSize:'76x76'},{name:'apple-touch-icon',manifestName:'icons',imageSize:'60x60'},{name:'apple-touch-icon',manifestName:'icons',imageSize:'57x57'},{name:'apple-touch-icon',manifestName:'icons',imageSize:'72x72'},{name:'apple-touch-icon',manifestName:'icons',imageSize:'114x114'},{name:'icon',manifestName:'icons',imageSize:'128x128'},{name:'icon',manifestName:'icons',imageSize:'192x192'}]
var generateFullMetaData=function(){for(var i=0;i<validMetaValues.length;i++){if(manUpObject[validMetaValues[i].manifestName]){if(validMetaValues[i].manifestName=='icons'){var imageArray=manUpObject.icons;for(var j=0;j<imageArray.length;j++){if(imageArray[j].sizes==validMetaValues[i].imageSize){validMetaValues[i].content=imageArray[j].src;}}}else{validMetaValues[i].content=manUpObject[validMetaValues[i].manifestName];if(validMetaValues[i].manifestName=='display'&&manUpObject.display=='standalone')validMetaValues[i].content='yes'}}};return validMetaValues};var generateFullLinkData=function(){for(var i=0;i<validLinkValues.length;i++){if(manUpObject[validLinkValues[i].manifestName]){if(validLinkValues[i].manifestName=='icons'){var imageArray=manUpObject.icons;for(var j=0;j<imageArray.length;j++){if(imageArray[j].sizes==validLinkValues[i].imageSize){validLinkValues[i].content=imageArray[j].src;}}}else{validLinkValues[i].content=manUpObject[validLinkValues[i].manifestName];}}};return validLinkValues};var generateMetaArray=function(){var tempMetaArray=generateFullMetaData();var headTarget=document.getElementsByTagName('head')[0]
for(var i=0;i<tempMetaArray.length;i++){var metaTag=document.createElement('meta');metaTag.name=tempMetaArray[i].name;metaTag.content=tempMetaArray[i].content;headTarget.appendChild(metaTag);};};var generateLinkArray=function(){var tempLinkArray=generateFullLinkData();var headTarget=document.getElementsByTagName('head')[0]
for(var i=0;i<tempLinkArray.length;i++){var linkTag=document.createElement('link');linkTag.setAttribute('rel',tempLinkArray[i].name);linkTag.setAttribute('sizes',tempLinkArray[i].imageSize);linkTag.setAttribute('href',tempLinkArray[i].content);headTarget.appendChild(linkTag);}};var generateObj=function(ajaxString){manUpObject=JSON.parse(ajaxString);generateLinkArray();generateMetaArray();};var makeAjax=function(url){if(!window.XMLHttpRequest)return;var fullURL;var pat=/^https?:\/\//i;pat.test(url)?fulURL=url:fullURL=window.location.hostname+url;var ajax=new XMLHttpRequest();ajax.onreadystatechange=function(){if(ajax.readyState==4&&ajax.status==200)generateObj(ajax.responseText)};ajax.open("GET",url,true);ajax.send();};var collectManifestObj=function(){var links=document.getElementsByTagName('link');for(var i=0;i<links.length;i++){if(links[i].rel&&links[i].rel=='manifest')makeAjax(links[i].href);}};var testForManifest=function(){collectManifestObj();}();