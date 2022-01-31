import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Autocomplete, CircularProgress, Paper, TextField } from '@mui/material'

const AutocompleteFromServer = ({
  url,
  searchFieldName,
  loadOptionsOnSearchLength,
  optionLabelName,
  optionIdName,
  autocompleteProps,
  textFieldProps,
  method
}) => {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const [search, setSearch] = useState('')
  const searchPending = useRef(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => loadOptions(), [])

  // Se cargan opciones con el campo de búsqueda si se envía loadOptionsOnSearchLength
  // para determinar que se debe consultar al servidor en cada cambio del campo search
  // a partir de una cantidad determinada de caracteres
  useEffect(() => {
    if (
      loadOptionsOnSearchLength &&
      Number.isInteger(loadOptionsOnSearchLength) &&
      search.length >= loadOptionsOnSearchLength
    ) {
      if (!loading) {
        loadOptions()
      } else {
        searchPending.current = true
      }
    }
  }, [search])

  useEffect(() => {
    if (!loading && searchPending.current) {
      loadOptions()
    }
  }, [loading])

  /**
   * Carga las opciones del autocompletador desde el servidor
   */
  const loadOptions = () => {
    searchPending.current = false
    setLoading(true)
    const new_url = url.indexOf('?') > 0 ? url + '&' : url + '?'

    const request =
      method === 'get'
        ? window.axios.get(new_url + searchFieldName + '=' + search)
        : window.axios.post(new_url, { [searchFieldName]: search })

    request.then(
      (response) => {
        setOptions(response.data)
        setLoading(false)
      },
      (error) => {
        setLoading(false)
      }
    )
  }

  const new_text_field_props = Object.assign({}, textFieldProps, {
    value: search,
    onChange: (event) => {
      setSearch(event.target.value)
    }
  })

  const new_props = Object.assign({}, autocompleteProps, {
    open: open,
    onOpen: () => {
      setOpen(true)
    },
    onClose: () => {
      setOpen(false)
    },
    getOptionLabel: (option) => option[optionLabelName],
    isOptionEqualToValue: (option, value) =>
      option[optionIdName] === value[optionIdName],
    options: options,
    openOnFocus: true,
    loading: loading,
    loadingText: 'Cargando',
    noOptionsText: 'Sin resultados',
    PaperComponent: (props) => <Paper {...props} elevation={8} />,
    renderInput: (params) => (
      <TextField
        {...Object.assign({}, params, new_text_field_props)}
        InputProps={{
          ...params.InputProps,
          endAdornment: (
            <React.Fragment>
              {loading ? <CircularProgress color='inherit' size={20} /> : null}
              {params.InputProps.endAdornment}
            </React.Fragment>
          )
        }}
      />
    )
  })

  return <Autocomplete {...new_props} />
}

AutocompleteFromServer.propTypes = {
  autocompleteProps: PropTypes.object.isRequired,
  loadOptionsOnSearchLength: PropTypes.number,
  optionIdName: PropTypes.string,
  optionLabelName: PropTypes.string,
  searchFieldName: PropTypes.string,
  textFieldProps: PropTypes.object,
  url: PropTypes.string.isRequired,
  method: PropTypes.string
}

AutocompleteFromServer.defaultProps = {
  loadOptionsOnSearchLength: null,
  optionIdName: 'id',
  optionLabelName: 'name',
  searchFieldName: 'search',
  method: 'get'
}

export default AutocompleteFromServer
