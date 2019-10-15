import { collatedTasks } from '../constants';

export const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)));

export const collatedTasksExist = project =>
  collatedTasks.find(task => task.key === project);
