import { MessageService } from 'primeng/components/common/messageservice';
import { HeroesService } from './service/heroes.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListboxComponent } from './listbox/listbox.component';

//import primeng
import { ListboxModule } from 'primeng/listbox';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimatedbuttonComponent } from './animatedbutton/animatedbutton.component';
import { FluidlayoutComponent } from './fluidlayout/fluidlayout.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InputMaskModule } from 'primeng/inputmask';
import { GrowlModule } from 'primeng/growl';


@NgModule({
  declarations: [
    AppComponent,
    ListboxComponent,
    AnimatedbuttonComponent,
    FluidlayoutComponent,
    UserInputComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ListboxModule,
    CalendarModule,
    InputMaskModule,
    GrowlModule

  ],
  providers: [HeroesService, MessageService],
  bootstrap: [UserInputComponent]
})
export class AppModule { }
