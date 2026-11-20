/**
 * VOLT GYM — برامج التدريب
 * ------------------------------------------------------------------
 * فئات البرامج مبنية على محتوى VOLT المنشور علنًا.
 * ملاحظة: لا توجد تفاصيل أسعار ولا مدد اشتراك — تُضاف فقط بعد اعتمادها.
 *
 * `image`: local asset under /public/images/volt-gym — replace the file
 * to update the photo. `imageAlt` describes what the real photo should show.
 *
 * Future integration note: replace this static array with a fetch from
 * the programs table; the ProgramCard UI stays unchanged.
 */

export interface Program {
  id: string;
  name: string;
  description: string;
  /** Which confirmed coach leads this program, if any (slug from coaches.ts). */
  coachSlug?: string;
  image?: string;
  imageAlt?: string;
}

export const programs: Program[] = [
  {
    id: 'strength',
    name: 'جيم وتمارين مقاومة',
    description:
      'تمارين الحديد وبناء العضلات وزيادة القوة بإشراف الكباتن، ببرنامج يناسب مستواك سواء بادئ من أول يوم أو لها سنين خبرة.',
    image: '/images/volt-gym/workout-strength.jpg',
    imageAlt: 'متدرب يؤدي تمرين مقاومة داخل VOLT GYM',
  },
  {
    id: 'fitness',
    name: 'لياقة ولياقة بدنية',
    description:
      'تمارين كارديو و conditioning تحسّن لياقتك القلبية وترفع مستوى طاقتك، بأسلوب تدريبي منظم وآمن.',
    image: '/images/volt-gym/fitness-conditioning.jpg',
    imageAlt: 'متدرب يؤدي تمرين لياقة داخل VOLT GYM',
  },
  {
    id: 'weight',
    name: 'إدارة الوزن',
    description:
      'برامج مخصصة لخسارة الوزن أو زيادته بطريقة صحية ومتوازنة، مع متابعة مستمرة من كباتن النادي.',

  },
  {
    id: 'rehab',
    name: 'برامج التأهيل والإصابات',
    description:
      'تمارين تأهيل مدروسة لما بعد الإصابات، بمراحل تدرّج آمنة ترجعك للتمرين بخطوات ثابتة وبدون استعجال.',

  },
  {
    id: 'group',
    name: 'كلاسات جماعية',
    description:
      'كلاسات جماعية بطاقة عالية تحفّزك وتخلّي التمرين يوم ممتع.',
  },
  {
    id: 'sports',
    name: 'ألعاب فردية',
    description:
      'ألعاب فردية داخل النادي تناسب اللي بيحب يتمرن بروحه بروح تنافسية ومنظمة.',

  },
  {
    id: 'karate',
    name: 'كاراتيه أطفال',
    description:
      'تدريب كاراتيه للأطفال من سن 5 سنوات مع تأهيل بدني، كاتا، مهارات قتالية وتجهيز للبطولات والمشاركة فيها.',
    image: '/images/volt-gym/karate-program.jpg',
    imageAlt: 'كابتن كاراتيه داخل VOLT GYM',
  },
];
