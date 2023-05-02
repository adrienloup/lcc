import { TabProps } from '../../models/tab'
import './TabPanel.scss'

function TabPanel({ data, active }: TabProps) {
  const B2 = Number(data!.q2)
  const B3 = Number(data!.q3)
  const B4 = data!.q4
  const B5 = Number(data!.q5)
  const B6 = Number(data!.q6)
  const B7 = Number(data!.q7)
  const B8 = data!.q8
  const energeticMix = {
    eu: 0.5,
    fr: 0.1,
    as: 1,
    oc: 0.8,
    na: 0.4,
    sa: 0.5,
    ww: 0.5,
  }
  // const B11 = (((B2 * 12 * B3) / 60) * (1 - (B5 / 100))) / (220 * 7) * 75 + (((B2 * 12 * B3) / 60) * (B5 / 100)) / (365 * 4) * 30 + (((B2 * 12 * B3) / 60) * (1 - (B5 / 100))) / (220 * 7) * 30.8;
  // const B12 = (((B2 * 12 * B3) / 60) / (24 * 365)) * 150;
  // const B13 = (((450 * 365 * 24) / 1000) * (60 / 100)) * B7 * 1.8;
  // const C11 = (((B2 * 12 * B3) / 60) * (1 - (B5 / 100))) / (220 * 7) * 75 * energeticMix[B4] + (((B2 * 12 * B3) / 60) * (B5 / 100)) / (365 * 4) * 30 * energeticMix[B4] + (((B2 * 12 * B3) / 60) * (1 - (B5 / 100))) / (220 * 7) * 30.8 * energeticMix[B4] + (((B2 * 12 * B3) / 60) * (1 - (B5 / 100))) / (220 * 7) * (189 / 5) + (((B2 * 12 * B3) / 60) * (B5 / 100)) / (365 * 4) * (169 / 4) + (((B2 * 12 * B3) / 60) * (1 - (B5 / 100))) / (220 * 7) * (265 / 6);
  // const C12 = (((B2 * 12 * B3) / 60) / (24 * 365)) * 150 * energeticMix[B4] + (((B2 * 12 * B3) / 60) / (24 * 365)) * (83 / 5) + B2 * 12 * B6 * 2.1 / 1024 * (0.002);
  // const C13 = (((450 * 365 * 24) / 1000) * 0.6) * B7 * 1.8 * energeticMix[B8] + B7 * (756 / 5);
  // const D11 = (((B2 * 12 * B3) / 60) * (1 - (B5 / 100))) / (220 * 7) * (572 / 5) + (((B2 * 12 * B3) / 60) * (B5 / 100)) / (365 * 4) * (572 / 5) + (((B2 * 12 * B3) / 60) * (1 - (B5 / 100))) / (220 * 7) * (1689 / 5);
  // const D12 = (((B2 * 12 * B3) / 60) / (24 * 365)) * (425 / 5);
  // const D13 = B7 * (2288 / 5);
  // const E11 = (B2 * 12 * 6 * B6) / 100;
  // const B14 = Math.round(B11 + B12 + B13) || 0;
  // const C14 = (C11 + C12 + C13).toFixed(1) || 0;
  // const D14 = ((D11 + D12 + D13) / 1000).toFixed(2) || 0;
  // const E14 = Math.round(E11) || 0;
  // const B15 = Math.round((B11 + B12 + B13) / 4679) || 0;
  // const C15 = Math.round((C11 + C12 + C13) / 0.1) || 0;
  // const D15 = Math.round((D11 + D12 + D13) / 1.4) || 0;
  // const E15 = Math.round((E11) / 55) || 0;
  // const B16 = Math.round(((((B11 + B12 + B13) / (B2 * 12)) * 60) / 1250) * 60 * 60) || 0;
  // const C16 = Math.round((C11 + C12 + C13) / (B2 * 12) / 0.0001) || 0;
  // const D16 = Math.round((D11 + D12 + D13) / (B2 * 12) / 0.0075) || 0;
  // const E16 = (E11 / (B2 * 12) / 0.18).toFixed(1) || 0;

  // console.log(B2, B3, B4, B5, B6, B7, B8)
  // console.log(B4)
  // console.log(energeticMix.fr)
  console.log(energeticMix[B4])

  const Panel = ({ id, text }: { id: number; text: string; }) => {
    return (
      <div
        id={`tabpanel-${id}`}
        className='panel'
      >{text}</div>
    )
  }

  const PanelList = (panels: { text: string; }[]) => {
    return panels.map(
      (panel: { text: string }, index) => (
        <Panel
          key={index}
          id={index + 1}
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
    <div
      className='tab-panel'
      role='tabpanel'
    >
      {getPanel(active)}
    </div>
  )
}

export default TabPanel
