/*(function log() {
   window.addEventListener('scroll', function () {
       if (window.pageYOffset >= 1000) {
           console.log(window.pageYOffset + "px");
       }
   });
})();
aria-valuenow="8"
class="forward-button-container"
class="question-footer-wrapper"
*/
/*  let test = document.querySelector('#Layer_1');
  console.log(test.getAttribute('version'));*/

(function () {
  /*  let iframe = document.querySelector('#secPage');
    iframe.contentWindow.postMessage({task: "NewMas ege????"}, '*');*/

    window.addEventListener("message", listener);
    function listener(event) {
        const msg = event.data.toString();
        if (msg.indexOf('coupon_Test_P&G_Turkey') != -1) {
          /*  console.log('event.origin - ', event.origin);*/
            console.log('Delivered-' + msg);
            window.adoric.trigger(msg);
        }

       /* if (event.data['task']) {
            console.log("event.dataMAIN-");
            console.log(event.data);
        }*/
    }
})();

(function () {

    var DOC_KEY = '1N3bg7lhfpiQk8e8MLmNekjZTxJlhHXbEfdvC12Vrn-Y';
    var API_KEY = 'AIzaSyD3CXiYc3BUNDv4MZIbM1ehjzfHPloIbvo';
    var SHEET_PAGE = 'Sheet1';
    var SHEET_SCOPE = '!A2:B10';
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/" + DOC_KEY + "/values/" + SHEET_PAGE + SHEET_SCOPE + "?key=" + API_KEY;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", URL, true);
    xhr.responseType = 'json';
    xhr.send();
    /*console.log(self);*/

    /*put new bunner in tree html position prepend  pastete inside and in begin*/
    xhr.onload = function () {
        if (xhr.status === 200) {
            var responseGoogleSheet = xhr.response;
            var arrResponse = responseGoogleSheet["values"];
            var link;
            var description;
            /*if custumer add content in ane row go around and get first*/
            for (var key in arrResponse) {
                if (arrResponse[key].length) {
                    link = arrResponse[key][0];
                    description = arrResponse[key][1];
                    break;
                }
            }
            /*select divs in part DOM our company,because in company we add unique name class in div with teg a,
             what we will change by new contents */
            var allHrefOnBanner = document.querySelectorAll('.productLink');
            var spanTextOnBanner = document.querySelector('.productLink>span');
            /*approve present div in DOM adn change links*/
            for (var i in allHrefOnBanner) {
                allHrefOnBanner[i].href = link;

            }
            /*if present spliter we add teg <b> in first part text description*/
            var indexSeparator = description.indexOf(":");
            if (indexSeparator !== -1) {
                var firstPart = description.slice(0, indexSeparator + 1);
                var otherText = description.slice(indexSeparator + 1);
                /*spanTextOnBanner.innerHTML = "<b>" + firstPart + "</b>" + otherText;*/
            } else {
                spanTextOnBanner.textContent = description;
            }

        }
    }

})();










