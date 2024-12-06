import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonChip,
} from '@ionic/react';
import { locationOutline, calendarOutline, pricetagOutline } from 'ionicons/icons';
import { useState } from 'react';

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search Packages</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <div className="p-4">
          <IonSearchbar
            value={searchText}
            onIonChange={e => setSearchText(e.detail.value!)}
            placeholder="Search for packages..."
          />
          
          <div className="flex gap-2 my-4 overflow-x-auto">
            <IonChip>All</IonChip>
            <IonChip>Umrah</IonChip>
            <IonChip>Hajj</IonChip>
            <IonChip>Premium</IonChip>
            <IonChip>Budget</IonChip>
          </div>

          <IonList>
            <IonItem button>
              <div className="flex flex-col py-2">
                <h3 className="text-lg font-semibold">Economy Umrah Package</h3>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <IonIcon icon={calendarOutline} className="mr-1" />
                  <span className="mr-3">10 Days</span>
                  <IonIcon icon={locationOutline} className="mr-1" />
                  <span className="mr-3">Mecca</span>
                  <IonIcon icon={pricetagOutline} className="mr-1" />
                  <span>$2,999</span>
                </div>
              </div>
            </IonItem>

            <IonItem button>
              <div className="flex flex-col py-2">
                <h3 className="text-lg font-semibold">Premium Hajj Package</h3>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <IonIcon icon={calendarOutline} className="mr-1" />
                  <span className="mr-3">15 Days</span>
                  <IonIcon icon={locationOutline} className="mr-1" />
                  <span className="mr-3">Mecca & Medina</span>
                  <IonIcon icon={pricetagOutline} className="mr-1" />
                  <span>$5,999</span>
                </div>
              </div>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;