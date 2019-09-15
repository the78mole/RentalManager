import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://blog.the78mole.de" target="_blank">themole</a></b> 2019</span>
    <div class="socials">
      <a href="https://github.com/the78mole" target="_blank" class="ion ion-social-github"></a>
      <!--
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
      -->
    </div>
  `,
})
export class FooterComponent {
}
