import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateHeaderComponent } from '../common/private-header/private-header.component';
import { PrivateFooterComponent } from '../common/private-footer/private-footer.component';

@NgModule({
  declarations: [PrivateHeaderComponent,PrivateFooterComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
