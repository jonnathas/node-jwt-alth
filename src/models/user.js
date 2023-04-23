import bcrypt from 'bcrypt';
import sequelize from '../../config/dbConfig.js';
import { Model } from 'sequelize';


sequelize();


class User extends Model{
    
    create(data){

        hashadPassword = bcrypt.hash(data.password, process.env.HASH_SALT)

        data.password = hashadPassword;

        newUser = User.Create(data);

        return newUser;
    }
}

export default User;