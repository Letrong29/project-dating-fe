import {User} from '../../user/model/user';

export interface ReportUser {

  id?: number;

  idUserReported?: User;

  idUserReporter?: User;

  status?: number;

  timeReport?: string;
}
