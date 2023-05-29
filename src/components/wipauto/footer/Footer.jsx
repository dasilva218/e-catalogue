import { Certifie } from "@/components/home/Hero";

function Footer() {
  return (
    <section className='flex flex-col gap-5 h-64 containe border-slate-800  border p-5'>
      <p>prêt à prendre un véhicules</p>
      <div className='flex justify-between'>
        <ul>
          <li>services</li>
          <li>wipauto</li>
        </ul>
        <ul>
          <li>contactez nous</li>
          <li>faceboock</li>
          <li>whatsapp</li>
        </ul>
      </div>
      <hr className="bg-orange-400" />
      <Certifie/>
    </section>
  );
}

export default Footer;
