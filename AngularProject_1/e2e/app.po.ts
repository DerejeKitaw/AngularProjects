import { browser, by, element } from 'protractor';

export class AngularProjectsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('prj-root h1')).getText();
  }
}
