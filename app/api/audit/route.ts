import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('SERVER ERROR: NEXT_PUBLIC_N8N_WEBHOOK_URL is missing');
      return NextResponse.json({ error: 'Webhook URL not configured' }, { status: 500 });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Webhook error:', response.status, errorText);
      return NextResponse.json({ error: 'Failed to send data to webhook' }, { status: response.status });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Audit submission API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
