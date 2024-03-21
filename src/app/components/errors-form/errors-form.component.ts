import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-errors-form',
  templateUrl: './errors-form.component.html',
  styleUrls: ['./errors-form.component.scss']
})
export class ErrorsFormComponent {
  @Input() form: FormGroup = new FormGroup<any>({});
  @Input() validationMessages: any = {};
  @Input() input = '';
  @Input() icon = 'error_outline';
  @Input() position = 'right';
  @Input() ShowIcon = true;
}
