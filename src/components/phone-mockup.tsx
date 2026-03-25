import { ReactNode } from "react";

export type PhoneVariant = "iphone" | "galaxy";

interface Message {
  type: "incoming" | "outgoing";
  text: string | ReactNode;
  time: string;
}

interface WhatsAppChatProps {
  contactName: string;
  contactStatus?: string;
  messages: Message[];
  variant?: PhoneVariant;
}

function PhoneFrame({
  variant = "iphone",
  children,
}: {
  variant?: PhoneVariant;
  children: ReactNode;
}) {
  if (variant === "galaxy") {
    return (
      <div className="relative w-[280px] h-[580px] rounded-[38px] p-[8px] bg-gradient-to-br from-[#2d2d2d] via-[#1a1a1a] to-[#0a0a0a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.5)]">
        <div className="absolute top-[22px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#000] z-20" />
        <div className="w-full h-full rounded-[32px] overflow-hidden bg-[#0b141a] shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-[280px] h-[580px] rounded-[45px] p-[10px] bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0d0d0d] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.5)]">
      <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-20" />
      <div className="absolute right-[-2px] top-[120px] w-[3px] h-[60px] bg-[#2a2a2a] rounded-r-sm" />
      <div className="w-full h-full rounded-[38px] overflow-hidden bg-[#0b141a] shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]">
        {children}
      </div>
    </div>
  );
}

function WhatsAppHeader({
  contactName,
  contactStatus = "online",
}: {
  contactName: string;
  contactStatus?: string;
}) {
  return (
    <div className="bg-[#1f2c34] pt-12 pb-2 px-3 flex items-center gap-2">
      <svg className="w-4 h-4 text-white/60 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M15 18l-6-6 6-6" />
      </svg>
      <div className="w-7 h-7 rounded-full bg-[#2a3942] flex items-center justify-center flex-shrink-0">
        <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[0.7rem] text-white font-medium truncate">{contactName}</div>
        <div className="text-[0.5rem] text-white/50">{contactStatus}</div>
      </div>
      <div className="flex gap-3">
        <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
        <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isOutgoing = message.type === "outgoing";

  return (
    <div
      className={`max-w-[88%] px-2 py-1.5 relative mb-1.5 ${
        isOutgoing
          ? "ml-auto bg-[#005c4b] rounded-lg rounded-tr-none"
          : "bg-[#1f2c34] rounded-lg rounded-tl-none"
      }`}
    >
      <div className="text-[0.65rem] leading-[1.35] text-white/90 pr-10">
        {message.text}
      </div>
      <div className="absolute bottom-1 right-2 flex items-center gap-0.5">
        <span className="text-[0.5rem] text-white/40">{message.time}</span>
        {isOutgoing && (
          <span className="text-[0.5rem] text-[#53bdeb]">&#10003;&#10003;</span>
        )}
      </div>
    </div>
  );
}

export function WhatsAppChat({
  contactName,
  contactStatus,
  messages,
  variant = "iphone",
}: WhatsAppChatProps) {
  return (
    <PhoneFrame variant={variant}>
      <div className="flex flex-col h-full">
        <WhatsAppHeader contactName={contactName} contactStatus={contactStatus} />
        <div className="flex-1 overflow-y-auto px-2 py-3 space-y-1 bg-[#0b141a]">
          {messages.map((msg, i) => (
            <MessageBubble key={i} message={msg} />
          ))}
        </div>
        <div className="bg-[#1f2c34] px-2 py-2 flex items-center gap-2">
          <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5">
            <span className="text-[0.6rem] text-white/30">Type a message</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#00a884] flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

export { PhoneFrame };
