import {OrderDAO} from "../order-dao";
import {PoolConnection} from "mysql";
import Promise=require("promise");
import {Order} from "../../../entity/order";

export class OrderDaoImpl implements OrderDAO{
    constructor(private connection: PoolConnection) {
    }

    count(): Promise<number> {
        return new Promise((resolve,reject)=>{
           this.connection.query("SELECT COUNT(*) as count FROM `order`",(err, results) =>{
               if(err){
                    reject(err);
               }
               else{
                   resolve(results[0].count);
               }
           });
        });
    }

    delete(id: string): Promise<boolean> {
        return new Promise((resolve,reject)=>{
           this.connection.query("DELETE FROM `order` WHERE id="+id,(err, results)=>{
              if(err){
                  reject(err);
              }
              else{
                  resolve(results.affectedRows > 0);
              }
           });
        });
    }

    find(id: string): Promise<Array<Order>> {
        return new Promise((resolve,reject)=>{
           this.connection.query("SELECT * FROM `order` WHERE id="+id,(err,results)=>{
              if(err){
                    reject(err);
              }
              else{
                  resolve(results);
              }
           });
        });
    }

    findAll(): Promise<Array<Order>> {
        return new Promise((resolve,reject)=>{
           this.connection.query("SELECT * FROM `order`",(err,results)=>{
              if(err){
                  reject(err);
              }
              else{
                  resolve(results);
              }
           });
        });
    }

    save(entity: Order): Promise<boolean> {
        return new Promise((resolve,reject)=>{
           this.connection.query("INSERT INTO `order` VALUES("+entity.id+","+entity.date+",'"+entity.customerId+"')",(err,results)=>{
              if(err){
                  reject(err);
              }
              else{
                  resolve(results.affectedRows>0);
              }
           });
        });
    }

    update(entity: Order): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            this.connection.query("UPDATE `order` SET date="+entity.date+",customerId="+entity.customerId+" WHERE id="+entity.id,(err,results)=>{
               if(err){
                   reject(err);
               }
               else{
                   resolve(results.affectedRows>0);
               }

            });
        });
    }
    
}