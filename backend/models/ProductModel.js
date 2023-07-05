import db from "../database/db";
import { DataTypes } from "sequelize";
const ProductModel= db.define('aus_art',{
id: {type: DataTypes.INTEGER},
denom: {type: DataTypes.CHAR},
precio: {type: DataTypes.FLOAT},
stock: {type: DataTypes.INTEGER},
})
export default ProductModel;