import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() icon?: IconDefinition;
  @Input() label = '';

  constructor() { }

  ngOnInit(): void {
  }

}
