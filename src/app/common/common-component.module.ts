import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateHeaderComponent } from './private-header/private-header.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PrivateFooterComponent } from './private-footer/private-footer.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';



@NgModule({
  declarations: [
    PublicHeaderComponent,
    PublicFooterComponent
  ],
  exports: [
    PublicHeaderComponent,
    PublicFooterComponent
  ],
  entryComponents: [
    PrivateHeaderComponent,
    PublicHeaderComponent,
    PrivateFooterComponent,
    PublicFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommonComponentModule { }
