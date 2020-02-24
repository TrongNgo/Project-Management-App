import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {environment} from '@environment';
import {ProjectDetailModel, ProjectViewModel} from '@app/models/project/project.model';
import {
    getRandomProjectView,
    updateProjectDetail,
    getRandomProject
} from '@app/data/project';

@Injectable()
export class ProjectService {
    constructor() {
    }

    getProjectsForView(): Observable<ProjectViewModel[]> {
        if (environment.debug) {
            console.log('API: getProjects');
        }
        return of(getRandomProjectView(20));
    }

    updateProject(): Observable<ProjectDetailModel> {
        if (environment.debug) {
            console.log('API: update Project');
        }
        return of (updateProjectDetail());
    }

    getProjectDetail(slug: string): Observable<ProjectDetailModel> {
        if (environment.debug) {
            console.log('API: get Project Info');
        }
        return of(getRandomProject(slug));
    }

}
