import React from 'react';
import { QuiSommesNous, Valeurs, Mission } from './images/index';
import { ScrollFadeIn } from './ScrollFadeIn';

function AboutUs() {
  return (
    <div className='px-10 mt-20'>

      {/* Qui sommes-nous */}
      <div className='mb-20 flex flex-col lg:flex-row lg:gap-10 lg:items-center'>
        <div className='lg:w-1/2'>
          <ScrollFadeIn>
            <img
              src={QuiSommesNous}
              alt="Notre Mission"
              className="h-60 w-full rounded-[15px] lg:h-80 lg:w-full object-cover"
            />
          </ScrollFadeIn>
        </div>
        <div className='lg:w-1/2'>
          <ScrollFadeIn>
            <h2 className='font-bold text-2xl text-center lg:text-left mt-5 lg:mt-0'>
              Qui sommes-nous ?
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p className='mt-5 text-center lg:text-left'>
              Immo 24 est une plateforme immobilière moderne dédiée à la mise en relation
              entre propriétaires, locataires et acheteurs.
              Nous facilitons l'accès à des logements fiables,
              sélectionnés avec soin et présentés en toute transparence.
              Notre mission est de simplifier la recherche immobilière
              grâce à des outils numériques simples et efficaces.
              Nous valorisons la confiance, la proximité et la sécurité.
              Chaque bien publié est vérifié pour garantir sa qualité.
              Avec Immo 24, trouvez plus vite, plus sereinement.
              Votre logement idéal commence ici.
            </p>
          </ScrollFadeIn>
        </div>
      </div>
      {/* Nos Valeurs */}
      <div className="mb-20 flex flex-col lg:flex-row lg:gap-10 lg:items-center">
        {/* Texte */}
        <div className="order-2 lg:order-1 lg:w-1/2">
          <ScrollFadeIn>
            <h2 className="font-bold text-2xl text-center lg:text-left mt-5 lg:mt-0">
              Nos Valeurs
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p className="mt-5 text-center lg:text-left">
              Chez Immo 24, la confiance est au cœur de nos actions.
              Nous croyons en la transparence dans chaque transaction.
              Le respect des clients guide toutes nos décisions.
              Nous privilégions l'honnêteté et l'éthique professionnelle.
              La qualité des biens proposés est une priorité constante.
              Nous valorisons l'écoute et l'accompagnement personnalisé.
              L'innovation nous permet de mieux vous servir.
              La proximité renforce notre engagement local.
              La sécurité est essentielle pour votre tranquillité.
              Immo 24 agit avec responsabilité et engagement.
            </p>
          </ScrollFadeIn>
        </div>
        {/* Image */}
        <div className="order-1 lg:order-2 lg:w-1/2">
          <ScrollFadeIn>
            <img
              src={Valeurs}
              alt="Nos Valeurs"
              className="h-60 w-full rounded-[15px] lg:h-80 lg:w-full object-cover"
            />
          </ScrollFadeIn>
        </div>
      </div>
      {/* Notre Mission */}
      <div className='lg:flex lg:gap-10 lg:items-center'>
        <div className='lg:w-1/2'>
          <ScrollFadeIn>
            <img
              src={Mission}
              alt="Notre Mission"
              className="h-60 w-full rounded-[15px] lg:h-80 lg:w-full object-cover"
            />
          </ScrollFadeIn>
        </div>


        <div className='lg:w-1/2'>
          <ScrollFadeIn>
            <h2 className='font-bold text-2xl text-center lg:text-left mt-5 lg:mt-0'>
              Notre Mission
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p className='mt-5 text-center lg:text-left'>
              La mission d'Immo 24 est de simplifier l'immobilier.
              Nous connectons rapidement les vendeurs et les acheteurs.
              Nous rendons la recherche de logement plus accessible.
              Nous utilisons le numérique pour gagner du temps.
              Chaque utilisateur bénéficie d'une expérience fluide.
              Nous aidons à prendre des décisions éclairées.
              Nous réduisons les obstacles liés aux démarches.
              Nous accompagnons chaque étape du parcours immobilier.
              Nous travaillons pour un immobilier plus fiable.
              Immo 24 construit votre avenir immobilier.
            </p>
          </ScrollFadeIn>
        </div>
      </div>


    </div>
  );
}

export default AboutUs;
