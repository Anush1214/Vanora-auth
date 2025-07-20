'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import AccountDetails from '@/components/profile/AccountDetails'
import WalletFAQ from '@/components/profile/WalletFAQ'
import FeedbackForm from '@/components/profile/FeedbackForm'
import PolicySummary from '@/components/profile/PolicySummary'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Account Details')
  const [showLogoutPopup, setShowLogoutPopup] = useState(false)
  const router = useRouter()

  const handleSidebarChange = (tab: string) => {
    if (tab === 'Logout') {
      setShowLogoutPopup(true)
    } else {
      setActiveTab(tab)
      setShowLogoutPopup(false)
    }
  }

  const handleLogout = () => {
    localStorage.clear()
    sessionStorage.clear()
    router.push('/login')
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'Account Details':
        return <AccountDetails />
      case 'Invite & Cashback':
        return <p>Share your referral link and earn cashback!</p>
      case 'Wallet':
        return <WalletFAQ />
      case 'Purchase History':
        return <p>You have no purchases yet.</p>
      case 'Refund':
        return <p>Refunds are processed in 5–7 business days.</p>
      case 'Feedback':
        return <FeedbackForm />
      case 'Policy':
        return <PolicySummary />
      default:
        return <p>Select a tab</p>
    }
  }

  return (
    <div className="flex">
      <Sidebar active={activeTab} onChange={handleSidebarChange} />

      <main className="flex-1 p-6 bg-gray-50 min-h-screen relative">
        <h1 className="text-2xl font-semibold mb-4">{activeTab}</h1>

        {/* Main Content or Embedded Logout Prompt */}
        {showLogoutPopup ? (
          <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow border text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-2">Confirm Logout</h2>
            <p className="text-gray-700 mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={handleLogout}
              >
                Yes, Logout
              </button>
              <button
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                onClick={() => setShowLogoutPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded shadow">{renderTab()}</div>
        )}
      </main>
    </div>
  )
}
