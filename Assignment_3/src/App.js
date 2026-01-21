import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import SelectedItem from './components/SelectedItem';
import WearableTechnology from './otters/Wearable_technology.jpg';
import Phones from './otters/Phones.jpg';
import Laptops from './otters/Laptops.jpg';
import VoiceAssistant from './otters/Voice Assistant.jpg';
import Airpods from './otters/Airpods.jpg';

const ottersArray = [
  { image: WearableTechnology, name: 'Wearable Technology', id: 1 },
  { image: Phones, name: 'Phones', id: 2 },
  { image: Laptops, name: 'Laptops', id: 3 },
  { image: VoiceAssistant, name: 'Voice Assistant', id: 4 },
  { image: Airpods, name: 'Airpods', id: 5 },
];

function App() {
  return (
    <div>
      <Header />
      <div className='app-content'>
        <ul className='post-list'>
          {ottersArray.map((post) => (
            <Post
              key={post.id}
              image={post.image}
              name={post.name}
            />
          ))}
        </ul>
        <SelectedItem
          image={ottersArray[0].image}
          name={ottersArray[0].name}
        />
      </div>
    </div>
  );
}

export default App;
