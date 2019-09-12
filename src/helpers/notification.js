import toastr from 'toastr';

class Notification {

  constructor() {
    this._toastr = toastr;
    this._toastr.options = {
      "closeButton": true,
      "newestOnTop": true,
      "progressBar": true,
      "positionClass": "toast-top-right",
      "timeOut": "3500"
    };
  }

  error = (msg, heading) => {
    this._toastr.error(msg, heading);
  };

  info = (msg, heading) => {
    this._toastr.info(msg, heading);
  };

  warning = (msg, heading) => {
    this._toastr.warning(msg, heading);
  };

  success = (msg, heading) => {
    this._toastr.success(msg, heading);
  };

}

export default new Notification();
