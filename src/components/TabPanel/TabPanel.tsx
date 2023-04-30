import { TabProps } from '../../models/tab'
import './TabPanel.scss'

function TabPanel({ data, active }: TabProps) {

  const Panel = ({ text }: { text: string; }) => {
    return <div className='panel'>{text}</div>
  }

  const PanelList = (panels: { text: string; }[]) => {
    return panels.map(
      (panel: { text: string }, index) => (
        <Panel
          key={index}
          text={panel.text}
        />
      )
    )
  }

  const getPanel = (id: string | undefined) => {
    switch(id) {
      case '1':
        return PanelList([
          { text: `Comme si chaque utilisateur faisait fonctionner 1 micro-ondes pendant ${data!.q1}s` },
          { text: `Comme si chaque utilisateur faisait ${data!.q1}m en voiture` },
          { text: `Comme si chaque utilisateur creusait pour extraire l'équivalent de ${data!.q1} pièces de 1€` },
          { text: `Comme si chaque utilisateur consommait l'équivalent de ${data!.q1} verres d'eau` },
        ])
      case '2':
        return PanelList([
          { text: `Comme si chaque année notre parcours consommait de l'électricité comme ${data!.q1} maisons françaises` },
          { text: `Comme si chaque année notre parcours émettait des gaz à effet de serre comme ${data!.q1} voitures faisant le tour de la terre` },
          { text: `Comme si chaque année notre parcours creusait pour extraire l'équivalent de ${data!.q1} ordinateurs portables` },
          { text: `Comme si chaque année notre parcours prenait l'équivalent de ${data!.q1} douches` },
        ])
      case '3':
        return PanelList([
          { text: `Energie primaire ${data!.q1}kWh` },
          { text: `Gaz à effet de serre ${data!.q1}kg CO2-eq` },
          { text: `Matières premières ${data!.q1} tonnes de matière 1ère` },
          { text: `Eau ${data!.q1} libres` },
        ])
      default:
        return 'Pas de données';
    }
  }

  return (
    <div className='tab-panel'>
      {getPanel(active)}
      <div>{data!.q1}</div>
      <div>{data!.q2}</div>
      <div>{data!.q3}</div>
      <div>{data!.q4}</div>
      <div>{data!.q5}</div>
      <div>{data!.q6}</div>
      <div>{data!.q7}</div>
      <div>{data!.q8}</div>
    </div>
  )
}

export default TabPanel
