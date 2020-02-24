import * as faker from 'faker';
import {random, sample} from 'lodash';
import {ProjectDetailModel, ProjectViewModel} from '@app/models/project/project.model';
import {ProjectStatusType} from '@app/modules/projects/shared/enums';

function mockId() {
    return faker.random.number();
}
