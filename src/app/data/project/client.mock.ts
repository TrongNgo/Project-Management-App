import * as faker from 'faker';

import {ClientModel} from '@app/models/project/client.model';

export function getRandomClients(count: number): ClientModel[] {
    return Array(count).fill({}).map((item, index) => {
        return new ClientModel({
            id: index,
            fullName: faker.name.findName(),
            country: faker.address.streetAddress(),
            address: faker.address.streetAddress(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.phoneNumber('0165#######')
        });
    });
}
