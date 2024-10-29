import { Component, OnInit } from '@angular/core';
import { OekobaudatService } from '../oekobaudat.service';

@Component({
  selector: 'app-oekobaudat',
  templateUrl: './oekobaudat.component.html',
  styleUrls: ['./oekobaudat.component.scss'],
})
export class OekobaudatComponent implements OnInit {
  compliance1Data: any;
  compliance2Data: any;

  constructor(private oekobaudatService: OekobaudatService) {}

  ngOnInit(): void {
    this.fetchCompliance1Data();
    this.fetchCompliance2Data();
  }

  fetchCompliance1Data(): void {
    this.oekobaudatService.getDataCompliance1().subscribe({
      next: (data) => (this.compliance1Data = data),
      error: (err) => console.error('Error during fetching link 1:', err),
    });
  }

  fetchCompliance2Data(): void {
    this.oekobaudatService.getDataCompliance2().subscribe({
      next: (data) => (this.compliance2Data = data),
      error: (err) => console.error('Error  during fetching link 2:', err),
    });
  }
}
