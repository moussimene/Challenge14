 
import './App.css'
import MyTitle from './components/MyTitle/MyTitle' 
import List from './components/List/List'
import { SiPokemon } from "react-icons/si";


function App() {

const photo1=<img src="https://www.liberation.fr/apps/2016/06/pokemon/images/250px-Chenipan-RFVF.png" height="200px" width="200px"></img>
const photo2=<img src="https://www.liberation.fr/apps/2016/06/pokemon/images/250px-%C3%89voli-RFVF.png" heigh="180px" width="180px"></img>
const photo3=<img src= "https://www.liberation.fr/apps/2016/06/pokemon/images/250px-Grodoudou-RFVF.png" height="200px" width="200px"></img>
const photo4=<img src="https://www.liberation.fr/apps/2016/06/pokemon/images/250px-Carabaffe-RFVF.png" height="200px" width="200px"></img>
const photo5=<img src="https://www.liberation.fr/apps/2016/06/pokemon/images/250px-Florizarre-RFVF.png" height="200px" width="200px"></img>
const photo6=<img src="https://www.liberation.fr/apps/2016/06/pokemon/images/250px-Dardargnan-RFVF.png" heigh="180px" width="180px"></img>
const photo7=<img src="https://www.liberation.fr/apps/2016/06/pokemon/images/250px-Arbok-RFVF.png" height="200px" width="200px"></img>
const photo8=<img src="https://www.liberation.fr/apps/2016/06/pokemon/images/250px-Roucool-RFVF.png" height="200px" width="200px"></img>
const photo9=<img src="https://www.liberation.fr/apps/2016/06/pokemon/images/250px-Kabuto-RFVF.png" height="200px" width="200px"></img>
const photo10=<img src="https://www.liberation.fr/apps/2016/06/pokemon/images/250px-Poissoroy-RFVF.png" height="200px" width="200px"></img>
const photo11=<img src="https://www.liberation.fr/apps/2016/06/pokemon/images/250px-Stari-RFVF.png"height="200px" width="200px"></img>
const photo12=<img src="https://www.liberation.fr/apps/2016/06/pokemon/images/250px-Raichu-RFVF.png"height="200px" width="200px"></img>
 


  const list = [
    {
    photo:photo1,
    nom: 'charmander',
    categorie: 'feu'
    },
   {
    photo:photo2,
    nom: 'Evoli',
    categorie: 'Normal'   
   },
    {
      photo:photo3,
      nom: 'Grodoudou',
      categorie: 'Fée'
      },
    {
      photo:photo4,
      nom: 'carabaffe',
      categorie: 'flying'
      },
      {
        photo:photo5,
        nom: 'Florizarre',
        categorie: 'végétale '
        },
       {
        photo:photo6,
        nom: 'Dardargnan',
        categorie: 'flying'   
       },
        {
          photo:photo7,
          nom: 'Arbok',
          categorie: 'Poison'
          },
        {
          photo:photo8,
          nom: 'Roucool',
          categorie: 'flying'
          },

          {
            photo:photo9,
            nom: 'Kabuto',
            categorie: 'Roche'
            },
            {
              photo:photo10,
              nom: 'Poissoroy',
              categorie: 'Eau'
              },
              
            {
              photo:photo11,
              nom: 'Stari',
              categorie: 'Eau'
              },

             { photo:photo12,
              nom: 'Raichu',
              categorie: 'Electrique'
              },
  ]
  
  return (
     <div className='contenu'>
   
   <MyTitle titre={<SiPokemon  size={250}/> }/>
          <List elements={list}/>
     </div>
  )
}

export default App
