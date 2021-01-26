import {
  Component,
  Input,
  EventEmitter,
  Output,
  ElementRef,
} from '@angular/core';
import {I18nService} from "core-app/modules/common/i18n/i18n.service";

@Component({
  selector: 'op-ium-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.sass'],
})
export class SuccessComponent {
  @Output('close') close = new EventEmitter<void>();

  public text = {
    title: this.I18n.t('js.invite_user_modal.title'),
    closePopup: this.I18n.t('js.close_popup_title'),
    exportPreparing: this.I18n.t('js.label_export_preparing')
  };

  constructor(
    readonly I18n:I18nService,
    readonly elementRef:ElementRef,
  ) {}
}