import CardOne from './cards/CardOne'
import CardTwo from './cards/CardTwo'
import CardThree from './cards/CardThree'
import CardFour from './cards/CardFour'
import CardFive from './cards/CardFive'
import CardSix from './cards/CardSix'

export default function App() {
  return (
    <div
      style={{
        backgroundImage: 'url(/bg.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen flex items-center justify-center overflow-y-auto py-12"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 384px)',
          gap: '16px',
          flexShrink: 0,
        }}
      >
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardFive />
        <CardSix />
      </div>
    </div>
  )
}
