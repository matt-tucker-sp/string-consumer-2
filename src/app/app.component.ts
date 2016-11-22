import { Component, Inject } from '@angular/core';
import { StringUtilsService } from 'string-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private stringUtils : StringUtilsService;
    public title : string;

    constructor(@Inject(StringUtilsService) stringUtils) {

        let spaceString = 'This String has some SPACES';

        this.stringUtils = stringUtils;

        this.title = `"${spaceString}" is now magically  "${this.stringUtils.convertToUnderscoreCase(spaceString)}"`;
    }
}
