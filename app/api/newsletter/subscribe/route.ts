import { NextResponse as Response } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const dc = process.env.MAILCHIMP_DC; // e.g., us21

    if (!apiKey || !audienceId || !dc) {
      return Response.json({ error: 'Server not configured' }, { status: 500 });
    }

    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

    const mcRes = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `apikey ${apiKey}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: 'pending',
      }),
      cache: 'no-store',
    });

    const data = await mcRes.json();

    if (mcRes.status === 400 && data?.title === 'Member Exists') {
      return Response.json({ ok: true, message: 'You are already subscribed.' });
    }

    if (!mcRes.ok) {
      return Response.json({ error: data?.detail || 'Subscription failed' }, { status: 400 });
    }

    return Response.json({ ok: true, message: 'Check your email to confirm subscription.' });
  } catch {
    return Response.json({ error: 'Unexpected error' }, { status: 500 });
  }
}


