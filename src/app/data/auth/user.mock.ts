import * as faker from 'faker';

import {UserModel} from '@app/models/shared';

export function randomLoggedUser(): UserModel {
  const fullName =  faker.name.findName();
  const nameArray = fullName.split(' ');
  const firstKey = nameArray[0][0];
  const length = nameArray.length;
  const lastKey = nameArray[length - 1][0];

  const user = new UserModel({
    id: faker.random.number(),
    fullName: 'Trong Ngo',
    firstName: 'Trong',
    lastName: 'Ngo',
    nameAvatar: 'TN',
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEiLCJuYmYiOjE2NDA5NzAwMDAsImV4' +
      'cCI6MTY0MDk3MDAwMCwiaWF0IjoxNjQwOTcwMDAwfQ.R0xydJfSjaAfbglZWZqlH9aCZ39MqozD52MPVJ0AZDM',
    refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEiLCJuYmYiOjE2NDA5NzAwMDAsI' +
      'mV4cCI6MTY0MDk3MDAwMCwiaWF0IjoxNjQwOTcwMDAwfQ.R0xydJfSjaAfbglZWZqlH9aCZ39MqozD52MPVJ0AZDM'
  });
  return user;
}

export function returnUser(): UserModel {
  const user = new UserModel({
    id: faker.random.number(),
    fullName: faker.name.findName(),
    firstName: faker.name.firstName(),
    permissions: ['Work', 'WorkSetting'],
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEiLCJuYmYiOjE2NDA5NzAwMDAsImV4' +
        'cCI6MTY0MDk3MDAwMCwiaWF0IjoxNjQwOTcwMDAwfQ.R0xydJfSjaAfbglZWZqlH9aCZ39MqozD52MPVJ0AZDM',
    refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEiLCJuYmYiOjE2NDA5NzAwMDAsI' +
        'mV4cCI6MTY0MDk3MDAwMCwiaWF0IjoxNjQwOTcwMDAwfQ.R0xydJfSjaAfbglZWZqlH9aCZ39MqozD52MPVJ0AZDM'
  });
  return user;
}

// id: 59
// homeUrl: "/work/ban-lam-viec"
// tenantIds: [12]
// ownerTenantId: 12
// defaultTenantId: null
// employeeId: null
// mobile: "0977975775"
// birthDate: "1997-10-26T09:00:00"
// avatarImg: "http://localhost:4200/file/image?id=1MEvmI9d4uPyNMWHFqtwVHXAMxBXfjuHz&sc="
// isTenantManager: false
// roles: null
// features: ["Work", "AddProject", "UpdateProject", "CloseAndReopenProject", "Wiki", "DeleteWikiPage",…]
// userId: 59
// username: "thai.truong@enlabsoftware.com"
// firstName: "Thai"
// lastName: "Truong"
// fullName: "Thai Truong"
