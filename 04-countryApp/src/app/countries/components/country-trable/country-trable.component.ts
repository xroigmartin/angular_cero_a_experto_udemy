import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-trable',
  templateUrl: './country-trable.component.html',
  styles: [`
  img{
    width: 25px;
  }`]
})
export class CountryTrableComponent {

  @Input()
  public countries: Country[] = [];

}
