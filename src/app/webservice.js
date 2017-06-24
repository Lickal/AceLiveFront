var webService = angular.module('webService', []);


webService.factory('webService', ['$http', function($http) {

  function callWebservice(method, url, postData, successCallback, errorCallback) {
    // Appel général du webService, fonction qu'on appel à chauqe fois

            var callWS = {
                method: method,
                // url: "https://httpbin.org/post", // ligne pour les tests, à modifier
                url: url,
                data: postData,
                timeout: 180000
            };

            // Call WS.
            $http(callWS).
            success(function(data, status, headers, config) {
              data = data.xml2json(xml);
                successCallback(data);
            }).
            error(function(data, status, headers, config) {
                errorCallback();
            });
        };

        return {
          URLserveur : "http://localhost:8080/aceliveback/webresources/webservices.",
          // Et les définitions différents WebServices
            Login: function Login(user, successCallback, errorCallback) {
              var wsURL = URLserveur + ".administrateur";
              var postData = {};


              postData.user = user.user;
              postData.password = user.password;

              callWebservice('GET', wsURL, postData, successCallback, errorCallback);
            },
            import_mail_excel: function import_mail_excel(excel, successCallback, errorCallback) {
              var wsURL = URLserveur + "/import_mail_excel";
              var postData = {};


              postData.excel = excel;

              callWebservice('POST', wsURL, postData, successCallback, errorCallback);
            },
            subscribe_newsletter: function subscribe_newsletter(mail, newsletterID, successCallback, errorCallback) {
              var wsURL = URLserveur + "/subscribe_newsletter";
              var postData = {};


              postData.mail = mail;
              postData.newsletterID = newsletterID;

              callWebservice('POST', wsURL, postData, successCallback, errorCallback);
            },
            created_campagne: function created_campagne(campagne, successCallback, errorCallback) {
              var wsURL = URLserveur + "/created_campagne";
              var postData = {};


              postData.campagne = campagne;

              callWebservice('POST', wsURL, postData, successCallback, errorCallback);
            },
            created_newsletter: function created_newsletter(newsletter, successCallback, errorCallback) {
              var wsURL = URLserveur + "/created_newsletter";
              var postData = {};


              postData.newsletter = newsletter;

              callWebservice('POST', wsURL, postData, successCallback, errorCallback);
            },
            send_newsletter: function send_newsletter(newsletterID, successCallback, errorCallback) {
              var wsURL = URLserveur + ".NEWSLETTER" + newsletterID;
              var postData = {};

              callWebservice('GET', wsURL, postData, successCallback, errorCallback);
            },
            liste_newsletter: function liste_newsletter(successCallback, errorCallback) {
              var wsURL = URLserveur + ".NEWSLETTER";
              var postData = {};

              callWebservice('GET', wsURL, postData, successCallback, errorCallback);
            },
            liste_user: function liste_user(successCallback, errorCallback) {
              var wsURL = URLserveur + ".USERS";
              var postData = {};

              callWebservice('GET', wsURL, postData, successCallback, errorCallback);
            },
            liste_campagne: function liste_campagne(successCallback, errorCallback) {
              var wsURL = URLserveur + ".CAMPAGNE";
              var postData = {};

              callWebservice('GET', wsURL, postData, successCallback, errorCallback);
            }
        };
}]);
