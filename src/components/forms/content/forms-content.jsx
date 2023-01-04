import FirstContent from "components/forms/content/contents/first-content";
import SecondContent from "components/forms/content/contents/second-content";
import ThirdContent from "components/forms/content/contents/third-content";
import FourthContent from "components/forms/content/contents/fourth-content";
import FifthContent from "components/forms/content/contents/fifth-content";
import SixthContent from "components/forms/content/contents/sixth-content";
import SeventhContent from "components/forms/content/contents/seventh-content";
import EighthContent from "components/forms/content/contents/eighth-content";
import NinethContent from "components/forms/content/contents/ninth-content";
import TenthContent from "components/forms/content/contents/tenth-content";
import EleventhContent from "components/forms/content/contents/eleventh-content";

export const FormsContent = (step) => {
  switch (step) {
    case 1:
      return { title: "جدول اطلاعات متقاضی", component: <FirstContent /> };
    case 2:
      return {
        title: "ارزیابی عوامل زیان آور شغلی",
        component: <SecondContent />,
      };
    case 3:
      return {
        title: "جدول خود اظهاری متقاضی (علائم)",
        component: <ThirdContent />,
      };
    case 4:
      return { title: "بررسی ارگانها", component: <FourthContent /> };
    case 5:
      return { title: "بررسی دهان و دندان", component: <FifthContent /> };
    case 6:
      return { title: "اپتومتری", component: <SixthContent /> };
    case 7:
      return { title: "اودیومتری", component: <SeventhContent /> };
    case 8:
      return { title: "اسپیرومتری", component: <EighthContent /> };
    case 9:
      return {
        title: "سایر اقدامات پاراکلینیک در صورت لزوم",
        component: <NinethContent />,
      };
    case 10:
      return {
        title: "نظریه نهایی پزشک متخصص طب کار / سلامت شغلی در خصوص کار شاغل",
        component: <TenthContent />,
      };
    case 11:
      return {
        title: "ارزیابی توسط پزشک اجتماعی و پیشگیری",
        component: <EleventhContent />,
      };
    default:
      break;
  }
};
