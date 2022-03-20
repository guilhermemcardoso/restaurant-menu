import {HttpClient} from '../../../infra/http/http-client';
import {RemoteGetRestaurant} from './remote-get-restaurant';

jest.mock('../../../infra/http/http-client');

describe('RemoteGetRestaurant', () => {

  test('fetches successfully data from an API', async () => {
    const httpClient = new HttpClient();
    const remoteGetRestaurant = new RemoteGetRestaurant(httpClient);

    const result = await remoteGetRestaurant.get();
    expect(result.error).toBeFalsy();
    expect(result.message).toEqual('ok');
  });

  test('fetches erroneously data from an API', async () => {
    const httpClient = new HttpClient();

    const HttpClientGetMock = jest
      .spyOn(HttpClient.prototype, 'get')
      .mockImplementation(() => {
        throw new Error();
      });
    const remoteGetRestaurant = new RemoteGetRestaurant(httpClient);

    const result = await remoteGetRestaurant.get();

    expect(result.error).toBeTruthy();
    expect(result.message).toEqual('something went wrong');
    expect(HttpClientGetMock).toHaveBeenCalled();
  });
});
