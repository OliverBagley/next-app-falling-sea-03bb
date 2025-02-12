import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Oliver Bagley</h1>
        <p className="text-xl mb-2">
          eCommerce Developer &amp; Digital Operations Specialist
          <br />
          Shopify Partner and Solutions Architect
        </p>
      </section>

      <section id="about" className="py-12 w-full max-w-2xl">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p>
          I specialize in developing robust eCommerce solutions while streamlining digital operations. My passion for innovation and
          excellence has allowed me to work with industry leaders to drive business growth.
        </p>
      </section>

      <section id="projects" className="py-12 w-full max-w-2xl">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <p>Here are some projects I've worked on:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Project A – A cutting-edge eCommerce platform</li>
          <li>Project B – Scalable digital operations tool</li>
          <li>Project C – Innovative Shopify store integration</li>
        </ul>
      </section>

      <section id="partners" className="py-12 w-full max-w-2xl">
        <h2 className="text-3xl font-semibold mb-4">Partners</h2>
        <p>I've had the privilege to work with the following partners:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Shopify</li>
          <li>BigCommerce</li>
          <li>Magento</li>
        </ul>
      </section>
    </main>
  );
}
