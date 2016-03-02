'use strict';

function Modal(options) {
  this._hash      = new Date().getTime();
  this.id         = options.id || 'modal_'+new Date().getTime();
  this.title      = options.title || 'Modal';
  this.isVisible  = options.isVisible || false;

  this.active();
};

Modal.prototype.active = function () {
  //console.log(this);
};

function $mtModal(options){
  if (typeof window.modal == 'undefined')
    window.modal = [];

  if (!window.modal.contains('id', options.id)){
    var modal = new Modal(options);
    window.modal.push(modal);
  }

  console.log(window.modal);
}
