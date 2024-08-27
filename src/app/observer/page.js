"use client";
import Body from "@/components/observer/Body";
import Footer from "@/components/observer/Footer";
import Header from "@/components/observer/Header";

const Page = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Page;
