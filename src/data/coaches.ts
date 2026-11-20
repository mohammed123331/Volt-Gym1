export interface CoachAttendance {
  days?: string;
  time?: string;
  label: string;
}

export interface Coach {
  slug: string;
  name: string;
  intro: string;
  specialties: string[];
  classes: string[];
  photo: string;
  photoAlt: string;
  approved: true;
  attendance?: CoachAttendance;
  karate?: {
    age: string;
    schedule: string;
    fee: string;
    details: string[];
  };
}

export const coaches: Coach[] = [
  {
    slug: 'mohamed-elmesawy',
    name: 'كابتن محمد المساوي',
    intro: 'متواجد في VOLT GYM خلال الفترة الصباحية في الأيام المحددة.',
    specialties: [],
    classes: [],
    photo: '',
    photoAlt: 'كابتن محمد المساوي — VOLT GYM',
    approved: true,
    attendance: { days: 'السبت، الاثنين، الأربعاء', time: 'من 10 صباحًا إلى 4 عصرًا', label: 'متواجد في الفترة الصباحية' },
  },
  {
    slug: 'maryam-ahmed',
    name: 'كابتن مريم أحمد',
    intro: 'مدربة كلاس الرقص الشرقي في VOLT GYM.',
    specialties: ['الرقص الشرقي'],
    classes: ['الرقص الشرقي'],
    photo: '',
    photoAlt: 'كابتن مريم أحمد — VOLT GYM',
    approved: true,
  },
  {
    slug: 'roaa',
    name: 'كابتن رؤى',
    intro: 'مدربة كلاس زومبا - ستيب - كارديو - تأهيل في VOLT GYM.',
    specialties: ['زومبا', 'ستيب', 'كارديو', 'تأهيل'],
    classes: ['زومبا - ستيب - كارديو - تأهيل'],
    photo: '',
    photoAlt: 'كابتن رؤى — VOLT GYM',
    approved: true,
  },
  {
    slug: 'doha',
    name: 'كابتن ضحى',
    intro: 'مدربة كلاس إيروبكس - كارديو بوكسينج - كروس فيت - كور - تأهيل عسكري في VOLT GYM.',
    specialties: ['إيروبكس', 'كارديو بوكسينج', 'كروس فيت', 'كور', 'تأهيل عسكري'],
    classes: ['إيروبكس - كارديو بوكسينج - كروس فيت - كور - تأهيل عسكري'],
    photo: '',
    photoAlt: 'كابتن ضحى — VOLT GYM',
    approved: true,
  },
  {
    slug: 'hussein-gaber',
    name: 'كابتن حسين جابر',
    intro: 'متواجد يوميًا في VOLT GYM خلال الفترة المسائية.',
    specialties: [],
    classes: [],
    photo: '',
    photoAlt: 'كابتن حسين جابر — VOLT GYM',
    approved: true,
    attendance: { label: 'متواجد يوميًا في الفترة المسائية' },
  },
  {
    slug: 'malak-ali',
    name: 'كابتن ملك علي أحمد علي',
    intro: 'مدربة كاراتيه للأطفال من سن 5 سنوات.',
    specialties: ['حزام أسود', 'حكم منطقة'],
    classes: ['تدريب كاراتيه للأطفال من سن 5 سنوات'],
    photo: '',
    photoAlt: 'كابتن ملك علي أحمد علي — VOLT GYM',
    approved: true,
    karate: {
      age: 'تدريب كاراتيه للأطفال من سن 5 سنوات',
      schedule: 'الاثنين والأربعاء — من الساعة 5 إلى 7 مساءً',
      fee: '250 جنيه',
      details: ['تأهيل بدني', 'كاتا', 'مهارات قتالية', 'تجهيز للبطولات والمشاركة فيها'],
    },
  },
];

export function getCoach(slug: string | undefined): Coach | undefined {
  return coaches.find((coach) => coach.slug === slug);
}
