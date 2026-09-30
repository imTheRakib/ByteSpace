import Image from "next/image";
import { CourseCard } from "@/components/cards/CourseCard";
import { HappyStudentsCard, LearningProgressCard, RevenueCard } from "@/components/cards/FloatingCards";
import { Container, DesignCanvas } from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import { creatorBenefits, featuredCourses, happyStudentAvatars, platformStats } from "@/data/home";

const sectionTitle = "font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-shuttle-950 md:text-[44px]";
const bodyText = "text-lg leading-[1.6] text-shuttle-700";

export function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-[120px]">
      <DesignCanvas>
        <Image
          src="/images/decor/growth-blobs.svg"
          alt=""
          width={2536}
          height={2471}
          className="absolute left-[-548px] top-[-506px] max-w-none"
        />
        <Image
          src="/images/decor/growth-blob-small.svg"
          alt=""
          width={752}
          height={752}
          className="absolute left-[-327px] top-[906px] max-w-none"
        />
      </DesignCanvas>

      <Container className="relative">
        <div className="flex flex-col gap-[72px] xl:ml-px xl:w-[1258px]">
          {/* Learners */}
          <div className="flex flex-col items-center gap-16 xl:flex-row xl:gap-[63px]">
            <div className="flex w-full flex-col gap-10 xl:w-[574px] xl:shrink-0">
              <h2 className={`${sectionTitle} xl:w-[577px]`}>Your Path to Professional Growth Starts Here!</h2>
              <p className={`${bodyText} max-w-[477px]`}>
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
                career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark
                on a new career path entirely, we have the resources you need.
              </p>
              <dl className="flex items-end gap-14 whitespace-nowrap">
                {platformStats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse">
                    <dt className={bodyText}>{stat.label}</dt>
                    <dd className="font-heading text-4xl font-medium leading-[44px] tracking-[-0.01em] text-primary">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative hidden h-[552px] w-[621px] shrink-0 md:block">
              <div className="absolute left-0 top-0 w-[373px]">
                <CourseCard course={featuredCourses[0]} variant="spacious" />
              </div>
              <Image
                src="/images/home/hero-student.png"
                alt="Student learning online with a laptop"
                width={577}
                height={540}
                className="drop-shadow-float absolute left-0 top-3 h-[540px] w-[577px] max-w-none object-cover"
              />
              <div className="absolute left-[345px] top-[213px]">
                <LearningProgressCard percent={55} density="spacious" />
              </div>
              <Ornament shape="spring-a" x={406} y={67} size={215} tint="lime" />
            </div>
          </div>

          {/* Creators */}
          <div className="flex flex-col-reverse items-center gap-16 xl:flex-row xl:gap-[79px]">
            <div className="relative hidden h-[596px] w-[541px] shrink-0 md:block">
              <div className="absolute left-0 top-11">
                <RevenueCard title="Total Revenue" period="July 1-28" amount="$120.29" change="+12$" progress={56} />
              </div>
              <div className="absolute left-0 top-[194px]">
                <RevenueCard title="Year to Date" period="2023" amount="$1,200.38" change="+12$" />
              </div>
              <div className="drop-shadow-float absolute left-7 top-0 h-[596px] w-[435px]">
                <div className="relative size-full overflow-hidden">
                  <Image
                    src="/images/home/creator-student.png"
                    alt="Creator with headphones holding a tablet"
                    width={500}
                    height={500}
                    className="absolute left-[-28.51%] top-0 h-[114.6%] w-[157.01%] max-w-none"
                  />
                </div>
              </div>
              <div className="absolute left-[283px] top-[413px]">
                <HappyStudentsCard
                  rating={4.5}
                  reviews={240}
                  avatars={happyStudentAvatars}
                  count="2K+"
                  density="spacious"
                />
              </div>
              <Ornament shape="spring-b" x={305} y={114} size={215} tint="lime" />
            </div>

            <div className="flex w-full flex-col gap-10 xl:w-[580px] xl:shrink-0">
              <h2 className={`${sectionTitle} max-w-[391px]`}>Create &amp; Manage Courses Easily.</h2>
              <p className={`${bodyText} max-w-[574px]`}>
                <strong className="font-bold leading-7 text-shuttle-950">ByteSpace</strong> supports individuals or
                entities in the creation, publication, and administration of educational courses.
              </p>
              <ul className="flex flex-col gap-4">
                {creatorBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-end gap-2">
                    <Image src="/icons/check-circle.svg" alt="" width={24} height={24} />
                    <span className="text-lg font-medium leading-[1.2] text-shuttle-950">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
