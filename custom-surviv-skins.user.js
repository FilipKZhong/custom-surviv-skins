// ==UserScript==
// @name         custom surviv skins
// @namespace    https://github.com/notKaiAnderson/
// @version      0.1
// @description  try to take over the world!
// @author       someGays
// @match        *://surviv.io/*
// @grant        none
// @updateURL    https://github.com/notKaiAnderson/custom-surviv-skins/raw/master/custom-surviv-skins.user.js
// @icon         https://i.imgur.com/jgHdTYA.png
// ==/UserScript==

(function() {
    'use strict';

var left = document.querySelector('#ad-block-left');
left.innerHTML = `<div class="container">
  <div class="header">
    <h2>Select skin</h2>
  </div>
  <div class="skins">
    <div class="skin valiantPineapple">
      <img src="https://i.imgur.com/Di76DSD.png" alt="" class="skin-img" />
      <h4 class="skin-name">Valiant Pineapple</h4>
    </div>
    <div class="skin casanovaSilks">
      <img src="https://i.imgur.com/Z0gQ50L.png" alt="" class="skin-img" />
      <h4 class="skin-name">Casanova Silks</h4>
    </div>
    <div class="skin imperialSeal">
      <img src="https://i.imgur.com/h2a6nU9.png" alt="" class="skin-img" />
      <h4 class="skin-name">Imperial Seal</h4>
    </div>
    <div class="skin redVictorious">
      <img src="https://i.imgur.com/8ZRZcnw.png" alt="" class="skin-img" />
      <h4 class="skin-name">Red Victorious</h4>
    </div>

    <div class="skin aquaticAvenger">
      <img src="https://i.imgur.com/KK6FP65.png" alt="" class="skin-img" />
      <h4 class="skin-name">Aquatic Avenger</h4>
    </div>
    <div class="skin tarkhanyRegal">
      <img src="https://i.imgur.com/ju8Qsao.png" alt="" class="skin-img" />
      <h4 class="skin-name">Tarkhany Regal</h4>
    </div>
    <div class="skin custom01">
      <img src="https://i.imgur.com/oLQAsEv.png" alt="" class="skin-img" />
      <h4 class="skin-name">custom skin 01</h4>
    </div>
  </div>
</div>
`

var container = document.querySelector('.container');
container.setAttribute("style", "width: 100%; overflow-y: scroll; height: 100%;text-align: center;");

var skins = document.querySelector('.skins');
skins.setAttribute("style", "display: flex; flex-wrap: wrap;");

left.setAttribute("style", "height: 325px; box-sizing: border-box;");

var skin = document.querySelectorAll('.skin');
skin.forEach(item => {item.setAttribute("style", "flex-grow: 1; flex-basis: 50%; cursor: pointer;")})




function casanovaSilks() {
    var xx = webpackJsonp([],null,["63d67e9d"]);
    xx.outfitBase.skinImg.baseTint = 4327436;
    xx.outfitBase.skinImg.handTint = 7602183;
    xx.outfitBase.skinImg.backpackTint = 0x101010;
    xx.outfitBase.skinImg.footTint = 7602183;
}

function valiantPineapple() {
    var xx = webpackJsonp([],null,["63d67e9d"]);
    xx.outfitBase.baseSprite = "player-base-02.img";
    xx.outfitBase.skinImg.baseTint = 10027008;
    xx.outfitBase.skinImg.handTint = 4985105;
    xx.outfitBase.skinImg.backpackTint = 16763904 ;
    xx.outfitBase.skinImg.footTint = 4985105;
}

function imperialSeal() {
    var xx = webpackJsonp([],null,["63d67e9d"]);
    xx.outfitBase.skinImg.baseTint = 12320813;
    xx.outfitBase.skinImg.handTint = 16777215;
    xx.outfitBase.skinImg.backpackTint = 12625727 ;
    xx.outfitBase.skinImg.footTint = 16777215;

}

function redVictorious() {
    var xx = webpackJsonp([],null,["63d67e9d"]);
    xx.outfitBase.baseSprite = "player-base-02.img";
    xx.outfitBase.skinImg.baseTint = 10098712;
    xx.outfitBase.skinImg.handTint = 16711680;
    xx.outfitBase.skinImg.backpackTint = 5442572 ;
    xx.outfitBase.skinImg.footTint = 16711680;
}

function aquaticAvenger() {
    var xx = webpackJsonp([],null,["63d67e9d"]);
    xx.outfitBase.skinImg.baseTint = 47778;
    xx.outfitBase.skinImg.handTint = 65502;
    xx.outfitBase.skinImg.backpackTint = 536620 ;
    xx.outfitBase.skinImg.footTint = 65502;

}

function tarkhanyRegal() {
var xx = webpackJsonp([],null,["63d67e9d"]);
xx.outfitBase.baseSprite = "player-base-02.img";
xx.outfitBase.skinImg.baseTint = 4927107;
xx.outfitBase.skinImg.handTint = 16757760;
xx.outfitBase.skinImg.handSprite = "player-hands-02.img";
xx.outfitBase.skinImg.backpackTint = 4661344 ;
xx.outfitBase.skinImg.footTint = 16757760;
xx.outfitBase.skinImg.footSprite = "player-feet-02.img";
xx.outfitBase.skinImg.backpackSprite = "player-circle-base-02.img";
}

// custom skins

function custom01 () {
    var xx = webpackJsonp([],null,["63d67e9d"]);
    xx.outfitBase.baseSprite = "player-base-02.img";
    xx.outfitBase.skinImg.baseTint = 0x45364B;
    xx.outfitBase.skinImg.handTint = 0x996888;
    xx.outfitBase.skinImg.handSprite = "player-hands-02.img";
    xx.outfitBase.skinImg.backpackTint = 0xB5C2B7 ;
    xx.outfitBase.skinImg.footTint = 0x996888;
    xx.outfitBase.skinImg.footSprite = "player-feet-02.img";
    xx.outfitBase.skinImg.backpackSprite = "player-circle-base-02.img";
}


skin.forEach(function (item) {
        item.addEventListener('click', function () {

            if (item.className == "skin casanovaSilks") {
                casanovaSilks();
            }
            if (item.className == "skin valiantPineapple") {
                valiantPineapple();
            }
            if (item.className == "skin imperialSeal") {
                imperialSeal();
            }
            if (item.className == "skin redVictorious") {
                redVictorious();
            }
            if (item.className == "skin aquaticAvenger") {
                aquaticAvenger();
            }
            if (item.className == "skin tarkhanyRegal") {
                tarkhanyRegal();
            }
            if (item.className == "skin custom01") {
                custom01();
            }
            
        });
    });
})();
