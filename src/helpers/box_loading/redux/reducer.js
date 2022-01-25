import types from './const'

const initState = {
  // Determina si el componente esta visible o no
  show: false,
  // Texto que se muestra en el mensaje
  text: 'Cargando',
  // Ruta del recurso de imagen por defecto
  src_default: null
}

const reducerBoxLoading = (state = initState, action) => {
  switch (action.type) {
    case types.SHOW:
      return Object.assign({}, state, { show: true, text: action.text })
    case types.HIDE:
      return Object.assign({}, state, { show: false, text: null })
    case types.SET_SRC_DEFAULT:
      return Object.assign({}, state, { src_default: action.src })
    default:
  }

  return state
}

export default reducerBoxLoading
