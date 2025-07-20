'use client'

export default function FeedbackForm() {
  return (
    <form className="space-y-4">
      <textarea placeholder="Enter your feedback..." className="w-full p-2 border rounded" />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
    </form>
  )
}
