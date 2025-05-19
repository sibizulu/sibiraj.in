import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-6 mx-auto max-w-full md:max-w-3xl lg:max-w-4xl">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
        Sibiraj PR
      </h2>

      <p className="font-lora text-sm md:text-base mb-4">
        I'm a developer drawn to crafting minimal, purposeful software that does
        more with less. I thrive in the open-source world, where ideas are
        shared and tools are built to last. Beyond the code, I write about
        development, and building a more sustainable digital future.
      </p>

      <div className="font-lora text-sm md:text-base space-y-2 mt-8">
        <p>Email: sibizulu [at] gmail [dot] com</p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/sibizulu"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/sibizulu
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/sibizulu"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/sibizulu
          </a>
        </p>
      </div>
    </div>
  );
}
