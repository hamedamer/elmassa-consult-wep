# EL MASSA CONSULT — موقع الشركة (React + Vite + Tailwind)

مشروع React.js كامل تم تجهيزه من ملف الـ Home page (HTML) اللي بعتّه، مقسّم لكومبوننتس منظمة
مع كل التفاعلية المطلوبة (سلايدر التستيمونيالز، أكورديون الأسئلة الشائعة، تابز المنصات، خطوات
العملية، والعدادات المتحركة).

## تشغيل المشروع محليًا

```bash
npm install
npm run dev
```

هيفتح المشروع على `http://localhost:5173`.

للبناء النهائي (production build):

```bash
npm run build
npm run preview
```

## هيكل المشروع

```
src/
  components/   # كل قطعة من الصفحة كومبوننت منفصل (Header, Hero, Testimonials, FAQ...)
  data/         # المحتوى النصي (عناوين، خدمات، تستيمونيالز، أسئلة شائعة...) كـ arrays منفصلة عن التصميم
  pages/        # الصفحات: Home (الصفحة الرئيسية كاملة)، About، Contact
  App.jsx       # الراوتر الرئيسي (react-router-dom) + Header/Footer ثابتين في كل الصفحات
public/images/  # كل الصور المحلية بنفس الأسماء المستخدمة في الكود
```

## ⚠️ الصور

الملف اللي بعتّه كان بيشاور على صور محلية بالأسماء دي:

- `images.png` (اللوجو)
- `3dbd0568-6e10-408f-9ec5-cbce31ef534f.png` (صورة Scan to BIM)
- `point-claud.png` (أيقونة Point Cloud)
- `service-1.png` إلى `service-6.png` (أيقونات الخدمات الستة)

بما إن الملف المرفوع كان HTML بس من غير الصور الأصلية، حطيت **صور بديلة مؤقتة (placeholders)**
بنفس الأسماء بالظبط جوه `public/images/` عشان المشروع يشتغل ويبان صح من أول تشغيل، وعشان بس
تستبدلهم بالصور الحقيقية بتاعتك (بنفس الاسم) هتظهر فورًا من غير أي تعديل في الكود.

## ملاحظات

- كل الـ Tailwind classes والألوان (`brandNavy` #0F2B48 و `brandRed` #EB4C4C) اتنقلت زي ما هي.
- الأنيميشنز (scroll-left/right, spin-slow, bounce-slow) موجودة في `tailwind.config.js`.
- الفونت (Inter) و FontAwesome متجابين عن طريق CDN في `index.html` زي الملف الأصلي.
- ضفتلك صفحتين إضافيتين (`/about`, `/contact`) بنفس الهوية البصرية كبداية لباقي الموقع —
  تقدر تكمل عليهم أو تطلب مني أكمل باقي الصفحات (Services تفصيلية، Portfolio، إلخ).
