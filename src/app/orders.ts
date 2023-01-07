import { IOrders } from "./models/IOrders";
import { IUser } from "./models/IUser";


export class OrdersClass {
   static user:IUser = JSON.parse(localStorage.getItem('user')!);
   
    static Orders: IOrders =
        {
            waiter: [
                {
                    buyDate: '14/12/2022',
                    price:3500,
                    img: 'assets/imigs/Pizza.jpg',
                    company: "Tashir Group",
                    phone: +37495555555,
                    type: "restourant",
                    code: 1,
                    address: {
                        company: "Tashir Pizza",
                        street: 'Sayat Nova',
                        city: "Gyumri"
                    }
                },
                {
                    buyDate: '04/12/2020',
                    price:500,
                    img: 'assets/imigs/shashlik.jpg',
                    company: "Nash Dvor",
                    phone: +37477343434,
                    type: "restourant",
                    code: 2,
                    address: {
                        company: "Nash Dvor",
                        street: 'Shara Talyan',
                        city: "Gyumri"
                    },

                },
                {
                    buyDate: '07/01/2021',
                    price:4000,
                    img: 'assets/imigs/shaurma.jpg',
                    company: "Hacatun",
                    phone: +37455676787,
                    type: "restourant",
                    code: 3,
                    address: {
                        company: "Hacatun",
                        street: 'Maxsim Gorki',
                        city: "Gyumri"
                    },

                },
                {
                    buyDate: '24/09/2018',
                    price:2300,
                    img: 'assets/imigs/xinkali.jpg',
                    company: "Kilikia",
                    phone: +37493454554,
                    type: "bistro-restourant",
                    code: 4,
                    address: {
                        company: "Kilikia",
                        street: 'Garegin Njdeh',
                        city: "Gyumri"
                    },

                },
            ],
            client: {
                phone: this.user.phoneNumber,
                balance: 0,
                address: 'Hamzachiman'
            }
        }
    

}