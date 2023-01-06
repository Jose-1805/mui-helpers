import React, { lazy, Suspense } from 'react'
import './css/styles.css'
import { useTheme } from '@mui/material/styles'

const HelpRhombus = lazy(() => import('mdi-material-ui/HelpRhombus'))
const HelpRhombusOutline = lazy(() =>
  import('mdi-material-ui/HelpRhombusOutline')
)

const AccountDetails = lazy(() => import('mdi-material-ui/AccountDetails'))
const AccountDetailsOutline = lazy(() =>
  import('mdi-material-ui/AccountDetailsOutline')
)

const AccountMultiple = lazy(() => import('mdi-material-ui/AccountMultiple'))
const AccountMultipleOutline = lazy(() =>
  import('mdi-material-ui/AccountMultipleOutline')
)

const AccountPlus = lazy(() => import('mdi-material-ui/AccountPlus'))
const AccountPlusOutline = lazy(() =>
  import('mdi-material-ui/AccountPlusOutline')
)

const AccountCircle = lazy(() => import('mdi-material-ui/AccountCircle'))
const AccountCircleOutline = lazy(() =>
  import('mdi-material-ui/AccountCircleOutline')
)

const Star = lazy(() => import('mdi-material-ui/Star'))
const StarOutline = lazy(() => import('mdi-material-ui/StarOutline'))

const Certificate = lazy(() => import('mdi-material-ui/Certificate'))
const CertificateOutline = lazy(() =>
  import('mdi-material-ui/CertificateOutline')
)

const KeyChainVariant = lazy(() => import('mdi-material-ui/KeyChainVariant'))

const Clock = lazy(() => import('mdi-material-ui/Clock'))

const WeatherNight = lazy(() => import('mdi-material-ui/WeatherNight'))

const WeatherSunny = lazy(() => import('mdi-material-ui/WeatherSunny'))

const MapClock = lazy(() => import('mdi-material-ui/MapClock'))
const MapClockOutline = lazy(() => import('mdi-material-ui/MapClockOutline'))

const MapMarker = lazy(() => import('mdi-material-ui/MapMarker'))
const MapMarkerOutline = lazy(() => import('mdi-material-ui/MapMarkerOutline'))

const MapMarkerRadius = lazy(() => import('mdi-material-ui/MapMarkerRadius'))
const MapMarkerRadiusOutline = lazy(() =>
  import('mdi-material-ui/MapMarkerRadiusOutline')
)

const MapMarkerPlus = lazy(() => import('mdi-material-ui/MapMarkerPlus'))
const MapMarkerPlusOutline = lazy(() =>
  import('mdi-material-ui/MapMarkerPlusOutline')
)

const MapMarkerMultiple = lazy(() =>
  import('mdi-material-ui/MapMarkerMultiple')
)
const MapMarkerMultipleOutline = lazy(() =>
  import('mdi-material-ui/MapMarkerMultipleOutline')
)

const CreditCard = lazy(() => import('mdi-material-ui/CreditCard'))
const CreditCardOutline = lazy(() =>
  import('mdi-material-ui/CreditCardOutline')
)

const Barcode = lazy(() => import('mdi-material-ui/Barcode'))

const Account = lazy(() => import('mdi-material-ui/Account'))
const AccountOutline = lazy(() => import('mdi-material-ui/AccountOutline'))

const Text = lazy(() => import('mdi-material-ui/Text'))

const Printer = lazy(() => import('mdi-material-ui/Printer'))

const CubeSend = lazy(() => import('mdi-material-ui/CubeSend'))

const Cube = lazy(() => import('mdi-material-ui/Cube'))
const CubeOutline = lazy(() => import('mdi-material-ui/CubeOutline'))

const VanUtility = lazy(() => import('mdi-material-ui/VanUtility'))

const Car = lazy(() => import('mdi-material-ui/Car'))
const CarOutline = lazy(() => import('mdi-material-ui/CarOutline'))

const CarCog = lazy(() => import('mdi-material-ui/CarCog'))

const CarHatchback = lazy(() => import('mdi-material-ui/CarHatchback'))

const Close = lazy(() => import('mdi-material-ui/Close'))

const Counter = lazy(() => import('mdi-material-ui/Counter'))

const CheckCircle = lazy(() => import('mdi-material-ui/CheckCircle'))
const CheckCircleOutline = lazy(() =>
  import('mdi-material-ui/CheckCircleOutline')
)

const Shopping = lazy(() => import('mdi-material-ui/Shopping'))
const ShoppingOutline = lazy(() => import('mdi-material-ui/ShoppingOutline'))

const Cash = lazy(() => import('mdi-material-ui/Cash'))

const CloseCircle = lazy(() => import('mdi-material-ui/CloseCircle'))
const CloseCircleOutline = lazy(() =>
  import('mdi-material-ui/CloseCircleOutline')
)

const AlertCircle = lazy(() => import('mdi-material-ui/AlertCircle'))
const AlertCircleOutline = lazy(() =>
  import('mdi-material-ui/AlertCircleOutline')
)

const Alert = lazy(() => import('mdi-material-ui/Alert'))
const AlertOutline = lazy(() => import('mdi-material-ui/AlertOutline'))

const ThumbUp = lazy(() => import('mdi-material-ui/ThumbUp'))
const ThumbUpOutline = lazy(() => import('mdi-material-ui/ThumbUpOutline'))

const AccountOff = lazy(() => import('mdi-material-ui/AccountOff'))
const AccountOffOutline = lazy(() =>
  import('mdi-material-ui/AccountOffOutline')
)

const Menu = lazy(() => import('mdi-material-ui/Menu'))
const Sale = lazy(() => import('mdi-material-ui/Sale'))

const ContentSave = lazy(() => import('mdi-material-ui/ContentSave'))
const ContentSaveOutline = lazy(() =>
  import('mdi-material-ui/ContentSaveOutline')
)

const ArrowRightBold = lazy(() => import('mdi-material-ui/ArrowRightBold'))
const ArrowRight = lazy(() => import('mdi-material-ui/ArrowRight'))

const ArrowLeftBold = lazy(() => import('mdi-material-ui/ArrowLeftBold'))
const ArrowLeft = lazy(() => import('mdi-material-ui/ArrowLeft'))

const Pencil = lazy(() => import('mdi-material-ui/Pencil'))
const PencilOutline = lazy(() => import('mdi-material-ui/PencilOutline'))

const ClipboardList = lazy(() => import('mdi-material-ui/ClipboardList'))
const ClipboardListOutline = lazy(() =>
  import('mdi-material-ui/ClipboardListOutline')
)

const Dolly = lazy(() => import('mdi-material-ui/Dolly'))

const FormatListBulletedSquare = lazy(() =>
  import('mdi-material-ui/FormatListBulletedSquare')
)

const Eye = lazy(() => import('mdi-material-ui/Eye'))
const EyeOutline = lazy(() => import('mdi-material-ui/EyeOutline'))

const EyeOff = lazy(() => import('mdi-material-ui/EyeOff'))
const EyeOffOutline = lazy(() => import('mdi-material-ui/EyeOffOutline'))

const CarSide = lazy(() => import('mdi-material-ui/CarSide'))

const Delete = lazy(() => import('mdi-material-ui/Delete'))
const DeleteOutline = lazy(() => import('mdi-material-ui/DeleteOutline'))

const PlusThick = lazy(() => import('mdi-material-ui/PlusThick'))
const Plus = lazy(() => import('mdi-material-ui/Plus'))

const MinusThick = lazy(() => import('mdi-material-ui/MinusThick'))
const Minus = lazy(() => import('mdi-material-ui/Minus'))

const CheckBold = lazy(() => import('mdi-material-ui/CheckBold'))
const Check = lazy(() => import('mdi-material-ui/Check'))

const Lock = lazy(() => import('mdi-material-ui/Lock'))
const LockOutline = lazy(() => import('mdi-material-ui/LockOutline'))

const LockOpenVariant = lazy(() => import('mdi-material-ui/LockOpenVariant'))
const LockOpenVariantOutline = lazy(() =>
  import('mdi-material-ui/LockOpenVariantOutline')
)

const Cog = lazy(() => import('mdi-material-ui/Cog'))
const CogOutline = lazy(() => import('mdi-material-ui/CogOutline'))

const Send = lazy(() => import('mdi-material-ui/Send'))
const SendOutline = lazy(() => import('mdi-material-ui/SendOutline'))

const ChevronRight = lazy(() => import('mdi-material-ui/ChevronRight'))

const ChevronLeft = lazy(() => import('mdi-material-ui/ChevronLeft'))

const ChevronUp = lazy(() => import('mdi-material-ui/ChevronUp'))

const ChevronDown = lazy(() => import('mdi-material-ui/ChevronDown'))

const DotsVertical = lazy(() => import('mdi-material-ui/DotsVertical'))

const KeyboardReturn = lazy(() => import('mdi-material-ui/KeyboardReturn'))

const FilterVariant = lazy(() => import('mdi-material-ui/FilterVariant'))

const CurrencyUsdOff = lazy(() => import('mdi-material-ui/CurrencyUsdOff'))

const CurrencyUsd = lazy(() => import('mdi-material-ui/CurrencyUsd'))

const CashRegister = lazy(() => import('mdi-material-ui/CashRegister'))

const Gift = lazy(() => import('mdi-material-ui/Gift'))
const GiftOutline = lazy(() => import('mdi-material-ui/GiftOutline'))

const GiftOpen = lazy(() => import('mdi-material-ui/GiftOpen'))
const GiftOpenOutline = lazy(() => import('mdi-material-ui/GiftOpenOutline'))

const Download = lazy(() => import('mdi-material-ui/Download'))
const DownloadOutline = lazy(() => import('mdi-material-ui/DownloadOutline'))

const Play = lazy(() => import('mdi-material-ui/Play'))
const PlayOutline = lazy(() => import('mdi-material-ui/PlayOutline'))

const LocationExit = lazy(() => import('mdi-material-ui/LocationExit'))

const File = lazy(() => import('mdi-material-ui/File'))
const FileOutline = lazy(() => import('mdi-material-ui/FileOutline'))

const Upload = lazy(() => import('mdi-material-ui/Upload'))
const UploadOutline = lazy(() => import('mdi-material-ui/UploadOutline'))

const FileUpload = lazy(() => import('mdi-material-ui/FileUpload'))
const FileUploadOutline = lazy(() =>
  import('mdi-material-ui/FileUploadOutline')
)

const CalendarCheck = lazy(() => import('mdi-material-ui/CalendarCheck'))
const CalendarCheckOutline = lazy(() =>
  import('mdi-material-ui/CalendarCheckOutline')
)

const CalendarMonth = lazy(() => import('mdi-material-ui/CalendarMonth'))
const CalendarMonthOutline = lazy(() =>
  import('mdi-material-ui/CalendarMonthOutline')
)

const ChartBox = lazy(() => import('mdi-material-ui/ChartBox'))
const ChartBoxOutline = lazy(() => import('mdi-material-ui/ChartBoxOutline'))

const ViewGrid = lazy(() => import('mdi-material-ui/ViewGrid'))
const ViewGridOutline = lazy(() => import('mdi-material-ui/ViewGridOutline'))

const Calendar = lazy(() => import('mdi-material-ui/Calendar'))
const CalendarOutline = lazy(() => import('mdi-material-ui/CalendarOutline'))

const CardAccountDetails = lazy(() =>
  import('mdi-material-ui/CardAccountDetails')
)
const CardAccountDetailsOutline = lazy(() =>
  import('mdi-material-ui/CardAccountDetailsOutline')
)

const Cake = lazy(() => import('mdi-material-ui/Cake'))

const Email = lazy(() => import('mdi-material-ui/Email'))
const EmailOutline = lazy(() => import('mdi-material-ui/EmailOutline'))

const Cellphone = lazy(() => import('mdi-material-ui/Cellphone'))

const PhoneCheck = lazy(() => import('mdi-material-ui/PhoneCheck'))
const PhoneCheckOutline = lazy(() =>
  import('mdi-material-ui/PhoneCheckOutline')
)

const At = lazy(() => import('mdi-material-ui/At'))

const ListStatus = lazy(() => import('mdi-material-ui/ListStatus'))

const Information = lazy(() => import('mdi-material-ui/Information'))
const InformationOutline = lazy(() =>
  import('mdi-material-ui/InformationOutline')
)

const Security = lazy(() => import('mdi-material-ui/Security'))

const Phone = lazy(() => import('mdi-material-ui/Phone'))
const PhoneOutline = lazy(() => import('mdi-material-ui/PhoneOutline'))

const CheckboxMultipleMarkedCircle = lazy(() =>
  import('mdi-material-ui/CheckboxMultipleMarkedCircle')
)
const CheckboxMultipleMarkedCircleOutline = lazy(() =>
  import('mdi-material-ui/CheckboxMultipleMarkedCircleOutline')
)

const CheckboxMarkedCircle = lazy(() =>
  import('mdi-material-ui/CheckboxMarkedCircle')
)
const CheckboxMarkedCircleOutline = lazy(() =>
  import('mdi-material-ui/CheckboxMarkedCircleOutline')
)

const CalendarPlus = lazy(() => import('mdi-material-ui/CalendarPlus'))

const CalendarText = lazy(() => import('mdi-material-ui/CalendarText'))
const CalendarTextOutline = lazy(() =>
  import('mdi-material-ui/CalendarTextOutline')
)

const TextBoxPlus = lazy(() => import('mdi-material-ui/TextBoxPlus'))
const TextBoxPlusOutline = lazy(() =>
  import('mdi-material-ui/TextBoxPlusOutline')
)

const ArrowUpThick = lazy(() => import('mdi-material-ui/ArrowUpThick'))
const ArrowUp = lazy(() => import('mdi-material-ui/ArrowUp'))

const ArrowDownThick = lazy(() => import('mdi-material-ui/ArrowDownThick'))
const ArrowDown = lazy(() => import('mdi-material-ui/ArrowDown'))

const PageFirst = lazy(() => import('mdi-material-ui/PageFirst'))

const PageLast = lazy(() => import('mdi-material-ui/PageLast'))

const PackageVariant = lazy(() => import('mdi-material-ui/PackageVariant'))

const PackageVariantClosed = lazy(() =>
  import('mdi-material-ui/PackageVariantClosed')
)

const PackageVariantClosedMinus = lazy(() =>
  import('mdi-material-ui/PackageVariantClosedMinus')
)

const PackageVariantClosedPlus = lazy(() =>
  import('mdi-material-ui/PackageVariantClosedPlus')
)

const PackageVariantClosedRemove = lazy(() =>
  import('mdi-material-ui/PackageVariantClosedRemove')
)

const PackageVariantMinus = lazy(() =>
  import('mdi-material-ui/PackageVariantMinus')
)

const PackageVariantPlus = lazy(() =>
  import('mdi-material-ui/PackageVariantPlus')
)

const PackageVariantRemove = lazy(() =>
  import('mdi-material-ui/PackageVariantRemove')
)

const Magnify = lazy(() => import('mdi-material-ui/Magnify'))

const CursorDefault = lazy(() => import('mdi-material-ui/CursorDefault'))
const CursorDefaultOutline = lazy(() =>
  import('mdi-material-ui/CursorDefaultOutline')
)

const CalendarRemove = lazy(() => import('mdi-material-ui/CalendarRemove'))
const CalendarRemoveOutline = lazy(() =>
  import('mdi-material-ui/CalendarRemoveOutline')
)

const CalendarClock = lazy(() => import('mdi-material-ui/CalendarClock'))

const CalendarCursor = lazy(() => import('mdi-material-ui/CalendarCursor'))

const CalendarEdit = lazy(() => import('mdi-material-ui/CalendarEdit'))

const BellCheck = lazy(() => import('mdi-material-ui/BellCheck'))
const BellCheckOutline = lazy(() => import('mdi-material-ui/BellCheckOutline'))

const BellOff = lazy(() => import('mdi-material-ui/BellOff'))
const BellOffOutline = lazy(() => import('mdi-material-ui/BellOffOutline'))

const Home = lazy(() => import('mdi-material-ui/Home'))
const HomeOutline = lazy(() => import('mdi-material-ui/HomeOutline'))

const PoundBox = lazy(() => import('mdi-material-ui/PoundBox'))
const PoundBoxOutline = lazy(() => import('mdi-material-ui/PoundBoxOutline'))

const School = lazy(() => import('mdi-material-ui/School'))
const SchoolOutline = lazy(() => import('mdi-material-ui/SchoolOutline'))

const FolderAccount = lazy(() => import('mdi-material-ui/FolderAccount'))
const FolderAccountOutline = lazy(() =>
  import('mdi-material-ui/FolderAccountOutline')
)

const FolderPound = lazy(() => import('mdi-material-ui/FolderPound'))
const FolderPoundOutline = lazy(() =>
  import('mdi-material-ui/FolderPoundOutline')
)

const AccountGroup = lazy(() => import('mdi-material-ui/AccountGroup'))
const AccountGroupOutline = lazy(() =>
  import('mdi-material-ui/AccountGroupOutline')
)

const AccountSupervisor = lazy(() =>
  import('mdi-material-ui/AccountSupervisor')
)
const AccountSupervisorOutline = lazy(() =>
  import('mdi-material-ui/AccountSupervisorOutline')
)

const Notebook = lazy(() => import('mdi-material-ui/Notebook'))
const NotebookOutline = lazy(() => import('mdi-material-ui/NotebookOutline'))

const Cart = lazy(() => import('mdi-material-ui/Cart'))
const CartOutline = lazy(() => import('mdi-material-ui/CartOutline'))
const CartPlus = lazy(() => import('mdi-material-ui/CartPlus'))

const Bell = lazy(() => import('mdi-material-ui/Bell'))
const BellOutline = lazy(() => import('mdi-material-ui/BellOutline'))

const Circle = lazy(() => import('mdi-material-ui/Circle'))
const CircleOutline = lazy(() => import('mdi-material-ui/CircleOutline'))

const History = lazy(() => import('mdi-material-ui/History'))

const Truck = lazy(() => import('mdi-material-ui/Truck'))
const TruckOutline = lazy(() => import('mdi-material-ui/TruckOutline'))

const TruckFast = lazy(() => import('mdi-material-ui/TruckFast'))
const TruckFastOutline = lazy(() => import('mdi-material-ui/TruckFastOutline'))

const TruckCheck = lazy(() => import('mdi-material-ui/TruckCheck'))
const TruckCheckOutline = lazy(() =>
  import('mdi-material-ui/TruckCheckOutline')
)

const TruckDelivery = lazy(() => import('mdi-material-ui/TruckDelivery'))
const TruckDeliveryOutline = lazy(() =>
  import('mdi-material-ui/TruckDeliveryOutline')
)

const TagMultiple = lazy(() => import('mdi-material-ui/TagMultiple'))
const TagMultipleOutline = lazy(() =>
  import('mdi-material-ui/TagMultipleOutline')
)

const TagPlus = lazy(() => import('mdi-material-ui/TagPlus'))
const TagPlusOutline = lazy(() => import('mdi-material-ui/TagPlusOutline'))

const Briefcase = lazy(() => import('mdi-material-ui/Briefcase'))
const BriefcaseOutline = lazy(() => import('mdi-material-ui/BriefcaseOutline'))

const RemoteDesktop = lazy(() => import('mdi-material-ui/RemoteDesktop'))

const Store = lazy(() => import('mdi-material-ui/Store'))
const StoreOutline = lazy(() => import('mdi-material-ui/StoreOutline'))

const Repeat = lazy(() => import('mdi-material-ui/Repeat'))

const SwapHorizontalCircle = lazy(() =>
  import('mdi-material-ui/SwapHorizontalCircle')
)
const SwapHorizontalCircleOutline = lazy(() =>
  import('mdi-material-ui/SwapHorizontalCircleOutline')
)

const CarBattery = lazy(() => import('mdi-material-ui/CarBattery'))

const Tire = lazy(() => import('mdi-material-ui/Tire'))

const Restart = lazy(() => import('mdi-material-ui/Restart'))

const Cancel = lazy(() => import('mdi-material-ui/Cancel'))

const Cached = lazy(() => import('mdi-material-ui/Cached'))

const MagnifyScan = lazy(() => import('mdi-material-ui/MagnifyScan'))

const MagnifyPlus = lazy(() => import('mdi-material-ui/MagnifyPlus'))
const MagnifyPlusOutline = lazy(() =>
  import('mdi-material-ui/MagnifyPlusOutline')
)

const MagnifyMinus = lazy(() => import('mdi-material-ui/MagnifyMinus'))
const MagnifyMinusOutline = lazy(() =>
  import('mdi-material-ui/MagnifyMinusOutline')
)

const MagnifyClose = lazy(() => import('mdi-material-ui/MagnifyClose'))
const MagnifyRemoveOutline = lazy(() =>
  import('mdi-material-ui/MagnifyRemoveOutline')
)

const Oil = lazy(() => import('mdi-material-ui/Oil'))

const RegisteredTrademark = lazy(() =>
  import('mdi-material-ui/RegisteredTrademark')
)

const CircleDouble = lazy(() => import('mdi-material-ui/CircleDouble'))

const BrightnessPercent = lazy(() =>
  import('mdi-material-ui/BrightnessPercent')
)

const Percent = lazy(() => import('mdi-material-ui/Percent'))
const PercentOutline = lazy(() => import('mdi-material-ui/PercentOutline'))

const Domain = lazy(() => import('mdi-material-ui/Domain'))

const Facebook = lazy(() => import('mdi-material-ui/Facebook'))
const Youtube = lazy(() => import('mdi-material-ui/Youtube'))
const Instagram = lazy(() => import('mdi-material-ui/Instagram'))
const Whatsapp = lazy(() => import('mdi-material-ui/Whatsapp'))
const Google = lazy(() => import('mdi-material-ui/Google'))
const Twitter = lazy(() => import('mdi-material-ui/Twitter'))
const ContentCopy = lazy(() => import('mdi-material-ui/ContentCopy'))
const ContentPaste = lazy(() => import('mdi-material-ui/ContentPaste'))

const ViewList = lazy(() => import('mdi-material-ui/ViewList'))
const ViewListOutline = lazy(() => import('mdi-material-ui/ViewListOutline'))

const icons = {
  HelpRhombus: {
    filled: HelpRhombus,
    outline: HelpRhombusOutline
  },

  AccountDetails: {
    filled: AccountDetails,
    outline: AccountDetailsOutline
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

  Tire: {
    filled: Tire,
    outline: Tire
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

  Cellphone: {
    filled: Cellphone,
    outline: Cellphone
  },

  PhoneCheck: {
    filled: PhoneCheck,
    outline: PhoneCheckOutline
  },

  At: {
    filled: At,
    outline: At
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

  CheckboxMarkedCircle: {
    filled: CheckboxMarkedCircle,
    outline: CheckboxMarkedCircleOutline
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

  FolderPound: {
    filled: FolderPound,
    outline: FolderPoundOutline
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
  },

  ViewList: {
    filled: ViewList,
    outline: ViewListOutline
  }
}

const Icon = (props) => {
  const { name, forceType, type } = props
  const theme = useTheme()
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
  delete newProps.forceType

  // Se carga el componente deseado
  const IconComponent = icons[name][forceType ? type : 'outline']

  return (
    <Suspense fallback={<p>*</p>}>
      <IconComponent {...newProps} />
    </Suspense>
  )
}

export default Icon
