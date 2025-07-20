'use client'

import { FaUser, FaGift, FaWallet, FaHistory, FaUndo, FaComment, FaFileAlt, FaSignOutAlt } from 'react-icons/fa'

type Props = {
  active: string
  onChange: (tab: string) => void
}

const menuItems = [
  { icon: <FaUser />, label: 'Account Details' },
  { icon: <FaGift />, label: 'Invite & Cashback' },
  { icon: <FaWallet />, label: 'Wallet' },
  { icon: <FaHistory />, label: 'Purchase History' },
  { icon: <FaUndo />, label: 'Refund' },
  { icon: <FaComment />, label: 'Feedback' },
  { icon: <FaFileAlt />, label: 'Policy' },
  { icon: <FaSignOutAlt />, label: 'Logout' },
]

export default function Sidebar({ active, onChange }: Props) {
  return (
    <div className="h-screen w-16 bg-gray-100 border-r flex flex-col items-center py-4 space-y-6">
      {menuItems.map(item => (
        <button
          key={item.label}
          onClick={() => onChange(item.label)}
          title={item.label}
          className={`text-2xl p-3 rounded-full ${
            active === item.label ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'
          }`}
        >
          {item.icon}
        </button>
      ))}
    </div>
  )
}
