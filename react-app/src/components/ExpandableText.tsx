import React, { useState } from "react";

interface Props {
  maxLength?: number;
}

const ExpandableText = ({ maxLength = 200 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam enim
        id facere cupiditate labore voluptates! Necessitatibus impedit nemo
        suscipit officiis blanditiis quibusdam, voluptatibus corrupti ex
        perferendis quam consectetur delectus, officia voluptatum facilis beatae
        accusantium molestiae vel nam recusandae id maiores dolorum possimus.
        Voluptatum possimus autem eligendi nemo quo dolores non nisi
        consequatur, corrupti neque rem tempora sit aliquam aliquid eos dolorum
        harum? Repellat vitae consectetur debitis quae quam! Debitis totam,
        ullam, in, voluptatum voluptas itaque labore voluptatem mollitia
        consequatur rerum vitae laboriosam nulla doloribus exercitationem porro
        amet alias harum saepe repellat laborum! Laborum deleniti excepturi quis
        expedita velit ad commodi illo quibusdam aliquam, totam odio recusandae
        sit iusto dolores suscipit id aspernatur quod atque dolorem eos officia
        odit non ipsum? Maiores qui doloremque omnis explicabo aliquid soluta
        tempore aliquam officiis ea velit saepe, vero minima dolorem molestiae
        animi excepturi aperiam impedit esse! Debitis consequuntur cumque
        aspernatur veniam nesciunt sit? Expedita dolores quam, dolorum fugit
        facere ea doloremque nostrum rem repellat incidunt suscipit quis!
        Repellat hic ipsum commodi! Sapiente ea possimus sint qui praesentium,
        dicta harum quibusdam. Nostrum minus eum deserunt, voluptate non
        explicabo eius id. Libero unde dolor debitis, quibusdam officia nam
        fugit harum architecto dolores beatae minus dolore ex quas tempore
        doloribus nemo molestias voluptas. Quibusdam repudiandae pariatur nam, a
        ipsam repudiandae sed, voluptatum aliquid, quam accusamus culpa quo!
        Maiores nemo aliquid ipsum, ratione consectetur temporibus dolores
        facilis, laborum modi vero aut minus fuga? Illum ab quae voluptas,
        magnam quas molestias blanditiis fuga nostrum unde expedita nesciunt
        quibusdam sint natus repellendus officiis saepe? Soluta excepturi
        laudantium corporis nostrum autem. Quia modi ex odio! Esse vel, itaque
        amet blanditiis possimus nihil incidunt dolores cupiditate? Error
        molestiae numquam eveniet. Optio rerum fuga voluptatem officiis nostrum
        alias quo expedita placeat vero, iste voluptate explicabo quod pariatur,
        odit tempora quae reiciendis numquam nisi. Fuga consequatur placeat
        asperiores, repellat, amet sint eius culpa odio aut adipisci assumenda
        veritatis! Sequi asperiores excepturi tenetur odio minus eum
        perspiciatis, ad eveniet temporibus porro aut! Deserunt labore molestiae
        optio culpa accusantium doloremque ex minima, explicabo asperiores
        quibusdam, deleniti nam. Provident unde molestiae officia sequi saepe
        aperiam, non reprehenderit doloremque, laboriosam ratione, expedita
        necessitatibus adipisci commodi fugit exercitationem ullam eum molestias
        sunt officiis error obcaecati ad corrupti deleniti at! Mollitia numquam
        ratione tempore accusantium dolorum beatae ex expedita vel, dolore
        voluptate sit amet et excepturi, voluptatem quidem! Hic quibusdam
        impedit at, minus atque, ut facilis temporibus eaque numquam magni
        corrupti, a placeat? Saepe molestiae similique laborum totam, dolores id
        expedita debitis ex sint iste aliquid atque placeat in voluptatum ipsum
        nulla error eligendi sapiente impedit praesentium esse! Quae aspernatur
        voluptate accusantium fugit animi molestiae at, iure libero molestias
        omnis iusto alias minima magni dolor tenetur distinctio doloribus
        cumque, qui impedit? Molestias minus aspernatur et odio fuga, doloribus
        nam debitis reiciendis neque officia numquam provident perferendis dicta
        autem consequatur sequi dolor nobis consectetur cumque fugit qui.
        Asperiores corrupti iure, omnis recusandae provident sint, cumque non id
        facilis, corporis inventore. At distinctio tempora modi provident
        necessitatibus non earum harum accusantium et delectus expedita
        explicabo error inventore, doloribus quaerat corporis id commodi optio
        veritatis cum officiis eligendi?`;

  return (
    <div>
      <p>
        {isExpanded ? text : text.substring(0, maxLength)}
        <button onClick={() => setIsExpanded((prev) => !prev)}>
          {isExpanded ? "Less" : "More"}
        </button>
      </p>
    </div>
  );
};

export default ExpandableText;
