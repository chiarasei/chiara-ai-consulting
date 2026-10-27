import * as React from 'npm:react@18.3.1'
import { Body, Container, Head, Heading, Html, Preview, Text } from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  company?: string
  need?: string
  budget?: string
  message?: string
}

const Email = ({ name, email, company, need, budget, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>A new enquiry for ChiaraAI Consulting</Preview>
    <Body style={{ backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif', color: '#0F1B2D' }}>
      <Container style={{ padding: '32px 24px', maxWidth: '600px' }}>
        <Text style={{ color: '#96794f' }}>ChiaraAI Consulting</Text>
        <Heading>New website enquiry</Heading>
        <Text><strong>Name:</strong> {name || 'Not provided'}</Text>
        <Text><strong>Email:</strong> {email || 'Not provided'}</Text>
        <Text><strong>Company:</strong> {company || 'Not provided'}</Text>
        <Text><strong>What they need:</strong> {need || 'Not provided'}</Text>
        <Text><strong>Budget:</strong> {budget || 'Not provided'}</Text>
        <Text><strong>Message:</strong></Text>
        <Text style={{ whiteSpace: 'pre-wrap' }}>{message || 'Not provided'}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'New enquiry from chiaraaiconsulting.se',
  displayName: 'Contact enquiry notification',
  to: 'info@chiaraaiconsulting.se',
  previewData: { name: 'Example visitor', email: 'visitor@example.com', company: 'Example company', need: 'New website', budget: 'Not provided', message: 'I would like to discuss a website for my business.' },
} satisfies TemplateEntry