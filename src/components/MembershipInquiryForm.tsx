import { useEffect, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { programs } from '@/data/programs';
import { voltConfig, whatsappUrl } from '@/data/voltConfig';

type MemberType = 'new' | 'existing';

interface FormState {
  name: string;
  phone: string;
  program: string;
  memberType: MemberType;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  program?: string;
}

const initialForm: FormState = {
  name: '',
  phone: '',
  program: '',
  memberType: 'new',
  message: '',
};

export default function MembershipInquiryForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [confirming, setConfirming] = useState(false);
  const [searchParams] = useSearchParams();

  // Deep-link support: /#join?program=كاراتيه أطفال preselects the program.
  useEffect(() => {
    const program = searchParams.get('program');
    if (program && programs.some((p) => p.name === program)) {
      setForm((f) => ({ ...f, program }));
    }
  }, [searchParams]);

  const update = (patch: Partial<FormState>) => {
    setForm((f) => ({ ...f, ...patch }));
    setErrors((e) => ({
      ...e,
      ...(patch.name !== undefined ? { name: undefined } : {}),
      ...(patch.phone !== undefined ? { phone: undefined } : {}),
      ...(patch.program !== undefined ? { program: undefined } : {}),
    }));
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (form.name.trim().length < 2) next.name = 'اكتب اسمك من فضلك (حرفين على الأقل).';
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 8 || digits.length > 15) next.phone = 'اكتب رقم موبايل صحيح من فضلك.';
    if (!form.program) next.program = 'اختار البرنامج اللي مهتم بيه.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const openWhatsApp = () => {
    const memberLabel = form.memberType === 'new' ? 'عضو جديد' : 'عضو حالي';
    const lines = [
      'استفسار اشتراك — VOLT GYM',
      '------------------------',
      `الاسم: ${form.name.trim()}`,
      `رقم الموبايل: ${form.phone.trim()}`,
      `البرنامج المطلوب: ${form.program}`,
      `نوع العضوية: ${memberLabel}`,
    ];
    if (form.message.trim()) lines.push(`رسالة: ${form.message.trim()}`);
    window.open(whatsappUrl(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setConfirming(true);
  };

  return (
    <section id="join" className="scroll-mt-24 bg-volt-charcoal/40 py-20 lg:py-28">
      <div className="volt-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black sm:text-4xl">جاهز تبدأ؟</h2>
          <p className="mt-3 text-sm leading-relaxed text-volt-gray sm:text-base">
            سجّل بياناتك وهتلاقي رسالة واتساب جاهزة بكل تفاصيل استفسارك — ابعتها لفريق VOLT وهيردوا عليك.
          </p>
        </div>

        {confirming ? (
          /* Confirmation step — nothing is stored anywhere; the user sees exactly
             what will be sent before WhatsApp opens. */
          <div role="status" className="mx-auto mt-10 max-w-xl animate-fadeUp rounded-2xl border border-volt-line bg-volt-charcoal p-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={28} className="shrink-0 text-volt-red" aria-hidden="true" />
              <h3 className="text-lg font-extrabold">راجع بياناتك قبل الإرسال</h3>
            </div>
            <dl className="mt-6 space-y-3 rounded-xl bg-volt-black/60 p-5 text-sm">
              {[
                ['الاسم', form.name.trim()],
                ['رقم الموبايل', form.phone.trim()],
                ['البرنامج', form.program],
                ['نوع العضوية', form.memberType === 'new' ? 'عضو جديد' : 'عضو حالي'],
                ...(form.message.trim() ? [['رسالة', form.message.trim()] as [string, string]] : []),
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4">
                  <dt className="shrink-0 font-bold text-volt-gray">{label}</dt>
                  <dd className="text-end font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-volt-gray/80">
              هتتفتح رسالة واتساب جاهزة على رقم النادي ({voltConfig.phone}) — الاستفسار بيوصلكم مباشرة، ومفيش أي
              بيانات بتتخزن على الموقع.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={openWhatsApp} className="volt-btn-primary flex-1">
                <MessageCircle size={16} />
                أكمل الإرسال على واتساب
              </button>
              <button type="button" onClick={() => setConfirming(false)} className="volt-btn-outline flex-1">
                رجوع للتعديل
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mx-auto mt-10 max-w-xl">
            <div className="rounded-2xl border border-volt-line bg-volt-charcoal p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="inq-name" className="mb-1.5 block text-sm font-bold">
                    الاسم <span className="text-volt-red" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="inq-name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update({ name: e.target.value })}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'inq-name-err' : undefined}
                    placeholder="اسمك بالكامل"
                    className="volt-input"
                  />
                  {errors.name && (
                    <p id="inq-name-err" role="alert" className="volt-error">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="inq-phone" className="mb-1.5 block text-sm font-bold">
                    رقم الموبايل <span className="text-volt-red" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="inq-phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    dir="ltr"
                    value={form.phone}
                    onChange={(e) => update({ phone: e.target.value })}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'inq-phone-err' : undefined}
                    placeholder="01xxxxxxxxx"
                    className="volt-input text-end"
                  />
                  {errors.phone && (
                    <p id="inq-phone-err" role="alert" className="volt-error">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="inq-program" className="mb-1.5 block text-sm font-bold">
                    البرنامج المهتم بيه <span className="text-volt-red" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="inq-program"
                    value={form.program}
                    onChange={(e) => update({ program: e.target.value })}
                    aria-invalid={!!errors.program}
                    aria-describedby={errors.program ? 'inq-program-err' : undefined}
                    className="volt-input appearance-none"
                  >
                    <option value="" disabled>
                      اختار البرنامج...
                    </option>
                    {programs.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="مش متأكد — عايز أستشير">مش متأكد — عايز أستشير</option>
                  </select>
                  {errors.program && (
                    <p id="inq-program-err" role="alert" className="volt-error">{errors.program}</p>
                  )}
                </div>

                <div>
                  <span className="mb-1.5 block text-sm font-bold">نوع العضوية</span>
                  <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="نوع العضوية">
                    {(
                      [
                        ['new', 'عضو جديد'],
                        ['existing', 'عضو حالي'],
                      ] as [MemberType, string][]
                    ).map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        role="radio"
                        aria-checked={form.memberType === value}
                        onClick={() => update({ memberType: value })}
                        className={`rounded-lg border px-3 py-3 text-sm font-bold transition-colors ${
                          form.memberType === value
                            ? 'border-volt-red bg-volt-redSoft text-volt-red'
                            : 'border-volt-line bg-volt-black text-volt-gray hover:text-white'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="inq-message" className="mb-1.5 block text-sm font-bold">
                  رسالة إضافية <span className="font-normal text-volt-gray/70">(اختياري)</span>
                </label>
                <textarea
                  id="inq-message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => update({ message: e.target.value })}
                  placeholder="أي حاجة عايز تقولها للفريق — هدفك، توقيتك المناسب..."
                  className="volt-input resize-none"
                />
              </div>

              <button type="submit" className="volt-btn-primary mt-6 w-full">
                <MessageCircle size={16} />
                إرسال الاستفسار على واتساب
              </button>

              <p className="mt-4 text-center text-[11px] leading-relaxed text-volt-gray/70">
                الاستفسار بيتحول لرسالة واتساب على رقم النادي الرسمي — مفيش تسجيل بيانات على الموقع.
              </p>
            </div>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={`tel:${voltConfig.phoneIntl}`} className="volt-btn-outline">
                <Phone size={16} />
                اتصل بنا: {voltConfig.phone}
              </a>
              <Link to="/#contact" className="volt-btn-outline">
                بيانات التواصل والمكان
              </Link>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
