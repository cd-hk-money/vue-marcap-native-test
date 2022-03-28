import { InterestListModel } from '../models/interest'

export default class InterestService {
  private interestList: InterestListModel[]

  constructor(){
    this.interestList = []
  }
}