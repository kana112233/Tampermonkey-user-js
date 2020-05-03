// ==UserScript==
// @name         百度页面带谷歌搜索
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  百度搜索加上谷歌按钮
// @author       makey
// @grant        GM_openInTab
// @include      https://www.baidu.com/*
// @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// ==/UserScript==
(function() {
   'use strict';

   function getGoogleUrl(searchText) {
       return 'https://www.google.com/search?q=' + searchText;
   }
   function googleIt() {
       var searchText = document.querySelector('#kw').value;
       GM_openInTab( getGoogleUrl(searchText), false);
   }
   
   $('#su').after('<input type="button" id="google" value="Google一下" class="btn self-btn bg s_btn" style="background-color:black;" />');

   $("#google").click(function() {
       googleIt();
   });

   setTimeout(function(){
       if($("#google").val() !== "Google一下"){
           $("#google").val("Google一下");
       }
   }, 2000);

})();
