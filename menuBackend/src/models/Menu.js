import { Schema, model } from 'mongoose'

const menuSchema = new Schema({
    nombre: String,
    precio: String,
    categoria: String, //aperitivos, postres, entrada, plato_fuerte, bebidas
    descripcion: String,
    imagen: String 
},{
    timestamps: true,
    versionKey: false   
})

export default model('Menu', menuSchema)