import HeroSlider from "@/Custom-Components/HeroSection"
import AboutSection from "@/Custom-Components/aboutSchool"
import NoticeBoard from "@/Custom-Components/NoticeSection"
import MessageSection from "@/Custom-Components/MessageSection"
import TeacherSection from "@/Custom-Components/Stuff-Section/TeacherSection"
import MediaGallery from "@/Custom-Components/GallerySection"
import InstitutionStatistics from "@/Custom-Components/InstitutionStatistics"

export default function Page() {
  return (
    <>
      <div className="-mt-2 -mb-10 flex p-4">
        <HeroSlider></HeroSlider>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="w-2/3">
          <AboutSection></AboutSection>
        </div>
        <div className="w-1/3">
          <NoticeBoard></NoticeBoard>
        </div>
      </div>
      <MessageSection></MessageSection>
      <InstitutionStatistics></InstitutionStatistics>
      {/* <StudentStatistics></StudentStatistics> */}
      <TeacherSection></TeacherSection>
      <MediaGallery></MediaGallery>
    </>
  )
}
