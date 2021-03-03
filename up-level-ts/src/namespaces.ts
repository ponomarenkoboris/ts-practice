// import namespace from file
/// <reference path="form.namespace.ts"/>

namespace Form {
    class MyForm {
        private type:FormType = 'inline'
        private state: FormState = 'active'

        constructor(public email:string) {}

        get info() {
            return {
                type: this.type,
                state: this.state
            }
        }
    }

    export const orm = new MyForm('b@gmail.com');
}

console.log(Form.orm)