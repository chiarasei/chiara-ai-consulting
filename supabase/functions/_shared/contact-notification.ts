export const CONTACT_NOTIFICATION_TO = 'info@chiaraaiconsulting.se'

export const contactNotificationOptions = (submissionId: string, visitorEmail: string, data: Record<string, unknown>) => ({
  templateData: data,
  idempotencyKey: `contact-enquiry-${submissionId}`,
  replyTo: visitorEmail,
})