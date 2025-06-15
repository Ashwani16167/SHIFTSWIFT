'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We provide moving services across all major cities and their surrounding areas. For long-distance moves, we cover interstate relocations throughout the country, and we also offer international moving services.",
  },
  {
    question: "How do you calculate moving costs?",
    answer: "Our moving costs are calculated based on several factors including distance, volume of items, specific services required (packing, storage, etc.), and timing. You can get an instant estimate using our online calculator or contact us for a detailed quote.",
  },
  {
    question: "Do you provide packing materials?",
    answer: "Yes, we provide all necessary packing materials including boxes, bubble wrap, packing paper, tape, and specialized containers for delicate items. We can either supply the materials for your self-packing or include professional packing services.",
  },
  {
    question: "Are my belongings insured during the move?",
    answer: "Yes, we provide basic insurance coverage for all moves. We also offer additional comprehensive insurance options for extra peace of mind. Our team will explain the coverage details during the quote process.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 2-3 weeks in advance for local moves and 4-6 weeks for long-distance or international moves. However, we understand that sometimes moves come up suddenly, and we'll do our best to accommodate your timeline.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function FAQSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions? We're here to help. If you can't find the answer you're looking for,
            please don't hesitate to contact our team.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <dl className="space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform text-primary-600'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
