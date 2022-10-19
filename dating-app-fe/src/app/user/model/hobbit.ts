import {UserHobbit} from './user-hobbit';

export interface Hobbit {
  isChecked: any;

  idHobbit?: number;

  hobbitName?: string;

  userHobbits?: UserHobbit[];
}
