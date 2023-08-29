import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './app-routing.module';
import { MessageDetailComponent } from './message-detail/message-detail.component';
=======
import { HeaderComponent } from './header/header.component';
>>>>>>> 50b773971f83e318e97c62e3c8df6726a30c1470

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MessageComponent,
    MessageDetailComponent,
=======
    HeaderComponent
>>>>>>> 50b773971f83e318e97c62e3c8df6726a30c1470
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
