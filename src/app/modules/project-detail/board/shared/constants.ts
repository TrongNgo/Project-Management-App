import {TaskStatusType} from '@app/modules/project-detail/board/shared/enums';

export const TASK_STATUS = [
    {value: TaskStatusType.NotStarted, text: 'Not Started', color: '#ccc'},
    {value: TaskStatusType.InProgress, text: 'In Progress', color: '#4663e6'},
    {value: TaskStatusType.Completed, text: 'Completed', color: '#32c378'},
    {value: TaskStatusType.Closed, text: 'Closed', color: '#de7171'}
];

