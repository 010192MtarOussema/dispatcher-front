import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListSearchComponent } from './Components/list-search/list-search.component';
import { DetailsListComponent } from './Components/details-list/details-list.component';
import{FormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';




const appRoutes: Routes = [

  {path: '' , component: AppComponent },
  {path: 'list' , component: ListSearchComponent },
  { path: 'detail/:id' , component: DetailsListComponent }


]

@NgModule({
  declarations: [
    AppComponent,
    ListSearchComponent,
    DetailsListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
