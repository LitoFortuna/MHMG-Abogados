"use client";

import { useState } from "react";
import type { Locale } from "@/lib/content";
import { tool } from "@/lib/copy";

export type ToolTopic = { id: string; label: string; services: string[] };

export type ToolOffice = {
  name: string;
  address: string;
  postalCode: string;
  city: string;
  phone: string;
  phoneDisplay: string;
};

type Where = "barcelona" | "roses" | "video";

export default function ContactTool({
  locale,
  topics,
  barcelona,
  roses,
  whatsapp,
  email,
}: {
  locale: Locale;
  topics: ToolTopic[];
  barcelona: ToolOffice;
  roses: ToolOffice;
  whatsapp: string;
  email: string;
}) {
  const t = tool[locale];
  const [topicId, setTopicId] = useState("");
  const [where, setWhere] = useState<Where>("barcelona");

  const topic = topics.find((x) => x.id === topicId);
  const topicLabel = topicId === "otro" ? t.topicOther.toLowerCase() : topic ? topic.label.toLowerCase() : "";
  const subject = topicLabel || t.topicOther.toLowerCase();
  const whereText = t.whereInline[where];
  const office = where === "roses" ? roses : barcelona;

  const waHref = `https://wa.me/${whatsapp.replace("+", "")}?text=${encodeURIComponent(t.waMessage(subject, whereText))}`;
  const mailHref = `mailto:${email}?subject=${encodeURIComponent(t.mailSubject(subject))}&body=${encodeURIComponent(
    t.mailBody(subject, whereText)
  )}`;

  const choices: { value: Where; label: string }[] = [
    { value: "barcelona", label: t.whereBarcelona },
    { value: "roses", label: t.whereRoses },
    { value: "video", label: t.whereVideo },
  ];

  return (
    <div className="tool">
      <div className="tool__field" data-reveal="row">
        <label htmlFor="tool-topic">{t.topicLabel}</label>
        <select id="tool-topic" value={topicId} onChange={(e) => setTopicId(e.target.value)}>
          <option value="">{t.topicPlaceholder}</option>
          {topics.map((x) => (
            <option key={x.id} value={x.id}>
              {x.label}
            </option>
          ))}
          <option value="otro">{t.topicOther}</option>
        </select>
      </div>

      <fieldset className="tool__field" data-reveal="row" style={{ "--i": 1 } as React.CSSProperties}>
        <legend>{t.whereLabel}</legend>
        <div className="tool__choices">
          {choices.map((c) => (
            <label key={c.value}>
              <input
                type="radio"
                name="tool-where"
                value={c.value}
                checked={where === c.value}
                onChange={() => setWhere(c.value)}
              />
              <span>{c.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="tool__result" aria-live="polite" data-reveal="row" style={{ "--i": 2 } as React.CSSProperties}>
        {topic && topic.services.length > 0 ? (
          <>
            <h3>{t.topicTitle}</h3>
            <ul>
              {topic.services.slice(0, 5).map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h3>{topicId === "otro" ? t.topicOther : t.emptyTitle}</h3>
            {topicId === "" && <p>{t.emptyText}</p>}
          </>
        )}
        <p>
          {where === "video" ? (
            <strong>{t.whereVideo}</strong>
          ) : (
            <>
              {t.whereAt}{" "}
              <strong>
                {office.address}, {office.postalCode} {office.city}
              </strong>
            </>
          )}
        </p>
      </div>

      <div className="tool__actions" data-reveal="row" style={{ "--i": 3 } as React.CSSProperties}>
        <a className="btn" href={waHref} target="_blank" rel="noopener">
          {t.whatsapp}
        </a>
        <div className="tool__alt">
          <a className="link" href={mailHref}>
            {t.email}
          </a>
          <a className="link" href={`tel:${office.phone}`}>
            {t.call} {office.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
