import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  tasks: string[] = [];
    private server: string = `http://localhost:3001/project`;
    constructor(private http : Http) {}

    fetchProjects(): Promise<any> {
        return this.http.get(this.server)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }

    getProject(projectId : number): Promise<any> {
        return this.http.get(`${this.server}/${projectId}`)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }

    addProject(project): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
      return this.http.post(this.server, project, options)
          .toPromise()
          .then(response => {
              return response.json();
          })
          .catch(err => err);
    }

    updateProject(project: string, id : number): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(`${this.server}`, project, options)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }

    deleteProject(projectId : number): Promise<any> {
        return this.http.delete(`${this.server}/${projectId}`)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }
}