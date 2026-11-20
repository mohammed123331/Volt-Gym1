import { Clock, Facebook, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { voltConfig, whatsappUrl } from '@/data/voltConfig';

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-volt-black py-20 lg:py-28">
      <div className="volt-container">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* Address + actions */}
          <div className="flex flex-col justify-center rounded-2xl border border-volt-line bg-volt-charcoal p-8 sm:p-10">
            <span className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-widest text-volt-red">
              <span className="h-px w-6 bg-volt-red" aria-hidden="true" />
              تواصل معنا
            </span>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">تعلمنا في قلب سوهاج</h2>

            <address className="mt-6 flex items-start gap-3 not-italic leading-relaxed text-volt-gray">
              <MapPin size={20} className="mt-1 shrink-0 text-volt-red" aria-hidden="true" />
              <span>
                <strong className="text-white">VOLT GYM</strong>
                <br />
                {voltConfig.addressFull}
              </span>
            </address>

            <p className="mt-4 flex items-center gap-3 text-volt-gray">
              <Phone size={18} className="shrink-0 text-volt-red" aria-hidden="true" />
              <span dir="ltr" className="font-display text-lg font-semibold tracking-wide text-white">
                {voltConfig.phone}
              </span>
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-volt-line bg-volt-black/50 p-4">
              <Clock size={18} className="mt-0.5 shrink-0 text-volt-gray" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-volt-gray">
                <strong className="text-white">مواعيد العمل:</strong> هتتنشر هنا بعد اعتمادها رسميًا — اسألنا على
                واتساب عن المواعيد المتاحة دلوقتي.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <a href={`tel:${voltConfig.phoneIntl}`} className="volt-btn-primary">
                <Phone size={16} />
                اتصل بينا
              </a>
              <a
                href={whatsappUrl('السلام عليكم، عايز أستفسر عن VOLT GYM.')}
                target="_blank"
                rel="noopener noreferrer"
                className="volt-btn-outline"
              >
                <MessageCircle size={16} />
                واتساب
              </a>
              <a href={voltConfig.facebook} target="_blank" rel="noopener noreferrer" className="volt-btn-outline">
                <Facebook size={16} />
                صفحة فيسبوك
              </a>
              <a
                href={voltConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="volt-btn-outline"
              >
                <Navigation size={16} />
                افتح في خرائط جوجل
              </a>
            </div>
          </div>

          {/* Map — embedded location lookup for the verified address */}
          <div className="min-h-[320px] overflow-hidden rounded-2xl border border-volt-line lg:min-h-0">
            <iframe
              title="موقع VOLT GYM على خريطة جوجل — سوهاج، الزهراء، شارع الكرنك"
              src={`https://www.google.com/maps?q=${encodeURIComponent(voltConfig.mapsQuery)}&output=embed`}
              className="h-full min-h-[320px] w-full grayscale-[35%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
