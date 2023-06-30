(function () {
    let iframe = document.querySelector('#secPage');
    iframe.contentWindow.postMessage({task: "NewMas ege????"}, '*');

    window.addEventListener("message", function (event) {
        const msg = event.data.toString();
        if (msg.indexOf('coupon_Test_P&G_Turkey') != -1) {
            console.log('event.origin - ', event.origin);
            console.log('Delivered-' + msg);
            window.adoric.trigger(msg);
        }
    });
})();
/*Close adoric campaign*/
(function () {
    document.addEventListener('click', function (event) {
        const buttonClose = event.target.closest('.button.close-adoric') || event.target.closest('.element-text:not(.inImage)');
        console.log('buttonClose-', buttonClose);
        buttonClose && adoric && adoric.lightboxes.forEach(function (item) {
            console.log('item-', item);
            item.close(4);
        });
    });
})();

(function () {
    /*set winner code under scretch cart*/
    var DOC_KEY = '1N3bg7lhfpiQk8e8MLmNekjZTxJlhHXbEfdvC12Vrn-Y';
    var API_KEY = 'AIzaSyDB7Mk0_X06DqZHWlllSOont--5XAZ4tao';
    var SHEET_PAGE = 'Sheet1';
    var SHEET_SCOPE = '!A2:B10';
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/" + DOC_KEY + "/values/" + SHEET_PAGE + SHEET_SCOPE + "?key=" + API_KEY;
    console.log('URL-', URL);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", URL, true);
    xhr.responseType = 'json';
    xhr.send();

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
            console.log('description-', description);
            console.log('link-', link);
            /*select divs in part DOM our company,because in company we add unique name class in div with teg a,
             what we will change by new contents */
            var allHrefOnBanner = document.querySelectorAll('.element-text:not(.inImage) A');
            var spanTextOnBanner = document.querySelector('.element-text:not(.inImage) span');
            /*approve present div in DOM adn change links*/
            allHrefOnBanner.forEach(function (oneHref) {
                oneHref.href = link;
            });

            /*if present spliter we add teg <b> in first part text description*/
            var indexSeparator = description.indexOf(":");
            if (indexSeparator !== -1) {
                var firstPart = description.slice(0, indexSeparator + 1);
                var otherText = description.slice(indexSeparator + 1);
                spanTextOnBanner.innerHTML = "<b>" + firstPart + "</b>" + otherText;
            } else {
                spanTextOnBanner.textContent = description;
            }

        }
    }

})();










