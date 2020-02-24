import {ProjectStatusType} from '@app/modules/projects/shared/enums';
export const PROJECT_STATUS = [
    {value: ProjectStatusType.open, text: 'Open'},
    {value: ProjectStatusType.close, text: 'Close'}
];

export const PROJECT_FILTER_TYPE = {
    isOpen: 1,
    isClose: 2
};
