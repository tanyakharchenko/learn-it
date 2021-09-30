import { createSelector } from "reselect";
import type { RootState } from "../index";

export const newCourseSelector = (state: RootState) => state.newCourse;

export const newCourseModules = createSelector(
  newCourseSelector,
  (course) => course.modules
);

export const newCourseCurrentModule = createSelector(
  [
    newCourseModules,
    (state: RootState, currentModuleId: string) => currentModuleId,
  ],
  (modules, currentModuleId) =>
    modules.find((module) => module.temporaryModuleId === currentModuleId)
);

export const newCourseCurrentLesson = createSelector(
  [
    newCourseModules,
    (
      state: RootState,
      {
        currentModuleId,
        currentLessonId,
      }: { currentModuleId: string; currentLessonId: string }
    ) => ({ currentModuleId, currentLessonId }),
  ],
  (modules, { currentModuleId, currentLessonId }) => {
    const currentModule = modules.find(
      (module) => module.temporaryModuleId === currentModuleId
    );
    return currentModule?.lessons?.find(
      (lesson) => lesson.temporaryLessonId === currentLessonId
    );
  }
);

export const newCourseCurrentLessonSteps = createSelector(
  newCourseCurrentLesson,
  (lesson) => lesson?.steps
);

export const newCourseCurrentModuleLessons = createSelector(
  newCourseCurrentModule,
  (module) => module?.lessons
);
