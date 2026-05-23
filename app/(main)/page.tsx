import HeroSlider from "@/Custom-Components/HeroSection"
import AboutSection from "@/Custom-Components/aboutSchool"
import NoticeBoard from "@/Custom-Components/NoticeSection"
import MessageSection from "@/Custom-Components/MessageSection"
import TeacherSection from "@/Custom-Components/Stuff-Section/TeacherSection"
import StudentStatistics from "@/Custom-Components/StudentStatistics"
import MediaGallery from "@/Custom-Components/GallarySection"
import InstitutionStatistics from "@/Custom-Components/InstitutionStatistics"

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
      <MessageSection></MessageSection>
      <InstitutionStatistics></InstitutionStatistics>
      <StudentStatistics></StudentStatistics>
      <TeacherSection></TeacherSection>
      <MediaGallery></MediaGallery>
    </>
  )
}
