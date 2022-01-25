import { useTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

// Genera el css para todas las opciones de color
// incluidas en la paleta
const generateCssPaletteValues = (palette, lightColor) => {
  const styles = {}

  Object.keys(palette).map((key, i) => {
    const el = palette[key]
    // Si el elemento es un objeto
    if (typeof el === 'object') {
      if ('main' in el) {
        styles[key + '_main'] = {
          background: el.main,
          color: el.contrastText ? el.contrastText : '#fff',
          '& > *': {
            color: el.contrastText ? el.contrastText : '#fff'
          }
          // color:palette.getContrastText(el.main),
        }

        styles[key + '_main_text'] = {
          color: el.main
        }

        styles[key + '_main_border'] = {
          borderColor: el.main
        }

        styles[key + '_main_border_left'] = {
          borderLeftColor: el.main
        }

        styles[key + '_main_border_right'] = {
          borderRightColor: el.main
        }

        styles[key + '_main_border_bottom'] = {
          borderBottomColor: el.main
        }

        styles[key + '_main_border_top'] = {
          borderTopColor: el.main
        }
      }

      if ('light' in el) {
        styles[key + '_light'] = {
          background: el.light,
          color: lightColor,
          '& > *': {
            color: lightColor
          }
        }

        styles[key + '_light_text'] = {
          color: el.light
        }

        styles[key + '_light_border'] = {
          borderColor: el.light
        }

        styles[key + '_light_border_left'] = {
          borderLeftColor: el.light
        }

        styles[key + '_light_border_right'] = {
          borderRightColor: el.light
        }

        styles[key + '_light_border_bottom'] = {
          borderBottomColor: el.light
        }

        styles[key + '_light_border_top'] = {
          borderTopColor: el.light
        }
      }

      if ('dark' in el) {
        styles[key + '_dark'] = {
          background: el.dark,
          color: el.contrastText ? el.contrastText : '#fff',
          '& > *': {
            color: el.contrastText ? el.contrastText : '#fff'
          }
        }

        styles[key + '_dark_text'] = {
          color: el.dark
        }

        styles[key + '_dark_border'] = {
          borderColor: el.dark
        }

        styles[key + '_dark_border_left'] = {
          borderLeftColor: el.dark
        }

        styles[key + '_dark_border_right'] = {
          borderRightColor: el.dark
        }

        styles[key + '_dark_border_bottom'] = {
          borderBottomColor: el.dark
        }

        styles[key + '_dark_border_top'] = {
          borderTopColor: el.dark
        }
      }
    }
  })

  return styles
}

const useColorClasses = () => {
  const theme = useTheme()
  const useStyles = makeStyles(generateCssPaletteValues(theme.palette))
  const classes = useStyles()
  return classes
}

export default useColorClasses
