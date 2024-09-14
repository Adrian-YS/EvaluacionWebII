import { Component } from '@angular/core';
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent {

}
