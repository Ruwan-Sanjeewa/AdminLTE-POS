import {Order} from "../../entity/order";


export interface OrderDAO extends SuperDAO<Order, string>{
    count():Promise<number>;
}