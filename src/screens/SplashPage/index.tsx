import CitiesSection from "components/CitiesSection";
import InputWithSearchIcon from "components/InputWithSearchIcon";
import PageHead from "components/PageHead";
import { useState } from "react";

const SplashPage = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <PageHead />
      <section className="flex flex-col items-center justify-center h-96 text-center">
        <h1 className="font-title text-6xl">Discover your ideal destination</h1>
        <p className="w-8/12 font-text mt-5 mb-14 text-lg">
          Find out everything you need to know before travelling anywhere as a
          digital nomad. Navigate through thousands of crowdsourced data and
          find out the{" "}
          <u>destination that best suits your needs and preferences</u>.
        </p>
        <InputWithSearchIcon onChange={(val) => setInput(val)} />
      </section>
      <CitiesSection input={input === "" ? null : input} />
    </div>
  );
};

export default SplashPage;
