import React from "react";
import "../styles/policy.css";

function Policy() {
  return (
    <div className="policy-wrapper">
      <h1>Privacy Policy</h1>

      <p>
        At <strong>HolyField</strong>, we respect your privacy and are
        committed to protecting your personal information. This Privacy Policy
        outlines how we collect, use, and safeguard your data while using our
        last-mile delivery solutions and logistics software. By using our
        platform, you consent to the practices described in this policy.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Information:</strong> Your name, email address, phone
          number, billing details, and any other information you provide while
          creating an account or interacting with our platform.
        </li>
        <li>
          <strong>Usage Data:</strong> IP address, browser type, operating
          system, and browsing activity to improve your experience.
        </li>
        <li>
          <strong>Driver Location Data:</strong> Real-time location for delivery
          tracking, route optimization, and operations — even in the background.
        </li>
        <li>
          <strong>Cookies:</strong> Used for analytics and improving
          functionality.
        </li>
        <li>
          <strong>Error Monitoring Data:</strong> We use Sentry to collect:
          <ul>
            <li>Error details and stack traces</li>
            <li>Device type and OS version</li>
            <li>Browser information</li>
            <li>User actions before the error</li>
            <li>Session data related to the error</li>
          </ul>
          This data is used strictly for debugging and performance improvements
          — not marketing.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>
          To provide and improve our logistics management platform and services
        </li>
        <li>To communicate service updates, promotions, and support</li>
        <li>To analyze usage patterns and optimize performance</li>
        <li>For marketing, with your explicit consent</li>
      </ul>

      <h2>Data Protection</h2>
      <p>
        We use encryption and secure data storage to protect your information.
        While we take precautions, no method of transmission or storage online
        is completely secure.
      </p>

      <h2>Sharing Your Data</h2>
      <p>We do not sell your personal information. We may share it with:</p>
      <ul>
        <li>
          Service providers and partners (e.g., payment processors, hosting
          services)
        </li>
        <li>Law enforcement or regulatory bodies if required by law</li>
      </ul>

      <h2>Your Rights</h2>
      <ul>
        <li>Access, update, or delete your personal data</li>
        <li>Opt out of marketing communications anytime</li>
        <li>Request processing restrictions, subject to legal limitations</li>
      </ul>

      <h2>Cookies and Tracking</h2>
      <p>
        We use cookies and similar technologies to personalize content and
        analyze traffic. You can manage your cookie preferences through your
        browser settings.
      </p>

      <h2>Changes to Privacy Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Changes will appear on
        this page with the updated date. Please check back regularly to stay
        informed.
      </p>

      <h2>Contact Information</h2>
      <p>
        If you have questions or concerns about our Privacy Policy or how we
        handle your data, contact us at:
        <br />
        <strong>
          <a href="mailto:info@holyfield.com">info@holyfield.com </a>
        </strong>
      </p>
    </div>
  );
}

export default Policy;
