import { Component, Inject } from '@angular/core';
import { StringUtilService } from 'string-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private stringUtilService : StringUtilService;
    public title : string;

    constructor(@Inject(StringUtilService) stringUtilService) {

        let spaceString = 'This String has some SPACES';

        this.stringUtilService = stringUtilService;

        this.title = `"${spaceString}" is now magically  "${this.stringUtilService.convertToUnderscoreCase(spaceString)}"`;
    }
}
