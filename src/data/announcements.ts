/**
 * VOLT GYM — مجتمع VOLT: إعلانات وتحديات ونصايح
 * ------------------------------------------------------------------
 * محتوى تعليمي/إعلاني عام فقط — بدون أخبار مؤكدة أو إنجازات أعضاء
 * أو شهادات مُختلقة. كل عنصر يظهر بترتيب `date` التنازلي.
 *
 * Future integration note: announcements + challenges + tips each map to
 * a table; replace the static arrays with fetches, UI stays the same.
 */

export interface Announcement {
  id: string;
  title: string;
  body: string;
  date: string; // ISO
  tag: string;
}

export interface Challenge {
  id: string;
  title: string;
  body: string;
  image?: string;
  imageAlt: string;
  video?: string;
  active: boolean;
}

export interface Tip {
  id: string;
  title: string;
  body: string;
  category: 'مبتدئين' | 'تغذية' | 'تمرين';
}

export const announcements: Announcement[] = [
  {
    id: 'schedule-post',
    title: 'جدول الكلاسات الجديد',
    body: 'نزلنا جدول الكلاسات الأسبوعية الجديد — كل الكلاسات الجماعية وأيامها وأسماء الكباتن متاحة الآن في صفحة الكلاسات. راجع الجدول قبل ما تيجي.',
    date: '2026-11-03',
    tag: 'كلاسات',
  },
  {
    id: 'welcome-volt',
    title: 'أهلًا بيكم في VOLT GYM',
    body: 'صفحتنا الرسمية وصلت — تابعوا هنا كل جديد عن البرامج والكلاسات والتحديات، ولأي استفسار عن الاشتراكات كلّمونا على واتساب.',
    date: '2026-11-01',
    tag: 'إعلان',
  },
];

export const challenges: Challenge[] = [
  {
    id: 'start-strong',
    title: 'تحدي البداية القوية',
    body: 'تحدٍّ للمنتسبين الجدد: التزم بتمرين منتظم طوال الشهر مع متابعة من كباتن النادي، وسجّل تقدمك أسبوع بأسبوع.',
    image: '/images/volt-gym/community-space.jpg',
    imageAlt: 'تحدي البداية القوية في VOLT GYM',
    video: '/images/volt-gym/challenge-video.mp4',
    // Not confirmed by the owner — must not be shown as a running challenge.
    active: false,
  },
  {
    id: 'group-spirit',
    title: 'تحدي الكلاسات الجماعية',
    body: 'جمع صحابك وشاركوا في الكلاسات الجماعية — الطاقة الجماعية بتفرق في نتيجة التمرين، والتحدي بيكون على أعلى حضور.',

    imageAlt: 'تحدي الكلاسات الجماعية في VOLT GYM',
    active: false,
  },
];

export const tips: Tip[] = [
  {
    id: 'beginner-consistency',
    title: 'ابدأ بثبات مش بحماس أسبوع',
    body: 'أكبر غلطة للمبتدئ إنه يبدأ بتمارين تقيلة يومين وبعدين يختفي. اختار ٣ أيام في الأسبوع والتزم بيهم شهر — الاستمرارية هي اللي بتبني الجسم.',
    category: 'مبتدئين',
  },
  {
    id: 'water',
    title: 'المياه جزء من التمرين',
    body: 'اشرب مياه قبل وأثناء وبعد التمرين. الجسم لما مياهه ناقصة بيقل التركيز والأداء، حتى لو التمرين نفسه مظبوط.',
    category: 'تغذية',
  },
  {
    id: 'form-first',
    title: 'الأداء الصح قبل الوزن التقيل',
    body: 'الوزن التقيل بأداء غلط مبيعملش نتيجة وبيسبب إصابات. تعلّم الأداء الصح الأول، والوزن هيزيد لوحده مع الوقت.',
    category: 'تمرين',
  },
  {
    id: 'sleep',
    title: 'النوم بيبني العضلة',
    body: 'التمرين بيحفّز العضلة، لكن النوم الكافي هو اللي بيبنيها. حاول تنام ٧–٨ ساعات خصوصًا في أيام التمرين.',
    category: 'تغذية',
  },
];
