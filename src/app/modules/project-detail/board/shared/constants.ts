import {TaskStatusType} from '@app/modules/project-detail/board/shared/enums';

export const TASK_STATUS = [
    {value: TaskStatusType.NotStarted, text: 'Not Started'},
    {value: TaskStatusType.InProgress, text: 'In Progress'},
    {value: TaskStatusType.Completed, text: 'Completed'},
    {value: TaskStatusType.Closed, text: 'Closed'}
];

