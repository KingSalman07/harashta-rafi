import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonBadge,
} from '@ionic/react';
import { calendar, airplane, checkmarkCircle } from 'ionicons/icons';

const Bookings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Bookings</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <div className="p-4">
          <IonList>
            <IonItem>
              <IonIcon icon={airplane} slot="start" />
              <IonLabel>
                <h2>Premium Umrah Package</h2>
                <p>Departure: March 15, 2024</p>
                <p>Duration: 12 Days</p>
              </IonLabel>
              <IonBadge color="success" slot="end">
                Confirmed
              </IonBadge>
            </IonItem>

            <IonItem>
              <IonIcon icon={calendar} slot="start" />
              <IonLabel>
                <h2>Hajj Package 2024</h2>
                <p>Departure: June 10, 2024</p>
                <p>Duration: 15 Days</p>
              </IonLabel>
              <IonBadge color="warning" slot="end">
                Pending
              </IonBadge>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Bookings;