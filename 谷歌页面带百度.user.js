// ==UserScript==
// @name         谷歌页面带百度
// @namespace    https://github.com/kana112233/Tampermonkey-user-js
// @version      1.0.0
// @description  谷歌页面带百度
// @description:zh-cn 谷歌页面带百度
// @author       makey
// @grant        GM_openInTab
// @include      https://www.google.com/*
// @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js

// ==/UserScript==
(function() {
    'use strict';

   function getBaiduOnceUrl(searchText) {
       return 'https://www.baidu.com/s?wd=' + searchText;
   }
   function BaiduOnce() {
       var searchText = document.querySelector('.gLFyf').value;
       GM_openInTab( getBaiduOnceUrl(searchText), false);
   }
   $('#gbqfbb').after('<input type="button" id="baiduId" value="百度一下" class="btn self-btn bg s_btn" style="background-color:#f2f2f2;border:1px solid #f2f2f2;border-radius: 4px;width:142.5px;height:36px" />');
   $('#hdtb-msb').after('<input type="button" id="baiduId" value="百度一下" class="btn self-btn bg s_btn" style="background-color:#f2f2f2;border:1px solid #f2f2f2;border-radius: 4px;width:142.5px;height:36px" />');

   $("#baiduId").click(function() {
        BaiduOnce();
   });

})();
