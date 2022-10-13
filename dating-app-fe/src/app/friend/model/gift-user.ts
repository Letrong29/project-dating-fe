import {Gift} from './gift';
import {User} from '../../user/model/user';

export interface GiftUser {

  idGift: Gift;

  idUserSender?: User;

  idUserReceiver?: User;

  quantity?: number;
}
