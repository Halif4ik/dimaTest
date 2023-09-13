/*(function () {
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
})();*/

(function () {
    /*Close adoric campaign*/
    document.addEventListener('click', function (event) {
        const buttonClose = event.target.closest('.button.close-adoric');
        const textClose = event.target.closest('.element-text:not(.inImage)');

        textClose || buttonClose && adoric && adoric.lightboxes.forEach(function (item) {
            console.log('item-', item);
            item.close(4);
        });

        if (buttonClose) {
            buttonClose.style.setProperty('visibility', 'hidden');
        }
    });

    /*set winner code under scretch cart*/
    var DOC_KEY = '1N3bg7lhfpiQk8e8MLmNekjZTxJlhHXbEfdvC12Vrn-Y';
    var API_KEY = 'AIzaSyDB7Mk0_X06DqZHWlllSOont--5XAZ4tao';
    var SHEET_PAGE = 'Sheet1';
    var SHEET_SCOPE = '!A2:B10';
    var URL = "https://sheets.googleapis.com/v4/spreadsheets/" + DOC_KEY + "/values/" + SHEET_PAGE + SHEET_SCOPE + "?key=" + API_KEY;
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
            /*if present spliter we add teg <b> in first part text description*/
            const indexSeparator = description.indexOf(":");
            setTimeout(function () {
                /*select divs in part DOM our company,because in company we add unique name class in div with teg a,
             what we will change by new contents */
                const allHrefOnBanner = document.querySelectorAll('.element-text:not(.inImage) A');
                console.log('allHrefOnBanner',allHrefOnBanner[0]);
                /*approve present div in DOM adn change links*/
                allHrefOnBanner.forEach(function (oneHref) {
                    oneHref.href = link;
                });

                const spanTextOnBanner = document.querySelector('.element-text:not(.inImage) span');
                if (indexSeparator !== -1) {
                    const firstPart = description.slice(0, indexSeparator + 1);
                    const otherText = description.slice(indexSeparator + 1);
                    spanTextOnBanner.innerHTML = "<b>" + firstPart + "</b>" + otherText;
                } else {
                    spanTextOnBanner.textContent = description;
                }
            }, 1000)
        }
    }

})();










