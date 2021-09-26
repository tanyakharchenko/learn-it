import { configureStore } from '@reduxjs/toolkit';
import newCourseReducer from './newCourse/slice';

export const store = configureStore({
  reducer: {
    newCourse: newCourseReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch