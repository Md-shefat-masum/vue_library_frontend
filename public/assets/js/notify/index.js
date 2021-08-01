'use strict';
var notify = $.notify('<strong>Loading</strong> Do not close this page...', {
    type: 'primary',
    allow_dismiss: false,
    showProgressbar: true,
    delay: 2000,
    timer: 300
});

setTimeout(function() {
    notify.update('message', '<strong>Loading</strong> Page Data.');
}, 1000);

setTimeout(function() {
    notify.update('message', '<strong>Loading</strong> User Data.');
}, 2000);

setTimeout(function() {
    notify.update('message', '<strong>Loading</strong> Profile Data.');
}, 3000);

setTimeout(function() {
    notify.update('message', '<strong>Checking</strong> for errors.');
}, 4000);