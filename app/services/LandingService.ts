import { HttpResponse } from '@nativescript/core'
import { NameCodeMappingModel, SearchStateModel, LandingModel } from '../models/content'
import { request } from '../api/request'


export default class LandingtService {
  private nameCodeMapping: NameCodeMappingModel[]
  private searchState: SearchStateModel[]
  
  constructor() {    
    this.nameCodeMapping = []
    this.searchState = []
  }

  public getLandingContents(): LandingModel {
    return {
      nameCodeMapping: this.nameCodeMapping,
      searchState: this.searchState
    }
  }

  public createLandingContentsAsync() {
    request('GET', 'today').then((response: HttpResponse) => {
      this.nameCodeMapping = response.content?.toJSON().data.map((stock: any) => {
        return {
          name: stock[1],
          code: stock[0]
        }
      })
    }).catch(e => {
      console.log(e)
    })       
  } 

  public getStockByCode(code: String): String {
    const result = this.nameCodeMapping.find(stock => stock.code === code)
    return result ? result.name : '검색 결과 없음..'
  }

}