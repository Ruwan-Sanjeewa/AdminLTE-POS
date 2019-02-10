import {CustomerDAOImpl} from "./custom/impl/customer-dao-impl";
import {PoolConnection} from "mysql";
import {ItemDAOImpl} from "./custom/impl/item-dao-impl";
import {OrderDaoImpl} from "./custom/impl/order-dao-impl";

export enum DAOTypes{
    CUSTOMER, ITEM,ORDER
}

export function getDAO(daoType: DAOTypes, connection: PoolConnection){
    switch (daoType) {
        case DAOTypes.CUSTOMER:
            return new CustomerDAOImpl(connection);
        case DAOTypes.ITEM:
           return new ItemDAOImpl(connection);
        case DAOTypes.ORDER:
            return new OrderDaoImpl(connection);
        default:
            return null;
    }
}