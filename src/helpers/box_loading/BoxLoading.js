import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Grid, Box, LinearProgress, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import styles from './css/styles.css'

/**
 * Componente para mostrar un loading en la pantalla de acuerdo a los parametros
 *
 * @param {any} children      - Elemento para mostrar dentro como contenido
 * @param {bool} show         - Determina si el componente es visible en pantalla (si withState es false)
 * @param {bool} fullScreen   - Determina si el componente ocupa el tamaño completo de la pantalla
 * @param {string} text       - Texto para mostrar y que remplaza el texto almacenado en el estado
 * @param {string} src        - Url de la imagen a mostrar y la cual remplaza a la imagen por defecto
 * @param {bool} noImage      - Determina si se debe mostrar una imagen en componente
 * @param {bool} withState    - Determina si el componente se muestra de acuerdo a los parametros del estado
 * @returns
 */
const BoxLoading = ({
  children,
  show,
  fullScreen,
  text,
  src,
  noImage,
  withState
}) => {
  const reference = React.createRef()

  const srcDefault = useSelector((state) => state.box_loading.src_default)
  const stateShow = useSelector((state) => state.box_loading.show)
  const stateText = useSelector((state) => state.box_loading.text)

  const [width, setWidth] = useState(fullScreen ? '100%' : '0px')
  const [height, setHeight] = useState(fullScreen ? '100%' : '0px')
  const zIndex = fullScreen ? 10000 : 1000

  const setBoxSize = () => {
    if (reference.current) {
      setWidth(fullScreen ? '100%' : reference.current.offsetWidth + 'px')
      setHeight(fullScreen ? '100%' : reference.current.offsetHeight + 'px')
    }
  }

  /**
   * Determina si se debe mostrar o no el componente BoxLoading
   *
   * @returns {bool}
   */
  const getShow = () => {
    if (withState) {
      return !!stateShow
    } else {
      return !!show
    }
  }

  useEffect(() => {
    setBoxSize()
    if (getShow() && fullScreen) {
      document
        .getElementsByTagName('body')[0]
        .classList.add(styles.overflow_hidden)
    } else if (fullScreen) {
      document
        .getElementsByTagName('body')[0]
        .classList.remove(styles.overflow_hidden)
    }
  }, [reference])

  return (
    <div ref={reference} style={{ minHeight: '50px' }}>
      {getShow() && (
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          className={
            fullScreen
              ? styles.box_loading_full_screen
              : styles.box_loading_no_full_screen
          }
          style={{
            height: height,
            width: width,
            zIndex: zIndex,
            backgroundColor: 'rgba(255,255,255,.7)',
            backdropFilter: 'blur(4px)'
          }}
        >
          <Grid item xs={10} sm={8} md={6} lg={4} align='center'>
            {noImage || (!src && !srcDefault) ? null : (
              <Box pb={2}>
                <img
                  alt=''
                  src={src || srcDefault}
                  style={{ width: '170px', maxWidth: '100%' }}
                />
              </Box>
            )}

            <LinearProgress />
            {text || stateText ? (
              <Box pt={2}>
                <Typography variant='body2'>{text || stateText}</Typography>
              </Box>
            ) : null}
          </Grid>
        </Grid>
      )}
      {children}
    </div>
  )
}

BoxLoading.propTypes = {
  children: PropTypes.any,
  fullScreen: PropTypes.bool,
  noImage: PropTypes.bool,
  show: PropTypes.bool,
  src: PropTypes.bool,
  text: PropTypes.string,
  withState: PropTypes.bool
}

BoxLoading.defaultProps = {
  fullScreen: false,
  noImage: false,
  withState: false
}

export default BoxLoading
