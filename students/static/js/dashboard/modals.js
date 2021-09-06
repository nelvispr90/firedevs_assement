// let modal_options_default = {
//     backdrop: true, // or 'static',
//     keyboard: true,
//     show: true,
//     remote: ''
// };

function createModal() {
    return $("<div id=\"modal\" class=\"modal fade\" tabindex=\"-1\" aria-hidden=\"true\">\
    <div class=\"modal-dialog\">\
      <div class=\"modal-content\">\
        <div class=\"modal-header\">\
          <h5 class=\"modal-title\"></h5>\
          <button type=\"button\" class=\"close invisible\" data-dismiss=\"modal\" aria-label=\"Close\" >\
            <span aria-hidden=\"true\">&times;</span>\
          </button>\
        </div>\
        <div class=\"modal-body\">\
        </div>\
        <div class=\"modal-footer\">\
          <button type=\"button\" class=\"btn btn-secondary invisible\"></button>\
          <button type=\"button\" class=\"btn btn-primary \"></button>\
        </div>\
      </div>\
    </div>\
  </div>");
};

function initModal(options, title, body_content) {
    let modal = createModal();
    modal.modal(options);
    modal.find('.modal-title').append(title)
    modal.find('.modal-body').append(body_content);
    return modal;
}

function showInfoModal(title, body_content) {
    $(document).ready(function() {
        let options = {
            backdrop: false
        };
        modal = initModal(options, title, body_content);

        modal.find("button.close.invisible").removeClass("invisible");
        let primary_btn = modal.find("button.btn.btn-primary");
        primary_btn.removeClass("invisible");
        primary_btn.append('Ok')
        primary_btn.click(_calls.hide(modal));
        _calls.show(modal);
    });
};

function showDialogModal(title, body_content, dont_call, ok_call) {
    $(document).ready(function() {
        let options = {
            backdrop: false
        };
        modal = initModal(options, title, body_content);

        let primary_btn = modal.find("button.btn.btn-primary");
        let secondary_btn = modal.find("button.btn.btn-secondary");
        primary_btn.removeClass("invisible");
        secondary_btn.removeClass("invisible");
        primary_btn.append("Ok")
        secondary_btn.append("Don't")
        _calls.show(modal);

        ok_call ? primary_btn.click(ok_call(modal)) : primary_btn.click(_calls.hide(modal));
        dont_call ? secondary_btn.click(dont_call(modal)) : secondary_btn.click(_calls.hide(modal));
    });
};

_calls = {
    hide: function hide(modal) {
        return function() {
            modal.modal('hide');
            $('body').removeClass('modal-open');
            modal.remove();
        }
    },
    show: function show(modal) {
        return function() {
            modal.modal('show');
        }
    }
};