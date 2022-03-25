interface BaseEntity {
  prePersist(): void
  preUpdate(): void  
}

export interface InterstModel extends BaseEntity{
  id: Number
  interestListId: Number
  notification: Boolean
  sequence: Number
  stockCode: Number
}

export interface InterestListModel {
  id: Number
  member: MemberModel
  name: String
  sequence: String
}

export interface MemberModel extends BaseEntity{
  email: String
  id: String
  password: String
  subscribe: Boolean
  username: String
}
