import {HttpGetClient} from '../../protocols/http/http-get-client';
import {GetRestaurant} from '../../../domain/usecases/get-restaurant';
import {Restaurant} from '../../../domain/models/restaurant';
import {API_URL, API_KEY, RESTAURANT_ID} from '@env';
import {Menu} from '../../../domain/models/menu';
import {Section} from '../../../domain/models/section';
import {Menuitem} from '../../../domain/models/menuitem';
import response from '../../../assets/responses/get-restaurant';

export class RemoteGetRestaurant implements GetRestaurant {
  constructor(private readonly httpGetClient: HttpGetClient) {}

  async get(): Promise<GetRestaurant.Response> {
    try {
      // const httpResponse = await this.httpGetClient.get({
      //   url: `${API_URL}restaurant/${RESTAURANT_ID}?key=${API_KEY}`,
      // });

      const httpResponse = response;
      const {
        data: {result},
      } = httpResponse;
  
      const restaurant: Restaurant = {
        name: result.restaurant_name,
        id: result.restaurant_id,
        priceRange: result.price_range,
        menus: result.menus.map((menu: any) => {
          return {
            name: menu.menu_name,
            sections: menu.menu_sections.map((section: any) => {
              return {
                description: section.description,
                name: section.section_name,
                menuitems: section.menu_items.map((menuitem: any) => {
                  return {
                    description: menuitem.description,
                    name: menuitem.name,
                    price: menuitem.price,
                  } as Menuitem;
                }),
              } as Section;
            }),
          } as Menu;
        }),
      };
      return {error: false, message: 'ok', restaurant};
    } catch(error) {
      return {error: true, message: 'something went wrong', restaurant: undefined};
    }
  }
}
