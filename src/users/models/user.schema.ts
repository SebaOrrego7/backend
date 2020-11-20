import { Schema, Document } from 'mongoose'; //model guarda,edita y elimina datos en bd
import validator from 'validator'
import { User } from './user';

export const userSchema = new Schema({
  email: {
      type : String,
      required : true,
      validate : {

          validator: ( email : string  ) => validator.isEmail(email)

      }, 
      unique : true

  },
  password:{
      type : String,
      required : true
  } ,


},
{collection: 'Users', timestamps: true , versionKey : false }
);

export declare type UserDocument = User & Document