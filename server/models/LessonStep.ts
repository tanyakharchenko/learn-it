export interface BasicStep {
    id: string;
    title: string;
    description: string;
}

interface VideoStep extends BasicStep {
    videoLink: string;
}

interface NoteStep extends BasicStep {
    note: string;
}

interface HomeWorkStep extends BasicStep {

}

export type LessonStep = VideoStep | NoteStep | HomeWorkStep;