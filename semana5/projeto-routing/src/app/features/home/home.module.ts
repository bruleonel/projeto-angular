import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProuctListComponent } from './components/prouct-list/prouct-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProuctListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
