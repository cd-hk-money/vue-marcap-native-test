import { Http, HttpResponse } from '@nativescript/core'

const baseUrl = 'http://10.0.2.2:5000'

export let request: (requestType: String, requestUrl: String) => Promise<HttpResponse>

request = async function (requestType, requestUrl) {
  return await Http.request({
    url: `${baseUrl}/${requestUrl}`,
    method: `${requestType}`
  })
}


