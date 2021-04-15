import Head from "next/head";
import { useState } from "react";
import Checkbox from "../components/Checkbox";
import Moon from "../components/icons/Moon";
import Search from "../components/icons/Search";
import Sun from "../components/icons/Sun";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Text from "../components/Text";
import Toggle from "../components/Toggle";

export default function Home() {
  const [enabled, setEnabled] = useState(false);

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

        <Toggle
          state={enabled}
          setState={setEnabled}
          leftLabel={<Sun />}
          rightLabel={<Moon />}
        />
      </div>

      <div className="bg-white">
        <Checkbox id="test" name="test" label="Checkbox" />
      </div>
    </div>
  );
}
