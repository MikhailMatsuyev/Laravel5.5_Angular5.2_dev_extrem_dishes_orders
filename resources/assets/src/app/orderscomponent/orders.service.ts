import { Injectable } from '@angular/core';
import {HttpClient,  HttpHeaders} from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import * as $ from 'jquery';

@Injectable()

export class OrdersService {

    constructor(private http: HttpClient) { }

    setHeaders() {
        let headers = new HttpHeaders().set('Content-Type', 'application/json'); // create header object
        headers = headers.append('X-CSRF-TOKEN', $('meta[name="csrf-token"]').attr('content')); // add a new header, creating a new object
        return headers;
    }

    getAllOrdersFromServer() {
        return this.http.get('http://localhost:8000/orders')
            .map((resp: Response) => { // api nbrb.by responses objecvt! If resource response json need add resp.json()
                console.log('get all orders', resp);
                return resp;
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    deleteOneOrdersFromView(id) {
        return this.http.delete('http://localhost:8000/orders/' + id, { headers: this.setHeaders() })
            .catch((error: any) => {
                return Observable.throw(error);
        });
    }

    createNewOrderInDB(data) {
        return this.http.post('http://localhost:8000/orders/', {createdate: data}, { headers: this.setHeaders() })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

}