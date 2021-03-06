/**
 * Created by agufed on 11/23/17.
 */

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class DataService {

    private usersUrl = 'user';  // URL to web API
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    // Get all users
    getUsers(): Promise<User[]> {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);
    }

    getUsersByLastName(lastName: string): Promise<User[]> {
        const url = `findbylastname/${lastName}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as User)
            .catch(this.handleError);
    }

    create(user: User): Promise<User> {
        return this.http
            .post("postuser", JSON.stringify(user), {headers : this.headers})
            .toPromise()
            .then(res => res.json() as User)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.usersUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Error', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}