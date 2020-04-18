import {
  Component, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  @Output() onSelectedLink = new EventEmitter<string>();

  onClick(selectedLink: string) {
    this.onSelectedLink.emit(selectedLink);
  }

}
