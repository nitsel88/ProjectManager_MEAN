import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: string[] = [];
    private server: string = `http://localhost:3001/task`;
    constructor(private http : Http) {}

    fetchTasks(): Promise<any> {
        return this.http.get(this.server)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }

    getTask(taskId : number): Promise<any> {
        return this.http.get(`${this.server}/${taskId}`)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }

    addTask(task): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
      return this.http.post(this.server, task, options)
          .toPromise()
          .then(response => {
              return response.json();
          })
          .catch(err => err);
    }

    updateTask(task): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.server, task, options)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
      }
}