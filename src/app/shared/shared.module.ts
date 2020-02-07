import { NgModule } from "@angular/core";
import { DateAgoPipe } from '../helpers/date-ago.pipe';

@NgModule({
    declarations: [
        DateAgoPipe
    ],
    exports: [DateAgoPipe]
})
export class SharedModule { }
