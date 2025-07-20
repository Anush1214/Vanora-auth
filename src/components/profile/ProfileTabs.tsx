'use client'

import { useState } from 'react'
import WalletFAQ from './WalletFAQ'
import FeedbackForm from './FeedbackForm'
import PolicySummary from './PolicySummary'

const tabs = [
  'Account Details',
  'Invite & Cashback',
  'Wallet',
  'Purchase History',
  'Refund',
  'Feedback',
  'Policy'
]

export default function ProfileTabs() {
  const [active, setActive] = useState('Account Details')

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-2 flex-wrap mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors duration-200 ${
              active === tab
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-md shadow-sm border">
        {active === 'Account Details' && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Account Information</h2>
            <p>Name: <strong>Anush Rao</strong></p>
            <p>Email: <strong>anush@example.com</strong></p>
            <p>Phone: <strong>+91-9876543210</strong></p>
          </div>
        )}

        {active === 'Invite & Cashback' && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Referral Program</h2>
            <p>Share your link with friends and earn ₹50 cashback when they register.</p>
          </div>
        )}

        {active === 'Wallet' && <WalletFAQ />}
        {active === 'Purchase History' && (
          <p>You haven’t made any purchases yet.</p>
        )}
        {active === 'Refund' && (
          <p>Refunds will be processed within 5–7 business days after approval.</p>
        )}
        {active === 'Feedback' && <FeedbackForm />}
        {active === 'Policy' && <PolicySummary />}
      </div>
    </div>
  )
}
