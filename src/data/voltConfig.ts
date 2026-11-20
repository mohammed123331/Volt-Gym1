/**
 * VOLT GYM — بيانات النادي الأساسية
 * ------------------------------------------------------------------
 * كل بيانات التواصل والموقع هنا في مكان واحد.
 *Future integration note: when the Phase-2 admin dashboard lands,
 * this config moves to a database table; the UI reads from `voltConfig`
 * today, so only the data source changes — no redesign needed.
 */

export const voltConfig = {
  name: 'VOLT GYM',
  slogan: 'طلّع البطل اللي جواك',
  heroHeadline: 'طلّع البطل اللي جواك',
  heroSubtext:
    'ابدأ رحلتك نحو جسم أقوى ولياقة أفضل. في VOLT GYM هتلاقي المكان اللي يساعدك تطور نفسك خطوة بخطوة.',

  phone: '01551454228',
  phoneIntl: '+201551454228',
  whatsapp: '201551454228',

  facebook: 'https://www.facebook.com/profile.php?id=61594104516117',

  addressShort: 'سوهاج — الزهراء، شارع الكرنك',
  addressFull:
    'الزهراء – شارع الكرنك، المتفرع من شارع التحرير، أسفل كشري هند، سوهاج، مصر',

  // Verbatim address query — opens the exact location in Google Maps.
  mapsQuery:
    'VOLT GYM, Al-Zahraa, Karnak Street off Tahrir Street, below Koshary Hend, Sohag, Egypt',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=VOLT+GYM+Sohag+Al-Zahraa+Karnak+Street',

  // Operating hours intentionally NOT published — pending owner confirmation.
  hoursConfirmed: false,

  assets: {
    logo: '/images/volt-gym/logo.png',
    heroVideo: '/images/volt-gym/hero.mp4',
    heroPoster: '/images/volt-gym/hero-poster.jpg',
  },
} as const;

/** Build a WhatsApp chat opener with a pre-filled Arabic message. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${voltConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Navigate to the homepage membership section with an optional preselected program.
 *  Object form so react-router keeps the query readable by the form (useSearchParams). */
export function membershipLink(
  program?: string
): { pathname: string; search?: string; hash: string } {
  return program
    ? { pathname: '/', search: `?program=${encodeURIComponent(program)}`, hash: '#join' }
    : { pathname: '/', hash: '#join' };
}
