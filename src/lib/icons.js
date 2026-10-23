import {
  Ban,
  BadgeCheck,
  Flag,
  Gem,
  HandHeart,
  Handshake,
  Heart,
  HeartHandshake,
  Image,
  LockKeyhole,
  MessagesSquare,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  UserPlus,
  UserRound,
  Users,
} from 'lucide-react'

// Lets content files refer to icons by name, e.g. icon: 'Gem'
export const iconMap = {
  Ban,
  BadgeCheck,
  Flag,
  Gem,
  HandHeart,
  Handshake,
  Heart,
  HeartHandshake,
  Image,
  LockKeyhole,
  MessagesSquare,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  UserPlus,
  UserRound,
  Users,
}

export const getIcon = (name) => iconMap[name] ?? Heart
