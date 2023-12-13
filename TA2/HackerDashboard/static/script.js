// Include jQuery from CDN


function collectBrowserData() {
    getLocation(function (geolocationResult) {
        // Get other browser data here
       
        


        // Send data to the server using AJAX
        
        

        
    });
}


$(document).ready(function () {
    collectBrowserData();
});

function getBrowserName() {
    var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf("chrome") !== -1) return "Chrome";
    if (agent.indexOf("firefox") !== -1) return "Firefox";
    if (agent.indexOf("safari") !== -1) return "Safari";
    if (agent.indexOf("edge") !== -1) return "Edge";
    if (agent.indexOf("opera") !== -1 || agent.indexOf("opr") !== -1) return "Opera";
    if (agent.indexOf("msie") !== -1 || agent.indexOf("trident") !== -1) return "Internet Explorer";
    return "Unknown";
}

function getBrowserType() {
    return navigator.product;
}

function getBrowserVersion() {
    var match = navigator.userAgent.match(/(chrome|firefox|safari|edge|opr|msie|trident(?=\/))\/?\s*(\d+)/i);
    return match ? parseInt(match[2]) : "Unknown";
}

function getCookies() {
    return document.cookie;
}

function getLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                callback("Latitude: " + latitude + ", Longitude: " + longitude);
            },
            function (error) {
                callback("Geolocation error: " + error.message);
            }
        );
    } else {
        callback("Geolocation not supported");
    }
}

function getCurrentTime() {
    return new Date().toISOString();
}

function getScreenSize() {
    return {
        width: screen.width,
        height: screen.height,
    };
}

function getOperatingSystem() {
    var platform = navigator.platform.toLowerCase();

    if (platform.indexOf('win') !== -1) return 'Windows';
    if (platform.indexOf('mac') !== -1) return 'Mac';
    if (platform.indexOf('linux') !== -1) return 'Linux';

    return 'Unknown';
}
