import { Resend } from "resend";
import Subscriber from "../models/subscriber.js";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value = "") => {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
};

const categoryLabels = {
    druto: "DRUTO Updates",
    industry: "Industry News",
    rules: "Rules & Regulations",
};

const createEmailHtml = (news, subscriber) => {
    const frontendUrl =
        process.env.FRONTEND_URL || "http://localhost:5173";

    const articleUrl = `${frontendUrl}/news/details/${news.slug}`;

    const unsubscribeUrl = `${frontendUrl}/unsubscribe/${subscriber.unsubscribeToken}`;

    const imageHtml = news.image
        ? `
      <img
        src="${escapeHtml(news.image)}"
        alt="${escapeHtml(news.title)}"
        style="
          width: 100%;
          max-height: 380px;
          object-fit: cover;
          border-radius: 18px;
          margin-bottom: 28px;
        "
      />
    `
        : "";

    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>${escapeHtml(news.title)}</title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background: #f5f0e6;
          font-family: Arial, Helvetica, sans-serif;
          color: #1f2937;
        "
      >
        <div style="padding: 32px 14px;">
          <div
            style="
              max-width: 680px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 24px;
              overflow: hidden;
              border: 1px solid #e7dfd2;
            "
          >
            <div
              style="
                background: #0f172a;
                padding: 24px 32px;
                text-align: center;
              "
            >
              <h2
                style="
                  color: #ffffff;
                  margin: 0;
                  font-size: 24px;
                "
              >
                DRUTO INDIA
              </h2>

              <p
                style="
                  color: #99f6e4;
                  margin: 8px 0 0;
                  font-size: 13px;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                "
              >
                ${escapeHtml(
        categoryLabels[news.category] || "Latest News",
    )}
              </p>
            </div>

            <div style="padding: 34px;">
              ${imageHtml}

              <h1
                style="
                  color: #0f172a;
                  font-size: 30px;
                  line-height: 1.3;
                  margin: 0 0 18px;
                "
              >
                ${escapeHtml(news.title)}
              </h1>

              <p
                style="
                  color: #4b5563;
                  font-size: 16px;
                  line-height: 1.8;
                  margin-bottom: 28px;
                "
              >
                ${escapeHtml(news.shortDescription)}
              </p>

              <a
                href="${articleUrl}"
                style="
                  display: inline-block;
                  background: #0f766e;
                  color: #ffffff;
                  text-decoration: none;
                  padding: 14px 24px;
                  border-radius: 999px;
                  font-weight: 700;
                "
              >
                Read Full Article
              </a>
            </div>

            <div
              style="
                background: #faf7f2;
                border-top: 1px solid #e7dfd2;
                padding: 24px 32px;
                text-align: center;
              "
            >
              <p
                style="
                  color: #6b7280;
                  font-size: 12px;
                  line-height: 1.7;
                  margin: 0;
                "
              >
                You received this email because you subscribed to
                DRUTO INDIA news.
              </p>

              <p style="margin: 10px 0 0;">
                <a
                  href="${unsubscribeUrl}"
                  style="
                    color: #0f766e;
                    font-size: 12px;
                    text-decoration: underline;
                  "
                >
                  Unsubscribe from news emails
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};

export const sendNewsToSubscribers = async (news) => {
    if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is missing");
        return;
    }

    const subscribers = await Subscriber.find({
        isActive: true,
    }).lean();

    if (subscribers.length === 0) {
        console.log("No active news subscribers found");
        return;
    }

    let successful = 0;
    let failed = 0;

    for (const subscriber of subscribers) {
        try {
            const articleUrl = `${process.env.FRONTEND_URL || "http://localhost:5173"
                }/news/details/${news.slug}`;

            const unsubscribeUrl = `${process.env.FRONTEND_URL || "http://localhost:5173"
                }/unsubscribe/${subscriber.unsubscribeToken}`;

            const { error } = await resend.emails.send({
                from:
                    process.env.EMAIL_FROM ||
                    "DRUTO INDIA <onboarding@resend.dev>",

                to: subscriber.email,

                subject: `${categoryLabels[news.category] || "Latest News"}: ${news.title
                    }`,

                html: createEmailHtml(news, subscriber),

                headers: {
                    "List-Unsubscribe": `<${unsubscribeUrl}>`,
                    "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
                },

                tags: [
                    {
                        name: "category",
                        value: news.category,
                    },
                ],
            });

            if (error) {
                throw new Error(error.message);
            }

            successful += 1;

            console.log(`News email sent to ${subscriber.email}`);
        } catch (error) {
            failed += 1;

            console.error(
                `Unable to send news email to ${subscriber.email}:`,
                error.message,
            );
        }
    }

    console.log({
        totalSubscribers: subscribers.length,
        successful,
        failed,
    });
};