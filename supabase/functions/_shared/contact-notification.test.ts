import { describe, expect, it } from 'vitest'
import { CONTACT_NOTIFICATION_TO, contactNotificationOptions } from './contact-notification'

describe('Contact notification routing', () => {
  it('always sends the notification to the business mailbox', () => {
    expect(CONTACT_NOTIFICATION_TO).toBe('info@chiaraaiconsulting.se')
  })
  it('sets Reply to to the person who wrote', () => {
    expect(contactNotificationOptions('123', 'person@example.com', {}).replyTo).toBe('person@example.com')
  })
  it('includes all enquiry fields in the email data', () => {
    const data = { name: 'Test person', email: 'person@example.com', company: 'Test company', need: 'New website', budget: '15 000 to 50 000 kr', message: 'Test enquiry' }
    expect(contactNotificationOptions('123', data.email, data).templateData).toEqual(data)
  })
})