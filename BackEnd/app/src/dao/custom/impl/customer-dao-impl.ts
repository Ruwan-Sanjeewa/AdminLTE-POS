import Promise = require("promise");
import {Customer} from "../../../entity/customer";
import {CustomerDAO} from "../customer-dao";
import {PoolConnection} from "mysql";


export class CustomerDAOImpl implements CustomerDAO {

    constructor(private connection: PoolConnection) {
    }

    delete(id: string): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM customer WHERE id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    find(id: string): Promise<Array<Customer>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM customer WHERE id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    findAll(): Promise<Array<Customer>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM customer`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    save(entity: Customer): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO customer VALUES ('${entity.id}','${entity.name}','${entity.address}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    update(entity: Customer): Promise<boolean> {
        return new Promise((resolve, reject) => {


            this.connection.query(`UPDATE customer SET name = '${entity.name}', address ='${entity.address}' WHERE id='${entity.id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    count(): Promise<number> {
        return new Promise((resolve,reject)=>{
            this.connection.query("SELECT COUNT (*) as count FROM customer", (err, results) =>{
              if(err){
                  reject(err);
              }
              else{
                  resolve(results[0].count);
              }
            });
        });
    }

}