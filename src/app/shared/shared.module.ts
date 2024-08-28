import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations:[CardComponent],
    exports:[CardComponent]//to share the components to be shared outside the module
})
export class SharedModule{}