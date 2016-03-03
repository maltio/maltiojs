'use strict';

function Modal(options) {
  this._hash      = new Date().getTime();
  this.id         = options.id || 'modal_'+new Date().getTime();
  this.title      = options.title || 'Modal';
  this.isVisible  = options.isVisible || false;

  this.active();
};

Modal.prototype.active = function () {
  this.events();
  this.verifyDisplay();
};

Modal.prototype.events = function () {
  document.querySelector('#'+this.id+' .close').addEventListener('click', this.close.bind(this), true);
};

Modal.prototype.verifyDisplay = function () {
  var dis = document.querySelector('#'+this.id).style.display;
  this.isVisible = (dis == 'block' || dis == '') ? true : false;
};

Modal.prototype.open = function () {
  document.querySelector('#'+this.id).style.display = 'block';
  this.isVisible = true;
};

Modal.prototype.close = function () {
  document.querySelector('#'+this.id).style.display = 'none';
  this.isVisible = false;
};

Modal.prototype.toggle = function () {
  var dis = this.isVisible ? this.close() : this.open();
  //document.querySelector('#'+this.id).style.display = dis;
};

function $mtModal(options, event){
  if (typeof window.modal == 'undefined')
    window.modal = [];

  if (!window.modal.contains('id', options.id)){
    var modal = new Modal(options);
    window.modal.push(modal);
    if(event) modal[event]();
  }
  else{
      if(event){
        var pos = window.modal.containsReturn('id', options.id)
        window.modal[pos][event]();
      }
  }
}
