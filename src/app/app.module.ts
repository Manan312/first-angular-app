import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";// Mandatory for Bootstrap browsing for Module
import { CardComponent } from "./shared/card/card.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { TaskComponent } from "./tasks/task/task.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    //Essential to declare and register the nessecary 
    declarations:[AppComponent,
        HeaderComponent
        ,UserComponent
        //,CardComponent
    ],//For Not Standalone Components 
    bootstrap:[AppComponent],//Components to bootstrap
    imports:[BrowserModule,SharedModule,TasksModule]//For Standalone Components
})
export class AppModule{

}