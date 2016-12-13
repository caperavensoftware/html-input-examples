
// @flow
export class Validation {
    // https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation

    form: any;
    invalidAction: any;

    constructor() {
        this.invalidAction = this.invalid.bind(this);
    }

    attached() {
        this.form = document.getElementById("form");
        this.form.addEventListener("keyup", this.invalidAction);
    }

    detached() {
        this.form.removeEventListener("keyup", this.invalidAction)
    }

    invalid(event) {
        return new Promise(resolve => {
            const isValid = event.target.checkValidity();

            if (!isValid) {
                event.target.setAttribute("data-error", event.target.validationMessage);
            }
            else {
                event.target.removeAttribute("data-error");
            }

            resolve();
        })
    }

    validate() {
        const isValid = this.form.checkValidity();
        console.log(this.form.validity);
    }
}
