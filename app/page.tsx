import Image from "next/image";
import { inter } from '@/app/fonts';
import { lusitana } from '@/app/fonts';

export default function Home() {
  return (
    <>
    <div className={`${inter.className} `}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fugit, minima quos minus ipsum animi nisi molestias et odit quidem dolorum deserunt optio officiis aut earum perspiciatis repellat dolore quas.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam repellendus, vel ex quibusdam maiores quis sint itaque illum nostrum laboriosam velit sequi magnam blanditiis esse natus aspernatur. Voluptates, id?
    </div>

    <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>Lorem</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laudantium dignissimos alias reprehenderit doloribus officia optio recusandae sed labore ipsum consequatur error obcaecati, blanditiis debitis quisquam voluptatibus, exercitationem possimus fuga.</p>
    <div>
    <img
  src="/next.svg"
  alt="Screenshots of the dashboard project showing desktop version"
  className="h-auto w-10"
/>
    </div>
    </>
    
       
  );
}
