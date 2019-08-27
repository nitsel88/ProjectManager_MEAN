import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  tasks: string[] = [];
    private server: string = `http://localhost:3001/user`;
    constructor(private http : Http) {}

    fetchUsers(): Promise<any> {
        return this.http.get(this.server)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }

    getUser(userId : number): Promise<any> {
        return this.http.get(`${this.server}/${userId}`)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }

    addUser(user): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
      return this.http.post(this.server, user, options)
          .toPromise()
          .then(response => {
              return response.json();
          })
          .catch(err => err);
    }

    updateUser(user): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.server, user, options)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }

    deleteUser(userId : number): Promise<any> {
        return this.http.delete(`${this.server}/${userId}`)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }
}