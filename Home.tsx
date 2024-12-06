import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
} from '@ionic/react';
import FeaturedPackages from '../components/FeaturedPackages';
import PopularDestinations from '../components/PopularDestinations';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Harashta Rafi Tour</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <div className="p-4 space-y-6">
          <IonSearchbar
            placeholder="Search packages..."
            className="mb-4"
          />

          <FeaturedPackages />
          
          <PopularDestinations />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;