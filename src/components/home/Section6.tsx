import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import BadgeGallery from '@/components/core/badgeGallery';

const HomeSection6 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] min-h-screen items-center justify-center dark:bg-dot-white/[0.15] bg-dot-white/[0.15] rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16 z-20">
        <SectionTitle>Certificate</SectionTitle>
        <BadgeGallery/>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection6;
