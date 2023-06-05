import { useEffect } from 'react'
import Warning from '../../components/molecules/Warning/Warning'
import Header from '../../components/organisms/Header/Header'
import Footer from '../../components/organisms/Footer/Footer'
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
          {/* <div className='frame'>
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
            <Text text={`<ul><li>HTML5</li><li>CSS</li><li>JavaScript</li></ul>`} />
            <Subtitle text='Agents utilisateurs, technologies d’assistance et outils utilisés pour vérifier l’accessibilité' />
            <Text text={`<p>Les tests des pages web ont été effectués avec les combinaisons de navigateurs web et lecteurs d’écran suivants :</p>`} />
            <Text text={`<ul><li>NVDA et Firefox 94 ;</li><li>JAWS 2020 et Firefox 94 ;</li><li>VoiceOver et Safari 14.1 ;</li><li>VoiceOver (iOS 14.8) et Safari ;</li><li>TalkBack (Android 11) et Chrome.</li></ul>`} />
            <Text text={`<p>Les outils suivants ont été utilisés lors de l’évaluation :</p>`} />
            <Text text={`<ul><li>Colour Contrast Analyser ;</li><li>inspecteur de code ;</li><li>divers bookmarklets et feuilles de style CSS personnalisées.</li></ul>`} />
            <Subtitle text='Pages du site ayant fait l’objet de la vérification de conformité' />
            <Text text={`<p>L’audit a porté sur un échantillon de 5 pages représentatives du site.</p>`} />
            <Text text={`<ul><li>1. Accueil</li></ul>`} />
          </div> */}
          <div className='frame'>
            <Warning text='<p>Information bientôt disponible</p>' />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default A11y