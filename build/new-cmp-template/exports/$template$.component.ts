import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 're-<%= componentSelector %>',
  templateUrl: './<%= componentSelector %>.component.html',
  styleUrls: ['./<%= componentSelector %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: '<%= componentName %>'
})
export class <%= componentName %>Component {

}
