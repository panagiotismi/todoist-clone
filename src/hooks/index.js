import { useState, useEffect } from 'react';
import { formatWithOptions } from 'date-fns/fp';
import { el } from 'date-fns/locale';
import base from '../firebase';
import { compose, collatedTasksExist } from '../helpers';

const dateToStringGr = formatWithOptions({ locale: el })('DD/MM/YYY');

export const useTasks = project => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const tasksCollection = base.firestore().collection('tasks');
    let unsubscribe = tasksCollection.where('userId', '==', 'q1w2e3r4');

    unsubscribe =
      project && !collatedTasksExist(project)
        ? unsubscribe.where('projectId', '==', project)
        : project === 'TODAY'
        ? unsubscribe.where('date', '==', dateToStringGr(new Date()))
        : project === 'INBOX' || project === 0
        ? unsubscribe.where('date', '==', '')
        : unsubscribe;
  }, [project]);
};

export const poop = '💩';
