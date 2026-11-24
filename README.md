# SLV WhatsApp Message Sender

A Next.js webpage for South India Devotional Tours. It sends WhatsApp Cloud API messages from the registered sender number **+1 555-313-6232**.

## Important setup before live sending

The webpage is built, but it cannot send live messages until the Meta credentials and account prerequisites are configured.

1. Obtain a Meta System User access token with `whatsapp_business_messaging` and `whatsapp_business_management` permissions, assigned to the correct app and WhatsApp account.
2. Add a payment method to the WhatsApp Business account. The current account check reported no payment method; Meta may accept a request without one but the recipient will most likely not receive a billable message.
3. Set the four environment variables shown in `.env.example` in your hosting provider. Do not expose `WHATSAPP_ACCESS_TOKEN` or `WHATSAPP_ADMIN_KEY` to the browser.
4. Use a currently supported Graph API version in `WHATSAPP_GRAPH_API_VERSION`.
5. Deploy the app to HTTPS.

## Run locally

```bash
cp .env.example .env.local
# Edit .env.local with real values. Never commit it.
npm install
npm run dev
```

Open http://localhost:3000.

## Message rules

- **Free-form text:** only deliverable during the 24-hour customer service window after the customer last messaged the business.
- **Approved template:** can be used outside the 24-hour window. The template must already be approved on the sender's WhatsApp account. The template form supports text body placeholders only.
- A successful API response means Meta accepted the request; it does not prove the message was delivered.

## Security notes

- The Meta access token is used only inside `app/api/send/route.ts`.
- The send endpoint requires a separate `WHATSAPP_ADMIN_KEY`.
- Do not publish this console publicly without adding user authentication, access control, rate limiting, and audit logging appropriate to your organization.
- Do not commit `.env.local` or share tokens in chat.

## Current WhatsApp account readiness

The connected account check for this sender reported:
- Sender number registered.
- No payment method configured.
- No System User token value supplied to this app yet; generate one in Meta Business Settings.
- Webhook configuration is not set up on the checked Meta app. Webhooks are not required just to submit outbound sends, but are needed for delivery/status events and inbound message events.
