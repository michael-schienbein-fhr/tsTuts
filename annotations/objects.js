var profile = {
    firstName: 'gary',
    age: 21,
    coords: {
        lat: 0,
        lng: 12
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = profile.age, firstName = profile.firstName;
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
console.log(lat, lng, firstName);
