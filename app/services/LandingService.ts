import { Http, HttpResponse } from '@nativescript/core'
import { NameCodeMappingModel, SearchStateModel, LandingModel } from '../models/content'

const baseUrl = 'http://10.0.2.2:5000'

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
  public createLandingContents() {    
    Http.request({
      url: `${baseUrl}/today`,
      method: 'GET'
    }).then(
      (response: HttpResponse) => {                
        const contentJSON = response.content?.toJSON()
              
        contentJSON.data.map((stock: any) => {
          this.nameCodeMapping.push({
            name: stock[1],
            code: stock[0]
          })
          this.searchState.push({
            name: stock[1]
          })
        })
      } 
    )
  }

  public getStocbyTitle(title: string) {
    
  }
}