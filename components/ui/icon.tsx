/* eslint-disable import/no-extraneous-dependencies */
import { BiHappyBeaming } from "react-icons/bi";
import { CiCoffeeCup } from "react-icons/ci";
import { FaStopwatch } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";
import { LuQrCode } from "react-icons/lu";
import { PiListDashesFill } from "react-icons/pi";
import { RiBeerLine } from "react-icons/ri";
import { VscDashboard } from "react-icons/vsc";

const iconMap = {
  coffee: CiCoffeeCup,
  qrcode: LuQrCode,
  happy: BiHappyBeaming,
  cycle: GrPowerCycle,
  list: PiListDashesFill,
  time: FaStopwatch,
  reporting: VscDashboard,
  calendar: FaRegCalendarCheck,
  beer: RiBeerLine,
};

export const Icon = ({
  icon,
  size = 32,
  className,
}: {
  icon: string;
  size?: 24 | 28 | 32 | 36;
  className?: string;
}) => {
  const MappedIcon = iconMap[icon as keyof typeof iconMap] ?? null;
  return <MappedIcon size={size} className={className} />;
};
