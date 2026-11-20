export type ClassDay = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';

export interface GymClass {
  id: string;
  category: string;
  days: ClassDay[];
  time: string;
  coachSlug: string;
  coachName: string;
  confirmed: true;
}

export const dayLabels: Record<ClassDay, string> = {
  sunday: 'الأحد',
  monday: 'الاثنين',
  tuesday: 'الثلاثاء',
  wednesday: 'الأربعاء',
  thursday: 'الخميس',
  friday: 'الجمعة',
  saturday: 'السبت',
};

export const weekOrder: ClassDay[] = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

export const classes: GymClass[] = [
  {
    id: 'belly-dance',
    category: 'الرقص الشرقي',
    days: ['monday', 'wednesday'],
    time: 'من 5 إلى 6',
    coachSlug: 'maryam-ahmed',
    coachName: 'كابتن مريم أحمد',
    confirmed: true,
  },
  {
    id: 'zumba-step-cardio-rehab',
    category: 'زومبا - ستيب - كارديو - تأهيل',
    days: ['sunday', 'tuesday', 'thursday'],
    time: 'من 2 إلى 3',
    coachSlug: 'roaa',
    coachName: 'كابتن رؤى',
    confirmed: true,
  },
  {
    id: 'aerobics-combat-fitness',
    category: 'إيروبكس - كارديو بوكسينج - كروس فيت - كور - تأهيل عسكري',
    days: ['thursday'],
    time: 'من 10 إلى 5',
    coachSlug: 'doha',
    coachName: 'كابتن ضحى',
    confirmed: true,
  },
];
