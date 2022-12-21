import { v4 as uuidv4 } from 'uuid';

export const TaskMock = [
  {
    id: uuidv4(),
    content: 'Dê uma estrelinha no repositório',
    status: false,
  },
  {
    id: uuidv4(),
    content: 'Dê um follow no linkedIn',
    status: false,
  },
  {
    id: uuidv4(),
    content: 'Ser uma pessoa muito linda',
    status: true,
  },
];
