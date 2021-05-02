import Menu from '../models/Menu'

//crear un menu
export const crearMenu = async (req, res) => {
    console.log(req.body)

    //desarmar objeto
    const { nombre, precio, categoria, descripcion, imagen } = req.body
    
    //armar objeto de lo que llego en el request
    const nuevoPlato = new Menu({
       nombre,
       precio,
       categoria,
       descripcion,
       imagen 
    })

    //guardado en la BD
    const platilloGuardado = await nuevoPlato.save()

    res.status(201).json(platilloGuardado)
}

export const listarMenu = async (req, res) => {
    const listaPlatillos = await Menu.find()

    res.status(200).json(listaPlatillos)
}

export const listarBebidas = async (req, res) => {
    const listaBebidas = await Menu.find({categoria: "bebida"})

    res.status(200).json(listaBebidas)
}

export const listarAperitivos = async (req, res) => {
    const listaAperitivos = await Menu.find({categoria: "aperitivo"})

    res.status(200).json(listaAperitivos)
}

export const listarPostres = async (req, res) => {
    const listaPostres = await Menu.find({categoria: "postre"})

    res.status(200).json(listaPostres)
}

export const listarPF = async (req, res) => {
    const listaPF = await Menu.find({categoria: "plato_fuerte"})

    res.status(200).json(listaPF)
}

export const actualizarPlatillo = async (req, res) => {
    console.log(req.body)
    console.log(req.params)

    const platilloActualizado = await Menu.findByIdAndUpdate(req.params.platilloId, req.body, {new: true})

    if(platilloActualizado !== null){
        res.status(200).json(platilloActualizado)
    } else {
        res.status(404).json({msg: "el platillo no existe"})
    }
}
export const eliminarPlatilo = async (req, res) => {
    console.log(req.body)
    console.log(req.params)

    const platilloEliminado = await Menu.findByIdAndDelete(req.params.platilloId)

    if(platilloEliminado !== null){
        res.status(200).json({msg: "Platillo eliminado con exito"})
    } else {
        res.status(404).json({msg: "el platillo no existe"})
    }
}