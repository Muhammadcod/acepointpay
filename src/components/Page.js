import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import MasterCard from "./image/MasterCard";
import Check from "./image/Check";
import Scroll from "./image/Scroll";
import Edit from "./image/Edit";
import Block from "./Block";
import Wifi from "./image/Wifi";
import Chip from "./image/Chip";
import Grid from "./image/Grid";
import Apple from "./image/Apple";

const Page = () => {
  return (
    <div className="min-h-max px-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <main className="lg:col-span-2">
          <div className="flex justify-between mb-10">
            <h3 className="text-2xl">
              <span className="font-bold">AceCoin</span>
              <span className="font-normal">Pay</span>
            </h3>
            <div className="space-x-0.5 hidden sm:block">
              <Block digit={0} />
              <Block digit={1} />
              <span className="font-bold">:</span>
              <Block digit={1} />
              <Block digit={9} />
            </div>
          </div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-base font-semibold mb-1">Card Number</h3>
              <p className="text-xs text-gray-700 max-w-[12rem] md:max-w-none">
                Enter the 16-digit card number on the card
              </p>
            </div>
            <div className="flex items-center text-blue-700">
              <Edit
                className="mr-3"
                width={18}
                height={18}
                fill="blue"
                strokeColor="blue"
              />
              Edit
            </div>
          </div>
          <InputField
            className="mb-6 pl-7"
            leftIcon={<MasterCard width={24} height={24} />}
            rightIcon={<Check width={18} height={18} />}
            placeholder="     2222   -  3456  -   4321   -   6798"
          />
          <div className="flex justify-between md:items-center mb-6 flex-col md:flex-row">
            <div className="basis-1/2">
              <h3 className="text-base font-semibold mb-1">CVV Number</h3>
              <p className="text-xs text-gray-700">
                Enter the 3 or 4 digit number on the card
              </p>
            </div>
            <div className="basis-1/2 mt-4 md:mt-0">
              <InputField
                className="text-center"
                placeholder="2222"
                rightIcon={<Grid width={18} height={18} />}
              />
            </div>
          </div>
          <div className="flex justify-between md:items-center mb-6 flex-col md:flex-row">
            <div className="basis-1/2">
              <h3 className="text-base font-semibold mb-1">Expiry Date</h3>
              <p className="text-xs text-gray-700">
                Enter the expiry date on the card
              </p>
            </div>
            <div className="flex items-center justify-center basis-1/2 space-x-4 mt-4">
              <InputField className="text-center" placeholder="09" />
              <span>/</span>
              <InputField className="text-center" placeholder="23" />
            </div>
          </div>
          <div className="flex justify-between md:items-center mb-6 flex-col md:flex-row">
            <div className="basis-1/2">
              <h3 className="text-base font-semibold mb-1">Password</h3>
              <p className="text-xs text-gray-700">
                Enter your Dynamic password
              </p>
            </div>
            <div className="basis-1/2 mt-4">
              <InputField
                type="password"
                placeholder=""
                rightIcon={<Grid width={18} height={18} />}
              />
            </div>
          </div>
        </main>
        <section className="lg:row-span-2 self-end flex">
          <div className="w-full">
            <div className="mb-14 justify-center hidden lg:flex">
              <div className="block w-14 h-8 bg-blue-700 rounded" />
            </div>
            <div className="bg-gray-300 pt-5 relative lg:h-[33rem] rounded-2xl flex flex-col justify-end">
              <div className="h-[16rem] w-52 backdrop-blur-md hidden lg:flex flex-col justify-between py-8 bg-white/60 rounded-2xl px-8 mx-auto absolute -top-20 inset-x-[10%]">
                <div className="items-center justify-between mt-4 flex">
                  <Chip width={40} height={50} />
                  <Wifi />
                </div>
                <div>
                  <p>Jonathan Michael</p>
                  <h2 className="font-bold flex items-center">
                    <span className="mr-2">....</span> <span>3456</span>
                  </h2>

                  <div className="flex items-center justify-between mt-4">
                    <span className="font-bold">09/22</span>
                    <span>
                      <MasterCard width={30} height={30} />
                      <p className="text-[5px]">mastercard</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-8">
                <div className="flex mb-4 justify-between items-center">
                  <span className="text-gray-600 text-sm">Company</span>
                  <div className="text-sm font-bold flex items-center">
                    <span className="bg-black rounded-full p-1 mr-2">
                      <Apple
                        width={20}
                        height={20}
                        className=""
                        fill="#fff"
                        strokeColor="#fff"
                      />
                    </span>
                    Apple
                  </div>
                </div>
                <div className="flex mb-4 justify-between items-center">
                  <span className="text-gray-600 text-sm">Order Number</span>
                  <span className="text-sm font-bold">1266201</span>
                </div>
                <div className="flex mb-4 justify-between items-center">
                  <span className="text-gray-600 text-sm">Product</span>
                  <span className="text-sm font-bold">MacBook Air</span>
                </div>
                <div className="flex mb-4 justify-between items-center mb-8">
                  <span className="text-gray-600 text-sm">VAT(20%)</span>
                  <span className="text-sm font-bold">$100.00</span>
                </div>
              </div>

              <div className="border-t border-gray-600 flex justify-between items-center border-dashed px-8 py-8">
                <div>
                  <h6 className="text-sm text-gray-400">You have to Pay</h6>
                  <h2 className="font-semibold">
                    <span className="font-semibold text-4xl">549</span>.99{" "}
                    <span className="text-gray-400">USD</span>
                  </h2>
                </div>
                <Scroll width={24} height={24} />
              </div>
            </div>
          </div>
        </section>

        <Button className="bg-blue-500 py-4 text-white rounded-lg lg:col-span-2">
          Pay Now
        </Button>
      </div>
    </div>
  );
};

export default Page;
