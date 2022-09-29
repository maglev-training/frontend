import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LostometerComponent } from './lostometer/lostometer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LostometerComponent],
  exports: [LostometerComponent],
})
export class CoreUiModule {}
