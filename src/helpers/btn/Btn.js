import React, { Component } from 'react'

import { Icon } from 'mui-helpers'

import { Button, IconButton } from '@mui/material'
import { withStyles } from '@mui/styles'

const props_exceptions = ['tReady', 't']

const getProps = (props, isIconButton = false) => {
  let data = {}

  if (!isIconButton) data['size'] = 'large'

  for (let key in props) {
    if (!props_exceptions.includes(key)) {
      data[key] = props[key]
    }
  }
  return data
}

const Menu = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      startIcon={<Icon name='Menu' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Menú'}
    </Button>
  )
})

const Save = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='ContentSave' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Guardar'}
    </Button>
  )
})

const Login = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='ArrowRight' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Ingresar'}
    </Button>
  )
})

const Register = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='ArrowRight' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Registrarse'}
    </Button>
  )
})

const AddClient = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='AccountPlus' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Crear nuevo cliente'}
    </Button>
  )
})

const Logout = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      startIcon={<Icon name='ArrowLeft' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Salir'}
    </Button>
  )
})

const Close = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      color={'color' in props ? props.color : 'primary'}
      endIcon={<Icon name='Close' />}
    >
      {'text' in props ? props.text : 'Cerrar'}
    </Button>
  )
})

const CloseOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='Close' />
    </IconButton>
  )
})

const FinishTaskOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='CalendarCheck' />
    </IconButton>
  )
})

const Update = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='Pencil' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Actualizar'}
    </Button>
  )
})

const Car = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      startIcon={<Icon name='CarSide' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Vehículo'}
    </Button>
  )
})

const UpdateOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='Pencil' />
    </IconButton>
  )
})

const ListOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='FormatListBulletedSquare' />
    </IconButton>
  )
})

const CarOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='CarSide' />
    </IconButton>
  )
})

const CartOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='Cart' />
    </IconButton>
  )
})

const Delete = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='Delete' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Eliminar'}
    </Button>
  )
})

const DeleteOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='Delete' />
    </IconButton>
  )
})

const Add = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='Plus' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Agregar'}
    </Button>
  )
})

const AddOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='Plus' />
    </IconButton>
  )
})

const Decrease = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='Minus' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Disminuir'}
    </Button>
  )
})

const DecreaseOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='Minus' />
    </IconButton>
  )
})

const Accept = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='Check' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Acceptar'}
    </Button>
  )
})

const Cancel = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='Close' />}
    >
      {'text' in props ? props.text : 'Cancelar'}
    </Button>
  )
})

const Yes = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='Check' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Si'}
    </Button>
  )
})

const No = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='Close' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'No'}
    </Button>
  )
})

const Lock = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='Lock' />}
      color={'color' in props ? props.color : 'default'}
    >
      {'text' in props ? props.text : 'Bloquear'}
    </Button>
  )
})

const Unlock = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='LockOpenVariant' />}
      color={'color' in props ? props.color : 'default'}
    >
      {'text' in props ? props.text : 'Desbloquear'}
    </Button>
  )
})

const AcceptOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='Check' />
    </IconButton>
  )
})

const LockOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='Lock' />
    </IconButton>
  )
})

const UnlockOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='LockOpenVariant' />
    </IconButton>
  )
})

const Settings = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='Cog' />}
      color={'color' in props ? props.color : 'primary'}
    />
  )
})

const Send = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='Send' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Enviar'}
    </Button>
  )
})

const SendOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='Send' />
    </IconButton>
  )
})

const Next = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='ChevronRight' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Siguiente'}
    </Button>
  )
})

const NextOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='ChevronRight' />
    </IconButton>
  )
})

const NextArrow = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='ArrowRight' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Siguiente'}
    </Button>
  )
})

const NextDown = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='ArrowDown' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Siguiente'}
    </Button>
  )
})

const NextArrowOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='ArrowRight' />
    </IconButton>
  )
})

const Previous = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      startIcon={<Icon name='ChevronLeft' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Anterior'}
    </Button>
  )
})

const PreviousOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='ChevronLeft' />
    </IconButton>
  )
})

const PreviousArrow = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      startIcon={<Icon name='ArrowLeft' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Anterior'}
    </Button>
  )
})

const PreviousUp = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      startIcon={<Icon name='ArrowUp' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Anterior'}
    </Button>
  )
})

const PreviousArrowOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='ArrowLeft' />
    </IconButton>
  )
})

const More = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='DotsVertical' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Más'}
    </Button>
  )
})

const Return = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='KeyboardReturn' />}
      color={'color' in props ? props.color : 'default'}
    >
      {'text' in props ? props.text : 'Regresar'}
    </Button>
  )
})

const Filters = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='FilterVariant' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Filtros'}
    </Button>
  )
})

const Activate = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='Check' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Activar'}
    </Button>
  )
})

const Pay = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='CashRegister' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Pagar'}
    </Button>
  )
})

const PayOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='CashRegister' />
    </IconButton>
  )
})

const StartNow = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='Play' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Empezar ahora'}
    </Button>
  )
})

const UploadFile = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='Upload' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Subir'}
    </Button>
  )
})

const HistoryOnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name='History' />
    </IconButton>
  )
})

const OnlyIcon = React.forwardRef((props, ref) => {
  return (
    <IconButton
      ref={ref}
      {...getProps(props, true)}
      variant={'variant' in props ? props.variant : 'contained'}
      color={'color' in props ? props.color : 'primary'}
    >
      <Icon name={props.icon_name} />
    </IconButton>
  )
})

const IconFree = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name={props.iconname} />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Botón'}
    </Button>
  )
})

const Store = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      endIcon={<Icon name='Store' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Tienda'}
    </Button>
  )
})

const Cart = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      startIcon={<Icon name='Cart' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Comprar'}
    </Button>
  )
})

const Copy = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      startIcon={<Icon name='ContentCopy' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Copiar'}
    </Button>
  )
})

const Paste = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      startIcon={<Icon name='ContentPaste' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Pegar'}
    </Button>
  )
})

const Location = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      startIcon={<Icon name='MapMarker' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Ubicación'}
    </Button>
  )
})

const AddLocation = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      variant={'variant' in props ? props.variant : 'contained'}
      startIcon={<Icon name='MapMarkerPlus' />}
      color={'color' in props ? props.color : 'secondary'}
    >
      {'text' in props ? props.text : 'Agregar ubicación'}
    </Button>
  )
})

const Facebook = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      startIcon={<Icon name='Facebook' />}
      className='color-white-text btn-facebook'
    >
      {'text' in props ? props.text : 'Facebook'}
    </Button>
  )
})

const Google = React.forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      {...getProps(props)}
      startIcon={
        <Icon name='Google' className='color-red-text text-darken-1' />
      }
      className='color-white'
    >
      {'text' in props ? props.text : 'Google'}
    </Button>
  )
})

class Btn extends Component {
  static Menu = Menu
  static Save = Save
  static Close = Close
  static CloseOnlyIcon = CloseOnlyIcon
  static FinishTaskOnlyIcon = FinishTaskOnlyIcon
  static Update = Update
  static Delete = Delete
  static DeleteOnlyIcon = DeleteOnlyIcon
  static Add = Add
  static AddOnlyIcon = AddOnlyIcon
  static Decrease = Decrease
  static DecreaseOnlyIcon = DecreaseOnlyIcon
  static Accept = Accept
  static AcceptOnlyIcon = AcceptOnlyIcon
  static Cancel = Cancel
  static Yes = Yes
  static No = No
  static UpdateOnlyIcon = UpdateOnlyIcon
  static ListOnlyIcon = ListOnlyIcon
  static CarOnlyIcon = CarOnlyIcon
  static Car = Car
  static Lock = Lock
  static Unlock = Unlock
  static LockOnlyIcon = LockOnlyIcon
  static UnlockOnlyIcon = UnlockOnlyIcon
  static Send = Send
  static SendOnlyIcon = SendOnlyIcon
  static Next = Next
  static NextOnlyIcon = NextOnlyIcon
  static NextArrow = NextArrow
  static NextDown = NextDown
  static NextArrowOnlyIcon = NextArrowOnlyIcon
  static Previous = Previous
  static PreviousOnlyIcon = PreviousOnlyIcon
  static PreviousArrow = PreviousArrow
  static PreviousUp = PreviousUp
  static PreviousArrowOnlyIcon = PreviousArrowOnlyIcon
  static More = More
  static Return = Return
  static Settings = Settings
  static Login = Login
  static AddClient = AddClient
  static Logout = Logout
  static Register = Register
  static Filters = Filters
  static Activate = Activate
  static Pay = Pay
  static PayOnlyIcon = PayOnlyIcon
  static StartNow = StartNow
  static UploadFile = UploadFile
  static HistoryOnlyIcon = HistoryOnlyIcon
  static OnlyIcon = OnlyIcon
  static IconFree = IconFree
  static Store = Store
  static Cart = Cart
  static Copy = Copy
  static Paste = Paste
  static CartOnlyIcon = CartOnlyIcon
  static Location = Location
  static AddLocation = AddLocation
  static Facebook = withStyles((theme) => ({
    root: {
      backgroundColor: '#1877f2',
      maxWidth: '400px',
      fontSize: '0.65rem',
      padding: '11px 5px !important',
      marginTop: '-1px !important'
    }
  }))(Facebook)

  static Google = Google

  render() {
    return (
      <Button {...this.props}>
        {this.props.value
          ? this.props.value
          : this.props.children
          ? this.props.children
          : 'Botón'}
      </Button>
    )
  }
}

export default Btn
