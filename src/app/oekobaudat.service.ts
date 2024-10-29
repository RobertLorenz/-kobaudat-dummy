import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OekobaudatService {
  private apiEndpoint1 =
    '/OEKOBAU.DAT/resource/datastocks/cd2bda71-760b-4fcc-8a0b-3877c10000a8/processes?search=true&compliance=b00f9ec0-7874-11e3-981f-0800200c9a66';
  private apiEndpoint2 =
    '/OEKOBAU.DAT/resource/datastocks/cd2bda71-760b-4fcc-8a0b-3877c10000a8/processes?search=true&compliance=c0016b33-8cf7-415c-ac6e-deba0d21440d';

  getDataCompliance1(): Observable<any> {
    return from(
      axios.get(this.apiEndpoint1, {
        responseType: 'json',
      })
    ).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  getDataCompliance2(): Observable<any> {
    return from(
      axios.get(this.apiEndpoint2, {
        responseType: 'json',
      })
    ).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('API request error:', error);
    return throwError(() => new Error('Something went wrong...'));
  }
}
