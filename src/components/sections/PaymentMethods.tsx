export default function PaymentMethods() {
  const methods = [
    {
      name: 'Razorpay',
      logo: '/payment-logos/razorpay.svg',
      logoClass: 'h-[24px]',
    },
    {
      name: 'Skydo',
      logo: '/payment-logos/skydo.svg',
      logoClass: 'h-[22px]',
    },
    {
      name: 'PayPal',
      logo: '/payment-logos/paypal.svg',
      logoClass: 'h-[20px]',
    },
    {
      name: 'Wise',
      logo: '/payment-logos/wise.svg',
      logoClass: 'h-[24px]',
    },
  ];

  return (
    <section className="pt-2 pb-[24px] px-5 flex flex-col items-center">
      <div className="flex gap-[14px] justify-center flex-wrap">
        {methods.map((method) => (
          <div
            key={method.name}
            className="bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-[10px] w-[150px] h-[56px] px-4 flex items-center justify-center"
            title={method.name}
          >
            <img
              src={method.logo}
              alt={method.name}
              className={`${method.logoClass} w-auto object-contain`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
