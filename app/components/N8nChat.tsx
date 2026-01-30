"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    createChat?: (options: {
      webhookUrl: string;
      initialMessages?: string[];
      i18n?: Record<string, Record<string, string>>;
    }) => void;
  }
}

export default function N8nChat() {
  useEffect(() => {
    // Load the n8n chat styles
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    // Create custom styles to match Oak & Barrel design system
    const customStyles = document.createElement("style");
    customStyles.id = "n8n-chat-custom-styles";
    customStyles.textContent = `
      /* ============================================
         N8N CHAT WIDGET - OAK & BARREL THEME
         Based on design system tokens
         ============================================ */

      :root {
        /* Override n8n chat CSS variables with Oak & Barrel design tokens */

        /* Primary colors */
        --chat--color-primary: #F5A623;
        --chat--color-primary-shade-50: #E8940F;
        --chat--color-primary-shade-100: #D4850D;

        /* Secondary/neutral colors */
        --chat--color-secondary: #2D2A26;
        --chat--color-secondary-shade-50: #4A4541;

        /* Background colors */
        --chat--color-white: #FFFDF9;
        --chat--color-light: #F5F1EB;
        --chat--color-light-shade-50: #EDE8E0;

        /* Text colors */
        --chat--color-dark: #2D2A26;
        --chat--color-disabled: #8A8480;
        --chat--color-typing: #6B6560;

        /* Typography */
        --chat--font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        --chat--heading--font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;

        /* Sizing */
        --chat--border-radius: 16px;
        --chat--header--border-radius: 16px 16px 0 0;
        --chat--textarea--border-radius: 8px;
        --chat--message--border-radius: 16px;
        --chat--message--bot--border-radius: 4px 16px 16px 16px;
        --chat--message--user--border-radius: 16px 4px 16px 16px;

        /* Spacing */
        --chat--spacing: 16px;
        --chat--header--padding: 20px 24px;
        --chat--message--padding: 12px 16px;
        --chat--textarea--padding: 12px 16px;

        /* Shadows - using Oak & Barrel shadow tokens */
        --chat--window--box-shadow: 0 16px 48px rgba(45, 42, 38, 0.16);
        --chat--toggle--box-shadow: 0 4px 16px rgba(245, 166, 35, 0.25);
        --chat--toggle--box-shadow--hover: 0 8px 32px rgba(245, 166, 35, 0.3);

        /* Transitions */
        --chat--transition-duration: 250ms;
      }

      /* ============================================
         CHAT TOGGLE BUTTON (Launcher)
         ============================================ */

      .n8n-chat .chat-toggle {
        background: linear-gradient(135deg, #F5A623 0%, #E8940F 100%);
        border: none;
        box-shadow: var(--chat--toggle--box-shadow);
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      .n8n-chat .chat-toggle:hover {
        background: linear-gradient(135deg, #E8940F 0%, #D4850D 100%);
        box-shadow: var(--chat--toggle--box-shadow--hover);
        transform: scale(1.05);
      }

      .n8n-chat .chat-toggle:active {
        transform: scale(0.98);
      }

      .n8n-chat .chat-toggle svg {
        color: #2D2A26;
      }

      /* ============================================
         CHAT WINDOW
         ============================================ */

      .n8n-chat .chat-window {
        border: 1px solid #EDE8E0;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: var(--chat--window--box-shadow);
        font-family: var(--chat--font-family);
      }

      /* ============================================
         CHAT HEADER
         ============================================ */

      .n8n-chat .chat-header {
        background: linear-gradient(135deg, #2D2A26 0%, #4A4541 100%);
        border-bottom: none;
        padding: var(--chat--header--padding);
      }

      .n8n-chat .chat-header .chat-heading {
        font-family: var(--chat--heading--font-family);
        font-weight: 600;
        font-size: 1.25rem;
        color: #FFFDF9;
        letter-spacing: -0.01em;
      }

      .n8n-chat .chat-header .chat-subtitle {
        font-family: var(--chat--font-family);
        font-size: 0.875rem;
        color: rgba(255, 253, 249, 0.7);
        margin-top: 4px;
      }

      .n8n-chat .chat-header button {
        color: rgba(255, 253, 249, 0.8);
        transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      .n8n-chat .chat-header button:hover {
        color: #FFFDF9;
      }

      /* ============================================
         CHAT MESSAGES AREA
         ============================================ */

      .n8n-chat .chat-messages-list {
        background: #FFFDF9;
        padding: 24px;
      }

      /* Bot messages */
      .n8n-chat .chat-message.chat-message-from-bot {
        background: #F5F1EB;
        color: #2D2A26;
        border: 1px solid #EDE8E0;
        border-radius: var(--chat--message--bot--border-radius);
        padding: var(--chat--message--padding);
        font-size: 0.9375rem;
        line-height: 1.5;
        max-width: 85%;
        box-shadow: 0 1px 2px rgba(45, 42, 38, 0.05);
      }

      /* User messages */
      .n8n-chat .chat-message.chat-message-from-user {
        background: linear-gradient(135deg, #F5A623 0%, #E8940F 100%);
        color: #2D2A26;
        border: none;
        border-radius: var(--chat--message--user--border-radius);
        padding: var(--chat--message--padding);
        font-size: 0.9375rem;
        line-height: 1.5;
        font-weight: 500;
        max-width: 85%;
        box-shadow: 0 2px 8px rgba(245, 166, 35, 0.2);
      }

      /* Message timestamps */
      .n8n-chat .chat-message-time {
        font-size: 0.75rem;
        color: #8A8480;
        margin-top: 4px;
      }

      /* ============================================
         TYPING INDICATOR
         ============================================ */

      .n8n-chat .chat-typing {
        color: #6B6560;
        font-size: 0.875rem;
        font-style: italic;
      }

      .n8n-chat .chat-typing-indicator span {
        background: #F5A623;
      }

      /* ============================================
         CHAT INPUT AREA
         ============================================ */

      .n8n-chat .chat-input {
        background: #FFFDF9;
        border-top: 1px solid #EDE8E0;
        padding: 16px;
      }

      .n8n-chat .chat-input textarea,
      .n8n-chat .chat-input input {
        background: #FEFCF8;
        border: 1px solid #EDE8E0;
        border-radius: 8px;
        color: #2D2A26;
        font-family: var(--chat--font-family);
        font-size: 0.9375rem;
        padding: var(--chat--textarea--padding);
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      .n8n-chat .chat-input textarea::placeholder,
      .n8n-chat .chat-input input::placeholder {
        color: #8A8480;
      }

      .n8n-chat .chat-input textarea:focus,
      .n8n-chat .chat-input input:focus {
        border-color: #F5A623;
        box-shadow: 0 0 0 3px rgba(245, 166, 35, 0.15);
        outline: none;
      }

      /* Send button */
      .n8n-chat .chat-input button[type="submit"],
      .n8n-chat .chat-input .chat-send-button {
        background: #F5A623;
        color: #2D2A26;
        border: none;
        border-radius: 8px;
        padding: 10px 16px;
        font-family: var(--chat--font-family);
        font-weight: 500;
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 2px 8px rgba(245, 166, 35, 0.2);
      }

      .n8n-chat .chat-input button[type="submit"]:hover,
      .n8n-chat .chat-input .chat-send-button:hover {
        background: #E8940F;
        box-shadow: 0 4px 16px rgba(245, 166, 35, 0.25);
        transform: translateY(-1px);
      }

      .n8n-chat .chat-input button[type="submit"]:active,
      .n8n-chat .chat-input .chat-send-button:active {
        transform: scale(0.98);
      }

      .n8n-chat .chat-input button[type="submit"]:disabled,
      .n8n-chat .chat-input .chat-send-button:disabled {
        background: #EDE8E0;
        color: #8A8480;
        box-shadow: none;
        cursor: not-allowed;
      }

      /* ============================================
         NEW CONVERSATION BUTTON
         ============================================ */

      .n8n-chat .chat-new-session-button,
      .n8n-chat button.new-conversation {
        background: transparent;
        color: #2D2A26;
        border: 2px solid #2D2A26;
        border-radius: 8px;
        font-family: var(--chat--font-family);
        font-weight: 500;
        padding: 10px 20px;
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      .n8n-chat .chat-new-session-button:hover,
      .n8n-chat button.new-conversation:hover {
        background: #F5F1EB;
        border-color: #4A4541;
      }

      /* ============================================
         WELCOME/INITIAL STATE
         ============================================ */

      .n8n-chat .chat-initial-message {
        font-family: var(--chat--font-family);
        color: #4A4541;
        font-size: 0.9375rem;
        line-height: 1.6;
      }

      /* ============================================
         SCROLLBAR STYLING
         ============================================ */

      .n8n-chat .chat-messages-list::-webkit-scrollbar {
        width: 6px;
      }

      .n8n-chat .chat-messages-list::-webkit-scrollbar-track {
        background: transparent;
      }

      .n8n-chat .chat-messages-list::-webkit-scrollbar-thumb {
        background: #EDE8E0;
        border-radius: 3px;
      }

      .n8n-chat .chat-messages-list::-webkit-scrollbar-thumb:hover {
        background: #D4D0C9;
      }

      /* ============================================
         LINKS IN MESSAGES
         ============================================ */

      .n8n-chat .chat-message a {
        color: #E8940F;
        text-decoration: underline;
        text-underline-offset: 2px;
        transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      .n8n-chat .chat-message a:hover {
        color: #F5A623;
      }

      /* ============================================
         ANIMATIONS
         ============================================ */

      .n8n-chat .chat-window {
        animation: oakBarrelSlideIn 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      @keyframes oakBarrelSlideIn {
        from {
          opacity: 0;
          transform: translateY(16px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      .n8n-chat .chat-message {
        animation: oakBarrelFadeIn 200ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      @keyframes oakBarrelFadeIn {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* ============================================
         REDUCED MOTION
         ============================================ */

      @media (prefers-reduced-motion: reduce) {
        .n8n-chat .chat-window,
        .n8n-chat .chat-message,
        .n8n-chat .chat-toggle {
          animation: none;
          transition: none;
        }
      }

      /* ============================================
         FOCUS STATES (Accessibility)
         ============================================ */

      .n8n-chat button:focus-visible,
      .n8n-chat textarea:focus-visible,
      .n8n-chat input:focus-visible {
        outline: 2px solid #F5A623;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(customStyles);

    // Load the n8n chat script
    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://tonukova.app.n8n.cloud/webhook/696a8d25-9d6c-407c-b027-5f1fc503d832/chat',
        initialMessages: [
          'Welcome to Oak & Barrel!',
          "I'm here to help with reservations, menu questions, or anything else about our restaurant."
        ],
        i18n: {
          en: {
            title: 'Oak & Barrel',
            subtitle: 'How may we assist you today?',
            inputPlaceholder: 'Type your message...',
            getStarted: 'New Conversation',
            closeButtonTooltip: 'Close chat'
          }
        }
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      const customStyleEl = document.getElementById("n8n-chat-custom-styles");
      if (customStyleEl) {
        document.head.removeChild(customStyleEl);
      }
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
