import Head from "next/head";
import Search from "../components/icons/Search";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Text from "../components/Text";

export default function Home() {
  return (
    <div className="dark:bg-theme-very-dark-blue">
      <Head>
        <title>devjobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PrimaryButton padding="pl-[39.5px] pr-[38.5px] py-4">
        Button 1
      </PrimaryButton>

      <SecondaryButton padding="pl-10 pr-[41px] py-4">Button 2</SecondaryButton>

      <div className="dark:bg-theme-midnight">
        <Text
          id="search"
          name="search"
          type="text"
          placeholder="Enter desired job..."
          leadingIcon={<Search />}
        />
      </div>
    </div>
  );
}
