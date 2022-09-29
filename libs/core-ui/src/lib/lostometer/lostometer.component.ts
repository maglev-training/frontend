import { Component, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, delay, distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'maglev-lostometer',
  templateUrl: './lostometer.component.html',
  styleUrls: ['./lostometer.component.css'],
})
export class LostometerComponent {
  @Input() lostLabel = 'Totally Lost!';
  @Input() greatLabel = 'Doing Great!';
  @Input() debounceTime = 300;
  @Input() average = 0;
  disabledSlider = false;
  form = new FormGroup({
    rating: new FormControl<number>(6, { updateOn: 'change' }),
  });
  @Output() ratingChanged = this.form.controls.rating.valueChanges.pipe(
    tap(() => (this.disabledSlider = true)),
    debounceTime(this.debounceTime),
    tap(() => (this.disabledSlider = false)),
    distinctUntilChanged()
  );
}
