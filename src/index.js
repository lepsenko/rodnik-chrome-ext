import Controller from './controller';
//
// export const EVENTTAGS = {
//     tags: '#datepicker span.btn',
//     id: ['dateRangePreset', 'locationSelect', 'operationTypeSelect']
// };

if( document.querySelectorAll('.operations-table tbody tr').length > 0 ){
    Controller.init();
} else {
    window.localStorage.clear();
}

//
// (function(){
//
//
//     //
//     // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     //     let tab = tabs[0]
//     //     console.log(tab);
//     //
//     // });
//
//
//     // chrome.tabs.executeScript(null, {file: "./dist/js/engine.js"});
//
//     //
//     // document.addEventListener('DOMContentLoaded', () => {
//     //
//     // });
//
//
//
// })();
