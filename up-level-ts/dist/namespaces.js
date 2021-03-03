"use strict";
var Form;
(function (Form) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        get info() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    Form.orm = new MyForm('b@gmail.com');
})(Form || (Form = {}));
console.log(Form.orm);
