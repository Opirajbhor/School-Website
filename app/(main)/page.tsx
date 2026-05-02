import HeroSlider from "@/components/Custom-Components/HeroSection"
import AboutSection from "@/components/Custom-Components/aboutSchool"
import NoticeBoard from "@/components/Custom-Components/NoticeSection"
import MessageSection from "@/components/Custom-Components/MessageSection"
import TeacherSection from "@/components/Custom-Components/TeacherSection"
import StudentStatistics from "@/components/Custom-Components/StudentStatistics"
import MediaGallery from "@/components/Custom-Components/GallarySection"
import InstitutionStatistics from "@/components/Custom-Components/InstitutionStatistics"

export default function Page() {
  return (
    <>
      <div className="flex p-6">
        <HeroSlider></HeroSlider>
      </div>
      <div className="flex items-center justify-between">
        <AboutSection></AboutSection>
        <NoticeBoard></NoticeBoard>
      </div>
      <InstitutionStatistics></InstitutionStatistics>
      <MessageSection></MessageSection>
      <TeacherSection></TeacherSection>
      <StudentStatistics></StudentStatistics>
      <MediaGallery></MediaGallery>
    </>
  )
}
