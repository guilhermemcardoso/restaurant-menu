import axios, {AxiosResponse} from 'axios';
import successResponse from '../../assets/responses/get-restaurant-success';
import failureResponse from '../../assets/responses/get-restaurant-failure';
import {HttpClient} from './http-client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('HttpClient', () => {
  test('fetches successfully data from an API', async () => {
    const axiosResponse: AxiosResponse = successResponse;
    mockedAxios.get.mockResolvedValueOnce(axiosResponse);

    const httpClient = new HttpClient();
    const result = await httpClient.get({url: 'http://testing.com'});

    expect(axios.get).toHaveBeenCalled();
    expect(result.data).toEqual(successResponse.data);
  });

  test('fetches erroneously data from an API', async () => {
    const axiosResponse: AxiosResponse = failureResponse;
    mockedAxios.get.mockResolvedValueOnce(axiosResponse);

    const httpClient = new HttpClient();
    const result = await httpClient.get({url: 'http://testing.com'});

    expect(axios.get).toHaveBeenCalled();
    expect(result.status).toEqual(failureResponse.status);
  });
});
