import { Locale, offices } from "@/lib/content";

const copy: Record<Locale, { name: string; email: string; office: string; phone: string; reason: string; consent: string; submit: string; note: string }> = {
  es: {
    name: "Nombre y apellidos",
    email: "Correo electrónico",
    office: "Sede donde quieres que te atendamos",
    phone: "Teléfono",
    reason: "¿Cuál es el motivo de la consulta?",
    consent: "He leído y acepto la política de privacidad y el tratamiento de mis datos conforme al RGPD.",
    submit: "Enviar solicitud",
    note: "Formulario de demostración: en el sitio definitivo quedará conectado al correo del despacho.",
  },
  ca: {
    name: "Nom i cognoms",
    email: "Correu electrònic",
    office: "Seu on vols que t'atenguem",
    phone: "Telèfon",
    reason: "Quin és el motiu de la consulta?",
    consent: "He llegit i accepto la política de privacitat i el tractament de les meves dades d'acord amb el RGPD.",
    submit: "Enviar sol·licitud",
    note: "Formulari de demostració: al lloc definitiu quedarà connectat al correu del despatx.",
  },
  en: {
    name: "Full name",
    email: "Email address",
    office: "Office where you'd like to be attended",
    phone: "Phone",
    reason: "What is the reason for your enquiry?",
    consent: "I have read and accept the privacy policy and the processing of my data in accordance with the GDPR.",
    submit: "Send request",
    note: "Demo form: on the final site this will be wired to the firm's inbox.",
  },
};

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <form className="grid gap-4 rounded-sm border border-sea/10 bg-linen p-6 sm:p-8">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label={t.name} name="name" />
        <Field label={t.email} name="email" type="email" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">{t.office}</label>
          <select name="office" className="w-full rounded-sm border border-sea/20 bg-paper px-3.5 py-2.5 text-sm">
            <option>{offices.barcelona.name}</option>
            <option>{offices.roses.name}</option>
          </select>
        </div>
        <Field label={t.phone} name="phone" type="tel" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5">{t.reason}</label>
        <textarea name="reason" rows={4} className="w-full rounded-sm border border-sea/20 bg-paper px-3.5 py-2.5 text-sm" />
      </div>
      <label className="flex items-start gap-2 text-xs text-ink/70">
        <input type="checkbox" className="mt-0.5" />
        {t.consent}
      </label>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-sm bg-sea px-6 py-3 text-sm font-semibold text-paper hover:bg-sea-deep transition-colors w-fit"
      >
        {t.submit}
      </button>
      <p className="text-xs text-ink/40">{t.note}</p>
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input name={name} type={type} className="w-full rounded-sm border border-sea/20 bg-paper px-3.5 py-2.5 text-sm" />
    </div>
  );
}
