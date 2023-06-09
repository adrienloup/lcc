import { useEffect } from 'react'
import Header from '../../components/molecules/Header/Header'
import Footer from '../../components/molecules/Footer/Footer'
import Subtitle from '../../components/atoms/Subtitle/Subtitle'
import Title from '../../components/atoms/Title/Title'
import Text from '../../components/atoms/Text/Text'

function A11y() {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return (
    <div className='page'>
      <Header />
      <main
        className='main'
        role='main'
      >
        <article className='article'>
          <div className='heading'>
            <Title text='Déclaration d’accessibilité numérique' />
          </div>
          <div className='frame'>
            <Text text={`<p>Cette déclaration d’accessibilité à la version 4.1 du référentiel général d’amélioration de l’accessibilité (RGAA) s’applique au présent site et a été établie le 10 juin 2023.</p>`} />
          </div>
          <div className='frame'>
            <Subtitle text='État de conformité' />
            <Text text={`<p>Le site est en totale conformité avec le Référentiel général d’amélioration de l’accessibilité, RGAA version 4.1.</p>`} />
            <Subtitle text='Résultats des tests' />
            <Text text={`<p>L’audit de conformité réalisé en interne, par une personne non impliquée dans le développement du site, révèle que 100 % des critères RGAA applicables sont respectés.</p>`} />
            <Subtitle text='Contenus non accessibles' />
            <Text text={`<p>Sont listés ci-dessous des contenus qui ne sont pas accessibles ou dont l’accessibilité ne peut être garantie.</p>`} />
            <Subtitle text='Établissement de cette déclaration d’accessibilité' />
            <Text text={`<p>Cette déclaration a été établie le 10 juin 2023.</p>`} />
            <Subtitle text='Technologies utilisées pour la réalisation du site web' />
            <Text text={`<p>Langages de programmation :</p>
              <ul><li>HTML5</li><li>CSS</li><li>JavaScript</li></ul>`} />
            <Subtitle text='Agents utilisateurs, technologies d’assistance et outils utilisés pour vérifier l’accessibilité' />
            <Text text={`<p>Les tests des pages web ont été effectués avec les combinaisons de navigateurs web et lecteurs d’écran suivants :</p>
              <ul><li>NVDA et Firefox 94 ;</li><li>JAWS 2020 et Firefox 94 ;</li><li>VoiceOver et Safari 14.1 ;</li><li>VoiceOver (iOS 14.8) et Safari ;</li><li>TalkBack (Android 11) et Chrome.</li></ul>
              <p>Les outils suivants ont été utilisés lors de l’évaluation :</p>
              <ul><li>Colour Contrast Analyser ;</li><li>Inspecteur de code ;</li><li>Divers bookmarklets et feuilles de style CSS personnalisées.</li></ul>`} />
            <Subtitle text='Pages du site ayant fait l’objet de la vérification de conformité' />
            <Text text={`<p>L’audit a porté sur un échantillon de 6 pages représentatives de l’application.</p>
              <ul><li>Accueil</li><li>Question : 1/8 De quel parcours mesure-t-on l’impact ?</li><li>Les impacts</li><li>Modèles de référence</li><li>Modèle : Les matières premières</li><li>La documentation</li></ul>`} />
            <Subtitle text='Retour d’information et contact' />
            <Text text={`<p>N’hésitez pas à nous signaler les problèmes éventuels que vous rencontrez et qui vous empêchent d’accéder à un contenu ou à une fonctionnalité du site en nous envoyant un courriel à <a href="mailto:adloup@gmail.com" target="_blank" rel="noreferrer">adloup@gmail.com</a>. Nous ferons notre possible pour vous répondre au plus vite.</p>`} />
            <Subtitle text='Voies de recours' />
            <Text text='<p>Si vous nous signalez un problème d’accessibilité et que vous ne parvenez pas à obtenir une réponse rapide de notre part, vous êtes en droit de faire parvenir vos doléances ou demande de saisine au Défenseur des droits. Plusieurs moyens sont à votre disposition :</p>
              <ul><li><a href="https://formulaire.defenseurdesdroits.fr/" target="_blank" rel="noreferrer">Écrire au Défenseur des droits</a> ;</li><li><a href="https://www.defenseurdesdroits.fr/saisir/delegues" target="_blank" rel="noreferrer">Contacter le délégué du Défenseur des droits dans votre région ;</a></li><li>Appeler au : 09 69 39 00 00 ;</li><li>Envoyer un courrier postal (courrier gratuit, sans affranchissement) :<br />Le Défenseur des droits — Libre réponse 71120<br />75342 Paris CEDEX 07</li></ul>' />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default A11y