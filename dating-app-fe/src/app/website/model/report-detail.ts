import {Post} from '../../user/model/post';
import {User} from '../../user/model/user';
import {Report} from './report';

export interface ReportDetail {

  idReportDetails?: number;

  idPost?: number;

  reporter?: string;

  idReport?: number;

  status?: number;

  timeReport?: Date;

  userPost?: string;

  postContent?: string;

  reportContent?: string;




}
