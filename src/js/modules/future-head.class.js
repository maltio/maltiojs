'use strict';

function FutureHead(options) {
  this._hash      = new Date().getTime();
  this.id         = options.id || 'modal_'+new Date().getTime();
  this.title      = options.title || 'Modal';
  this.hasParallax      = options.hasParallax || false;
  this.isFullScreen      = options.isFullScreen || false;
  this.active();
};

FutureHead.prototype.active = function () {
  this.events();
};

FutureHead.prototype.addFuncToResize = function (func) {
  var oldResize = window.onresize;
    window.onresize = function () {
      func();
      if (typeof oldResize === 'function') oldResize();
    };
};

FutureHead.prototype.events = function () {
  if(this.hasParallax)
    window.onscroll = this.parallax.bind(this);
  if(this.isFullScreen)
    this.fullScreen();
    this.addFuncToResize(this.fullScreen.bind(this))
};

FutureHead.prototype.parallax = function (evnt) {
  var scrolled = document.body.scrollTop;
  document.querySelector('#'+this.id).style.backgroundPosition = '0px '+(scrolled * 0.2) + 'px';
};

FutureHead.prototype.fullScreen = function () {
  document.querySelector('#'+this.id).style.height = window.innerHeight +'px';
};

function $mtFutureHead(options, event){
  if (typeof window.futureHead == 'undefined') window.futureHead = [];
  if (!window.futureHead.contains('id', options.id)){
    var futureHead = new FutureHead(options);
    window.futureHead.push(futureHead);
    if(event) futureHead[event]();
  } else{
      if(event){
        var pos = window.futureHead.containsReturn('id', options.id)
        window.futureHead[pos][event]();
      }
  }
}
