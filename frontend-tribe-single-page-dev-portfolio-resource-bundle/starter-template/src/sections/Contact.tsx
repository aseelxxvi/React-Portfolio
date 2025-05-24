import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <div id="contact" className="scroll-mt-28 py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.
              </p>

              <form
                action="https://formspree.io/f/meogwywj"
                method="POST"
                className="mt-4 space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="p-3 rounded w-full border border-gray-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="p-3 rounded w-full border border-gray-300"
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  required
                  className="p-3 rounded w-full border border-gray-300"
                  rows={5}
                ></textarea>
                <button
                  type="submit"
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
                >
                  <span className="font-semibold">Send Message</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
