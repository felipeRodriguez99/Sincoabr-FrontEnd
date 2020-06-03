interface INotes {
    noteId: string;
    note: string;
    createDate: Date;
    updateDate: Date;
    code: string;
    subjectsId: string;
    periodId: string;
    namePeriod: string;
    nameSubject: string;
}

export class NotesModel implements INotes {
    namePeriod: string;
    nameSubject: string;
    noteId: string;
    note: string;
    createDate: Date;
    updateDate: Date;
    code: string;
    subjectsId: string;
    periodId: string;
}
