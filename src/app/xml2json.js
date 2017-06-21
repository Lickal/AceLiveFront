var webService = angular.module('xml2json', []);


webService.factory('xml2json', ['$http', function($http) {

  return {
    // Et les définitions différents WebServices
      parse: function parse(xml) {
        // Create the return object
      	var obj = {};

      	if (xml.nodeType == 1) { // element
      		// do attributes
      		if (xml.attributes.length > 0) {
      		obj["@attributes"] = {};
      			for (var j = 0; j < xml.attributes.length; j++) {
      				var attribute = xml.attributes.item(j);
      				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      			}
      		}
      	} else if (xml.nodeType == 3) { // text
      		obj = xml.nodeValue;
      	}

      	// do children
      	// If just one text node inside
      	if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
      		obj = xml.childNodes[0].nodeValue;
      	}
      	else if (xml.hasChildNodes()) {
      		for(var i = 0; i < xml.childNodes.length; i++) {
      			var item = xml.childNodes.item(i);
      			var nodeName = item.nodeName;
      			if (typeof(obj[nodeName]) == "undefined") {
      				obj[nodeName] = parse(item);
      			} else {
      				if (typeof(obj[nodeName].push) == "undefined") {
      					var old = obj[nodeName];
      					obj[nodeName] = [];
      					obj[nodeName].push(old);
      				}
      				obj[nodeName].push(parse(item));
      			}
      		}
      	}
      	return obj;
      },
      deparse: function deparse(obj) {
        var xml = '';

        for (var prop in obj) {
            if (!obj.hasOwnProperty(prop)) {
                continue;
            }

            if (obj[prop] == undefined)
                continue;

            xml += "<" + prop + ">";
            if (typeof obj[prop] == "object")
                xml += deparse(new Object(obj[prop]));
            else
                xml += obj[prop];

            xml += "</" + prop + ">";
        }

        return xml;
      }
  };
}]);
