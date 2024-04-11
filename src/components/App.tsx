const App = () => {
  return (
    <div className="bg-slate-900 text-gray-100">
      <div className="mx-auto max-w-screen-lg px-3 py-6">
        <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
          <a href="/demo/astro-boilerplate">
            <div className="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
              <svg
                className="mr-1 h-10 w-10 stroke-cyan-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                <path d="M4 20h14"></path>
              </svg>
              Ixartz's Blog
            </div>
          </a>
          <nav>
            <ul className="flex gap-x-3 font-medium text-gray-200">
              <li className="hover:text-white">
                <a href="/demo/astro-boilerplate/posts">Blogs</a>
              </li>
              <li className="hover:text-white">
                <a href="/demo/astro-boilerplate">GitHub</a>
              </li>
              <li className="hover:text-white">
                <a href="/demo/astro-boilerplate">Twitter</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-screen-lg px-3 py-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
          <div>
            <h1 className="text-3xl font-bold">
              Hi there, I'm{' '}
              <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                Ixartz
              </span>{' '}
              👋
            </h1>
            <p className="mt-6 text-xl leading-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus{' '}
              <a
                className="text-cyan-400 hover:underline"
                href="/demo/astro-boilerplate"
              >
                malesuada
              </a>{' '}
              nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit
              amet{' '}
              <a
                className="text-cyan-400 hover:underline"
                href="/demo/astro-boilerplate"
              >
                consectetur
              </a>{' '}
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore.
            </p>
            <div className="mt-3 flex gap-1">
              <a href="/demo/astro-boilerplate">
                <img
                  className="h-12 w-12 hover:translate-y-1"
                  src="assets/images/twitter-icon.png"
                  alt="Twitter icon"
                  loading="lazy"
                />
              </a>
              <a href="/demo/astro-boilerplate">
                <img
                  className="h-12 w-12 hover:translate-y-1"
                  src="assets/images/facebook-icon.png"
                  alt="Facebook icon"
                  loading="lazy"
                />
              </a>
              <a href="/demo/astro-boilerplate">
                <img
                  className="h-12 w-12 hover:translate-y-1"
                  src="assets/images/linkedin-icon.png"
                  alt="Linkedin icon"
                  loading="lazy"
                />
              </a>
              <a href="/demo/astro-boilerplate">
                <img
                  className="h-12 w-12 hover:translate-y-1"
                  src="assets/images/youtube-icon.png"
                  alt="Youtube icon"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div className="shrink-0">
            <img
              className="h-80 w-64"
              src="assets/images/avatar.svg"
              alt="Avatar image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg px-3 py-6">
        <div className="mb-6 text-2xl font-bold">
          Recent{' '}
          <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
            <div className="shrink-0">
              <a href="/demo/astro-boilerplate">
                <img
                  className="h-36 w-36 hover:translate-y-1"
                  src="assets/images/project-web-design.png"
                  alt="Project Web Design"
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <div className="flex flex-col items-center gap-y-2 md:flex-row">
                <a
                  className="hover:text-cyan-400"
                  href="/demo/astro-boilerplate"
                >
                  <div className="text-xl font-semibold">Project 1</div>
                </a>
                <div className="ml-3 flex gap-2">
                  <div className="rounded-md bg-fuchsia-400 px-2 py-1 text-xs font-semibold text-fuchsia-900">
                    Astro.js
                  </div>
                  <div className="rounded-md bg-lime-400 px-2 py-1 text-xs font-semibold text-lime-900">
                    Web design
                  </div>
                  <div className="rounded-md bg-sky-400 px-2 py-1 text-xs font-semibold text-sky-900">
                    Tailwind.css
                  </div>
                  <div className="rounded-md bg-rose-400 px-2 py-1 text-xs font-semibold text-rose-900">
                    TypeScript
                  </div>
                </div>
              </div>
              <p className="mt-3 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse bibendum. Nunc non posuere consectetur, justo erat
                semper enim, non hendrerit dui odio id enim.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
            <div className="shrink-0">
              <a href="/demo/astro-boilerplate">
                <img
                  className="h-36 w-36 hover:translate-y-1"
                  src="assets/images/project-fire.png"
                  alt="Project Fire"
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <div className="flex flex-col items-center gap-y-2 md:flex-row">
                <a
                  className="hover:text-cyan-400"
                  href="/demo/astro-boilerplate"
                >
                  <div className="text-xl font-semibold">Project 2</div>
                </a>
                <div className="ml-3 flex gap-2">
                  <div className="rounded-md bg-violet-400 px-2 py-1 text-xs font-semibold text-violet-900">
                    Next.js
                  </div>
                  <div className="rounded-md bg-emerald-400 px-2 py-1 text-xs font-semibold text-emerald-900">
                    Blog
                  </div>
                  <div className="rounded-md bg-yellow-400 px-2 py-1 text-xs font-semibold text-yellow-900">
                    JavaScript
                  </div>
                </div>
              </div>
              <p className="mt-3 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse bibendum. Nunc non posuere consectetur, justo erat
                semper enim, non hendrerit dui odio id enim.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
            <div className="shrink-0">
              <a href="/demo/astro-boilerplate">
                <img
                  className="h-36 w-36 hover:translate-y-1"
                  src="assets/images/project-maps.png"
                  alt="Project Maps"
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <div className="flex flex-col items-center gap-y-2 md:flex-row">
                <a
                  className="hover:text-cyan-400"
                  href="/demo/astro-boilerplate"
                >
                  <div className="text-xl font-semibold">Project 3</div>
                </a>
                <div className="ml-3 flex gap-2">
                  <div className="rounded-md bg-fuchsia-400 px-2 py-1 text-xs font-semibold text-fuchsia-900">
                    Astro.js
                  </div>
                  <div className="rounded-md bg-indigo-400 px-2 py-1 text-xs font-semibold text-indigo-900">
                    Bootstrap
                  </div>
                  <div className="rounded-md bg-rose-400 px-2 py-1 text-xs font-semibold text-rose-900">
                    TypeScript
                  </div>
                </div>
              </div>
              <p className="mt-3 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse bibendum. Nunc non posuere consectetur, justo erat
                semper enim, non hendrerit dui odio id enim.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg px-3 py-6">
        <div className="mb-6 text-2xl font-bold">
          <div className="flex items-baseline justify-between">
            <div>
              Recent{' '}
              <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                Posts
              </span>
            </div>
            <div className="text-sm">
              <a href="/demo/astro-boilerplate/posts">View all Posts →</a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <a
            className="hover:translate-y-1"
            href="/demo/astro-boilerplate/posts/sixth-post"
          >
            <div className="overflow-hidden rounded-md bg-slate-800">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="h-full w-full object-cover object-center"
                  src="/assets/images/image-post.jpeg"
                  alt="Image post"
                  loading="lazy"
                />
              </div>
              <div className="px-3 pb-6 pt-4 text-center">
                <h2 className="text-xl font-semibold">Typography example</h2>
                <div className="mt-1 text-xs text-gray-400">Feb 6, 2020</div>
                <div className="mt-2 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur vero esse non molestias eos excepturi.
                </div>
              </div>
            </div>
          </a>
          <a
            className="hover:translate-y-1"
            href="/demo/astro-boilerplate/posts/fifth-post"
          >
            <div className="overflow-hidden rounded-md bg-slate-800">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="h-full w-full object-cover object-center"
                  src="/assets/images/image-post2.jpeg"
                  alt="Image post 2"
                  loading="lazy"
                />
              </div>
              <div className="px-3 pb-6 pt-4 text-center">
                <h2 className="text-xl font-semibold">
                  5th Lorem ipsum dolor sit
                </h2>
                <div className="mt-1 text-xs text-gray-400">Feb 5, 2020</div>
                <div className="mt-2 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur vero esse non molestias eos excepturi.
                </div>
              </div>
            </div>
          </a>
          <a
            className="hover:translate-y-1"
            href="/demo/astro-boilerplate/posts/forth-post"
          >
            <div className="overflow-hidden rounded-md bg-slate-800">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="h-full w-full object-cover object-center"
                  src="/assets/images/image-post3.jpeg"
                  alt="Image post 3"
                  loading="lazy"
                />
              </div>
              <div className="px-3 pb-6 pt-4 text-center">
                <h2 className="text-xl font-semibold">
                  4th Lorem ipsum dolor sit
                </h2>
                <div className="mt-1 text-xs text-gray-400">Feb 4, 2020</div>
                <div className="mt-2 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur vero esse non molestias eos excepturi.
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg px-3 py-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="sm:w-7/12">
            <div className="text-3xl font-bold">
              Subscribe to my{' '}
              <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                Newsletters
              </span>
            </div>
            <p className="mt-3 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              vero esse non molestias eos excepturi, inventore atque cupiditate.
            </p>
          </div>
          <div className="w-full sm:w-5/12">
            <form className="flex rounded-full bg-slate-800 px-4 py-2 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600">
              <input className="w-full appearance-none bg-slate-800 focus:outline-none" />
              <button
                className="ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-lg px-3 py-6">
        <div className="border-t border-gray-600 pt-5">
          <div className="text-sm text-gray-200">
            © Copyright 2022 by Astro boilerplate. Built with ♥ by{' '}
            <a
              className="text-cyan-400 hover:underline"
              href="https://creativedesignsguru.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              CreativeDesignsGuru
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
