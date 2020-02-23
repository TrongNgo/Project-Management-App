import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {environment} from '@environment';
import {ProjectDetailModel} from '@app/models/project/project.model';
import {getRandomProjectView} from '@app/data/project';

@Injectable()
export class ProjectService {
    constructor() {
    }

    getProjectsForView(): Observable<ProjectDetailModel[]> {
        if (environment.debug) {
            console.log('API: getProjects');
        }
        return of(getRandomProjectView(20));
    }

}
