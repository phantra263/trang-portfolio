import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-accent">QUẢN LÝ DỊCH VỤ KHÁCH HÀNG - CHUYÊN VIÊN CSKH</span>
            <h1 className="h1">Xin chào, tôi là <span className="text-accent">Trang.</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">Tôi là một chuyên viên dịch vụ khách hàng tận tâm, luôn sẵn sàng lắng nghe và giải quyết mọi vấn đề của khách hàng.
              Tôi đam mê mang đến trải nghiệm tốt nhất cho khách hàng.</p>

            {/* btn and social media */}
            <div className="flex flex-col xl:flex-row gap-4 items-center">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 rounded-full text-accent border-accent hover:bg-accent hover:text-black transition-all duration-300">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              {/* social media */}
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-300 text-accent" />
              </div>
            </div>
          </div>


          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>

        <Stats />
      </div>
    </section >
  );
}

export default Home;
