import * as faker from 'faker';
import {random, sample} from 'lodash';
import {ProjectDetailModel, ProjectViewModel} from '@app/models/project/project.model';
import {ProjectStatusType} from '@app/modules/projects/shared/enums';

function mockId() {
    return faker.random.number();
}

export function getRandomProjectView(count: number): ProjectViewModel[] {
    return Array(count).fill({}).map((item: ProjectViewModel, index) => {
        const projectName = faker.name.findName();
        const projectNameArray = projectName.split( ' ');
        const urlName = projectNameArray.join('-').toLocaleLowerCase();

        const completedTaskCount = random(1, 20);
        const imgSample = sample([
            'https://www.denverslocksmiths.com/wp-content/uploads/2018/04/airbnblogo.png',
            'https://seeklogo.net/wp-content/uploads/2019/01/new-Slack-logo-vector.png',
            'http://tvc24.com/uploads/anhmoi/IN%20AN/Anh-bai-viet/i%20con/lo%20go%20design%202%20VietBrand.jpg',
            'https://www.freelogodesign.org/Content/img/logo-samples/celtica.png',
            'https://logomaster.ai/static/media/gallery002.936afb9d.png'
        ]);

        return new ProjectViewModel({
            id: count - index - 1,
            projectName: projectName,
            urlName: urlName,
            clientName: faker.name.findName(),
            startDate: faker.date.past(),
            endDate: faker.date.future(),
            description: `${faker.lorem.sentence()} ${faker.lorem.sentence()}`,
            status: index >= 15 ? ProjectStatusType.open : ProjectStatusType.close,
            memberCount: random(4, 20),
            completedTaskCount: completedTaskCount,
            taskCount: completedTaskCount + 30,
            milestoneCount: random(1, 10),
            imageUrl: (index / 5 === 0) ? undefined : imgSample
        });
    });
}

export function updateProjectDetail(): ProjectDetailModel {
    return new ProjectDetailModel({
        id: mockId(),
        projectId: mockId()
    });
}

export function getRandomProject(slug: string): ProjectDetailModel {
    let projectNameArray = slug.split('-');
    projectNameArray = projectNameArray.map(item => {
        return item[0].toLocaleUpperCase() + item.slice(1);
    });

    const projectName = projectNameArray.join(' ');

    return new ProjectDetailModel({
        id: mockId(),
        projectId: mockId(),
        name: projectName,
        urlName: slug,
        status: ( mockId() % 2 === 0 ) ? ProjectStatusType.open : ProjectStatusType.close
    });
}

