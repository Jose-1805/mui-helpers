import types from '../redux/const'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useBoxLoadingActions = (
  showBoxLoading = undefined,
  defaultMessage = null
) => {
  useEffect(() => {
    if (typeof showBoxLoading !== 'undefined') {
      if (showBoxLoading) actShowBoxLoading(defaultMessage)
      else if (!showBoxLoading) actHideBoxLoading()
    }
  }, [showBoxLoading])

  const show = useSelector((state) => state.box_loading.show)

  const dispatch = useDispatch()

  /**
   * Url de la imagen por defecto para mostrar en el box loading
   *
   * @param      {string}  srx   Url de la imagen
   * @return     {Object}
   */
  const actSetSrcDefault = (src = null) => {
    dispatch({
      type: types.SET_SRC_DEFAULT,
      src
    })
  }

  /**
   * Establece los parametros necesarios para mostrar el box loading
   *
   * @param      {string}  text   Texto que se muestra en el box loading
   * @return     {Object}
   */
  const actShowBoxLoading = (text = 'Cargando') => {
    dispatch({
      type: types.SHOW,
      text
    })
  }

  /**
   * Establece los parametros necesarios para ocultar el box loading
   *
   * @return     {Object}
   */
  const actHideBoxLoading = () => {
    dispatch({
      type: types.HIDE
    })
  }

  /**
   * Parametros para intercambiar estado actual para mostrar u ocultar el componente
   *
   * @param {string} text
   */
  const actToogleBoxLoading = (text = '') => {
    if (show) {
      actHideBoxLoading()
    } else {
      actShowBoxLoading(text)
    }
  }

  return {
    actSetSrcDefault,
    actShowBoxLoading,
    actHideBoxLoading,
    actToogleBoxLoading
  }
}

export default useBoxLoadingActions
