import response from '../../../assets/responses/get-restaurant-success';
import {HttpGetClient} from '../../../data/protocols/http/http-get-client'

export class HttpClient implements HttpGetClient {
  async get(params: HttpGetClient.Params): Promise<any> {

    return response;
  }
}
