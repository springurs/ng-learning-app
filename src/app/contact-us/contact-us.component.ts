import { Component } from "@angular/core";

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html'
})

export class ContactUsComponent {
    subtitle = 'here is my contact'
    
    increment = 0

    handleClick(isAddition: boolean) {
        if (isAddition) 
            this.increment++
        else 
            this.increment--
    }
}
