$(function () {
    Bugfender.init({
        appKey: 'iG7lknbdmGklthN4gKEZGv3ISHq0k6KC',
    });

    // $.getJSON('http://ip-api.com/json', function (data) {
    //     $("#ip").text(data.query);
    //     $('#country').text(data.country);
    //     $('#city').text(data.city);
    //     $("#gmaps").attr("src", "https://www.google.com/maps?q=" + data.lat + "," + data.lon + "&output=embed");
    //     console.log("-------------status: " + data.status + "-------------");
    //     console.log("user ip: " + data.query);
    //     console.log("country: " + data.country);
    //     console.log("city: " + data.city);
    //     console.log("latitude: " + data.lat);
    //     console.log("longitude: " + data.lon);
    // })

    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
    });
});
