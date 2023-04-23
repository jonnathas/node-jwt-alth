import bcrypt from 'bcrypt';
import sequelize from '../../config/dbConfig.js';
import { Model } from 'sequelize';

sequelize();


class User extends Model{
    
    async create(data){

        hashadPassword = bcrypt.hash(data.password, process.env.HASH_SALT)

        data.password = hashadPassword;

        newUser = await User.create(data);

        return newUser;
    }

    async update(id, data){

        if(data.password){

            hashadPassword = bcrypt.hash(data.password, process.env.HASH_SALT)
            
            data.password = hashadPassword;
        }

        const user = await User.findByPk(id)

        if(!user){
            throw new Error("User not found.")
        }

        return user.update(data);
    }

    async getAll(data){

        return await User.findAll({
            where: data
        });
    }

    async delete(id){

        const user = await User.findByPk(id)

        if(!user){
            throw new Error("User not found.")
        }

        return user.destroy();

    }
}

export default User;