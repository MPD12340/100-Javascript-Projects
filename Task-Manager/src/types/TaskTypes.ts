type taskItemType = {
    title : string;
    isCompleted : boolean;
    id : string | number;
}

type propType = {
    todo : taskItemType;
}
export interface propFormType {
title : taskItemType['title'] | string;
setTask: React.Dispatch<React.SetStateAction<string>>
handleSubmit: (e: any) => void;
}

export type {taskItemType , propType}