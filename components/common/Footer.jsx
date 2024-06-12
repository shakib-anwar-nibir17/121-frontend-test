import { fetchApi } from "@/utils/fetchApi";
import Image from "next/image";
import Link from "next/link";

const navigation = {
  customer: [
    { name: "Terms of Services", href: "terms-of-services" },
    { name: "Privacy Policy", href: "privacy-policy" },
  ],

  helps: [{ name: "Faq", href: "faq" }],

  company: [
    { name: "About Us", href: "about-us" },
    { name: "Contact Us", href: "contact-us" },
  ],

  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/tools121industrialhub",
      className: "text-primary-800",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/tools121",
      className: "text-primary-800",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          {...props}
          viewBox="0 0 448 512"
        >
          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg>
      ),
    },
    {
      name: "Ing",
      href: "https://www.instagram.com/tools__121",
      className: "text-rose-500",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      className: "text-rose-500",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "x",
      href: "https://twitter.com/tools121",
      className: "hover:text-rose-500",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          {...props}
          viewBox="0 0 512 512"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      ),
    },
  ],
};

const Footer = async () => {
  const data = await fetchApi({ endpoint: `contentdata/8?offset=0&limit=1` });

  return (
    <footer className="bg-main-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container px-4 sm:px-8 pb-8 py-16 2xl:py-20 lg:px-8">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="">
            <div className="mb-6">
              <Image
                className="w-auto h-auto"
                src="/logo.png"
                alt="logo"
                priority={false}
                width={197}
                height={48}
              />
            </div>
            {data && data?.length ?
              data.map((item, index) => {
                return (
                  item?.is_active && (
                    <div
                      key={"Footer" + index}
                      dangerouslySetInnerHTML={{
                        __html: item?.content_description,
                      }}
                    ></div>
                  )
                );
              }) : null}
            <div className="flex mt-3 space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className={`${item.className} text-gray-400  hover:cursor-pointer w-9 h-9 bg-primary-200 rounded-full flex justify-center items-center`}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-3 gap-8 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold xl:text-lg 2xl:text-xl leading-6 text-primary-950">
                Company
              </h3>

              <ul role="list" className="mt-3 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={`/${item.href}`}
                      // onClick={() => router.push(`/${item.href}`)}
                      className="text-sm xl:text-lg 2xl:text-xl leading-6 text-primary-600 hover:text-primary-950 hover:cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold xl:text-lg 2xl:text-xl leading-6 text-primary-950">
                Help
              </h3>

              <ul role="list" className="mt-3 space-y-3">
                {navigation.helps.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={`/${item.href}`}
                      // onClick={() => router.push(`/${item.href}`)}
                      className="text-sm xl:text-lg 2xl:text-xl leading-6 text-primary-600 hover:text-primary-950 hover:cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold xl:text-lg 2xl:text-xl leading-6 text-primary-950">
                Consumer Policy
              </h3>

              <ul role="list" className="mt-3 space-y-3">
                {navigation.customer.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={`/${item.href}`}
                      // onClick={() => router.push(`/${item.href}`)}
                      className="text-sm xl:text-lg 2xl:text-xl leading-6 text-primary-600 hover:text-primary-950 hover:cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer