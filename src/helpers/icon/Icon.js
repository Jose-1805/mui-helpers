import React from 'react'
import './css/styles.css'
import { useTheme } from '@mui/material/styles'

import HelpRhombus from 'mdi-material-ui/HelpRhombus'
import HelpRhombusOutline from 'mdi-material-ui/HelpRhombusOutline'

import AccountMultiple from 'mdi-material-ui/AccountMultiple'
import AccountMultipleOutline from 'mdi-material-ui/AccountMultipleOutline'

import AccountPlus from 'mdi-material-ui/AccountPlus'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'

import AccountCircle from 'mdi-material-ui/AccountCircle'
import AccountCircleOutline from 'mdi-material-ui/AccountCircleOutline'

import Star from 'mdi-material-ui/Star'
import StarOutline from 'mdi-material-ui/StarOutline'

import Certificate from 'mdi-material-ui/Certificate'
import CertificateOutline from 'mdi-material-ui/CertificateOutline'

import KeyChainVariant from 'mdi-material-ui/KeyChainVariant'

import Clock from 'mdi-material-ui/Clock'

import WeatherNight from 'mdi-material-ui/WeatherNight'

import WeatherSunny from 'mdi-material-ui/WeatherSunny'

import MapClock from 'mdi-material-ui/MapClock'
import MapClockOutline from 'mdi-material-ui/MapClockOutline'

import MapMarker from 'mdi-material-ui/MapMarker'
import MapMarkerOutline from 'mdi-material-ui/MapMarkerOutline'

import MapMarkerRadius from 'mdi-material-ui/MapMarkerRadius'
import MapMarkerRadiusOutline from 'mdi-material-ui/MapMarkerRadiusOutline'

import MapMarkerPlus from 'mdi-material-ui/MapMarkerPlus'
import MapMarkerPlusOutline from 'mdi-material-ui/MapMarkerPlusOutline'

import MapMarkerMultiple from 'mdi-material-ui/MapMarkerMultiple'
import MapMarkerMultipleOutline from 'mdi-material-ui/MapMarkerMultipleOutline'

import CreditCard from 'mdi-material-ui/CreditCard'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'

import Barcode from 'mdi-material-ui/Barcode'

import Account from 'mdi-material-ui/Account'
import AccountOutline from 'mdi-material-ui/AccountOutline'

import Text from 'mdi-material-ui/Text'

import Printer from 'mdi-material-ui/Printer'

import CubeSend from 'mdi-material-ui/CubeSend'

import Cube from 'mdi-material-ui/Cube'
import CubeOutline from 'mdi-material-ui/CubeOutline'

import VanUtility from 'mdi-material-ui/VanUtility'

import Car from 'mdi-material-ui/Car'
import CarOutline from 'mdi-material-ui/CarOutline'

import CarCog from 'mdi-material-ui/CarCog'

import CarHatchback from 'mdi-material-ui/CarHatchback'

import Close from 'mdi-material-ui/Close'

import Counter from 'mdi-material-ui/Counter'

import CheckCircle from 'mdi-material-ui/CheckCircle'
import CheckCircleOutline from 'mdi-material-ui/CheckCircleOutline'

import Shopping from 'mdi-material-ui/Shopping'
import ShoppingOutline from 'mdi-material-ui/ShoppingOutline'

import Cash from 'mdi-material-ui/Cash'

import CloseCircle from 'mdi-material-ui/CloseCircle'
import CloseCircleOutline from 'mdi-material-ui/CloseCircleOutline'

import AlertCircle from 'mdi-material-ui/AlertCircle'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'

import Alert from 'mdi-material-ui/Alert'
import AlertOutline from 'mdi-material-ui/AlertOutline'

import ThumbUp from 'mdi-material-ui/ThumbUp'
import ThumbUpOutline from 'mdi-material-ui/ThumbUpOutline'

import AccountOff from 'mdi-material-ui/AccountOff'
import AccountOffOutline from 'mdi-material-ui/AccountOffOutline'

import Menu from 'mdi-material-ui/Menu'
import Sale from 'mdi-material-ui/Sale'

import ContentSave from 'mdi-material-ui/ContentSave'
import ContentSaveOutline from 'mdi-material-ui/ContentSaveOutline'

import ArrowRightBold from 'mdi-material-ui/ArrowRightBold'
import ArrowRight from 'mdi-material-ui/ArrowRight'

import ArrowLeftBold from 'mdi-material-ui/ArrowLeftBold'
import ArrowLeft from 'mdi-material-ui/ArrowLeft'

import Pencil from 'mdi-material-ui/Pencil'
import PencilOutline from 'mdi-material-ui/PencilOutline'

import ClipboardList from 'mdi-material-ui/ClipboardList'
import ClipboardListOutline from 'mdi-material-ui/ClipboardListOutline'

import Dolly from 'mdi-material-ui/Dolly'

import FormatListBulletedSquare from 'mdi-material-ui/FormatListBulletedSquare'

import Eye from 'mdi-material-ui/Eye'
import EyeOutline from 'mdi-material-ui/EyeOutline'

import EyeOff from 'mdi-material-ui/EyeOff'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

import CarSide from 'mdi-material-ui/CarSide'

import Delete from 'mdi-material-ui/Delete'
import DeleteOutline from 'mdi-material-ui/DeleteOutline'

import PlusThick from 'mdi-material-ui/PlusThick'
import Plus from 'mdi-material-ui/Plus'

import MinusThick from 'mdi-material-ui/MinusThick'
import Minus from 'mdi-material-ui/Minus'

import CheckBold from 'mdi-material-ui/CheckBold'
import Check from 'mdi-material-ui/Check'

import Lock from 'mdi-material-ui/Lock'
import LockOutline from 'mdi-material-ui/LockOutline'

import LockOpenVariant from 'mdi-material-ui/LockOpenVariant'
import LockOpenVariantOutline from 'mdi-material-ui/LockOpenVariantOutline'

import Cog from 'mdi-material-ui/Cog'
import CogOutline from 'mdi-material-ui/CogOutline'

import Send from 'mdi-material-ui/Send'
import SendOutline from 'mdi-material-ui/SendOutline'

import ChevronRight from 'mdi-material-ui/ChevronRight'

import ChevronLeft from 'mdi-material-ui/ChevronLeft'

import ChevronUp from 'mdi-material-ui/ChevronUp'

import ChevronDown from 'mdi-material-ui/ChevronDown'

import DotsVertical from 'mdi-material-ui/DotsVertical'

import KeyboardReturn from 'mdi-material-ui/KeyboardReturn'

import FilterVariant from 'mdi-material-ui/FilterVariant'

import CurrencyUsdOff from 'mdi-material-ui/CurrencyUsdOff'

import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'

import CashRegister from 'mdi-material-ui/CashRegister'

import Gift from 'mdi-material-ui/Gift'
import GiftOutline from 'mdi-material-ui/GiftOutline'

import GiftOpen from 'mdi-material-ui/GiftOpen'
import GiftOpenOutline from 'mdi-material-ui/GiftOpenOutline'

import Download from 'mdi-material-ui/Download'
import DownloadOutline from 'mdi-material-ui/DownloadOutline'

import Play from 'mdi-material-ui/Play'
import PlayOutline from 'mdi-material-ui/PlayOutline'

import LocationExit from 'mdi-material-ui/LocationExit'

import File from 'mdi-material-ui/File'
import FileOutline from 'mdi-material-ui/FileOutline'

import Upload from 'mdi-material-ui/Upload'
import UploadOutline from 'mdi-material-ui/UploadOutline'

import FileUpload from 'mdi-material-ui/FileUpload'
import FileUploadOutline from 'mdi-material-ui/FileUploadOutline'

import CalendarCheck from 'mdi-material-ui/CalendarCheck'
import CalendarCheckOutline from 'mdi-material-ui/CalendarCheckOutline'

import CalendarMonth from 'mdi-material-ui/CalendarMonth'
import CalendarMonthOutline from 'mdi-material-ui/CalendarMonthOutline'

import ChartBox from 'mdi-material-ui/ChartBox'
import ChartBoxOutline from 'mdi-material-ui/ChartBoxOutline'

import ViewGrid from 'mdi-material-ui/ViewGrid'
import ViewGridOutline from 'mdi-material-ui/ViewGridOutline'

import Calendar from 'mdi-material-ui/Calendar'
import CalendarOutline from 'mdi-material-ui/CalendarOutline'

import CardAccountDetails from 'mdi-material-ui/CardAccountDetails'
import CardAccountDetailsOutline from 'mdi-material-ui/CardAccountDetailsOutline'

import Cake from 'mdi-material-ui/Cake'

import Email from 'mdi-material-ui/Email'
import EmailOutline from 'mdi-material-ui/EmailOutline'

import Cellphone from 'mdi-material-ui/Cellphone'

import ListStatus from 'mdi-material-ui/ListStatus'

import Information from 'mdi-material-ui/Information'
import InformationOutline from 'mdi-material-ui/InformationOutline'

import Security from 'mdi-material-ui/Security'

import Phone from 'mdi-material-ui/Phone'
import PhoneOutline from 'mdi-material-ui/PhoneOutline'

import CheckboxMultipleMarkedCircle from 'mdi-material-ui/CheckboxMultipleMarkedCircle'
import CheckboxMultipleMarkedCircleOutline from 'mdi-material-ui/CheckboxMultipleMarkedCircleOutline'

import CalendarPlus from 'mdi-material-ui/CalendarPlus'

import CalendarText from 'mdi-material-ui/CalendarText'
import CalendarTextOutline from 'mdi-material-ui/CalendarTextOutline'

import TextBoxPlus from 'mdi-material-ui/TextBoxPlus'
import TextBoxPlusOutline from 'mdi-material-ui/TextBoxPlusOutline'

import ArrowUpThick from 'mdi-material-ui/ArrowUpThick'
import ArrowUp from 'mdi-material-ui/ArrowUp'

import ArrowDownThick from 'mdi-material-ui/ArrowDownThick'
import ArrowDown from 'mdi-material-ui/ArrowDown'

import PageFirst from 'mdi-material-ui/PageFirst'

import PageLast from 'mdi-material-ui/PageLast'

import PackageVariant from 'mdi-material-ui/PackageVariant'

import PackageVariantClosed from 'mdi-material-ui/PackageVariantClosed'

import Magnify from 'mdi-material-ui/Magnify'

import CursorDefault from 'mdi-material-ui/CursorDefault'
import CursorDefaultOutline from 'mdi-material-ui/CursorDefaultOutline'

import CalendarRemove from 'mdi-material-ui/CalendarRemove'
import CalendarRemoveOutline from 'mdi-material-ui/CalendarRemoveOutline'

import CalendarClock from 'mdi-material-ui/CalendarClock'

import CalendarCursor from 'mdi-material-ui/CalendarCursor'

import CalendarEdit from 'mdi-material-ui/CalendarEdit'

import BellCheck from 'mdi-material-ui/BellCheck'
import BellCheckOutline from 'mdi-material-ui/BellCheckOutline'

import BellOff from 'mdi-material-ui/BellOff'
import BellOffOutline from 'mdi-material-ui/BellOffOutline'

import Home from 'mdi-material-ui/Home'
import HomeOutline from 'mdi-material-ui/HomeOutline'

import PoundBox from 'mdi-material-ui/PoundBox'
import PoundBoxOutline from 'mdi-material-ui/PoundBoxOutline'

import School from 'mdi-material-ui/School'
import SchoolOutline from 'mdi-material-ui/SchoolOutline'

import FolderAccount from 'mdi-material-ui/FolderAccount'
import FolderAccountOutline from 'mdi-material-ui/FolderAccountOutline'

import AccountGroup from 'mdi-material-ui/AccountGroup'
import AccountGroupOutline from 'mdi-material-ui/AccountGroupOutline'

import AccountSupervisor from 'mdi-material-ui/AccountSupervisor'
import AccountSupervisorOutline from 'mdi-material-ui/AccountSupervisorOutline'

import Notebook from 'mdi-material-ui/Notebook'
import NotebookOutline from 'mdi-material-ui/NotebookOutline'

import Cart from 'mdi-material-ui/Cart'
import CartOutline from 'mdi-material-ui/CartOutline'
import CartPlus from 'mdi-material-ui/CartPlus'

import Bell from 'mdi-material-ui/Bell'
import BellOutline from 'mdi-material-ui/BellOutline'

import Circle from 'mdi-material-ui/Circle'
import CircleOutline from 'mdi-material-ui/CircleOutline'

import History from 'mdi-material-ui/History'

import Truck from 'mdi-material-ui/Truck'
import TruckOutline from 'mdi-material-ui/TruckOutline'

import TruckFast from 'mdi-material-ui/TruckFast'
import TruckFastOutline from 'mdi-material-ui/TruckFastOutline'

import TruckCheck from 'mdi-material-ui/TruckCheck'
import TruckCheckOutline from 'mdi-material-ui/TruckCheckOutline'

import TruckDelivery from 'mdi-material-ui/TruckDelivery'
import TruckDeliveryOutline from 'mdi-material-ui/TruckDeliveryOutline'

import TagMultiple from 'mdi-material-ui/TagMultiple'
import TagMultipleOutline from 'mdi-material-ui/TagMultipleOutline'

import TagPlus from 'mdi-material-ui/TagPlus'
import TagPlusOutline from 'mdi-material-ui/TagPlusOutline'

import Briefcase from 'mdi-material-ui/Briefcase'
import BriefcaseOutline from 'mdi-material-ui/BriefcaseOutline'

import RemoteDesktop from 'mdi-material-ui/RemoteDesktop'

import Store from 'mdi-material-ui/Store'
import StoreOutline from 'mdi-material-ui/StoreOutline'

import Repeat from 'mdi-material-ui/Repeat'

import SwapHorizontalCircle from 'mdi-material-ui/SwapHorizontalCircle'
import SwapHorizontalCircleOutline from 'mdi-material-ui/SwapHorizontalCircleOutline'

import CarBattery from 'mdi-material-ui/CarBattery'

import Restart from 'mdi-material-ui/Restart'

import Cancel from 'mdi-material-ui/Cancel'

import Cached from 'mdi-material-ui/Cached'

import MagnifyScan from 'mdi-material-ui/MagnifyScan'

import MagnifyPlus from 'mdi-material-ui/MagnifyPlus'
import MagnifyPlusOutline from 'mdi-material-ui/MagnifyPlusOutline'

import MagnifyMinus from 'mdi-material-ui/MagnifyMinus'
import MagnifyMinusOutline from 'mdi-material-ui/MagnifyMinusOutline'

import MagnifyClose from 'mdi-material-ui/MagnifyClose'
import MagnifyRemoveOutline from 'mdi-material-ui/MagnifyRemoveOutline'

import Oil from 'mdi-material-ui/Oil'

import RegisteredTrademark from 'mdi-material-ui/RegisteredTrademark'

import CircleDouble from 'mdi-material-ui/CircleDouble'

import BrightnessPercent from 'mdi-material-ui/BrightnessPercent'

import Percent from 'mdi-material-ui/Percent'
import PercentOutline from 'mdi-material-ui/PercentOutline'

import Domain from 'mdi-material-ui/Domain'

import Facebook from 'mdi-material-ui/Facebook'
import Youtube from 'mdi-material-ui/Youtube'
import Instagram from 'mdi-material-ui/Instagram'
import Whatsapp from 'mdi-material-ui/Whatsapp'
import Google from 'mdi-material-ui/Google'
import Twitter from 'mdi-material-ui/Twitter'
import ContentCopy from 'mdi-material-ui/ContentCopy'
import ContentPaste from 'mdi-material-ui/ContentPaste'

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

const Icon = (props) => {
  const { name, forceType, type } = props
  const theme = useTheme()
  let newProps = Object.assign({}, {}, props)
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

  //Se carga el componente deseado
  const IconComponent = icons[name][forceType ? type : 'outline']

  return <IconComponent {...newProps} />
}

export default Icon
