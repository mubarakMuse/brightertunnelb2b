import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      company_name, 
      contact_name, 
      email, 
      phone, 
      message, 
      candidate_id 
    } = body;

    // Validate required fields
    if (!company_name || !contact_name || !email || !message || !candidate_id) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get candidate details
    const { data: candidate, error: candidateError } = await supabase
      .from('candidates')
      .select('*')
      .eq('id', candidate_id)
      .single();

    if (candidateError || !candidate) {
      return NextResponse.json(
        { error: 'Candidate not found' },
        { status: 404 }
      );
    }

    // Save inquiry to database (create an inquiries table)
    const { data: inquiry, error: inquiryError } = await supabase
      .from('candidate_inquiries')
      .insert([{
        candidate_id,
        company_name,
        contact_name,
        email,
        phone,
        message,
        status: 'new',
        created_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (inquiryError) {
      console.error('Error saving inquiry:', inquiryError);
      // Continue even if saving fails - we still want to send the email
    }

    // Prepare email content
    const emailSubject = `New Candidate Inquiry: ${candidate.first_name} ${candidate.last_name}`;
    
    const emailContent = `
New candidate inquiry received!

Candidate Details:
- Name: ${candidate.first_name} ${candidate.last_name}
- Experience: ${candidate.yoe} years
- Location: ${candidate.current_location}
- Overall Score: ${candidate.overall_score}/10
- Skills: ${candidate.programming_languages?.join(', ') || 'Not specified'}

Company Details:
- Company: ${company_name}
- Contact: ${contact_name}
- Email: ${email}
- Phone: ${phone || 'Not provided'}

Message:
${message}

---
This inquiry was sent from your candidate portal.
Inquiry ID: ${inquiry?.id || 'N/A'}
    `;

    // Send email using your existing email service
    // You can use Mailgun, SendGrid, or any other email service
    // For now, we'll just log it and return success
    
    console.log('New candidate inquiry:', {
      candidate: `${candidate.first_name} ${candidate.last_name}`,
      company: company_name,
      contact: contact_name,
      email: email,
      message: message
    });

    // TODO: Implement actual email sending
    // Example with Mailgun (you already have this set up):
    /*
    const mailgun = require('mailgun-js')({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN
    });

    const emailData = {
      from: 'noreply@brightertunnel.com',
      to: 'mubarak@brightertunnel.com', // Your email
      subject: emailSubject,
      text: emailContent
    };

    await mailgun.messages().send(emailData);
    */

    // Send confirmation email to the company
    const confirmationEmailContent = `
Hi ${contact_name},

Thank you for your interest in ${candidate.first_name} ${candidate.last_name}!

We've received your inquiry and will get back to you within 24 hours with more details about this candidate.

Here's a summary of what you requested:
- Candidate: ${candidate.first_name} ${candidate.last_name}
- Your message: ${message}

We'll be in touch soon!

Best regards,
The Brighter Tunnel Team
    `;

    // TODO: Send confirmation email to the company
    /*
    const confirmationEmailData = {
      from: 'mubarak@brightertunnel.com',
      to: email,
      subject: 'Thank you for your candidate inquiry',
      text: confirmationEmailContent
    };

    await mailgun.messages().send(confirmationEmailData);
    */

    return NextResponse.json({
      success: true,
      message: 'Inquiry sent successfully',
      inquiry_id: inquiry?.id
    });

  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}



