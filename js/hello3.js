var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    var str = '<div my-directive>Hello world</div>'
    var com = $compile(str)(scope);
    console.log('outerHTML', com[0].outerHTML);
    element.append(com[0].outerHTML);
});
