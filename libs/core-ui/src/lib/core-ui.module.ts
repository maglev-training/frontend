import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LostometerComponent } from './lostometer/lostometer.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [LostometerComponent],
  exports: [LostometerComponent],
})
export class CoreUiModule {}
