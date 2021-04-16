import Head from "next/head";
import Checkbox from "../components/Checkbox";
import Location from "../components/icons/Location";
import Search from "../components/icons/Search";
import PrimaryButton from "../components/PrimaryButton";
import Text from "../components/Text";
import { getJobs } from "../lib/api";

export default function Home({ jobs }) {
  return (
    <div className="container max-w-[1110px] mx-auto -mt-[39px] pb-[104px]">
      <div className="rounded-md bg-white">
        <Head>
          <title>devjobs</title>
          <link
            rel="shortcut icon"
            type="image/jpg"
            href="/assets/favicon-32x32.png"
          />
        </Head>

        <div className="flex items-center divide-x divide-theme-dark-grey divide-opacity-20">
          <div className="w-[463px]">
            <Text
              id="search"
              name="search"
              placeholder="Filter by title, companies, expertise…"
              leadingIcon={<Search />}
              className="w-full rounded-r-none"
            />
          </div>

          <div className="w-[300px]">
            <Text
              id="location"
              name="location"
              placeholder="Filter by location…"
              leadingIcon={<Location />}
              className="w-full rounded-none"
            />
          </div>

          <div className="w-[345px] h-20">
            <div className="flex h-full px-4 ml-4 items-center space-x-[26px]">
              <Checkbox
                id="full_time"
                name="full_time"
                label="Full Time Only"
              />

              <PrimaryButton padding="px-[35.5px] py-4">Search</PrimaryButton>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-3 grid-flow-row auto-rows-max gap-x-[30px] gap-y-10">
        {jobs &&
          jobs.length &&
          jobs.map((job) => (
            <div className="relative w-full h-full pt-[25px]">
              <div className="absolute ml-8 flex items-center justify-center top-0 w-[50px] h-[50px] rounded-[15px] p-3 bg-theme-light-violet">
                <img src={job.company_logo} />
              </div>

              <div className="flex flex-col bg-white h-full rounded-md pt-[49px] px-8 pb-8">
                <p className="text-body leading-normal text-theme-dark-grey">
                  {job.type}
                </p>

                <h3 className="mt-4 font-bold text-xl leading-normal text-theme-very-dark-blue">
                  {job.title}
                </h3>

                <p className="mt-4 text-body leading-normal text-theme-dark-grey">
                  {job.company}
                </p>

                <p className="flex-1 flex flex-col-reverse mt-[26px] font-bold text-[14px] leading-[18px] text-theme-violet">
                  {job.location}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="mt-14 flex items-center justify-center">
        <PrimaryButton padding="pl-[30px] pr-[31px] py-4">
          Load More
        </PrimaryButton>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const jobs = await getJobs();

  return {
    props: {
      jobs,
    },
  };
}
