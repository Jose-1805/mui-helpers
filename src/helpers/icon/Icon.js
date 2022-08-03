import React, { useEffect, useState } from 'react'
import './css/styles.css'
import { useTheme } from '@mui/material/styles'

import * as mdiMaterialUi from 'mdi-material-ui'

/*
const icons = {
  HelpRhombus: {
    filled: HelpRhombus,
    outline: HelpRhombusOutline
  },

  AccountMultiple: {
    filled: AccountMultiple,
    outline: AccountMultipleOutline
  },

  AccountPlus: {
    filled: AccountPlus,
    outline: AccountPlusOutline
  },

  AccountCircle: {
    filled: AccountCircle,
    outline: AccountCircleOutline
  },

  Star: {
    filled: Star,
    outline: StarOutline
  },

  Account: {
    filled: Account,
    outline: AccountOutline
  },

  Text: {
    filled: Text,
    outline: Text
  },

  Printer: {
    filled: Printer,
    outline: Printer
  },

  CubeSend: {
    filled: CubeSend,
    outline: CubeSend
  },

  Cube: {
    filled: Cube,
    outline: CubeOutline
  },

  VanUtility: {
    filled: VanUtility,
    outline: VanUtility
  },

  Truck: {
    filled: Truck,
    outline: TruckOutline
  },

  TruckFast: {
    filled: TruckFast,
    outline: TruckFastOutline
  },

  TruckCheck: {
    filled: TruckCheck,
    outline: TruckCheckOutline
  },

  TruckDelivery: {
    filled: TruckDelivery,
    outline: TruckDeliveryOutline
  },

  TagMultiple: {
    filled: TagMultiple,
    outline: TagMultipleOutline
  },

  TagPlus: {
    filled: TagPlus,
    outline: TagPlusOutline
  },

  Briefcase: {
    filled: Briefcase,
    outline: BriefcaseOutline
  },

  RemoteDesktop: {
    filled: RemoteDesktop,
    outline: RemoteDesktop
  },

  Store: {
    filled: Store,
    outline: StoreOutline
  },

  Repeat: {
    filled: Repeat,
    outline: Repeat
  },

  SwapHorizontalCircle: {
    filled: SwapHorizontalCircle,
    outline: SwapHorizontalCircleOutline
  },

  CarBattery: {
    filled: CarBattery,
    outline: CarBattery
  },

  Restart: {
    filled: Restart,
    outline: Restart
  },

  Cancel: {
    filled: Cancel,
    outline: Cancel
  },

  Cached: {
    filled: Cached,
    outline: Cached
  },

  MagnifyScan: {
    filled: MagnifyScan,
    outline: MagnifyScan
  },

  MagnifyPlus: {
    filled: MagnifyPlus,
    outline: MagnifyPlusOutline
  },

  MagnifyMinus: {
    filled: MagnifyMinus,
    outline: MagnifyMinusOutline
  },

  MagnifyClose: {
    filled: MagnifyClose,
    outline: MagnifyRemoveOutline
  },

  Oil: {
    filled: Oil,
    outline: Oil
  },

  RegisteredTrademark: {
    filled: RegisteredTrademark,
    outline: RegisteredTrademark
  },

  CircleDouble: {
    filled: CircleDouble,
    outline: CircleDouble
  },

  BrightnessPercent: {
    filled: BrightnessPercent,
    outline: BrightnessPercent
  },

  Percent: {
    filled: Percent,
    outline: PercentOutline
  },

  Car: {
    filled: Car,
    outline: CarOutline
  },

  CarCog: {
    filled: CarCog,
    outline: CarCog
  },

  CarHatchback: {
    filled: CarHatchback,
    outline: CarHatchback
  },

  History: {
    filled: History,
    outline: History
  },

  Close: {
    filled: Close,
    outline: Close
  },

  Counter: {
    filled: Counter,
    outline: Counter
  },

  CheckCircle: {
    filled: CheckCircle,
    outline: CheckCircleOutline
  },

  Shopping: {
    filled: Shopping,
    outline: ShoppingOutline
  },

  CashUsd: {
    filled: Cash,
    outline: Cash
  },

  CloseCircle: {
    filled: CloseCircle,
    outline: CloseCircleOutline
  },

  AlertCircle: {
    filled: AlertCircle,
    outline: AlertCircleOutline
  },

  Alert: {
    filled: Alert,
    outline: AlertOutline
  },

  ThumbUp: {
    filled: ThumbUp,
    outline: ThumbUpOutline
  },

  AccountOff: {
    filled: AccountOff,
    outline: AccountOffOutline
  },

  Menu: {
    filled: Menu,
    outline: Menu
  },

  Sale: {
    filled: Sale,
    outline: Sale
  },

  ContentSave: {
    filled: ContentSave,
    outline: ContentSaveOutline
  },

  ArrowRight: {
    filled: ArrowRightBold,
    outline: ArrowRight
  },

  ArrowLeft: {
    filled: ArrowLeftBold,
    outline: ArrowLeft
  },

  Pencil: {
    filled: Pencil,
    outline: PencilOutline
  },

  ClipboardList: {
    filled: ClipboardList,
    outline: ClipboardListOutline
  },

  Dolly: {
    filled: Dolly,
    outline: Dolly
  },

  FormatListBulletedSquare: {
    filled: FormatListBulletedSquare,
    outline: FormatListBulletedSquare
  },

  Eye: {
    filled: Eye,
    outline: EyeOutline
  },

  EyeOff: {
    filled: EyeOff,
    outline: EyeOffOutline
  },

  CarSide: {
    filled: CarSide,
    outline: CarSide
  },

  Delete: {
    filled: Delete,
    outline: DeleteOutline
  },

  Plus: {
    filled: PlusThick,
    outline: Plus
  },

  Minus: {
    filled: MinusThick,
    outline: Minus
  },

  Check: {
    filled: CheckBold,
    outline: Check
  },

  Lock: {
    filled: Lock,
    outline: LockOutline
  },

  LockOpenVariant: {
    filled: LockOpenVariant,
    outline: LockOpenVariantOutline
  },

  Cog: {
    filled: Cog,
    outline: CogOutline
  },

  Send: {
    filled: Send,
    outline: SendOutline
  },

  ChevronRight: {
    filled: ChevronRight,
    outline: ChevronRight
  },

  ChevronLeft: {
    filled: ChevronLeft,
    outline: ChevronLeft
  },

  ChevronUp: {
    filled: ChevronUp,
    outline: ChevronUp
  },

  ChevronDown: {
    filled: ChevronDown,
    outline: ChevronDown
  },

  DotsVertical: {
    filled: DotsVertical,
    outline: DotsVertical
  },

  KeyboardReturn: {
    filled: KeyboardReturn,
    outline: KeyboardReturn
  },

  FilterVariant: {
    filled: FilterVariant,
    outline: FilterVariant
  },

  CurrencyUsdOff: {
    filled: CurrencyUsdOff,
    outline: CurrencyUsdOff
  },

  CurrencyUsd: {
    filled: CurrencyUsd,
    outline: CurrencyUsd
  },

  CurrencyUsdCircle: {
    filled: CurrencyUsd,
    outline: CurrencyUsd
  },

  CashRegister: {
    filled: CashRegister,
    outline: CashRegister
  },

  Gift: {
    filled: Gift,
    outline: GiftOutline
  },

  GiftOpen: {
    filled: GiftOpen,
    outline: GiftOpenOutline
  },

  Download: {
    filled: Download,
    outline: DownloadOutline
  },

  Play: {
    filled: Play,
    outline: PlayOutline
  },

  LocationExit: {
    filled: LocationExit,
    outline: LocationExit
  },

  File: {
    filled: File,
    outline: FileOutline
  },

  Upload: {
    filled: Upload,
    outline: UploadOutline
  },

  FileUpload: {
    filled: FileUpload,
    outline: FileUploadOutline
  },

  CalendarCheck: {
    filled: CalendarCheck,
    outline: CalendarCheckOutline
  },

  CalendarMonth: {
    filled: CalendarMonth,
    outline: CalendarMonthOutline
  },

  ChartBox: {
    filled: ChartBox,
    outline: ChartBoxOutline
  },

  Calendar: {
    filled: Calendar,
    outline: CalendarOutline
  },

  ViewGrid: {
    filled: ViewGrid,
    outline: ViewGridOutline
  },

  CardAccountDetails: {
    filled: CardAccountDetails,
    outline: CardAccountDetailsOutline
  },

  Cake: {
    filled: Cake,
    outline: Cake
  },

  Email: {
    filled: Email,
    outline: EmailOutline
  },

  CellphoneIphone: {
    filled: Cellphone,
    outline: Cellphone
  },

  ListStatus: {
    filled: ListStatus,
    outline: ListStatus
  },

  Information: {
    filled: Information,
    outline: InformationOutline
  },

  Security: {
    filled: Security,
    outline: Security
  },

  Phone: {
    filled: Phone,
    outline: PhoneOutline
  },

  CheckboxMultipleMarkedCircle: {
    filled: CheckboxMultipleMarkedCircle,
    outline: CheckboxMultipleMarkedCircleOutline
  },

  CalendarPlus: {
    filled: CalendarPlus,
    outline: CalendarPlus
  },

  CalendarText: {
    filled: CalendarText,
    outline: CalendarTextOutline
  },

  TextBoxPlus: {
    filled: TextBoxPlus,
    outline: TextBoxPlusOutline
  },

  ArrowUp: {
    filled: ArrowUpThick,
    outline: ArrowUp
  },

  ArrowDown: {
    filled: ArrowDownThick,
    outline: ArrowDown
  },

  PageFirst: {
    filled: PageFirst,
    outline: PageFirst
  },

  PageLast: {
    filled: PageLast,
    outline: PageLast
  },

  PackageVariant: {
    filled: PackageVariant,
    outline: PackageVariant
  },

  PackageVariantClosed: {
    filled: PackageVariantClosed,
    outline: PackageVariantClosed
  },

  PackageVariantClosedMinus: {
    filled: PackageVariantClosedMinus,
    outline: PackageVariantClosedMinus
  },

  PackageVariantClosedPlus: {
    filled: PackageVariantClosedPlus,
    outline: PackageVariantClosedPlus
  },

  PackageVariantClosedRemove: {
    filled: PackageVariantClosedRemove,
    outline: PackageVariantClosedRemove
  },

  PackageVariantMinus: {
    filled: PackageVariantMinus,
    outline: PackageVariantMinus
  },

  PackageVariantPlus: {
    filled: PackageVariantPlus,
    outline: PackageVariantPlus
  },

  PackageVariantRemove: {
    filled: PackageVariantRemove,
    outline: PackageVariantRemove
  },

  Magnify: {
    filled: Magnify,
    outline: Magnify
  },

  CursorDefault: {
    filled: CursorDefault,
    outline: CursorDefaultOutline
  },

  CalendarRemove: {
    filled: CalendarRemove,
    outline: CalendarRemoveOutline
  },

  CalendarClock: {
    filled: CalendarClock,
    outline: CalendarClock
  },

  CalendarCursor: {
    filled: CalendarCursor,
    outline: CalendarCursor
  },

  CalendarEdit: {
    filled: CalendarEdit,
    outline: CalendarEdit
  },

  BellCheck: {
    filled: BellCheck,
    outline: BellCheckOutline
  },

  BellOff: {
    filled: BellOff,
    outline: BellOffOutline
  },

  Home: {
    filled: Home,
    outline: HomeOutline
  },

  PoundBox: {
    filled: PoundBox,
    outline: PoundBoxOutline
  },

  School: {
    filled: School,
    outline: SchoolOutline
  },

  FolderAccount: {
    filled: FolderAccount,
    outline: FolderAccountOutline
  },

  AccountGroup: {
    filled: AccountGroup,
    outline: AccountGroupOutline
  },

  AccountSupervisor: {
    filled: AccountSupervisor,
    outline: AccountSupervisorOutline
  },

  Notebook: {
    filled: Notebook,
    outline: NotebookOutline
  },

  Cart: {
    filled: Cart,
    outline: CartOutline
  },

  CartPlus: {
    filled: CartPlus,
    outline: CartPlus
  },

  Bell: {
    filled: Bell,
    outline: BellOutline
  },

  Circle: {
    filled: Circle,
    outline: CircleOutline
  },

  Certificate: {
    filled: Certificate,
    outline: CertificateOutline
  },

  KeyChainVariant: {
    filled: KeyChainVariant,
    outline: KeyChainVariant
  },

  Clock: {
    filled: Clock,
    outline: Clock
  },

  WeatherNight: {
    filled: WeatherNight,
    outline: WeatherNight
  },

  WeatherSunny: {
    filled: WeatherSunny,
    outline: WeatherSunny
  },

  MapClock: {
    filled: MapClock,
    outline: MapClockOutline
  },

  MapMarker: {
    filled: MapMarker,
    outline: MapMarkerOutline
  },

  MapMarkerRadius: {
    filled: MapMarkerRadius,
    outline: MapMarkerRadiusOutline
  },

  MapMarkerPlus: {
    filled: MapMarkerPlus,
    outline: MapMarkerPlusOutline
  },

  MapMarkerMultiple: {
    filled: MapMarkerMultiple,
    outline: MapMarkerMultipleOutline
  },

  CreditCard: {
    filled: CreditCard,
    outline: CreditCardOutline
  },

  Barcode: {
    filled: Barcode,
    outline: Barcode
  },

  Domain: {
    filled: Domain,
    outline: Domain
  },

  Facebook: {
    filled: Facebook,
    outline: Facebook
  },

  Instagram: {
    filled: Instagram,
    outline: Instagram
  },

  Whatsapp: {
    filled: Whatsapp,
    outline: Whatsapp
  },

  Youtube: {
    filled: Youtube,
    outline: Youtube
  },

  Twitter: {
    filled: Twitter,
    outline: Twitter
  },

  Google: {
    filled: Google,
    outline: Google
  },

  ContentCopy: {
    filled: ContentCopy,
    outline: ContentCopy
  },

  ContentPaste: {
    filled: ContentPaste,
    outline: ContentPaste
  }
}
*/

const Icon = (props) => {
  const { name, forceType, type } = props
  const theme = useTheme()
  const [Component, setComponent] = useState(null)
  const [finalProps, setFinalProps] = useState({})

  useEffect(() => {
    if (name in { ...mdiMaterialUi }) {
      const finalType = forceType ? type : 'outline'
      if (finalType === 'outline') {
        if (name + 'Outline' in { ...mdiMaterialUi }) {
          setComponent({ ...mdiMaterialUi }[name + 'Outline'])
        } else {
          setComponent({ ...mdiMaterialUi }[name])
        }
      } else {
        setComponent({ ...mdiMaterialUi }[name])
      }
    }

    const newProps = Object.assign({}, {}, props)
    if ('color' in newProps) {
      newProps.className = 'className' in newProps ? newProps.className : ''

      newProps.className +=
        newProps.color === 'primary'
          ? theme.palette.type === 'dark'
            ? 'color-app-black-text'
            : 'color-app-yellow-text'
          : theme.palette.type === 'dark'
          ? 'color-white-text'
          : 'color-app-black-text'
    }
    delete newProps['forceType']
    setFinalProps(newProps)
  }, [name])

  return Component ? <Component {...finalProps} /> : <mdiMaterialUi.Circle />
}

export default Icon
