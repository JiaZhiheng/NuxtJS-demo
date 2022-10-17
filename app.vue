<template>
  <div>
    <body>
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
        <defs>
          <symbol id="icon-ringstart" viewBox="0 0 70 70">
            <path
              d="M50.4597734,36.1314324 L26.4920573,49.6784024 C26.0112587,49.9501581 25.4011929,49.7806954 25.1294372,49.2998968 C25.044589,49.1497808 25,48.9802752 25,48.8078396 L25,21.7138995 C25,21.1616148 25.4477153,20.7138995 26,20.7138995 C26.1724356,20.7138995 26.3419412,20.7584885 26.4920573,20.8433367 L50.4597734,34.3903067 C50.940572,34.6620624 51.1100347,35.2721282 50.838279,35.7529268 C50.7488503,35.9111468 50.6179934,36.0420037 50.4597734,36.1314324 Z"
              id="Play-triangle"
              fill="#FFFFFF"
            ></path>
            <g class="sc-fzoydu ctZjfV">
              <circle
                opacity="1"
                cx="35"
                cy="35"
                r="34"
                class="sc-fzoJMP gWdKUw"
              ></circle>
              <circle
                stroke-dasharray="213.62830044410595"
                stroke-dashoffset="213"
                r="34"
                cx="35"
                cy="35"
                class="circle"
              ></circle>
            </g>
          </symbol>
        </defs>
      </svg>
      <div id="app">
        <header class="header">
          <div class="wrapper">
            <div class="header-con">
              <a
                class="logo"
                href="/ja-hiappo/"
                rel="home"
                title="Best App News &amp; Free APK Download"
              ></a>
              <input type="checkbox" id="topmenu" />
              <label for="topmenu" class="opacityblack"></label>
              <label for="topmenu" class="topmenu-box">
                <span class="menu-icon"></span>
              </label>
              <input type="checkbox" id="searchmenu" />
              <label for="searchmenu" class="opacitywhite"></label>
              <label for="searchmenu" class="search-icon-wp">
                <span class="search-icon"></span>
              </label>
              <div class="menu-category">
                <div class="menu-category-item">
                  <a class="coverlink" href="/ja-hiappo/"></a>
                  <span class="menu-category-link">着信音</span>
                </div>
                <div class="menu-category-item">
                  <a class="coverlink" href="/ja-hiappo/wallpapers.html"></a>
                  <span class="menu-category-link">スマホ壁紙</span>
                </div>
              </div>
              <div class="search">
                <div class="search-pos"><span class="search-icon"></span></div>
                <form class="search-form" action="/ja-hiappo/search-ringtones">
                  <input
                    class="sea-text"
                    type="text"
                    name="q"
                    required=""
                    placeholder="無料着信音を検索"
                    value=""
                  />
                  <button class="sea-btn" type="submit"></button>
                </form>
              </div>
            </div>
          </div>
        </header>
        <div class="wrapper">
          <section>
            <h2 class="section-tl">新着着信音</h2>
            <div class="tones-ls">
              <div class="tones-item" v-for="(item, index) in list">
                <div class="tones-wp">
                  <div class="tones-con">
                    <a class="coverlink" href="#"></a>
                    <a class="tones-name" href="#">{{ item.name }}</a>
                    <div class="tones-play">
                      <div class="ringend">
                        <svg class="icon-ring">
                          <use xlink:href="#icon-ringstart"></use>
                        </svg>
                      </div>
                    </div>
                    <img
                      :src="'images/tones/' + (index + 1) + '.png'"
                      class="tones-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <a class="tones-more" href="__ROOT__/new.html">もっと見る</a>
          </section>
        </div>
      </div>
    </body>
  </div>
</template>
<script setup>
import {ref} from 'vue'
const list = ref('');
const arrayList = await useFetch('https://hiappo.app/getlist',{method:'get',params:{lang:'ja'}});
console.log(arrayList.data.value.list);
list.value = arrayList.data.value.list;
</script>
<style>
* {
    box-sizing: border-box;
}

body {
    font-family: '游ゴシック体', 'yu gothic', YuGothic, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, 'Open Sans', 'Helvetica Neue', sans-serif, serif;
    font-size: 14px;
    line-height: 1.78;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {
    font-size: 100%;

    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
dl,
dt,
dd {
    margin: 0;
    padding: 0;
}

a {
    cursor: pointer;
    text-decoration: none;

    color: #333;
}

a,
a:hover,
a:visited {
    outline: none;
}

img {
    max-width: 100%;

    transition: opacity ease .25s;
    vertical-align: middle;

    opacity: 1;
}

img[data-src] {
    opacity: 0;
}

button {
    border: none;
    background: none;
}

input:focus,
button:focus,
textarea {
    outline: none;
}

::-webkit-input-placeholder {
    color: #ccc;
}

::-moz-placeholder {
    color: #ccc;
}

:-ms-input-placeholder {
    color: #ccc;
}

article,
aside,
figure,
footer,
header,
main,
nav,
section {
    display: block;
}

li {
    list-style: none;
}

/* .audio-box-times,.retitle,.reviewcon h3,.art-tl{
    font-family: "ProductSans";
} */
.coverlink {
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.wrapper {
    position: relative;

    margin: 0 auto;
    padding-right: 20px;
    padding-left: 20px;
    overflow: hidden;
}

#topmenu,
#searchmenu {
    display: none;
}

.opacityblack,
.opacitywhite {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;

    display: none;
}

.opacityblack {
    z-index: 1002;
    top: 0;

    transition: all ease .25s;

    background-color: rgba(0, 0, 0, .55);
}

.opacitywhite {
    z-index: 999;
    top: 48px;

    background-color: rgba(0, 0, 0, 0);
}

.search-icon {
    position: relative;

    display: block;

    width: 16px;
    height: 16px;
    padding-right: 5px;

    transform: rotate(-45deg);

    border: 2px solid #ed203b;
    border-radius: 100%;
}

.search-icon::after {
    position: absolute;
    top: 12px;
    left: 50%;

    display: block;

    width: 2px;
    height: 8px;

    content: '';

    background-color: #ed203b;
}

.search {
    position: absolute;
    z-index: 1007;
    top: 10px;
    right: 20px;

    overflow: hidden;

    width: 0;
    height: 36px;

    transition: all ease .25s;

    border-radius: 6px;
    background-color: #fff;

    -ms-border-radius: 6px;
    -o-border-radius: 6px;
}

.search-form {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-width: 224px;
    height: 100%;
    padding-left: 16px;
}

.sea-text {
    font-size: 14px;

    flex: 1;

    height: 100%;

    border: none;
}

.sea-btn {
    position: absolute;
    right: 0;

    flex: 0 0 48px;

    width: 48px;
    height: 100%;
}

.search-pos {
    position: absolute;
    top: 50%;
    right: 20px;

    margin-top: -9px;
}

.search-pos .search-icon {
    border-color: #ed203b;
}

.search-pos .search-icon::after {
    background-color: #ed203b;
}

#searchmenu:checked~.opacitywhite {
    display: block;
}

#searchmenu:checked~.search {
    width: calc(100vw - 66px);

    border: 1px solid #eee;
}

#topmenu:checked~.opacityblack {
    display: block;
}

.topmenu-box {
    position: absolute;
    z-index: 1006;
    top: 20px;
    left: 20px;

    width: 20px;
    height: 16px;
}

.menu-icon,
.menu-icon::before,
.menu-icon::after {
    width: 100%;
    height: 2px;

    border-radius: 2px;
    background-color: #ed203b;
}

.menu-icon {
    position: relative;
    z-index: 1000;

    display: block;

    width: 14px;
}

.menu-icon::before,
.menu-icon::after {
    position: absolute;
    top: 7px;
    left: 0;

    width: 20px;

    content: '';
    transition: all ease .25s;
}

.menu-icon::after {
    top: 14px;

    width: 10px;
}

#topmenu:checked~.topmenu-box .menu-icon {
    background: none;
}

#topmenu:checked~.topmenu-box .menu-icon::before {
    transform: rotate(45deg);
}

#topmenu:checked~.topmenu-box .menu-icon::after {
    width: 20px;

    transform: rotate(-45deg);
    transform-origin: 1px -2px;
}

.search-icon-wp {
    position: absolute;
    z-index: 1005;
    top: 19px;
    right: 17px;

    width: 24px;
    height: 20px;
}

.search-icon-wp .search-icon {
    border-color: #ed203b;
}

.search-icon-wp .search-icon::after {
    background-color: #ed203b;
}

.navfix {
    position: absolute;
    z-index: 1003;
    top: 0;
    bottom: 0;
    left: 0;

    width: 100%;
}

.menunav {
    overflow: hidden;

    max-height: 0;
    padding-right: 20px;
    padding-left: 20px;

    transition: all 300ms cubic-bezier(.165, .84, .44, 1);
    text-align: left;

    background-color: #fff;
}

.menunav-link {
    font-size: 16px;
    /* color: #fff; */
    line-height: 40px;

    display: block;

    text-align: center;
}

#topmenu:checked~.navfix .menunav {
    max-height: 900px;
    padding-top: 64px;
    padding-bottom: 40px;
}

#topmenu:checked~.opacityblack {
    display: block;
}

.logo {
    position: relative;
    z-index: 1005;
    background: url(./images/logo.png) no-repeat left 12px;
    display: block;

    width: 143px;
    height: 56px;
    margin: 0 auto;

    text-align: center;
    
    color: #fff;
    background-size: 143px 32px;
    
}

.footer {
    padding: 24px 0;

    text-align: center;

    background-color: #000;
}

.ftlogo {
    width: 60px;
    height: 40px;

    background-size: 60px 40px;
}

.ft-tl {
    margin-top: 16px;
    margin-bottom: 5px;
    padding-top: 20px;

    color: #fff;
    border-top: 1px solid #222;
}

.ft-right {
    line-height: 1.42;

    color: #666;
}

.first-section {
    margin-top: -28px;
}

.section-tl {
    font-size: 20px;

    position: relative;

    margin-top: 34px;
    margin-bottom: 20px;

    text-align: center;
    text-transform: uppercase;
}

.section-subtl {
    font-size: 14px;
    font-weight: normal;

    position: relative;

    display: block;

    margin-top: 6px;
}

.section-tl::after {
    position: absolute;
    bottom: -4px;
    left: 50%;

    display: block;

    width: 34px;
    height: 2px;
    margin-left: -17px;

    content: '';

    background-color: #eee;
}

.tones-ls {
    display: flex;
    flex-wrap: wrap;

    margin-left: -12px;
}

.tones-item {
    flex: 0 0 100%;

    width: 100%;
    margin-bottom: 12px;
    padding-left: 12px;
}

.tones-wp {
    position: relative;

    width: 100%;
    /* padding-top: 131%; */
}

.tones-con {
    position: relative;

    display: flex;
    overflow: hidden;
    align-items: center;
    flex-flow: row-reverse;

    height: 60px;
    padding: 0 16px;

    border-radius: 6px;
    /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
    padding-bottom: 24px; */
}

.icon-ring {
    width: 100%;
    height: 100%;
}

.tones-name {
    line-height: 1.4;

    position: relative;
    z-index: 8;
    /* margin-top: 20px; */
    /* font-size: 13px; */

    width: 100%;
    padding: 0 8px;

    color: #fff;
    /* display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1;
    align-items: flex-start; */
    /* align-items: flex-end; */
}

.ringstart {
    display: none;
}

.ringend,
.ringstart {
    position: relative;
    z-index: 1;

    width: 30px;
    height: 30px;

    cursor: pointer;
}

.circle {
    transition: all .8s ease 0s;

    stroke: rgb(255, 255, 255);
    fill: none;
}

.gWdKUw {
    stroke: rgb(255, 255, 255);
    fill: none;
    stroke-width: 2;
}

.ctZjfV {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
}

.tonesadsmb {
    /* display: block; */
    width: 100%;
    padding-bottom: 12px;
    padding-left: 12px;
}

.tonesadspc {
    display: none;

    padding-bottom: 12px;
    padding-left: 12px;
}

.tonesadsdesktop {
    display: none;
    padding: 0;
}

.tones-img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    width: 100%;
}
.wallpapers-tones-more {
    line-height: 48px;
    display: block;
    width: 180px;
    margin: 0 auto 16px;
    text-align: center;
    color: #fff;
    border-radius: 24px;
    background-color: #ed203b;
    cursor: pointer;
}
.tones-more {
    line-height: 48px;
    display: block;
    width: 180px;
    margin: 0 auto 16px;
    margin-top: 12px;
    text-align: center;
    color: #fff;
    border-radius: 24px;
    background-color: #ed203b;
    cursor: pointer;
}

.category-ls {
    display: flex;
    flex-wrap: wrap;

    margin-left: -12px;
}

.category-item {
    flex: 0 0 50%;

    width: 50%;
    margin-bottom: 12px;
    padding-left: 12px;
}

.category-link {
    display: block;
    /* padding: 15px 24px; */

    padding: 8px 16px;

    transition: all ease .25s;

    border: 1px solid #f5f5f5;
    border-radius: 12px;
}

.audio-page {
    font-size: 18px;
    ;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 4px 0 16px;

    text-align: center;
}

.page-right-wp {
    width: 48px;
    height: 48px;
    margin: 0 20px;
}

.page-right,
.page-left {
    line-height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;

    border-radius: 12px;
    background-color: #ed203b;
}

.page-right .icon-right,
.page-left .icon-left {
    width: 24px;
    height: 24px;

    transition: all ease .25s;

    fill: #fff;
}

.audio-descript {
    padding-bottom: 6px;
}

.audio-down {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 32px;
    margin-left: -8px;
}

.audio-down-item:nth-child(1) {
    margin-bottom: 12px;
}

.audio-down-item {
    flex: 1;
}

.audio-down-link {
    font-size: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 48px;

    color: #fff;
    border-radius: 24px;
    background-color: #333;
}

.icon-down {
    width: 22px;
    height: 22px;
    margin-right: 5px;

    fill: #fff;
}

.icon-next,
.icon-pre {
    width: 22px;
    height: 22px;
    margin-top: 10px;
}

/* .icon-next{
    margin-left: 12px;
}
.icon-pre{
    margin-right: 12px;
} */
.tonesdetail-tl {
    font-size: 20px;

    margin-top: 8px;
    margin-bottom: 12px;

    text-align: center;
}

.tonesdetail-cate {
    text-align: center;
}

.tonesdetail-cate-link {
    line-height: 36px;

    display: inline-block;

    margin-top: 8px;
    margin-bottom: 16px;
    padding: 0 12px;

    border-radius: 6px;
    background-color: #f5f5f5;
    /* margin: 15px auto 24px; */
}

.nopadlf {
    padding-left: 0;
}

.detail-turn {
    display: flex;

    margin-top: 4px;
}

.detail-turn-lf,
.detail-turn-rt {
    /* justify-content: center; */
    line-height: 1.42;

    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: column;
    /* padding: 32px; */

    padding: 16px 16px 10px;

    text-align: center;

    border: 1px solid #eee;
}

.detail-turn-lf {
    flex-direction: column-reverse;
}

.detail-turn-rt {
    justify-content: flex-end;

    border-left-width: 0;
}

.audio-box {
    display: flex;
    align-items: center;
}

.audio-box-times {
    width: 24px;
}

.audio-pre {
    position: relative;

    flex: 1;

    height: 50px;
    margin: 0 32px 16px;

    background-size: 100% 50px;
}


.audio-rate {
    /* width: 400px; */
    position: absolute;
    top: 0;
    right: 50%;
    bottom: 0;
    left: 0;

    overflow: hidden;

    width: 0;
}

.audio-active {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    height: 50px;

    /* width: 800px; */
    background-size: 100% 50px;
}

.audio-play {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 16px;
}

.icon-replay {
    width: 28px;
    height: 28px;
    margin-left: 28px;
}

.audio-info {
    margin-top: 12px;
}

#facing {
    position: fixed;
    z-index: 1008;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    transition: all ease .25s;
    pointer-events: none;

    background-color: rgba(0, 0, 0, .55);
}

.modal {
    position: fixed;
    z-index: 1009;
    top: 50%;
    left: 50%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 300px;
    height: 200px;
    margin-top: -100px;
    margin-left: -150px;
    padding: 0 32px;

    transition: all ease .25s;
    transform: translateY(-100px);
    pointer-events: none;

    opacity: 0;
    border-radius: 4px;
    background-color: #fff;
}

.modal-tl {
    font-size: 16px;
    line-height: 26px;

    margin: 0;

    text-align: center;
}

.modal-btn {
    line-height: 48px;

    width: 120px;
    margin-top: 16px;

    cursor: pointer;
    text-align: center;

    color: #fff;
    border-radius: 24px;
    background-color: #ed203b;
}

.ringtone-report {
    cursor: pointer;

    color: #ed203b;
}

.audio-txt-a {
    color: #ed203b;
}

.repicfix {
    width: 100%;
    height: 200px;
    ;
    margin-bottom: 14px;
}

.reviewcon nav {
    margin: 14px 0;
}

#reviewcon-nav {
    margin: 8px 0 0;
}

.how-link {
    line-height: 1.4;

    display: block;

    padding: 6px 0;

    text-decoration: underline;
    ;

    color: #ed203b;
}

.passage {
    margin-top: 20px;
}
.help-passage {
    margin-top: 14px;
}
.help-section {
    margin-top: -34px;
}
.retitle {
    font-size: 22px;

    margin-bottom: 10px;
}

/* .reviewcon p{
    margin: 14px 0;
} */
.reviewcon img,
.reviewcon p {
    line-height: 24px;

    margin-bottom: 14px;
}

.reviewcon p {
    margin: 14px 0;
}

.howadspc {
    display: none;
}

/* .audio-info{
    display: flex;
} */
.audio-txt {
    line-height: 1.4;
    /* flex: 1; */

    display: block;
    /* text-align: center; */
    /* color: #ed203b; */

    margin: 8px 0;
}

.audio-txt-info,
.ringtone-report {
    padding-left: 10px;
}

.usetips {
    font-size: 13px;
    ;

    position: fixed;
    z-index: 9;
    right: 0;
    bottom: 0;
    left: 0;

    width: 100%;
    padding: 10px;

    transition: opacity ease .25s;
    pointer-events: none;

    opacity: 0;
    color: #fff;
    background-color: rgba(115, 115, 115, .9);
}

.usetips-link {
    font-size: 13px;
    ;

    text-decoration: underline;

    color: #fff;
}

.usetips-ls {
    margin-top: 10px;
}

.usetips-item {
    font-size: 13px;
    ;
    line-height: 28px;

    display: inline-block;

    width: 100px;
    height: 28px;
    margin-right: 10px;

    cursor: pointer;
    text-align: center;

    color: #fff;
    border: 1px solid rgba(255, 255, 255, .5);
    border-radius: 4px;
}

span.usetips-item {
    color: #333;
    border-color: #fff;
    ;
    background-color: #fff;
}

.art-tl {
    /* margin-top: 30px; */
    font-size: 20px;
}

table {
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
}

table tr td,
table tr th {
    line-height: 1.4;

    padding: 10px;

    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
}

.noresult-tl {
    margin-top: 20px;
    margin-bottom: 18px;
}

.noresult-ls {
    margin: 15px 0;
}

.noresult-item {
    line-height: 20px;

    position: relative;

    padding-left: 3px;
}

.noresult-item::before {
    display: inline-block;

    width: 4px;
    height: 4px;
    margin-right: 10px;

    content: '';
    vertical-align: middle;

    border-radius: 4px;
    background-color: #fff;
}

.searchpage {
    min-height: 100vh;
    min-height: calc(100vh - 180px);
    min-height: -webkit-calc(100vh - 180px);
    margin: 0 8px;
}

.row-item {
    position: relative;

    display: block;

    margin: 20px 0;
    padding: 12px 16px;

    border: 1px solid rgba(255, 255, 255, .1);
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 1px rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .20);
}

.row-logo {
    display: inline-block;

    width: 16px;
    height: 16px;
    margin-right: 5px;

    vertical-align: bottom;
}

.row-curlink {
    font-size: 12px;
    line-height: 16px;

    position: relative;

    padding-left: 30px;

    color: #3c4043;
    /*margin-bottom: 12px;*/
}

.icon-start {
    position: absolute;
    top: 50%;
    left: 0;

    width: 22px;
    height: 22px;
    margin-top: -11px;

    border: 1px solid #ed203b;
    border-radius: 100%;
    /* background-images: url(../images/christmas_play.png); */
    background-size: cover;
}

.icon-start::before {
    position: absolute;
    top: 4px;
    left: 8px;

    width: 0;
    height: 0;

    content: '';

    border: 6px solid #ed203b;
    border-color: transparent transparent transparent #ed203b;
    border-radius: 2px;
}

.row-tl {
    font-size: 16px;
    line-height: 20px;

    overflow: hidden;

    padding-top: 12px;
    padding-bottom: 7px;

    color: #ed203b;
}

.row-info {
    font-size: 14px;
    line-height: 20px;

    padding-top: 2px;

    color: #999;
}

.cate-turnpage {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 24px 0;
}

.cate-turnpage-item {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    /* line-height: 40px;
    text-align: center; */
    margin: 0 4px;

    color: #ed203b;
    border: 1px solid #eee;
    border-radius: 3px;

    -ms-border-radius: 3px;
    -o-border-radius: 3px;
}

.other-turnpage {
    border-width: 0;
}

.active-turnpage {
    color: #333;
}

.cate-icon-left,
.cate-icon-right {
    width: 14px;
    height: 14px;

    fill: #ed203b;
}

.cate-page-disable .cate-icon-left,
.cate-page-disable .cate-icon-right {
    fill: #eee;
}

.ringadspc {
    display: none;
}

.tonesads {
    margin-bottom: 16px;
}

.category-active {
    color: #ed203b;
    border-color: #ed203b;
}

audio {
    width: 100% !important;
}

.sound-tones {
    position: relative;

    margin-bottom: 16px;
}

.sound-mbhidden {
    display: none;
}

.audio-data {
    display: flex;
    align-items: center;

    margin-top: 12px;
}

.audio-times {
    font-size: 15px;

    color: #999;
}

.gray-line {
    position: relative;

    flex: 1;

    height: 5px;
    margin: 0 12px;

    border-radius: 2px;
    background-color: #efefef;
}

.active-line {
    position: absolute;
    left: 0;
    /* width: 10%; */

    height: 5px;

    transition: width ease .25s;

    border-radius: 2px;
    background-color: #ed203b;
}

.audio-action {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 32px 0;
}

.audio-status {
    position: relative;

    width: 64px;
    height: 64px;
    margin: 0 40px;

    cursor: pointer;

    border-radius: 100%;
    background-color: #ed203b;
    box-shadow: 0 0 0 7px rgba(237, 32, 59, .2);
}

.audio-status::after {
    position: absolute;
    top: 22px;
    left: 26px;

    width: 0;
    height: 0;

    content: '';

    border: 10px solid #fff;
    border-color: transparent transparent transparent #fff;
    border-left-width: 18px;
    border-radius: 3px;
}

.audio-pause::after {
    left: 25px;

    width: 5px;
    height: 22px;

    border: none;
    background-color: #fff;
    box-shadow: 10px 0 0 0 #fff;
}

.prev-audio,
.next-audio {
    position: relative;

    display: block;

    width: 0;
    height: 0;

    border: 10px solid #ed203b;
    border-radius: 3px;
}

.prev-audio {
    border-color: transparent #ed203b transparent transparent;
    border-right-width: 16px;
}

.next-audio {
    border-color: transparent transparent transparent #ed203b;
    border-left-width: 16px;
}

.prev-audio::after,
.next-audio::after {
    position: absolute;
    top: -8px;

    width: 3px;
    height: 16px;

    content: '';

    border-radius: 3px;
    background-color: #ed203b;
}

.prev-audio::after {
    left: -3px;
}

.next-audio::after {
    right: -3px;
}

.audio-ls {
    display: flex;
}

.audio-item {
    flex: 1;

    text-align: center;
}

.audio-cate-link {
    font-size: 13px;

    color: #ed203b;
}

.audio-text {
    font-size: 12px;

    display: block;

    color: #aaa;
}

.audio-info {
    font-size: 13px;
}

.audio-help {
    line-height: 1.2;

    position: relative;

    display: flex;
    align-items: center;

    margin-bottom: 32px;
    padding-right: 100px;

    white-space: nowrap;
}

.audio-able {
    position: absolute;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100px;
}

.icon-down-bg {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    margin-left: 6px;

    border-radius: 20px;
    background-color: #eee;
}

.audio-able .icon-down {
    width: 18px;
    height: 18px;
    margin-right: 0;

    fill: #666;
}

.audio-report {
    line-height: 40px;

    display: flex;
    align-items: center;

    width: 100%;
    height: 40px;
    margin-bottom: 16px;
    padding-right: 8px;
    padding-left: 12px;

    cursor: pointer;

    color: #999;
    border: 1px solid #eee;
    border-radius: 8px;
}

.audio-report-info {
    flex: 1;
}

.icon-right {
    width: 15px;
    height: 15px;
}

.notfound-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.notfound-img {
    max-width: 468px;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 20px;
}

.notfound-title {
    font-size: 18px;
    line-height: 18px;
    height: 18px;
    margin-bottom: 14px;
    color: #333;
    font-weight: bold;
}

.notfound-message {
    font-size: 14px;
    line-height: 14px;
    height: 14px;
    color: #ed203b;
    margin-bottom: 20px;
    font-weight: bold;
}

.notfound-button {
    display: block;
    text-align: center;
    width: 208px;
    height: 48px;
    background-color: #ed203b;
    border-radius: 24px;
    font-size: 14px;
    line-height: 48px;
    color: #fff;
}

.wallpapers-title {
    margin-top: 24px;
}

.mobile-tag-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 16px;
}

.desktop-tag-box {
    display: none;
}

.tag-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.tag-item {
    display: flex;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 2px 8px;
    margin-right: 4px;
    margin-bottom: 4px;
    position: relative;
}

.tag-item:hover {
    box-shadow: 0 0 4px 0 rgba(50, 50, 50, .22);
}

.tag-icon {
    height: 20px;
    width: 16px;
    margin-right: 4px;
}

.wallpapers-list {
    display: flex;
    margin-left: -12px;
    flex-wrap: wrap;
}

.wallpapers-item {
    width: 50%;
    margin-bottom: 12px;
    padding-left: 12px;
    position: relative;
}

.wallpaper-content {
    position: relative;  
    width: 100%;         
    padding-bottom: 180%;    
}

.wallpaper-content::before {
    content: "";         
    position: absolute;  
    width: 100%;         
    height: 100%;        
    background-color: #eee;  
}  

.wallpaper-content img {
    position: absolute; 
    height: 100%;        
    width: 100%;         
}

.breadcrumb {
    line-height: 1.2;
    display: flex;
    overflow: hidden;
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: -8px;
    white-space: nowrap;
    color: #bbb;
}
.breadcrumb span {
    font-size: 12px;
    padding-right: 8px;
    padding-left: 8px;
    color: #666;
}

.prevWp {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
}
.nextWp {
    position: absolute;
    right: 5%;
    top: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
}
.download {
    line-height: 48px;
    font-size: 20px;
    width: auto;
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
    color: #fff;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ed203b;
}
.desktop-tones-ls {
    display: none;
}
.mobile-tones-ls {
    display: flex;
    flex-wrap: wrap;
    margin-left: -12px;
}
.pageright {
    display: none;
}
.wallpapers-box {
    margin: 12px 0;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wallpapers-background-box {
    width: 65%;
    margin: 0 auto;   
    display: flex;
    justify-content: center;
    align-items: center;
}
.wallpapers-content-image {
    display: block;
    transform: scale(0.86);
    border-radius: 20px;
}
.wallpapers-background-image {
    height: 100%;
    position: absolute;
}
.ringadsmb {
    display: block;
    width: 100%;
    padding-left: 12px;
    padding-bottom: 12px;
} 
.ringadsmobile {
    display: block;
    width: 100%;
    padding-bottom: 12px;
} 
.wallpapersadsmobile {
    display: block;
    width: 100%;
}
.section-custom {
    margin-top: -22px;
}
.section-customer{
    margin-top: -34px;
}


.audio-down-item {
    flex: 1;
    padding-left: 8px;
}

.audio-down-link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    cursor: pointer;
    color: #fff;
    border-radius: 24px;
    background-color: #0d9f74;
}

div.audio-down-link {
    background-color: #333;
    position: relative;
}

.icon-down {
    flex: 0 0 20px;
    width: 20px;
    height: 20px;
}

.icon-convert {
    width: 26px;
    height: 26px;
    margin-right: 4px;
    fill: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.convert-animation .icon-convert {
    -webkit-animation: spin 1s linear infinite;

    animation: spin 1s linear infinite;
}

.menu-category {
    display: none;
}

@-webkit-keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}


@media screen and (min-width: 768px) {
    .section-custom {
        margin-top: -34px;
    } 
    .tones-name {
        font-size: 14px;
    }

    .wrapper {
        width: 728px;
    }

    .section-tl {
        margin-top: 54px;
    }

    .category-item {
        flex: 0 0 33.3333%;

        width: 33.3333%;
    }

    .audio-down {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        margin-left: -6px;
    }

    .audio-down-item:nth-child(1) {
        margin-bottom: 0;
    }

    .audio-down-item {
        flex: 1;
    }

    .audio-down-link {
        font-size: 14px;

        width: 100%;
    }

    .detail-turn-lf,
    .detail-turn-rt {
        /* padding: 32px; */
    }

    .tonesdetail-cate-link {
        margin-top: 15px;
        margin-bottom: 24px;
    }

    .category-link {
        padding: 15px 24px;
    }

    .tag-item {
        margin-right: 8px;
        margin-bottom: 8px;
    }

    .wallpapers-item {
        width: 20%;
    }

    .mobile-tag-box {
        display: none;
    }

    .desktop-tag-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-bottom: 12px
    }
    .desktop-tones-ls {
        display: flex;
        flex-wrap: wrap;
        margin-left: -12px;
    }
    .mobile-tones-ls {
        display: none;
    }
}

@media screen and (min-width: 1024px) {

    .ringend,
    .ringstart {
        width: 78px;
        height: 78px;
    }

    .tonesadsmb,
    .topmenu-box,
    .howadsmb,
    .ringadsmb,
    .ringadsmobile,
    .wallpapersadsmobile {
        display: none;
    }

    .tonesadspc {
        display: block;
        width: 100%;
    }

    .tonesadsdesktop {
        display: block;
        width: 100%;
    }

    .howadspc,
    .ringadspc,
    .sound-mbhidden {
        display: block;
    }

    
    .tones-item,
    .category-item {
        flex: 0 0 20%;

        width: 20%;
    }

    .tones-wp {
        padding-top: 131%;
    }

    .tones-con {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        overflow: hidden;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;

        height: auto;
        padding-bottom: 24px;

        border-radius: 12px;
    }

    .sound-tones .tones-con {
        position: relative;

        align-items: center;
        flex-direction: row-reverse;

        height: 60px;
        padding-bottom: 0;
    }

    .sound-tones .ringend {
        width: 30px;
        height: 30px;
    }

    .sound-link {
        margin-bottom: 16px;
    }

    .tones-name {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 20px;

        text-align: center;
        /* align-items: flex-end; */
    }

    .sound-link .audio-down-link {
        width: 100%;
        margin: 0;
    }

    .sound-tones .tones-name {
        justify-content: flex-start;

        margin-top: 0;
    }

    .header {
        position: relative;
    }

    .wrapper {
        width: 963px;
    }

    .logo {
        display: inline-block;
    }

    .search {
        width: 280px;

        border: 1px solid #eee;
    }

    .category-link:hover {
        color: #ed203b;
        border-color: #ed203b;
    }

    .detail-turn-lf:hover,
    .detail-turn-rt:hover {
        color: #ed203b;
    }

    .tones-name:hover {
        text-decoration: underline;
    }

    .page-right:hover .icon-right {
        transform: translateX(3px);
    }

    .page-left:hover .icon-left {
        transform: translateX(-3px);
    }

    #userConsent {
        padding-right: 250px;
    }

    .usetips-ls {
        position: absolute;
        top: 50%;
        right: 20px;

        margin-top: -17px;
    }

    .usetips-item {
        line-height: 34px;
        height: 34px;
    }

    .usetips-item,
    .usetips-link {
        font-size: 14px;
    }

    .usetips {
        padding: 20px;
    }

    .notfound-img {
        margin-top: 87px;
        margin-bottom: 48px;
    }

    .notfound-title {
        font-size: 32px;
        line-height: 32px;
        height: 32px;
        margin-bottom: 17px;
        color: #333;
        font-weight: bold;
    }

    .notfound-message {
        font-size: 24px;
        line-height: 24px;
        height: 24px;
        color: #ed203b;
        margin-bottom: 46px;
        font-weight: bold;
    }

    .notfound-button {
        display: block;
        text-align: center;
        width: 208px;
        height: 48px;
        background-color: #ed203b;
        border-radius: 24px;
        font-size: 16px;
        line-height: 48px;
        color: #fff;
        margin-bottom: 82px;
    }

    .new-ringtones-title {
        font-size: 20px;
        margin-bottom: 20px;
        text-align: center;
    }


    .tag-item:hover {
        box-shadow: 0 0 4px 0 rgba(50, 50, 50, .22);
    }
    
    .download { 
        margin-bottom: 0;
        margin-top: 12px;
    }
    .preview {
        display: flex;
    }
    .pageleft {
        width: 577px;
    }
    .prevWp {
        transform:translate(20px,-50%);
    }
    .prevWp:hover {
        transform:translate(0,-50%);
        animation: prevWp .3s;
    }
    .nextWp {
        transform:translate(-20px,-50%);
    }   
    .nextWp:hover {
        transform:translate(0,-50%);
        animation: nextWp .3s;
    }
    @keyframes prevWp
    {
        from {transform:translate(20px,-50%)}
        to {transform:translate(0,-50%)}
    }
    @-webkit-keyframes prevWp 
    {
        from {transform:translate(20px,-50%)}
        to {transform:translate(0,-50%)}
    }
    @keyframes nextWp
    {
        from {transform:translate(-20px,-50%)}
        to {transform:translate(0,-50%)}
    }
    @-webkit-keyframes nextWp 
    {
        from {transform:translate(-20px,-50%)}
        to {transform:translate(0,-50%)}
    }
    .pageright {
        display: block;
        width: 346px;
        padding-left: 46px;
    }
    .wallpapers-box {
        width: 577px;
        height: 500px;
        margin-bottom: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wallpapers-background-box {
        height: 500px;
    }
    .wallpapers-content-image {
        transform: scale(1);
        height: 86%;
        border-radius: 20px;
    }
    .help-section {
        margin-top: -54px;
    }
    .menu-category {
        display: flex;
        position: absolute;
        right: 300px;
        top: 0;
        z-index: 1008;
    }
    .menu-category-item {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 56px;
        padding-right: 16px;
        color:#ed203b;
    }
    .menu-category-link {
        color:#ed203b;
        font-size: 16px;
        line-height: 1;
    }
    .menu-category-item:hover {
        text-decoration: underline;
    }
}
</style>